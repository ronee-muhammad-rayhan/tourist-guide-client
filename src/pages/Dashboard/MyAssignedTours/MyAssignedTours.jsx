import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyAssignedTours = () => {
    const assignedTours = useLoaderData();
    const { user } = useAuth();
    const [status, setStatus] = useState('InReview');
    // let apply = false
    const statusArray = ['InReview', 'Rejected', 'Accepted']

    const axiosSecure = useAxiosSecure();
    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['bookings', user?.email, status],
        queryFn: async () => {
            const res = await axiosSecure.get(`/dashboard/bookings?email=${user?.email}`);
            return res.data;
        }
    })

    const handleStatus = async (e) => {
        // e.preventDefault();
        setStatus(e.target.value)
        console.log(e.target.value);
        // console.log(selectedGuide);

        const id = e.target.parentNode.parentNode.parentNode.id;
        console.log(id);

        const updatedBooking = {
            status: status,
        }

        await axiosSecure.patch(`/bookings/${id}`, updatedBooking)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    // setIsActionApplied(true);
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${status} is updated`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    };

    // const handleApply = () => { }
    const handleCancel = (e) => {
        // e.preventDefault();
        setStatus('Rejected');
        const id = e.target.parentNode.parentNode.parentNode.id;
        console.log(id);
        console.log(status);
        // handleStatus();
        const updatedBooking = {
            status: status,
        }

        axiosSecure.patch(`/bookings/${id}`, updatedBooking)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    // setIsActionApplied(true);
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${status} is updated`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    const handlePay = () => { }

    return (
        <>
            <h3 className="text-4xl">My Assigned Tours: {assignedTours.length}</h3>
            <form>
                <h3 className="text-4xl">My Total Bookings: {bookings.length}</h3>
                <div>
                    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100 overflow-x-auto">
                        <h2 className="mb-4 text-2xl font-semibold leadi">My Assigned Tours</h2>
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
                                        <th className="p-3">Tourist Name</th>
                                        <th className="p-3">Tour Date</th>
                                        <th className="p-3 text-right">Tour Price ($)</th>
                                        <th className="p-3">Status</th>
                                        <th className="p-3">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="overflow-x-auto">
                                    {
                                        assignedTours.map((booking, i) => {
                                            return (
                                                <tr id={booking?._id} key={i} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                                    <td className="p-3">
                                                        <p>{i + 1}</p>
                                                    </td>
                                                    <td className="p-3">
                                                        <p>{booking?.tourPackageTitle}</p>
                                                    </td>
                                                    <td className="p-3">
                                                        <p className="dark:text-gray-400">{booking?.touristName}</p>
                                                    </td>
                                                    <td className="p-3">
                                                        <p>{booking?.date}</p>
                                                    </td>
                                                    <td className="p-3 text-right">
                                                        <p>{`$${booking?.price}`}</p>
                                                    </td>
                                                    <td className="p-3 text-right">
                                                        <div className="col-span-full sm:col-span-3">
                                                            <select disabled={(booking?.status === 'Accepted')} defaultValue={booking?.status} id="status" onChange={handleStatus} className="w-32">
                                                                {statusArray?.map((el, index) => (
                                                                    <option className="w-20" key={index} value={el}>
                                                                        {el}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td className="p-3 text-right">

                                                        <div className="text-center space-x-2 space-y-1">
                                                            {
                                                                <input type="submit" disabled={(booking?.status === 'Accepted')} hidden={!(booking?.status === 'InReview')} value={`Reject`} /* disabled={isActionApplied} */ onClick={handleCancel} className={`btn btn-xs bg-red-500 text-white text-md ${booking?.status === 'InReview' ? 'hidden' : 'inline-block'}`} />
                                                            }
                                                            {
                                                                <button disabled={!(booking?.status === 'Accepted')} /* disabled={isActionApplied} */ onClick={() => handlePay(user)} className="btn btn-xs bg-lime-500">
                                                                    <h3 className="text-white text-md">Accept</h3>
                                                                </button>
                                                            }
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
            </form>
        </>
    );
};

export default MyAssignedTours;