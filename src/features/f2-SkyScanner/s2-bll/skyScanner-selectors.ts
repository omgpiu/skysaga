import {AppRootStateType} from '../../../main/m2-bll/store';
//
export const getSlides = (state: AppRootStateType) => {
    return state.skyScanner.slides;
};
// export const getFlyDataCarries = (state: AppRootStateType) => {
//     return state.scyScanner.flyData.Carriers && state.scyScanner.flyData.Carriers.map(e => e.Name);
// };
// export const getFlyDataCurrencies = (state: AppRootStateType) => {
//     return state.scyScanner.flyData.Currencies;
// };
// export const getFlyDataPlaces = (state: AppRootStateType) => {
//     return state.scyScanner.flyData.Places;
// };
// export const getFlyDataQuotes = (state: AppRootStateType) => {
//     return state.scyScanner.flyData.Quotes && state.scyScanner.flyData.Quotes.map(e => e.MinPrice).join();
// };
//
export const getQuotes = (state: AppRootStateType) => {
    return state.skyScanner.Quotes;
};

export const getCarries = (state: AppRootStateType) => {
    return state.skyScanner.Carriers;
};
export const getPlaces = (state: AppRootStateType) => {
    return state.skyScanner.Places;
};
export const getAll = (state: AppRootStateType) => {
    return state.skyScanner.Ticket;
};
