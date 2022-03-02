import * as api from '../api';

import { GET_ARTICLES } from '../constans/actionTypes';

export const getArticles = () => async (dispatch) => {
	try {
		const { data } = await api.getArticlesByAxios();
		dispatch({ type: GET_ARTICLES, payload: data });
	} catch (error) {
		console.log('Get articles error: ', error);
	}
};