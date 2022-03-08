import './Links.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Icons from '../../../Icons/Icons';

const Links = () => {
	const state = useSelector((state) => state.navigationReducer);
	const line = state.isDesktop && <span className='nav__line'></span>;

	return (
		<ul className='nav'>
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
				<Icons iconsSubClass='nav__icons' iconSubClass='nav__icon' />
			</li>
		</ul>
	);
};

export default Links;
