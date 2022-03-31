import axios from 'axios';

const url = 'https://grzegorz-wirtek-blog.herokuapp.com/articles';
const urlLogin = 'https://grzegorz-wirtek-blog.herokuapp.com/login';

// const url = 'http://localhost:3001/articles';
// const urlLogin = 'http://localhost:3001/login';

export const getArticlesByAxios = () => axios.get(url);
export const addCommentByAxios = (comment) =>
	axios.post(`${url}/comments`, comment);

export const addArticleByAxios = (article) =>
	axios.post(`${url}/addarticle`, article);

export const deleteArticleByAxios = (_id) => {
	return axios.post(`${url}/deletearticle`, _id);
};

export const login = (loginData) => axios.post(urlLogin, loginData);
