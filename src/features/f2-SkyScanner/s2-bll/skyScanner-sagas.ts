import {call, put, takeEvery} from 'redux-saga/effects';
import {CarrierType, CurrencieType, PlaceType, QuoteType, skyScannerAPI} from '../../../main/m3-dal/mainAPI';
import {airTableActions} from './skyScanner-reducer';

export type FlyDataType = {
    Carriers: CarrierType[]
    Places: PlaceType[]
    Currencies: CurrencieType[]
    Quotes: QuoteType[]


}
export function* fetchFlyData(action: ReturnType<typeof fetchData>): any {
    try {
        debugger
        const res = yield call(skyScannerAPI.getTickets, action.flyDate);
        yield put(airTableActions.setFlyData(res));
    } catch (e) {
        debugger
        yield put(airTableActions.setEmptyList());
        console.log(e);
    }
}
export const fetchData = (flyDate: string) => ({
    type: 'SKY_SCANNER/FLY_DATA/SAGA', flyDate
});
export function* flyWatcherSaga() {
    yield takeEvery('SKY_SCANNER/FLY_DATA/SAGA', fetchFlyData);
}
