import * as api from '../api';

import { SET_IS_LOGGED_IN, LOGOUT } from '../constans/actionTypes';

export const checkLogin = (loginData) => async (dispatch) => {
	try {
		const { data } = await api.login(loginData);
		dispatch({ type: SET_IS_LOGGED_IN, payload: data });
	} catch (error) {
		console.log('Get articles error: ', error);
	}
};

export const logout = () => {
	return { type: LOGOUT };
};
