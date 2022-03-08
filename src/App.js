import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Spinner from './components/Spinner/Spinner';
import Footer from './components/Footer/Footer';
import Router from './Router.js';
import { useSelector } from 'react-redux';

const App = () => {
	const articles = useSelector((state) => state.articlesReducer);

	return (
		<div className='App'>
			<BrowserRouter>
				<Header />
				{articles.length ? <Router /> : <Spinner />}
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
