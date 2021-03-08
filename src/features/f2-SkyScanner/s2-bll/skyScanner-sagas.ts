import {call, put, takeEvery} from 'redux-saga/effects';
import {FlyDataType, skyScannerAPI} from '../../../main/m3-dal/mainAPI';
import {airTableActions} from './skyScanner-reducer';

export function* fetchFlyData(action: ReturnType<typeof fetchData>) {
    yield put(airTableActions.setIsInitialized(false));
    try {
        const res: FlyDataType = yield call(skyScannerAPI.getTickets, action.flyDate);
        yield put(airTableActions.setFlyData(res));
        yield put(airTableActions.setIsInitialized(true));
    } catch (e) {
        yield put(airTableActions.setError('Some error with server.Try one more time or change date'));
        console.log(e);
        yield put(airTableActions.setIsInitialized(true));
    }
}

export const fetchData = (flyDate: string) => ({
    type: 'SKY_SCANNER/FLY_DATA/SAGA', flyDate
});

export function* flyWatcherSaga() {
    yield takeEvery('SKY_SCANNER/FLY_DATA/SAGA', fetchFlyData);
}
