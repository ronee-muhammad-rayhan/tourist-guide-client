import { TbFidgetSpinner } from 'react-icons/tb'
import { categories } from '../Categories/categoriesData.js'
const AddTourForm = ({
    handleSubmit,
    itinerary,
    setItinerary,
    handleAddDay,
    loading = false,
    handleImageChange,
    uploadButtonText,
}) => {


    const handleChange = (e, index) => {
        const { name, value } = e.target;
        console.log(e.target, index);

        if (name.startsWith('itineraryDay') || name.startsWith('itineraryDescription')) {
            const updatedItinerary = [...itinerary];
            updatedItinerary[index] = {
                ...updatedItinerary[index],
                [name === `itineraryDay${index}` ? 'day' : 'description']: value,
            };
            setItinerary(updatedItinerary)
        } else {
            setItinerary((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };


    return (
        <div
            className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div className='space-y-6'>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='location' className='block text-gray-600'>
                                Trip Title
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='title' id='title' type='text' placeholder='Tour Title' required />
                        </div>

                        <div className='space-y-1 text-sm'>
                            <label htmlFor='category' className='block text-gray-600'>
                                Tour Type
                            </label>
                            <select required className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                                name='category'>
                                {categories.map(category => (
                                    <option value={category.label} key={category.label}>
                                        {category.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className='space-y-1'>
                            <label htmlFor='location' className='block text-gray-600'>
                                Tour Plan
                            </label>
                            {itinerary?.map((element, index) => (
                                <div key={index}>
                                    <label>
                                        Day {index + 1}:
                                        <input
                                            type="text"
                                            name={`itineraryDay${index}`}
                                            value={element?.day}
                                            onChange={(e) => handleChange(e, index)}
                                        />
                                    </label>
                                    <br />
                                    <label>
                                        Description:
                                        <textarea
                                            name={`itineraryDescription${index}`}
                                            value={element?.description}
                                            onChange={(e) => handleChange(e, index)}
                                        />
                                    </label>
                                    <br />
                                </div>
                            ))}
                            <button type="button" onClick={handleAddDay}>
                                Add Day
                            </button>
                        </div>
                    </div>
                    <div className='space-y-6'>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='description' className='block text-gray-600'>
                                Description
                            </label>
                            <textarea id='description'
                                className='block rounded-md focus:rose-300 w-full px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
                                name='description' placeholder='About the Tour'></textarea>
                        </div>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='price' className='block text-gray-600'>
                                Price
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='price' id='price' type='number' placeholder='Price' required />
                        </div>
                        <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
                            <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                                <div className='flex flex-col w-max mx-auto text-center'>
                                    <label>
                                        <input onChange={e => handleImageChange(e.target.files[0])}
                                            className='text-sm cursor-pointer w-36 hidden'
                                            type='file'
                                            name='image'
                                            id='image'
                                            accept='image/*'
                                            hidden
                                        />
                                        <div
                                            className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                                            {uploadButtonText}
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <button type='submit'
                    className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'>
                    {loading ? (
                        <TbFidgetSpinner className='m-auto animate-spin' size={24} />
                    ) : (
                        'Save & Continue'
                    )}
                </button>
            </form>
        </div>
    )
}

export default AddTourForm