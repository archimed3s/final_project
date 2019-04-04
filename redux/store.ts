import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer, {initialState} from './reducer';
import rootSaga from './saga';

const bindMiddleware = (middleware) => {
	if(process.env.NODE_ENV !== 'production') {
		const {composeWithDevTools} = require('redux-devtools-extension');

		return composeWithDevTools(applyMiddleware(...middleware));
	}

	return applyMiddleware(...middleware);
};

export default function configureStore(intState: object = initialState) {
	const sagaMiddleware = createSagaMiddleware(),
		store: { sagaTask: any } = createStore(
			rootReducer,
			intState,
			bindMiddleware([sagaMiddleware])
		);

	store.sagaTask = sagaMiddleware.run(rootSaga);

	return store;
}
