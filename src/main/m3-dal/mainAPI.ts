import axios from 'axios';


const settings = {
    params: {},
    headers: {
        'x-rapidapi-key': '284dfcb88cmshabfe0386a631803p11679ejsn7ffa4ef3a4f8',
        'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
    }
};
const instance = axios.create({
    baseURL: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/RU/RUB/RU/SVO-sky/JFK-sky/',
    // baseURL: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/',
    ...settings
});

export const skyScannerAPI = {

    getTickets(flyDate: string) {
        debugger
        return instance.get(flyDate).then(res => {
            debugger
            return res.data;
        });
    }
};
// '2021-09-01'

export type CarrierType = {
    CarrierId: number
    Name: string
}
export type PlaceType = {
    CityId: string
    CityName: string
    CountryName: string
    IataCode: string
    Name: string
    PlaceId: number
    SkyscannerCode: string
    Type: string

}
export type CurrencieType = {
    Code: string
    DecimalDigits: number
    DecimalSeparator: string
    RoundingCoefficient: number
    SpaceBetweenAmountAndSymbol: boolean
    Symbol: symbol
    SymbolOnLeft: boolean
    ThousandsSeparator: string
}
type OutboundLegType = {

    DepartureDate: string
    DestinationId: number
    OriginId: number
    CarrierIds: Array<number>
}
export type QuoteType = {
    QuoteId: number,
    MinPrice: number,
    Direct: boolean,
    OutboundLeg: OutboundLegType,
    QuoteDateTime: string
}


export type FlyDataType = {
    Carriers: CarrierType[]
    Quotes: QuoteType[]
    Places: PlaceType[]

}
export type ResponseType<D = {}> = {
    config: Object
    headers: Object
    data: D
    request: Object
    status: number
    statusText: string
}


const fakeRequest = (value?: any, textLog: any = 'resolve / response fake API') => {
    // имитация асинхронного запроса, задержка ответа 1сек, reject выходит рандомно , примерно 1 из 10 раз
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve(value);
        }, 1000);
    });
};
export const authAPI = {
    authMe() {
        return fakeRequest();
    },
    login(param: any) {
        return fakeRequest(param, 'login succeed');
    },
    logout() {
        return fakeRequest('logout succeed');
    },
};
