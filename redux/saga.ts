import {all, put, takeLatest} from 'redux-saga/effects';
import 'isomorphic-unfetch';
import {actionType, fail, loadSuccess} from './actions';

function* loadData() {
	try {
		const res = yield fetch('https://jsonplaceholder.typicode.com/users'),
			data = yield res.json();
		yield put(loadSuccess(data));
	} catch(error) {
		yield put(fail(error));
	}
}

export default function* rootSaga() {
	yield all([
		takeLatest(actionType.LOAD, loadData)
	]);
}
