import './App.css'
import Navbar from './components/Navbar'
import Home from "./components/Home"
import CartPage from './components/CartPage'
import {Toaster} from "react-hot-toast"
function App() {
  return (
    <div className=''>
    <Navbar/>
    <Home/>
    <CartPage/>
    <Toaster/>
    </div>
  )
}
export default App
