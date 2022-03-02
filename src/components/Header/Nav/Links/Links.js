import './Links.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Links = () => {
	const state = useSelector((state) => state.navigationReducer);
	const line = state.isDesktop && <span className='nav__line'></span>;

	return (
		<ul className='nav'>
			<li className='nav__li'>
				<Link className='nav__link' to='/'>
					HOME
				</Link>
				{line}
			</li>
			<li className='nav__li'>
				<Link className='nav__link' to='/article/123'>
					BLOG
				</Link>
				{line}
			</li>
			<li className='nav__li'>
				<Link className='nav__link' to='/about'>
					O MNIE
				</Link>
				{line}
			</li>
		</ul>
	);
};

export default Links;
