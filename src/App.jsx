import { Button } from 'flowbite-react'
import './App.css'
import NavbarFlowbite from './components/Shared/Navbar/Navbar'

function App() {

  return (
    <>
      <NavbarFlowbite></NavbarFlowbite>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div>
        <Button>Click me</Button>
      </div>
    </>
  )
}

export default App
