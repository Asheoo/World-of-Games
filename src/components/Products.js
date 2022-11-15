import React, { Component } from 'react';
import { db } from '../config/firebase';
import { uid } from 'uid';
import { set, ref, onValue, remove, update } from 'firebase/database';
import { useState, useEffect } from 'react';
import Game from './Game';
import '../css/ManageProducts.css';
import ManageInputs from './ManageInputs';
import { NavLink } from 'react-router-dom';

function Products() {
	const [productChange, setProductChange] = useState({});
	const [games, setGames] = useState([]);
	const [isEdit, setIsEdit] = useState(false);
	const [tempUuid, setTempUuid] = useState('');

	

	const handleGameChange = (data) => {
		setProductChange({...data});
		update(ref(db, `/${tempUuid}`), {
			...data,
			uuid: tempUuid
		});
		setIsEdit(false);
		
		setProductChange({...productChange,name:'',curr_price:'',sale:"",img_url:"",publisher:"",relase_date:""});
	};
	console.log(productChange);
	// const handleGameChange = (e) => {
	// 	setProductChange((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
	// 	console.log(games);
	// };
	const handleInputUpdate = (e) => {
		// setProductChange((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
		console.log(productChange);
	};

	//read
	useEffect(() => {
		onValue(ref(db), (snapshop) => {
			setGames([]);
			const data = snapshop.val();
			if (data !== null) {
				Object.values(data).map((game) => {
					setGames((oldArray) => [...oldArray, game]);
				});

				// setTodos((oldArray) => [...oldArray, game]);
			}
		});
	}, []);

	//write
	const writeToDataBase = (data) => {
		const uuid = uid();
		set(ref(db, `/${uuid}`), {
			...data,
			uuid
		});
		setProductChange({...productChange,name:'',curr_price:'',sale:"",img_url:"",publisher:"",relase_date:""});
	};

	//delete
	const handleDelete = (game) => {
		remove(ref(db, `/${game.uuid}`));
		setProductChange({...productChange,name:'',curr_price:'',sale:"",img_url:"",publisher:"",relase_date:""});
	};

	//update
	const handleUpdate = (game) => {
		setIsEdit(true);
		setTempUuid(game.uuid);
		// if(!game.sale){
		// 	setProductChange({...game,sale:''})
		// }else{
		// 	setProductChange(game);
		// }
		setProductChange(game);
	};

	const handleSubmitChange = () => {
		
		// update(ref(db, `/${tempUuid}`), {
		// 	...productChange,
		// 	uuid: tempUuid
		// });
		// // setProductChange({...productChange,name:'',curr_price:'',sale:"",img_url:"",publisher:"",relase_date:""});
        // console.log('');
        // setIsEdit(false);
	
	};

    
	
		const game = games.map((game) => {
			return (
				<article className="game-card manage-article" key={game.id}>
					<Game
						game={game}
						handleUpdate={handleUpdate}
						handleDelete={handleDelete}
						delBorder={true}
					></Game>
				</article>
			);
		});
	
        //STAVITI DA SE USLOVNO ISPISUJE EDIT I ADD LISTA,STAVITI DA ADD BUDE PRVO I AKO SE STISNE NA EDIT ONDA DA SE PROMENE INPUTI ZA EDIT, VIDETI KOD ONOG NA SNIMKU, STAVITI PROVERU DA LI SU ISPRAVNI UNOSI, STAVITI DA SAMO ADMIN MOZE DA PRISTUPI MANAGE DELU I DA U SLUCAJU DA NEKO POKUSA PREKO URLA DA PRISTUPI TOJ STRANICI ONEMOGUCITI MU TO

	return (
		<div className="manage">
			<h2>Manage Products</h2>
			<NavLink to={-1} className='back-to-store'><i className="fa-solid fa-angle-left"></i> Back to store</NavLink>
			{/* <div className="manage-inputs">
				<div>
					<input type="text" name="name" value={productChange?.name} onChange={handleGameChange} />
					<p>Change name</p>
				</div>
				<div>
					<input
						type="text"
						name="curr_price"
						value={productChange?.curr_price}
						onChange={handleGameChange}
					/>
					<p>Change current price</p>
				</div>
				<div>
					<input
						type="text"
						name="sale"
						value={productChange.sale ? productChange.sale : ''}
						onChange={handleGameChange}
					/>
					<p>Change sale</p>
				</div>
				<div>
					<input
						type="text"
						name="img_url"
						value={productChange?.img_url}
						onChange={handleGameChange}
					/>
					<p>Change card image</p>
				</div>
				<div>
					<input
						type="text"
						name="publisher"
						value={productChange?.publisher}
						onChange={handleGameChange}
					/>
					<p>Change publisher</p>
				</div>
				<div>
					<input
						type="text"
						name="relase_date"
						value={productChange?.relase_date}
						onChange={handleGameChange}
					/>
					<p>Change relase date</p>
				</div>
				<button onClick={handleSubmitChange}>Submit</button>
			</div> */}
				<ManageInputs handleInputUpdate={handleInputUpdate} productChange={productChange} handleGameChange={handleGameChange} 
				handleSubmitChange={handleSubmitChange} writeToDataBase={writeToDataBase} isEdit={isEdit}></ManageInputs>
				
			<div className="manage-products">{game}</div>
			{/* <input type="text" value={todo} onChange={handleTodoChange} />
			{isEdit ? (
				<>
					<button onClick={handleSubmitChange}>Submit Change</button>
					<button
						onClick={() => {
							setIsEdit(false);
							setTodo('');
						}}
					>
						X
					</button>
				</>
			) : (
				<button onClick={writeToDataBase}>Submit</button>
			)}

			{games.map((todo) => (
				<>
					<h1>{todo.name}</h1>
					<button onClick={() => handleUpdate(todo)}>update</button>
					<button onClick={() => handleDelete(todo)}>delete</button>
				</>
			))} */}
		</div>
	);
}

export default Products;
