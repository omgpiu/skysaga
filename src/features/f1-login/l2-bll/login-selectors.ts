import {AppRootStateType} from '../../../main/m2-bll/store';

export const getIsAuth = (state: AppRootStateType): boolean => {
    return state.login.isAuth;
};
