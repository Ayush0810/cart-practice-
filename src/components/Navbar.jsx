
import { useSelector } from "react-redux"
import "../styles/Navbar.css"
function Navbar() {
  const {cartItems} = useSelector((state) => state.cart)

  return (
    <>
        <nav className='navbar'>
            <h1>CART</h1>
             <ul className='list'>
                    <li className="items">home</li>
                    <li className="items">about</li>
                    <div className="">
                    <li className="items cart-icon">cart</li>
                    <div className="count">{cartItems.length}</div>
                    </div>
                </ul>

        </nav>
    </>
  )
}

export default Navbar