import './Admin.css';
import Login from '../../components/Login/Login';
import Button from '../../components/Button/Button';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
	const state = useSelector((state) => state.navigationReducer);
	const { isLoggedIn } = state;
	const navigate = useNavigate();

	const handleChoose = (goTo) => {
		navigate(`/${goTo}`);
	};

	const AdminSection = (
		<section className='admin'>
			<div className='admin__wrapper'>
				<p className='admin__title'>
					Zalogowano jako <span className='admin__span'>Baskerville</span>
				</p>
				<Button
					text='Utwórz artykuł'
					subClass='admin__button'
					click={() => handleChoose('addarticle')}
				/>
				<Button
					text='Usuń artykuł'
					subClass='admin__button admin__button--remove'
					click={() => handleChoose('deletearticle')}
				/>
			</div>
		</section>
	);

	return <>{isLoggedIn ? AdminSection : <Login />}</>;
};

export default Admin;
