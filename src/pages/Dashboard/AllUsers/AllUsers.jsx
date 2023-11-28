import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
// import { useState } from "react";

const AllUsers = () => {
    // const [isActionApplied, setIsActionApplied] = useState(false);
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    // setIsActionApplied(true);
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleMakeTourGuide = user => {
        axiosSecure.patch(`/users/tour-guide/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    // setIsActionApplied(true);
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an tour guide now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    /* const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user?._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "The user has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    } */
    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All Users</h2>
                <h2 className="text-3xl">Total Users:{users.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === 'admin' ? 'Admin' : user.role === 'tour-guide' ? 'Tour Guide' : user.role === 'tourist' ? 'Tourist' : ''}
                                </td>
                                <td>
                                    <div className="text-center space-x-2 space-y-1">
                                        {<button disabled={user?.isDisabled} /* disabled={isActionApplied} */ onClick={() => handleMakeAdmin(user)} className="btn btn-xs bg-yellow-500">
                                            <h3 className="text-white text-md">Make Admin</h3>
                                        </button>}
                                        {<button disabled={user?.isDisabled} /* disabled={isActionApplied} */ onClick={() => handleMakeTourGuide(user)} className="btn btn-xs bg-lime-500">
                                            <h3 className="text-white text-md">Make Tour Guide</h3>
                                        </button>}
                                        {/* <button disabled onClick={() => handleDeleteUser(user)} className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button> */}
                                    </div>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;