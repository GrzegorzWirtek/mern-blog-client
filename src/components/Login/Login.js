import './Login.css';
import Button from '../Button/Button';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkLogin } from '../../actions/login';

const Login = () => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.navigationReducer);
	const { isBlocked, attempts } = state;

	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(checkLogin({ login, password }));
	};

	const warning =
		attempts < 3 ? (
			attempts > 0 ? (
				<p className='login__warning'>
					Błędny login. Pozostałych prób: {attempts}
				</p>
			) : (
				<p className='login__warning'>Zablokowano</p>
			)
		) : null;

	return (
		<section className='login'>
			<form className='login__form' onSubmit={handleSubmit}>
				<p className='login__title'>Logowanie</p>
				{warning}
				<input
					type='text'
					className='login__input'
					placeholder='Login'
					required
					disabled={isBlocked && true}
					value={login}
					onChange={(e) => setLogin(e.target.value)}
				/>
				<input
					type='password'
					className='login__input'
					placeholder='Hasło'
					required
					disabled={isBlocked && true}
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button
					type='submit'
					subClass='login__button'
					text='Zaloguj'
					isDisabled={attempts < 1 ? true : false}
				/>
			</form>
		</section>
	);
};

export default Login;
