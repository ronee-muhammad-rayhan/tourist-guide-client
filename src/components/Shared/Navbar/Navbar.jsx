import './Navbar.css'
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import profileImage from "./../../../assets/images/profile-picture-5.jpg";

export default function NavbarFlowbite() {
    // set the target element that will be collapsed or expanded (eg. navbar menu)

    return (
        <nav>
            <Navbar fluid={true} rounded={true} >
                <Navbar.Brand href="https://flowbite.com/">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Tourist Guide
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={
                            <Avatar
                                alt="User settings"
                                img={profileImage}
                                rounded={true}
                            />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">RoneeMRayhan</span>
                            <span className="block truncate text-sm font-medium">
                                roneemrayhan@rayhanworld.com
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Offer Announcements</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Logout</Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link href="/" active={true}>
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/community">Community</Navbar.Link>
                    <Navbar.Link href="/blogs">Blogs</Navbar.Link>
                    <Navbar.Link href="/about">About Us</Navbar.Link>
                    <Navbar.Link href="/contact">Contact Us</Navbar.Link>
                    <Navbar.Link href="/login">Login</Navbar.Link>
                    <Navbar.Link href="/register">Register</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </nav >
    );
}