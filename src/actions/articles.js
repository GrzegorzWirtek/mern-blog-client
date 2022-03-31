import * as api from '../api';

import {
	GET_ARTICLES,
	ADD_COMMENT,
	ADD_ARTICLE,
	DELETE_ARTICLE,
} from '../constans/actionTypes';

export const getArticles = () => async (dispatch) => {
	try {
		const { data } = await api.getArticlesByAxios();
		const dataReverse = data.reverse();
		dispatch({ type: GET_ARTICLES, payload: dataReverse });
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

export const addArticle = (newArticle) => async (dispatch) => {
	try {
		const { data } = await api.addArticleByAxios(newArticle);
		const dataReverse = data.reverse();
		dispatch({ type: ADD_ARTICLE, payload: dataReverse });
	} catch (error) {
		console.log('Add article error: ', error);
	}
};

export const deleteArticle = (_id) => async (dispatch) => {
	try {
		const { data } = await api.deleteArticleByAxios({ _id });
		const dataReverse = data.reverse();
		dispatch({ type: DELETE_ARTICLE, payload: dataReverse });
	} catch (error) {
		console.log('Add article error: ', error);
	}
};
