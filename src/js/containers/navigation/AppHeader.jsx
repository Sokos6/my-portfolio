import React, { useState } from 'react';
import Toolbar from '../../components/navigation/Toolbar';

const AppHeader = () => {
	const [sideDrawerOpen, setSideDrawerOpen] = useState(false),
		// app links
		navigationLinks = [
			{ label: 'home', url: '/' },
			{ label: 'about', url: '/about' },
			{ label: 'skills', url: '/skills' },
			{ label: 'projects', url: '/projects' },
			{ label: 'contacts', url: '/contacts' },
		];

	const toggleSideDrawer = () => {
		setSideDrawerOpen((prev) => !prev);
	};

	const closeSideDrawer = () => {
		setSideDrawerOpen((prev) => {
			if (prev) {
				return false;
			}
		});
	};

	return (
		<Toolbar
			toggleSideDrawer={toggleSideDrawer}
			onWindowResize={closeSideDrawer}
			isOpenSideDrawer={sideDrawerOpen}
			links={navigationLinks}
			logoType="image"
			logoUrl="https://www.seoclerk.com/pics/579352-15CTfd1515601765.png"
		/>
	);
};

export default AppHeader;
