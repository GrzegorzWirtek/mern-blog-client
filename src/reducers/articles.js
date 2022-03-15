import { GET_ARTICLES, ADD_COMMENT } from '../constans/actionTypes';

const articlesReducer = (articles = [], action) => {
	switch (action.type) {
		case GET_ARTICLES:
			return action.payload;
		case 'ADD_ARTICLE':
			return action.payload;
		case ADD_COMMENT:
			return articles.filter((article) => {
				if (article._id === action.payload._id) {
					article.comments = action.payload.comments;
				}
				return article;
			});
		default:
			return articles;
	}
};

export default articlesReducer;
