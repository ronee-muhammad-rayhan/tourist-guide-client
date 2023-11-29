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
        </div>
    );
};

export default MyBookings;