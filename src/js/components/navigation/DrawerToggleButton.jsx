import React from 'react';

// drawer toggle component
const DrawerToggleButton = ({ show, click }) => (
	<button className="toggle-button" onClick={click}>
		{show ? <i className="fas fa-times" /> : <i className="fas fa-bars" />}
	</button>
);

export default DrawerToggleButton;
