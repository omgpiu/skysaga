import {applyMiddleware, combineReducers, createStore, Store} from 'redux';
import loginReducer from '../../features/f1-login/l2-bll/login-reducer';
import scyScannerReducer from '../../features/f2-SkyScanner/s2-bll/skyScanner-reducer';
import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';
import {flyWatcherSaga} from '../../features/f2-SkyScanner/s2-bll/skyScanner-sagas';

const rootReducer = combineReducers({
    login: loginReducer,
    skyScanner: scyScannerReducer,
});
const sagaSagaMiddleware = createSagaMiddleware();
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
export const store: Store = createStore(rootReducer, applyMiddleware(sagaSagaMiddleware));
export type AppRootStateType = ReturnType<typeof rootReducer>

sagaSagaMiddleware.run(rootWatcher);


function* rootWatcher() {
    yield all([flyWatcherSaga()]);
}
