import React, { Component, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import '../css/Search.css';
import { useDispatch } from 'react-redux';
import { openGame } from '../redux/slices/openGamePageSlice';

function Search() {
	const dispatch=useDispatch()
    const ref = useRef(null)
	const [filteredData, setFilteredData] = useState([]);
    const [wordEntered,setWordEntered]=useState('')
	const games = useSelector((state) => state?.game.value);
	
	const handleFilter = (event) => {
        const searchWord = event.target.value;
		const newFilter = games[0].filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
		});
		if (searchWord === '') {
            setFilteredData([]);
		} else {
            setFilteredData(newFilter);
		}
        setWordEntered(searchWord)
	};
	//  style={{marginTop : filteredData.length>0 ? '205px'  : null}}
	
    const clearInput=()=>{
        setFilteredData([]);
        setWordEntered('')
    }

    const focusOnInput=()=>{
        ref.current.focus()
    }
	return (
		<div className="search">
			<div className="searchInputs">
				<input ref={ref} type="text" placeholder="Search..." value={wordEntered} onChange={handleFilter} />
				<div className="searchIcon">
					{wordEntered.length === 0 ? (
						<i className="fa-solid fa-magnifying-glass" onClick={focusOnInput}></i>
					) : (
						<i id='clearBtn' className="fa-solid fa-xmark" onClick={clearInput}></i>
					)}
				</div>
			</div>
			{filteredData.length != 0 && (
				<div className="dataResult">
					{filteredData.slice(0, 15).map((value, key) => {
						return (
							<div className="dataItem" onClick={(e)=>{dispatch(openGame(value))}} >
								<p>{value.name}</p>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
}

export default Search;
