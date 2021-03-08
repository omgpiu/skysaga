import {InferActionsTypes} from '../../../main/m2-bll/store';

const initialState = {
    email: null as string | null,
    login: null as string | null,
    isAuth: false,

};

const loginReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'AUTH/SET_USER_DATA':
            return {
                ...state, ...action.payload
            };

        default:
            return state;
    }
};
export const authActions = {
    setAuthUserData: (email: string | null, login: string | null, isAuth: boolean) => ({
        type: 'AUTH/SET_USER_DATA', payload: {
            email, login, isAuth
        }
    } as const),

};

type  InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof authActions>


export default loginReducer;
