import './Admin.css';
import AddArticle from '../../components/AddArticle/AddArticle';
import Login from '../../components/Login/Login';

import { useSelector } from 'react-redux';

const Admin = () => {
	const state = useSelector((state) => state.navigationReducer);
	const { isLoggedIn } = state;

	return <>{isLoggedIn ? <AddArticle /> : <Login />}</>;
};

export default Admin;
