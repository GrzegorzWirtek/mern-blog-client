import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home/Home';
import About from './routes/About/About';
import Article from './routes/Article/Article';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/article/:id' element={<Article />} />
			<Route path='/about' element={<About />} />
		</Routes>
	);
};

export default Router;
