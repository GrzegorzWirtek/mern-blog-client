import {
	TOGGLE_HAM,
	TOGGLE_IS_DEKSTOP,
	SET_FOUND_ARTICLES,
	TOGGLE_COMMENTS_FORM,
} from '../constans/actionTypes';

export const toggleHam = () => {
	return { type: TOGGLE_HAM };
};

export const toggleIsDesktop = (value) => {
	return { type: TOGGLE_IS_DEKSTOP, payload: value };
};

export const setFoundArticles = (articles) => {
	return { type: SET_FOUND_ARTICLES, payload: articles };
};

export const toggleCommentsForm = () => {
	return { type: TOGGLE_COMMENTS_FORM };
};
