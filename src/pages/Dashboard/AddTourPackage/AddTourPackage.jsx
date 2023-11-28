import { useState } from 'react';
import axios from 'axios';
import { imageUpload } from '../../../api/utils';
// import useAxiosPublic from '../../../hooks/useAxiosPublic';

// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const PackageForm = () => {
    const [uploadButtonText, setUploadButtonText] = useState('Upload Image')

    // const axiosPublic = useAxiosPublic();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        image: '',
        itinerary: [{ day: '', description: '' }],
        guides: [],
        price: '',
    });

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        console.log(e.target, index);

        if (name.startsWith('itineraryDay') || name.startsWith('itineraryDescription')) {
            const updatedItinerary = [...formData.itinerary];
            updatedItinerary[index] = {
                ...updatedItinerary[index],
                [name === `itineraryDay${index}` ? 'day' : 'description']: value,
            };
            setFormData((prevData) => ({
                ...prevData,
                itinerary: updatedItinerary,
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleAddDay = () => {
        setFormData((prevData) => ({
            ...prevData,
            itinerary: [...prevData.itinerary, { day: '', description: '' }],
        }));
    };

    const handleAddGuide = () => {
        setFormData((prevData) => ({
            ...prevData,
            guides: [...prevData.guides, ''], // Adding an empty guide initially
        }));
    };

    const handleGuideChange = (e, index) => {
        const { value } = e.target;
        const updatedGuides = [...formData.guides];
        updatedGuides[index] = value;
        setFormData((prevData) => ({
            ...prevData,
            guides: updatedGuides,
        }));
    };
    // let tempImage = ''
    // const handleImageChange = (e) => {
    //     tempImage = e.target.value;
    //     // const image = e.target.image.file[0];
    //     console.log(tempImage);
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // const form = e.target;


        // image upload to imgbb and then get an url
        // let imageFile = tempImage;//{ image: formData.image };
        // console.log(formData);
        // console.log(imageFile);
        // const res = await axios.post(image_hosting_api, imageFile, {
        //     headers: { 'content-type': 'multipart/form-data' }
        // });

        // console.log(res);

        try {

            // const image = form.image.files[0]
            // const image_url = await imageUpload(image)

            // setFormData({ image: image_url?.data?.display_url })

            const response = await axios.post('http://localhost:5005/tours', formData);
            console.log(response.data);

            setFormData({
                name: '',
                description: '',
                image: '',//image_url?.data?.display_url,
                itinerary: [{ day: '', description: '' }],
                guides: [],
                price: '',
            });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Handle Image button text
    const handleImageChange = async image => {
        console.log(image);
        setUploadButtonText(image.name)
        const imageFile = image
        // const imageFile = form.image.files[0]
        const image_url = await imageUpload(imageFile)

        setFormData({ image: image_url?.data?.display_url })
    }

    return (
        <div>
            <h2>Add New Package</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData?.name} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Description:
                    <textarea name="description" value={formData?.description} onChange={handleChange} />
                </label>
                <br />
                {/* <div className="form-control w-full my-6">
                    <input name='image' onChange={(e) => handleImageChange(e)} required type="file" className="file-input w-full max-w-xs" />
                </div> */}
                <br />
                <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
                    <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                        <div className='flex flex-col w-max mx-auto text-center'>
                            <label>
                                <input
                                    onChange={e => handleImageChange(e.target.files[0])}
                                    className='text-sm cursor-pointer w-36 hidden'
                                    type='file'
                                    name='image'
                                    id='image'
                                    accept='image/*'
                                    hidden
                                />
                                <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                                    {uploadButtonText}
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
                <h3>Itinerary:</h3>
                {formData?.itinerary?.map((item, index) => (
                    <div key={index}>
                        <label>
                            Day {index + 1}:
                            <input
                                type="text"
                                name={`itineraryDay${index}`}
                                value={item?.day}
                                onChange={(e) => handleChange(e, index)}
                            />
                        </label>
                        <br />
                        <label>
                            Description:
                            <textarea
                                name={`itineraryDescription${index}`}
                                value={item?.description}
                                onChange={(e) => handleChange(e, index)}
                            />
                        </label>
                        <br />
                    </div>
                ))}
                <button type="button" onClick={handleAddDay}>
                    Add Day
                </button>
                <br />
                <h3>Guides:</h3>
                {formData?.guides?.map((guide, index) => (
                    <div key={index}>
                        <label>
                            Guide {index + 1}:
                            <input
                                type="text"
                                value={guide}
                                onChange={(e) => handleGuideChange(e, index)}
                            />
                        </label>
                        <br />
                    </div>
                ))}
                <button type="button" onClick={handleAddGuide}>
                    Add Guide
                </button>
                <br />
                <label>
                    Price:
                    <input type="text" name="price" value={formData?.price} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PackageForm;