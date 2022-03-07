import {
	TOGGLE_HAM,
	TOGGLE_IS_DEKSTOP,
	SET_FOUND_ARTICLES,
	TOGGLE_COMMENTS_FORM,
} from '../constans/actionTypes';

const initialNavigationState = {
	isHamActive: false,
	isDesktop: true,
	foundArticles: [],
	isCommentsFormVisible: false,
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
		default:
			return state;
	}
};

export default navigationReducer;
