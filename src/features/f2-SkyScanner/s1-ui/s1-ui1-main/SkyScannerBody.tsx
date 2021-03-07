import React from 'react';
import {SkyScannerRow} from './SkyScannerRow';
import {useSelector} from 'react-redux';
import {getCarries, getPlaces, getQuotes} from '../../s2-bll/skyScanner-selectors';

export const

    SkyScannerBody = () => {
        const quotes = useSelector(getQuotes);
        const carriers = useSelector(getCarries);
        const places = useSelector(getPlaces);


        if (!places.length) {
            return null;
        }


        let departureCity = places[1].CityName;
        let departureIataCode = places[1].IataCode;
        let arrivalCity = places[0].CityName;
        let arrivalIataCode = places[0].IataCode;

        let tickets = quotes.map((e, index) => {
            let company = carriers.find(el => e.OutboundLeg.CarrierIds[0] === el.CarrierId)?.Name;

            return (
                <SkyScannerRow key={1 + index + e.QuoteId} price={e.MinPrice} company={company}
                               date={e.QuoteDateTime}
                               departureDate={e.OutboundLeg.DepartureDate}
                               arrivalCity={arrivalCity}
                               arrivalIataCode={arrivalIataCode}
                               departureCity={departureCity}
                               departureIataCode={departureIataCode}

                />
            );
        });


        return <>
            {tickets}
        </>;

    };
