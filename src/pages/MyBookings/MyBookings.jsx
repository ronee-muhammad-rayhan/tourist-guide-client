// import { useState } from "react";
import { useState } from "react";
// import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import useBookings from "../../hooks/useBookings";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

const MyBookings = () => {
    const { user } = useAuth();
    // const [bookings, setBookings] = useState([]);
    const [status, setStatus] = useState('InReview');
    // const [apply, setApply] = useState(false);
    let apply = false
    // const [bookings] = useBookings();
    const statusArray = ['InReview', 'Rejected', 'Accepted']
    // const { width, height } = useWindowSize()

    const axiosSecure = useAxiosSecure();
    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['bookings', user?.email, status],
        queryFn: async () => {
            const res = await axiosSecure.get(`/dashboard/bookings?email=${user?.email}`);
            // const res = await axiosSecure.get(`/bookings`);
            return res.data;
        }
    })

    if (bookings.length > 3) {
        console.log('confetti');
        apply = true;
    }

    const handleStatus = async (e) => {
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

    const handleApply = () => { }
    const handleCancel = (e) => {
        setStatus('Rejected');
        const id = e.target.parentNode.parentNode.parentNode.id;
        console.log(id);
        console.log(status);
        const updatedBooking = {
            status: status,
        }

        axiosSecure.patch(`/bookings/${id}`, updatedBooking)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
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
            <form>
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
                                                <tr id={booking?._id} key={i} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                                    <td className="p-3">
                                                        <p>{i + 1}</p>
                                                    </td>
                                                    <td className="p-3">
                                                        <p>{booking?.tourPackageTitle}</p>
                                                    </td>
                                                    <td className="p-3">
                                                        <p className="dark:text-gray-400">{booking?.guide}</p>
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
                                                            {<button disabled={!apply} /* disabled={isActionApplied} */ onClick={() => handleApply(user)} className="btn btn-xs bg-yellow-500">
                                                                <h3 className="text-white text-md">Apply</h3>
                                                            </button>}
                                                            {
                                                                <input type="submit" disabled={(booking?.status === 'Accepted')} hidden={!(booking?.status === 'InReview')} value={`Cancel`} /* disabled={isActionApplied} */ onClick={handleCancel} className={`btn btn-xs bg-red-500 text-white text-md ${booking?.status === 'InReview' ? 'hidden' : 'inline-block'}`} />
                                                            }
                                                            {<button disabled={!(booking?.status === 'Accepted')} /* disabled={isActionApplied} */ onClick={() => handlePay(user)} className="btn btn-xs bg-lime-500">
                                                                <h3 className="text-white text-md">Pay</h3>
                                                            </button>}
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
            {
                apply && <Confetti
                    tweenDuration={13000}
                    numberOfPieces={3000}
                    recycle={false}
                    width={`1024px`}
                    height={`720px`}
                    drawShape={ctx => {
                        ctx.beginPath()
                        for (let i = 0; i < 22; i++) {
                            const angle = 0.35 * i
                            const x = (0.2 + (1.5 * angle)) * Math.cos(angle)
                            const y = (0.2 + (1.5 * angle)) * Math.sin(angle)
                            ctx.lineTo(x, y)
                        }
                        ctx.stroke()
                        ctx.closePath()
                    }}
                />
            }
        </>
    );
};

export default MyBookings;