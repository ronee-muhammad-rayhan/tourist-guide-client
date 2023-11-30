import { Helmet } from 'react-helmet-async'
import AddTourForm from '../../../components/Form/AddTourForm'
import { useState } from 'react'
import { imageUpload } from '../../../api/utils'
import { addTour } from '../../../api/tours'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
const AddTour = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [uploadButtonText, setUploadButtonText] = useState('Upload Image')
    const [itinerary, setItinerary] = useState([])

    const handleSubmit = async e => {
        setLoading(true)
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const category = form.category.value
        const price = form.price.value
        const description = form.description.value
        const image = form.image.files[0]
        const image_url = await imageUpload(image)

        const tourData = {
            title,
            category,
            itinerary,
            price,
            description,
            image: image_url?.data?.display_url,
        }

        try {
            const data = await addTour(tourData)
            console.log(data)
            setUploadButtonText('Uploaded!')
            toast.success('Tour Added!')
            navigate('/tours')
        } catch (err) {
            console.log(err)
            toast.error(err.message)
        } finally {
            setLoading(false)
        }

        console.table(tourData)
    }

    const handleAddDay = () => {
        setItinerary([...itinerary, { day: '', description: '' }])
    }

    // Handle Image button text
    const handleImageChange = image => {
        setUploadButtonText(image.name)
    }

    return (
        <div>
            <Helmet>
                <title>Add Tour | Dashboard</title>
            </Helmet>

            {/* Form */}
            <AddTourForm
                handleSubmit={handleSubmit}
                handleAddDay={handleAddDay}
                itinerary={itinerary}
                setItinerary={setItinerary}
                handleImageChange={handleImageChange}
                loading={loading}
                uploadButtonText={uploadButtonText}
            />
        </div>
    )
}

export default AddTour