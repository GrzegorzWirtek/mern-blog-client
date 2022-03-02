import './NavMobile.css';

import Links from '../Links/Links';
import { useDispatch, useSelector } from 'react-redux';

import { toggleHam } from '../../../../actions/navigation';

const NavMobile = () => {
	const state = useSelector((state) => state.navigationReducer);
	const dispatch = useDispatch();

	const navHideClass = state.isHamActive ? 'nav-visible' : '';

	return (
		<nav
			className={`nav-hide ${navHideClass}`}
			onClick={() => dispatch(toggleHam())}>
			<Links />
		</nav>
	);
};

export default NavMobile;
