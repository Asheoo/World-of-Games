import { useState, useEffect } from 'react';
import { db } from '../config/firebase';
import { uid } from 'uid';
import { set, ref, onValue, remove, update } from 'firebase/database';
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
		setProductChange({ ...data });
		update(ref(db, `/${tempUuid}`), {
			...data,
			uuid: tempUuid
		});
		setIsEdit(false);

		setProductChange({
			...productChange,
			name: '',
			curr_price: '',
			sale: '',
			img_url: '',
			publisher: '',
			relase_date: ''
		});
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
		setProductChange({
			...productChange,
			name: '',
			curr_price: '',
			sale: '',
			img_url: '',
			publisher: '',
			relase_date: ''
		});
	};

	//delete
	const handleDelete = (game) => {
		remove(ref(db, `/${game.uuid}`));
		setProductChange({
			...productChange,
			name: '',
			curr_price: '',
			sale: '',
			img_url: '',
			publisher: '',
			relase_date: ''
		});
	};

	//update
	const handleUpdate = (game) => {
		setIsEdit(true);
		setTempUuid(game.uuid);

		setProductChange(game);
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

	return (
		<div className="manage">
			<h2>Manage Products</h2>
			<NavLink to={-1} className="back-to-store">
				<i className="fa-solid fa-angle-left"></i> Back to store
			</NavLink>
			<NavLink to={-1} className="back-to-store-media">
				<i className="fa-solid fa-angle-left"></i>
			</NavLink>

			<ManageInputs
				productChange={productChange}
				handleGameChange={handleGameChange}
				writeToDataBase={writeToDataBase}
				isEdit={isEdit}
			></ManageInputs>

			<div className="manage-products">{game}</div>
		</div>
	);
}

export default Products;
