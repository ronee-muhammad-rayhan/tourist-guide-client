import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import useTourPackages from "../../../hooks/useTourPackages";

const ManageTourPackages = () => {
    const [tours, , refetch] = useTourPackages();
    const axiosSecure = useAxiosSecure();

    const handleDeleteTourPackage = (tour) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/tours/${tour._id}`);
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${tour.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                // Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                // });
            }
        });
    }

    return (
        <div>
            <SectionTitle heading="Manage All Tour Packages" subHeading="Get Ready"></SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Tour Title</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tours.map((tour, index) => <tr key={tour._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={tour.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {tour.name}
                                </td>
                                <td className="text-right">{tour.price}</td>
                                <td>
                                    <Link to={`/dashboard/updateTourPackage/${tour._id}`}>
                                        <button className="btn btn-ghost btn-lg bg-orange-500">
                                            <FaEdit className="text-white"></FaEdit>
                                        </button>
                                    </Link>                               </td>
                                <td>
                                    <button onClick={() => handleDeleteTourPackage(tour)} className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>)}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageTourPackages;