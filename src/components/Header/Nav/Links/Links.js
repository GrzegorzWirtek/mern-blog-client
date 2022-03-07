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
				<div className='nav__icons'>
					<a
						href='https://www.facebook.com/grzegorz.wirtek/'
						target='_blank'
						rel='noreferrer noopener'>
						<img
							src='/images/facebook-brands.svg'
							alt='Facebook icon'
							className='nav__icon'
							title='Facebook'
						/>
					</a>

					<a
						href='https://www.instagram.com/grzegorz.wirtek/'
						target='_blank'
						rel='noreferrer noopener'>
						<img
							src='/images/instagram-brands.svg'
							alt='Instagram icon'
							className='nav__icon'
							title='Instagram'
						/>
					</a>

					<a
						href='https://github.com/GrzegorzWirtek'
						target='_blank'
						rel='noreferrer noopener'>
						<img
							src='/images/github-brands.svg'
							alt='Github icon'
							className='nav__icon'
							title='Github'
						/>
					</a>
				</div>
			</li>
		</ul>
	);
};

export default Links;
