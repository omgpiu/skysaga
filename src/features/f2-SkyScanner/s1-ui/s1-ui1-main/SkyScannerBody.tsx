import React from 'react';
import {SkyScannerRow} from './SkyScannerRow';
import {useSelector} from 'react-redux';
import {getCarries, getPlaces, getQuotes} from '../../s2-bll/skyScanner-selectors';

export const

    SkyScannerBody = () => {
        const quotes = useSelector(getQuotes);
        const carriers = useSelector(getCarries);
        const places = useSelector(getPlaces);


        let tickets = quotes.map((e, index) => {
            let company = carriers.filter(el => e.OutboundLeg.CarrierIds[0] === el.CarrierId)[0].Name;
            let departureCity = places.map(city => city)[1].CityName;
            let departureIataCode = places.map(city => city)[1].IataCode;
            let arrivalCity = places.map(city => city)[0].CityName;
            let arrivalIataCode = places.map(city => city)[0].IataCode;
            return (
                <SkyScannerRow key={1 + index + e.QuoteId} price={e.MinPrice} company={company}
                               date={e.QuoteDateTime}
                               departureDate={e.OutboundLeg.DepartureDate}
                               arrivalCity={arrivalCity} arrivalIataCode={arrivalIataCode} departureCity={departureCity}
                               departureIataCode={departureIataCode}

                />
            );
        });


        return <>
            {tickets}
        </>;

    };
