import {AppRootStateType} from '../../../main/m2-bll/store';
//
export const getSlides = (state: AppRootStateType) => {
    return state.skyScanner.slides;
};
export const getQuotes = (state: AppRootStateType) => {
    return state.skyScanner.Quotes;
};
//
export const getCarries = (state: AppRootStateType) => {
    return state.skyScanner.Carriers;
};
export const getPlaces = (state: AppRootStateType) => {
    return state.skyScanner.Places;
};

export const getDepartureDate = (state: AppRootStateType) => {
    return state.skyScanner.departureDate;
};
export const getIataCodes = (state: AppRootStateType) => {
    return state.skyScanner.IataCodes;
};
