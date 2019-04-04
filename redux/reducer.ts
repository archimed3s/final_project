import {actionType} from './actions';

export const initialState = {
	data: null,
	error: false
};

export default function reducer(state = initialState, action) {
	switch(action.type) {
		case actionType.LOAD_SUCCESS:
			return {
				...state,
				...{
					data: action.data
				}
			};
		case actionType.FAIL:
			return {
				...state,
				...{
					error: action.error
				}
			};
		default:
			return state;
	}
}
