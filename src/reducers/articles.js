import { GET_ARTICLES } from '../constans/actionTypes';

const articlesReducer = (articles = [], action) => {
	switch (action.type) {
		case GET_ARTICLES:
			return action.payload;
		default:
			return articles;
	}
};

export default articlesReducer;
