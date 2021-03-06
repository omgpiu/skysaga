import {InferActionsTypes} from '../../../main/m2-bll/store';
import city1 from '../../../assets/slides/city1.png';
import city2 from '../../../assets/slides/city2.png';
import city3 from '../../../assets/slides/city3.png';
import city13 from '../../../assets/slides/city13.png';
import city11 from '../../../assets/slides/city11.png';
import city12 from '../../../assets/slides/city12.png';

const initialState = {
    slides: [
        {
            title: 'city1',
            id: '1',
            img: city1
        },
        {
            title: 'city2',
            id: '2',
            img: city2
        },
        {
            title: 'city3',
            id: '3',
            img: city3,
        },
        {
            title: 'city11',
            id: '11',
            img: city11
        },
        {
            title: 'city12',
            id: '12',
            img: city12
        },
        {
            title: 'city13',
            id: '13',
            img: city13
        }
    ],

};

const scyScannerReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'AUTH/SET_USER_DATA':
            return {
                ...state, ...action.payload
            };
        case  'AUTH/SET_ERROR' :
            return {
                ...state,
                ...action.payload

            };
        default:
            return state;
    }
};
export const airTableActions = {
    setAuthUserData: (email: string | null, login: string | null, isAuth: boolean) => ({
        type: 'AUTH/SET_USER_DATA', payload: {
            email, login, isAuth
        }
    } as const),
    setError: (error: string) => (
        {type: 'AUTH/SET_ERROR', payload: {error}} as const),
};

type  InitialStateType = typeof initialState

type ActionsType = InferActionsTypes<typeof airTableActions>

export type SlideType = {
    title: string
    img: string
    id: string
}
export default scyScannerReducer;
