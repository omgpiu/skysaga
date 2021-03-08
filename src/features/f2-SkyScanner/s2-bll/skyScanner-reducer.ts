import {InferActionsTypes} from '../../../main/m2-bll/store';
import city1 from '../../../assets/slides/city1.png';
import city2 from '../../../assets/slides/city2.png';
import city3 from '../../../assets/slides/city3.png';
import city13 from '../../../assets/slides/city13.png';
import city11 from '../../../assets/slides/city11.png';
import city12 from '../../../assets/slides/city12.png';
import {CarrierType, FlyDataType, PlaceType, QuoteType} from '../../../main/m3-dal/mainAPI';

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
        },
    ],
    Quotes: [] as QuoteType[],
    Carriers: [] as CarrierType[],
    Places: [] as PlaceType[],
    departureDate: '',
    favorites: [] as TicketType[],
    error: ''

};

const scyScannerReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SKY_SCANNER/SET_FLY_DATA':

            return {
                ...state,
                Quotes: action.payload.Quotes,
                Carriers: action.payload.Carriers,
                Places: action.payload.Places,

            };
        case 'SKY-SCANNER/SET_DEPARTURE_DATE':
            return {
                ...state,
                departureDate: action.payload
            };
        case 'SKY_SCANNER/FOLLOW_FAVORITE':
            return {
                ...state,
                favorites: [action.payload, ...state.favorites]
            };
        case 'SKY_SCANNER/UNFOLLOW_FAVORITE':

            return {
                ...state,
                favorites: [...state.favorites.filter(e => action.payload.QuoteId !== e.QuoteId)]
            };
        case 'SKY_SCANNER/SET_ERROR':
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};
export const airTableActions = {
    setFlyData: (flyData: FlyDataType) => ({
        type: 'SKY_SCANNER/SET_FLY_DATA', payload: flyData
    } as const),
    setDepartureDate: (date: string) => ({
        type: 'SKY-SCANNER/SET_DEPARTURE_DATE', payload: date
    } as const),
    followFavorite: (favorite: TicketType) => ({
        type: 'SKY_SCANNER/FOLLOW_FAVORITE', payload: favorite
    } as const),
    unfollowFavorite: (favorite: TicketType) => ({
        type: 'SKY_SCANNER/UNFOLLOW_FAVORITE', payload: favorite
    } as const),
    setError: (error: string) => ({
        type: 'SKY_SCANNER/SET_ERROR', payload: error
    } as const),
};


type TicketType = {
    QuoteId: number
    company: string | undefined
    price: number
}
type  InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof airTableActions>
export default scyScannerReducer;
