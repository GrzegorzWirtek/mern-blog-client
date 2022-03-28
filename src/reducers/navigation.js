import {
	TOGGLE_HAM,
	TOGGLE_IS_DEKSTOP,
	SET_FOUND_ARTICLES,
	TOGGLE_COMMENTS_FORM,
	SET_IS_LOGGED_IN,
} from '../constans/actionTypes';

const initialNavigationState = {
	isHamActive: false,
	isDesktop: true,
	foundArticles: [],
	isCommentsFormVisible: false,
	isLoggedIn: false,
	isBlocked: false,
	attempts: 3,
};

const navigationReducer = (state = initialNavigationState, action) => {
	switch (action.type) {
		case TOGGLE_HAM:
			return { ...state, isHamActive: !state.isHamActive };
		case TOGGLE_IS_DEKSTOP:
			return { ...state, isDesktop: action.payload };
		case SET_FOUND_ARTICLES:
			return { ...state, foundArticles: action.payload };
		case TOGGLE_COMMENTS_FORM:
			return { ...state, isCommentsFormVisible: !state.isCommentsFormVisible };
		case SET_IS_LOGGED_IN:
			return {
				...state,
				isLoggedIn: action.payload.login,
				isBlocked: action.payload.blocked,
				attempts: action.payload.attempts,
			};
		default:
			return state;
	}
};

export default navigationReducer;
