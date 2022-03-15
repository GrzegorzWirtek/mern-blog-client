import './Logo.css';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
	const navigate = useNavigate();
	return (
		<div className='logo' onClick={() => navigate('/about')}>
			<img className='logo__img' src='images/logo.png' alt='Logo' />
			<div className='logo__text-wrapper'>
				<p className='logo__name'>Grzegorz Wirtek</p>
				<p className='logo__blog'>BLOG</p>
			</div>
		</div>
	);
};

export default Logo;
