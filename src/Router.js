import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home/Home';
import About from './routes/About/About';
import Articles from './routes/Articles/Articles';
import Article from './routes/Article/Article';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/articles' element={<Articles />} />
			<Route path='/about' element={<About />} />
			<Route path='/article/:id' element={<Article />} />
		</Routes>
	);
};

export default Router;
