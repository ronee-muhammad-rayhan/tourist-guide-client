import { Outlet } from 'react-router-dom'
import NavbarFlowbite from '../components/Shared/Navbar/Navbar'
import Footer from '../components/Shared/Footer/Footer'
const Main = () => {
    return (
        <div>
            <NavbarFlowbite></NavbarFlowbite>
            <div className='pt-24 min-h-[calc(100vh-68px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Main