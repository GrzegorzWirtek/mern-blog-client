import * as api from '../api';

import { GET_ARTICLES, ADD_COMMENT } from '../constans/actionTypes';

export const getArticles = () => async (dispatch) => {
	try {
		const { data } = await api.getArticlesByAxios();
		dispatch({ type: GET_ARTICLES, payload: data });
	} catch (error) {
		console.log('Get articles error: ', error);
	}
};

export const addComment = (newComment) => async (dispatch) => {
	try {
		const { data } = await api.addCommentByAxios(newComment);
		dispatch({ type: ADD_COMMENT, payload: data });
	} catch (error) {
		console.log('Add comment error: ', error);
	}
};
