import axios from 'axios';

const url = 'https://grzegorz-wirtek-blog.herokuapp.com/articles';

export const getArticlesByAxios = () => axios.get(url);
export const addCommentByAxios = (comment) =>
	axios.post(`${url}/comments`, comment);

export const addArticleByAxios = (article) =>
	axios.post(`${url}/addarticle`, article);
