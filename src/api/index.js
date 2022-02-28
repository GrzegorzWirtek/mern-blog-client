import axios from 'axios';

const url = 'https://gggwww.herokuapp.com/articles';

export const getArticlesByAxios = () => axios.get(url);
