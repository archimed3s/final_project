export const actionType = {
	LOAD: 'LOAD',
	LOAD_SUCCESS: 'SUCCESS',
	FAIL: 'FAIL'
};

export function load() {
	return {
		type: actionType.LOAD
	};
}

export function loadSuccess(data) {
	return {
		type: actionType.LOAD_SUCCESS,
		data
	};
}

export function fail(error) {
	return {
		type: actionType.FAIL,
		error
	};
}
