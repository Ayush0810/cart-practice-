import React from "react";
import "../styles/Home.css";
import { Data } from "../assets/Data.js";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

function Home() {
	const dispatch = useDispatch();
	const addToCart = (options) => {
		dispatch({ type: "addToCart", payload: options });
		dispatch({
			type: "calculatePrice",
		});
		toast.success("added to cart");
	};
	return (
		<div className="card-outer">
			{Data.map((value) => {
				return (
					<Card
						key={value.id}
						id={value.id}
						img={value.img}
						name={value.name}
						price={value.price}
						handler={addToCart}
					/>
				);
			})}
		</div>
	);
}

const Card = ({ id, img, name, price, handler }) => {
	return (
		<div key={id} className="card-items">
			<img src={img} alt="" />
			<div className="card-details">
				<h1>{name}</h1>
				<p>price:${price}</p>
				<button onClick={() => handler({ id, img, name, price, quantity: 1 })}>
					add to cart
				</button>
			</div>
		</div>
	);
};

export default Home;
