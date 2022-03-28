import axios from 'axios';

const url = 'https://grzegorz-wirtek-blog.herokuapp.com/articles';
const urlLogin = 'https://grzegorz-wirtek-blog.herokuapp.com/login';

export const getArticlesByAxios = () => axios.get(url);
export const addCommentByAxios = (comment) =>
	axios.post(`${url}/comments`, comment);

export const addArticleByAxios = (article) =>
	axios.post(`${url}/addarticle`, article);

export const login = (loginData) => axios.post(urlLogin, loginData);
