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
    getTickets(flyDate: string): Promise<FlyDataType> {
        return instance.get<FlyDataType>(flyDate).then(res => {
            return res.data;
        });
    }
};

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

