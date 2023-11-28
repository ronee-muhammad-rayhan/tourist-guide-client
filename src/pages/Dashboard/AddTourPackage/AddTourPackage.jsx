import { useState } from 'react';
import axios from 'axios';

const PackageForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        itinerary: [{ day: '', description: '' }],
        guides: [],
        price: '',
    });

    const handleChange = (e, index) => {
        const { name, value } = e.target;

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5005/tours', formData);
            console.log(response.data);

            setFormData({
                name: '',
                description: '',
                itinerary: [{ day: '', description: '' }],
                guides: [],
                price: '',
            });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h2>Add New Package</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Description:
                    <textarea name="description" value={formData.description} onChange={handleChange} />
                </label>
                <br />
                <h3>Itinerary:</h3>
                {formData.itinerary.map((item, index) => (
                    <div key={index}>
                        <label>
                            Day {index + 1}:
                            <input
                                type="text"
                                name={`itineraryDay${index}`}
                                value={item.day}
                                onChange={(e) => handleChange(e, index)}
                            />
                        </label>
                        <br />
                        <label>
                            Description:
                            <textarea
                                name={`itineraryDescription${index}`}
                                value={item.description}
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
                {formData.guides.map((guide, index) => (
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
                    <input type="text" name="price" value={formData.price} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PackageForm;