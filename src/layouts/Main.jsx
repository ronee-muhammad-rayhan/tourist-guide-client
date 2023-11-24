import { Outlet } from 'react-router-dom'
import NavbarFlowbite from '../components/Shared/Navbar/Navbar'
const Main = () => {
    return (
        <div>
            <NavbarFlowbite></NavbarFlowbite>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Main