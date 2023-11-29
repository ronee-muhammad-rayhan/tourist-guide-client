import { useLoaderData } from "react-router-dom";
import useGuides from "../../hooks/useGuides";
import useAuth from "../../hooks/useAuth";

const PackageDetails = () => {
    const tour = useLoaderData();
    const [guides] = useGuides();
    const { user } = useAuth();

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

                {/* <h3>Guides:</h3> */}


                {/* <select onChange={handleSelectGuide}>
                    <option value="">Select a Guide</option>
                    {tour?.guides?.map((guide, index) => (
                        <option key={index} value={guide}>
                            {guide}
                        </option>
                    ))}
                </select> */}

                {/* <select onChange={handleSelectGuide}>
                    <option value="">Select a Guide</option>
                    {guides?.map((guide, index) => (
                        <option key={index} value={guide?.email}>
                            {guide?.name}
                        </option>
                    ))}
                </select> */}

                {/* <h3>{guides.map((guide,i)=>{

                }}</h3> */}

                {/* <ul>
                                {tour?.guides?.map((guide, index) => (
                                    <li key={index}>Guide {index + 1}: {guide}</li>
                                ))}
                            </ul> */}

                {/* <p>Price: {tour?.price}</p> */}
            </div>

            {/* Booking form */}
            <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
                <form noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                        <div className="grid grid-cols-6 gap-4 col-span-full">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="touristname" className="text-sm">Your name</label>
                                <input id="touristname" type="text" defaultValue={user?.displayName} placeholder="Put your name here" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Email</label>
                                <input id="email" type="email" defaultValue={user?.email} readOnly disabled required placeholder="Email" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="address" className="text-sm">Address</label>
                                <input id="address" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" spellCheck="false" data-ms-editor="true" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="city" className="text-sm">City</label>
                                <input id="city" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" spellCheck="false" data-ms-editor="true" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="state" className="text-sm">State / Province</label>
                                <input id="state" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" spellCheck="false" data-ms-editor="true" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="zip" className="text-sm">ZIP / Postal</label>
                                <input id="zip" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" spellCheck="false" data-ms-editor="true" />
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="guide" className="text-sm">Your Tour Guide</label>
                                <select id="guide" onChange={handleSelectGuide} className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900">
                                    <option value="">Select a Guide</option>
                                    {guides?.map((guide, index) => (
                                        <option key={index} value={guide?.email}>
                                            {guide?.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="price" className="text-sm">Price</label>
                                <input id="price" type="text" defaultValue={`$${tour?.price}`} readOnly placeholder="$" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" spellCheck="false" data-ms-editor="true" />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="date" className="text-sm">Tour Date</label>
                                <textarea id="date" placeholder="" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" spellCheck="false" data-ms-editor="true"></textarea>
                            </div>
                        </div>
                    </fieldset>
                    <div className="w-full flex mx-auto justify-between flex-row">
                        <div className="flex-1">
                            <div className="flex items-center space-x-2">
                                <img src={"https://source.unsplash.com/30x30/?random"} alt="" className="w-36 h-36 rounded-box dark:text-white dark:bg-gray-700" />
                                <button type="button" className="px-4 py-2 border rounded-2xl dark:border-gray-100">Change</button>
                            </div>
                        </div>
                        <div className="flex-grow flex items-end">
                            <button className="btn btn-primary w-full">Book Now</button>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default PackageDetails;
