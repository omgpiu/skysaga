import {call, put, takeEvery} from 'redux-saga/effects';
import {skyScannerAPI} from '../../../main/m3-dal/mainAPI';
import {airTableActions} from './skyScanner-reducer';

export function* fetchFlyData(action: ReturnType<typeof fetchData>): any {
    const res = yield call(skyScannerAPI.getTickets, action.flyDate);
    yield put(airTableActions.setFlyData(res));

}

export const fetchData = (flyDate: string) => ({
    type: 'SKY_SCANNER/FLY_DATA/SAGA', flyDate
});

export function* flyWatcherSaga() {
    yield takeEvery('SKY_SCANNER/FLY_DATA/SAGA', fetchFlyData);


}
