import { useLoaderData } from "react-router-dom";
import useGuides from "../../hooks/useGuides";

const PackageDetails = () => {
    const tour = useLoaderData();
    const [guides] = useGuides();

    const handleSelectGuide = (e) => {
        const selectedGuide = e.target.value;
        // Perform action with selectedGuide if needed
        console.log(selectedGuide);
    };

    // const handleSelectGuide = (e) => {
    //     const selectedGuide = e.target.value;
    //     // Perform action with selectedGuide if needed
    //     console.log(selectedGuide);
    // };

    return (
        <div>

            <div>
                <img src={tour?.image} alt="" />
                <h2>{tour?.name}</h2>
                <p>Description: {tour?.description}</p>

                <h3>Tour Plan:</h3>
                <ul>
                    {tour?.itinerary?.map((item, index) => (
                        <li key={index}>
                            <strong>Day {index + 1}:</strong> {item?.day} <span className="text-purple-600">O=&gt;</span> {item?.description}
                        </li>
                    ))}
                </ul>

                <h3>Guides:</h3>


                {/* <select onChange={handleSelectGuide}>
                    <option value="">Select a Guide</option>
                    {tour?.guides?.map((guide, index) => (
                        <option key={index} value={guide}>
                            {guide}
                        </option>
                    ))}
                </select> */}

                <select onChange={handleSelectGuide}>
                    <option value="">Select a Guide</option>
                    {guides?.map((guide, index) => (
                        <option key={index} value={guide?.email}>
                            {guide?.name}
                        </option>
                    ))}
                </select>

                {/* <h3>{guides.map((guide,i)=>{

                }}</h3> */}

                {/* <ul>
                                {tour?.guides?.map((guide, index) => (
                                    <li key={index}>Guide {index + 1}: {guide}</li>
                                ))}
                            </ul> */}

                <p>Price: {tour?.price}</p>
            </div>
        </div>
    );
};

export default PackageDetails;
