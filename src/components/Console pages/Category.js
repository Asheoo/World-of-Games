import { NavLink } from 'react-router-dom';


function Category() {


  

	return (
		<div className="category-nav">
			<ul className="category">
				<li>
					<NavLink to=":all/all">All</NavLink>
				</li>
				<li>
					<NavLink to=":all/new">New</NavLink>
				</li>
				<li>
					<NavLink to=":all/sale">Sale</NavLink>
				</li>
				<li>
					<NavLink to=":all/special">Special</NavLink>
				</li>
			</ul>
		</div>
	);
}

export default Category;
