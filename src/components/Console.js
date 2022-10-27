import React, { Component } from 'react';
import Menu_wrapper from './Menu_wrapper';
import ConsolePage from './ConsolePage';
import { Routes,Route } from 'react-router-dom';

function Console() {
	return (
			
		<div className='pc-div'>

			<Menu_wrapper></Menu_wrapper>
			<ConsolePage></ConsolePage>
		</div>
			
	);
}

export default Console;
