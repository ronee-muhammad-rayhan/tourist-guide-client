import useTourPackages from "../../hooks/useTourPackages";

const PackageDetails = () => {
    const [tours] = useTourPackages();

    const handleSelectGuide = (e) => {
        const selectedGuide = e.target.value;
        // Perform action with selectedGuide if needed
        console.log(selectedGuide);
    };

    return (
        <div>
            {
                tours.map((tour, i) => {
                    return (
                        <div key={i}>
                            <h2>{tour?.name}</h2>
                            <p>Description: {tour?.description}</p>

                            <h3>Itinerary:</h3>
                            <ul>
                                {tour?.itinerary?.map((item, index) => (
                                    <li key={index}>
                                        <strong>Day {index + 1}:</strong> {item?.day} - {item?.description}
                                    </li>
                                ))}
                            </ul>

                            <h3>Guides:</h3>


                            <select onChange={handleSelectGuide}>
                                <option value="">Select a Guide</option>
                                {tour?.guides?.map((guide, index) => (
                                    <option key={index} value={guide}>
                                        {guide}
                                    </option>
                                ))}
                            </select>

                            {/* <ul>
                                {tour?.guides?.map((guide, index) => (
                                    <li key={index}>Guide {index + 1}: {guide}</li>
                                ))}
                            </ul> */}

                            <p>Price: {tour?.price}</p>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default PackageDetails;