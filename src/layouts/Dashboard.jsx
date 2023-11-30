import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaAd, FaList, FaSearch, FaEnvelope, FaUsers, FaBook, FaUser, FaListAlt } from 'react-icons/fa';
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import useUsers from "../hooks/useUsers";

const Dashboard = () => {
    const { user } = useAuth();

    const [users] = useUsers();
    console.log(users);

    const loggedInUser = users.find(u => u?.email === user.email);
    console.log(loggedInUser);

    // TODO: get isAdmin value from the database
    // const isAdmin = true;
    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            {/* dashboard sidebar */}
            <div className="w-64 min-h-screen bg-green-900">
                {/* min-h-full */}
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/profile">
                                    <FaUser />
                                    My Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addTourPackage">
                                    <FaListAlt />
                                    Add Tour Package</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageTourPackages">
                                    <FaList></FaList>
                                    Manage Tour Packages</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>
                                    Manage Users</NavLink>
                            </li>
                        </>
                            : loggedInUser?.role === 'tour-guide' ?
                                <>
                                    <li>
                                        <NavLink to="/dashboard/tourGuideHome">
                                            <FaHome></FaHome>
                                            Tourist Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={`/dashboard/profile/users/${user?.email}`}>
                                            <FaUser></FaUser>
                                            My Profile</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={`/dashboard/tour-guide/bookings/${user?.email}`}>
                                            <FaBook></FaBook>
                                            My Assigned Tours</NavLink>
                                    </li>
                                </>
                                : loggedInUser?.role === 'tourist' ?
                                    <>
                                        <li>
                                            <NavLink to="/dashboard/touristHome">
                                                <FaHome></FaHome>
                                                Tourist Home</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={`/dashboard/tourist/profile/${user?.email}`}>
                                                <FaUser></FaUser>
                                                My Profile</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={`/dashboard/bookings/${user?.email}`}>
                                                <FaBook></FaBook>
                                                My Bookings</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={`/dashboard/wishlist/${user?.email}`}>
                                                <FaAd></FaAd>
                                                My Wishlist</NavLink>
                                        </li>
                                    </>
                                    : undefined || ''
                    }

                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tours">
                            <FaSearch></FaSearch>
                            Tour Packages</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            <FaEnvelope></FaEnvelope>
                            Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;