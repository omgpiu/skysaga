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
    IataCodes: [] as Array<string>

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
        case 'SKY_SCANNER/SET_EMPTY_LIST':

            return {
                ...state,
                Quotes: [],
                Carriers: [],
                Places: []
            };
        case 'SKY_SCANNER/SET_IataCodes':

            return {
                ...state,

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
    setEmptyList: () => ({
        type: 'SKY_SCANNER/SET_EMPTY_LIST'
    } as const),
    setIataCodes: (codes: Array<string>) => ({
        type: 'SKY_SCANNER/SET_IataCodes', payload: codes
    } as const)

};
type TicketType = {
    places: PlaceType[],
    carriers: CarrierType[]
    quotes: QuoteType[]
}
type  InitialStateType = typeof initialState

type ActionsType = InferActionsTypes<typeof airTableActions>

type FlyDataForRenderType = {
    price: string
    carrier: string
    symbol: symbol

    originCityName: string
    originIataCode: string
    originDate: string

    destinationCityName: string
    destinationIataCode: string


}

export type SlideType = {
    title: string
    img: string
    id: string
}
export default scyScannerReducer;
