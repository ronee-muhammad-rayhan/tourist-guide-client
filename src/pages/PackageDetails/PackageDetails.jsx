import { Link, useLoaderData } from "react-router-dom";
import useGuides from "../../hooks/useGuides";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { Button, Modal } from 'flowbite-react';
// import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useRef } from 'react';


const PackageDetails = () => {

    const tour = useLoaderData();
    const [guides] = useGuides();
    const { user } = useAuth();
    const [selectedGuide, setSelectedGuide] = useState('');

    const [openModal, setOpenModal] = useState(false);
    const emailInputRef = useRef < HTMLInputElement > (null);

    const handleSelectGuide = (e) => {
        setSelectedGuide(e.target.value)
        // const selectedGuide = e.target.value;
        // Perform action with selectedGuide if needed
        console.log(selectedGuide);
    };

    const handleBooking = () => {
        console.log(selectedGuide);

    }

    return (
        <div>
            <div className="w-full mx-auto">
                <div className="w-full mx-auto">
                    <img className="w-full h-96 rounded-3xl" src={tour?.image} alt="" />
                </div>
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
            </div>

            {/* Booking form */}
            <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
                <h3 className="text-4xl text-center font-bold">Fill and submit the form bellow to book this tour</h3>
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
                                <img src={`${user?.photoURL}` || "https://source.unsplash.com/30x30/?random"} alt="" className="w-36 h-36 rounded-box dark:text-white dark:bg-gray-700" />
                                <button type="button" className="px-4 py-2 border rounded-2xl dark:border-gray-100">Change</button>
                            </div>
                        </div>
                        <div className="flex-grow flex items-end">
                            {/* <button onClick={handleBooking} className="btn btn-primary w-full">Book Now</button> */}
                            <Button onClick={() => setOpenModal(true)} className="btn btn-primary w-full">Book Now</Button>
                        </div>
                    </div>
                </form>
            </section>
            <>
                <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)} initialFocus={emailInputRef}>
                    <Modal.Header />
                    <Modal.Body>
                        <div className="space-y-6">
                            {/* <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="email" value="Your email" />
                                </div>
                                <TextInput id="email" useRef={emailInputRef} placeholder="name@company.com" required />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="password" value="Your password" />
                                </div>
                                <TextInput id="password" type="password" required />
                            </div>
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <Checkbox id="remember" />
                                    <Label htmlFor="remember">Remember me</Label>
                                </div>
                                <a href="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                                    Lost Password?
                                </a>
                            </div> */}
                            <div className="flex flex-col items-center justify-center gap-7">
                                <div className="">
                                    <Button onClick={handleBooking}>Confirm Booking</Button>
                                </div>
                                <div className="text-cyan-700 hover:underline dark:text-cyan-500">
                                    <Link to={`/bookings`}><button>My Bookings</button></Link>
                                </div>
                            </div>
                            {/* <div className="w-full">
                                <Button onClick={handleBooking}>Log in to your account</Button>
                            </div>
                            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                                Not registered?&nbsp;
                                <a href="#" className="text-cyan-700 hover:underline dark:text-cyan-500">
                                    Create account
                                </a>
                            </div> */}
                        </div>
                    </Modal.Body>
                </Modal>
            </>
        </div>
    );
};

export default PackageDetails;