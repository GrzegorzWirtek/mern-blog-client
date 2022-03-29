import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './routes/Home/Home';
import About from './routes/About/About';
import Articles from './routes/Articles/Articles';
import Article from './routes/Article/Article';
import Admin from './routes/Admin/Admin';
import AddArticle from './routes/AddArticle/AddArticle';
import DeleteArticle from './routes/DeleteArticle/DeleteArticle';
import { useSelector } from 'react-redux';

const Router = () => {
	const state = useSelector((state) => state.navigationReducer);
	const { isLoggedIn } = state;
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/articles' element={<Articles />} />
			<Route path='/about' element={<About />} />
			<Route path='/article/:id' element={<Article />} />
			<Route path='/admin' element={<Admin />} />
			<Route
				path='/addarticle'
				element={isLoggedIn ? <AddArticle /> : <Navigate to='/' replace />}
			/>
			<Route
				path='/deletearticle'
				element={isLoggedIn ? <DeleteArticle /> : <Navigate to='/' replace />}
			/>
			<Route path='/*' element={<Navigate to='/' replace />} />
		</Routes>
	);
};

export default Router;
