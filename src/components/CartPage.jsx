import React from "react";
import { Data } from "../assets/Data";
import "../styles/Cartpage.css";
import { useDispatch, useSelector } from "react-redux";
function CartPage() {
	const { cartItems, subTotal, shipping, tax, total } = useSelector(
		(state) => state.cart
	);
	const dispatch = useDispatch();
	const increment = (id) => {
		console.log("issue in increament");
		dispatch({
			type: "addToCart",
			payload: { id },
		});
		dispatch({
			type: "calculatePrice",
		});
	};
	const decrement = (id) => {
		dispatch({
			type: "decrement",
			payload: id,
		});
		dispatch({
			type: "calculatePrice",
		});
	};
	const deleteItem = (id) => {
		dispatch({
			type: "deleteItem",
			payload: id,
		});
		dispatch({
			type: "calculatePrice",
		});
	};

	return (
		<div className="cart-page-div">
			<div className="cart-card-div">
				{cartItems.length > 0 ? (
					cartItems.map((i) => (
						<CartItem
							key={i.id}
							id={i.id}
							img={i.img}
							qty={i.quantity}
							increment={increment}
							decrement={decrement}
							deleteItem={deleteItem}
						/>
					))
				) : (
					<h1>no items </h1>
				)}
			</div>
			<aside>
				<h2>Subtotal: ${subTotal}</h2>
				<h2>Shipping: ${shipping}</h2>
				<h2>Tax: ${tax}</h2>
				<h2>Total: ${total}</h2>
			</aside>
		</div>
	);
}

const CartItem = ({ id, img, qty, increment, decrement, deleteItem }) => {
	return (
		<div key={id} className="cart-card">
			<img src={img} alt="" />
			<div className="cart-button">
				<button onClick={() => decrement(id)}>-</button>
				<p>{qty}</p>
				<button onClick={() => increment(id)}>+</button>
			</div>
			<button onClick={() => deleteItem(id)} className="delete-button">
				delete
			</button>
		</div>
	);
};

export default CartPage;
