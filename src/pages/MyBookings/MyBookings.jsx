// import { useState } from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import useBookings from "../../hooks/useBookings";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyBookings = () => {
    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);
    const axiosSecure = useAxiosSecure();
    // const [bookings] = useBookings();

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

    return (
        <div>
            <h3 className="text-4xl">My Total Bookings: {bookings.length}</h3>
            <div>
                <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                    <h2 className="mb-4 text-2xl font-semibold leadi">Bookings</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-xs">
                            <colgroup>
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col className="w-24" />
                            </colgroup>
                            <thead className="dark:bg-gray-700">
                                <tr className="text-left">
                                    <th className="p-3">#</th>
                                    <th className="p-3">Name of the Package</th>
                                    <th className="p-3">Tour Guide Name</th>
                                    <th className="p-3">Tour Date</th>
                                    <th className="p-3 text-right">Tour Price ($)</th>
                                    <th className="p-3">Status</th>
                                </tr>
                            </thead>
                            <tbody>



                                {
                                    bookings.map((booking, i) => {
                                        return (
                                            <tr key={i} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                                <td className="p-3">
                                                    <p>{i + 1}</p>
                                                </td>
                                                <td className="p-3">
                                                    <p>{booking?.packageName}</p>
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
                                                    <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                                        <span>Pending</span>
                                                    </span>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }



                                <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                    <td className="p-3">
                                        <p>97412378923</p>
                                    </td>
                                    <td className="p-3">
                                        <p>Microsoft Corporation</p>
                                    </td>
                                    <td className="p-3">
                                        <p>14 Jan 2022</p>
                                        <p className="dark:text-gray-400">Friday</p>
                                    </td>
                                    <td className="p-3">
                                        <p>01 Feb 2022</p>
                                        <p className="dark:text-gray-400">Tuesday</p>
                                    </td>
                                    <td className="p-3 text-right">
                                        <p>$15,792</p>
                                    </td>
                                    <td className="p-3 text-right">
                                        <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <span>Pending</span>
                                        </span>
                                    </td>
                                </tr>
                                <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                    <td className="p-3">
                                        <p>97412378923</p>
                                    </td>
                                    <td className="p-3">
                                        <p>Tesla Inc.</p>
                                    </td>
                                    <td className="p-3">
                                        <p>14 Jan 2022</p>
                                        <p className="dark:text-gray-400">Friday</p>
                                    </td>
                                    <td className="p-3">
                                        <p>01 Feb 2022</p>
                                        <p className="dark:text-gray-400">Tuesday</p>
                                    </td>
                                    <td className="p-3 text-right">
                                        <p>$275</p>
                                    </td>
                                    <td className="p-3 text-right">
                                        <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <span>Pending</span>
                                        </span>
                                    </td>
                                </tr>
                                <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                    <td className="p-3">
                                        <p>97412378923</p>
                                    </td>
                                    <td className="p-3">
                                        <p>Coca Cola co.</p>
                                    </td>
                                    <td className="p-3">
                                        <p>14 Jan 2022</p>
                                        <p className="dark:text-gray-400">Friday</p>
                                    </td>
                                    <td className="p-3">
                                        <p>01 Feb 2022</p>
                                        <p className="dark:text-gray-400">Tuesday</p>
                                    </td>
                                    <td className="p-3 text-right">
                                        <p>$8,950,500</p>
                                    </td>
                                    <td className="p-3 text-right">
                                        <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <span>Pending</span>
                                        </span>
                                    </td>
                                </tr>
                                <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                    <td className="p-3">
                                        <p>97412378923</p>
                                    </td>
                                    <td className="p-3">
                                        <p>Nvidia Corporation</p>
                                    </td>
                                    <td className="p-3">
                                        <p>14 Jan 2022</p>
                                        <p className="dark:text-gray-400">Friday</p>
                                    </td>
                                    <td className="p-3">
                                        <p>01 Feb 2022</p>
                                        <p className="dark:text-gray-400">Tuesday</p>
                                    </td>
                                    <td className="p-3 text-right">
                                        <p>$98,218</p>
                                    </td>
                                    <td className="p-3 text-right">
                                        <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <span>Pending</span>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBookings;