import {combineReducers, createStore, Store} from 'redux';
import loginReducer from '../../features/f1-login/l2-bll/login-reducer';
import scyScannerReducer from '../../features/f2-SkyScanner/s2-bll/skyScanner-reducer';


const reducers = combineReducers({
    login: loginReducer,
    scyScanner: scyScannerReducer,
});

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
export const store: Store = createStore(reducers);
export type AppRootStateType = ReturnType<typeof reducers>
