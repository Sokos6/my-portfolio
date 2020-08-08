import React, { useEffect } from 'react';
//components
import Logo from './logo';
import MainMenu from './MainMenu';
import DrawerToggleButton from './DrawerToggleButton';
import Backdrop from '../UI/Backdrop';

// toolbar component
const Toolbar = ({
	onWindowResize,
	logoType,
	logoLabel,
	logoUrl,
	logoSvg,
	isOpenSideDrawer,
	links,
	toggleSideDrawer,
	children,
}) => {
	useEffect(() => {
		window.addEventListener('resize', handleResizeEvent);
	}, []);

	// will be triggered on window resize
	const handleResizeEvent = () => {
		if (window.innerWidth > 768) {
			onWindowResize();
		}
	};
	return (
		<header className="toolbar">
			<div className="toolbar-navigation">
				<Logo
					url={links[0].url}
					logoType={logoType}
					logoLabel={logoLabel ? logoLabel : null}
					logoUrl={logoUrl ? logoUrl : null}
					logoSvg={logoSvg ? logoSvg : null}
				/>
				<div className="spacer" />
				<nav className={`toolbar-navigation-items ${isOpenSideDrawer ? 'open-side-drawer' : ''}`}>
					<MainMenu links={links} closeSideDrawer={onWindowResize} />
					{children}
				</nav>
				<div className="toolbar-toggle-button">
					<DrawerToggleButton show={isOpenSideDrawer} click={toggleSideDrawer} />
				</div>
			</div>
			<Backdrop show={isOpenSideDrawer} click={toggleSideDrawer} />
		</header>
	);
};

export default Toolbar;
