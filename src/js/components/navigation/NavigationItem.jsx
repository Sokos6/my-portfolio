import React from 'react';
import { NavLink } from 'react-router-dom';

// navigation item component
const NavigationItem = ({ url, label, clicked }) => (
	<li className="navigation-item">
		<NavLink exact to={url} onClick={clicked}>
			{label}
		</NavLink>
	</li>
);

export default NavigationItem;
