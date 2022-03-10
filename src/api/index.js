import axios from 'axios';

const url = 'https://grzegorz-wirtek-blog.herokuapp.com/articles';
// const url = 'http://localhost:3001/articles';

export const getArticlesByAxios = () => axios.get(url);
export const addCommentByAxios = (comment) =>
	axios.post(`${url}/comments`, comment);
