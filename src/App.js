import './App.css';
import { HashRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Spinner from './components/Spinner/Spinner';
import Footer from './components/Footer/Footer';
import Router from './Router.js';
import { useSelector } from 'react-redux';

const App = () => {
	const articles = useSelector((state) => state.articlesReducer);

	return (
		<div className='App'>
			<HashRouter>
				<Header />
				{articles.length ? <Router /> : <Spinner />}
				<Footer />
			</HashRouter>
		</div>
	);
};

export default App;
