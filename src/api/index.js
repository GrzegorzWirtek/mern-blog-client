import axios from 'axios';

// const url = 'https://gggwww.herokuapp.com/articles';
const url = 'http://localhost:3001/getarticles';

export const getArticlesByAxios = () => axios.get(url);
