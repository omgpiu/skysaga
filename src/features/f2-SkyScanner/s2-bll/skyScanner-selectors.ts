import {AppRootStateType} from '../../../main/m2-bll/store';
import {SlideType} from './skyScanner-reducer';

export const getSlides = (state: AppRootStateType): SlideType[] => {
    return state.scyScanner.slides;
};
