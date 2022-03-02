import './Header.css';
import Logo from './Logo/Logo';
import NavDesktop from './Nav/NavDesktop/NavDesktop';
import NavMobile from './Nav/NavMobile/NavMobile.js';
import Ham from './Nav/Ham/Ham';
import { toggleIsDesktop } from '../../actions/navigation';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
	const state = useSelector((state) => state.navigationReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		const sizeOfDesktop = window.matchMedia(`(min-width:800px)`);
		dispatch(toggleIsDesktop(sizeOfDesktop.matches));
		sizeOfDesktop.addEventListener('change', (e) => {
			dispatch(toggleIsDesktop(sizeOfDesktop.matches));
		});
	}, [dispatch]);

	return (
		<>
			{!state.isDesktop && <NavMobile />}
			<header className='header'>
				<Logo />
				{state.isDesktop ? <NavDesktop /> : <Ham />}
			</header>
		</>
	);
};

export default Header;
