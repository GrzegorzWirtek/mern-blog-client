import './Links.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Icons from '../../../Icons/Icons';
import { logout } from '../../../../actions/login';

const Links = () => {
	const state = useSelector((state) => state.navigationReducer);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const line = state.isDesktop && <span className='nav__line'></span>;

	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};

	const handleLogout = () => {
		dispatch(logout());
		navigate('/admin');
	};

	const iconsOrLogout = state.isLoggedIn ? (
		<p className='nav__link nav__logout' onClick={handleLogout}>
			WYLOGUJ
		</p>
	) : (
		<Icons iconsSubClass='nav__icons' iconSubClass='nav__icon' />
	);

	return (
		<ul className='nav' onClick={scrollToTop}>
			<li className='nav__li'>
				<Link className='nav__link' to='/'>
					HOME
					{line}
				</Link>
			</li>
			<li className='nav__li'>
				<Link className='nav__link' to='/articles'>
					BLOG
					{line}
				</Link>
			</li>
			<li className='nav__li'>
				<Link className='nav__link' to='/about'>
					O MNIE
					{line}
				</Link>
			</li>
			<li className='nav__li'>
				<Link className='nav__link' to='/admin'>
					ADMIN
					{line}
				</Link>
			</li>
			<li className='nav__li'>{iconsOrLogout}</li>
		</ul>
	);
};

export default Links;
