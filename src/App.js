import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Router from './Router.js';
import { useSelector } from 'react-redux';

const App = () => {
	const articles = useSelector((state) => state.articlesReducer);

	return (
		<div className='App'>
			<BrowserRouter>
				<Header />
				{articles.length ? (
					<Router />
				) : (
					<p className='error-message'>
						Nie można wyświetlić zawartości. Sprawdź połączenie z serverem i
						bazą danych.
					</p>
				)}
			</BrowserRouter>
		</div>
	);
};

export default App;
