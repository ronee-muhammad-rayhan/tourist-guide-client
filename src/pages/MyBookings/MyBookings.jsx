// import { useState } from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import useBookings from "../../hooks/useBookings";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyBookings = () => {
    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);
    const [status, setStatus] = useState('InReview');
    const axiosSecure = useAxiosSecure();
    // const [bookings] = useBookings();
    const statusArray = ['InReview', 'Rejected', 'Accepted']

    useEffect(() => {

        // const getBookingsFromApiAsync = async () => {
        //     const resopnse = await fetch(
        //         `http://localhost:5005/dashboard/bookings`
        //     );
        //     const resopnseJson = await resopnse.json();
        //     console.log("json", resopnseJson);
        //     setBookings(resopnseJson);
        // };

        // getBookingsFromApiAsync();



        try {
            axiosSecure.get(`/dashboard/bookings?email=${user?.email}`)
                .then(response => {
                    setBookings(response.data);
                })

        } catch (e) {
            console.error(e);
        }

        // try {
        //     axiosSecure.get(`/dashboard/bookings?email=${user?.email}`)
        //         .then(response => {
        //             setBookings(response.data);
        //         })

        // } catch (e) {
        //     console.error(e);
        // }
    }, [axiosSecure, user?.email])
    // }, [axiosSecure, user?.email])

    // const [bookings, setBookings] = useState([]);
    // const axiosSecure = useAxiosSecure();
    // axiosSecure.get(`/bookings?email=${user?.email}`)
    //     .then(res => {
    //         setBookings(res.data)
    //     })

    const handleStatus = (e) => {
        setStatus(e.target.value)
        // console.log(selectedGuide);
    };

    const handleApply = () => { }
    const handleCancel = () => { }
    const handlePay = () => { }

    return (
        <div>
            <h3 className="text-4xl">My Total Bookings: {bookings.length}</h3>
            <div>
                <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100 overflow-x-auto">
                    <h2 className="mb-4 text-2xl font-semibold leadi">Bookings</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-xs overflow-x-auto">
                            <colgroup className="overflow-x-auto">
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col className="w-24" />
                            </colgroup>
                            <thead className="dark:bg-gray-700 overflow-x-auto">
                                <tr className="text-left">
                                    <th className="p-3">#</th>
                                    <th className="p-3">Name of the Package</th>
                                    <th className="p-3">Tour Guide Name</th>
                                    <th className="p-3">Tour Date</th>
                                    <th className="p-3 text-right">Tour Price ($)</th>
                                    <th className="p-3">Status</th>
                                    <th className="p-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="overflow-x-auto">
                                {
                                    bookings.map((booking, i) => {
                                        return (
                                            <tr key={i} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                                <td className="p-3">
                                                    <p>{i + 1}</p>
                                                </td>
                                                <td className="p-3">
                                                    <p>{booking?.tourPackageTitle}</p>
                                                </td>
                                                <td className="p-3">
                                                    {/* <p>14 Jan 2022</p> */}
                                                    <p className="dark:text-gray-400">{booking?.guide}</p>
                                                </td>
                                                <td className="p-3">
                                                    <p>{booking?.date}</p>
                                                    {/* <p className="dark:text-gray-400">Tuesday</p> */}
                                                </td>
                                                <td className="p-3 text-right">
                                                    <p>{`$${booking?.price}`}</p>
                                                </td>
                                                <td className="p-3 text-right">
                                                    <form className="col-span-full sm:col-span-3">
                                                        {/* <label htmlFor="guide" className="text-sm">Your Tour Guide</label> */}
                                                        <select id="status" onChange={handleStatus} className="w-32">
                                                            {/* <option value="">Select a Guide</option> */}
                                                            {statusArray?.map((el, index) => (
                                                                <option className="w-20" key={index} value={el}>
                                                                    {el}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </form>
                                                </td>
                                                {/* <td className="p-3 text-right">
                                                    <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                                        <span>In Review</span>
                                                    </span>
                                                </td> */}
                                                <td className="p-3 text-right">
                                                    <div className="text-center space-x-2 space-y-1">
                                                        {<button disabled={user?.isDisabled} /* disabled={isActionApplied} */ onClick={() => handleApply(user)} className="btn btn-xs bg-yellow-500">
                                                            <h3 className="text-white text-md">Apply</h3>
                                                        </button>}
                                                        {<button disabled={user?.isDisabled} /* disabled={isActionApplied} */ onClick={() => handleCancel(user)} className="btn btn-xs bg-red-500">
                                                            <h3 className="text-white text-md">Cancel</h3>
                                                        </button>}
                                                        {<button disabled={!(status === 'Accepted')} /* disabled={isActionApplied} */ onClick={() => handlePay(user)} className="btn btn-xs bg-lime-500">
                                                            <h3 className="text-white text-md">Pay</h3>
                                                        </button>}
                                                        {/* <button disabled onClick={() => handleDeleteUser(user)} className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button> */}
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBookings;