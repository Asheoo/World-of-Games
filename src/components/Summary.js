import React, { Component } from 'react';
import Select from 'react-select';
import { useState } from 'react';

function Summary({numberOfItems,cartItems}) {

	const [selectedValue,setSelectedValue]=useState(5)

	const options = [
		{ value: 5, label: 'Standard Delivery - 5€' },
		{ value: 2, label: 'Slow Delivery - 2€' },
		{ value: 10, label: 'Premium Delivery - 10€' }
	];

	const totalPrice=cartItems.map(item=>{
		return Number(item.curr_price)
	}).reduce((acc,cur)=> acc +cur,0 )

	const handleChange=e=>setSelectedValue(e.value)

	return (
		<>
			<h2>Order summary</h2>
			<div className="line"></div>
			<div className="order-items">
				<h3>{numberOfItems} {numberOfItems<=1 ? "item" : "items"}</h3> <h3>{totalPrice}€</h3>
			</div>
			<div className="order-shipping">
				<h3>SHIPPING</h3>
				<Select
					onChange={handleChange}
					options={options}
					defaultValue={{ label: 'Standard Delivery - 5€', value: 0 }}
				></Select>
			</div>
			<div className="line"></div>
			<div className="order-total">
				<h3>TOTAL COST</h3>
				<h3>{totalPrice+selectedValue}€</h3>
			</div>
            <button className='order-btn'>CHECKOUT</button>
		</>
	);
}

export default Summary;
