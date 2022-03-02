import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Router from './Router.js';

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<Header />
				<Router />
			</BrowserRouter>
			<Search />
		</div>
	);
};

export default App;
