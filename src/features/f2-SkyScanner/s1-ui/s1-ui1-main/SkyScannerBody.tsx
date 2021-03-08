import React from 'react';
import {SkyScannerRow} from './SkyScannerRow';
import {useSelector} from 'react-redux';
import {getCarries, getFavorite, getPlaces, getQuotes} from '../../s2-bll/skyScanner-selectors';
import st from './SkyScannerBody.module.css';

export const SkyScannerBody = () => {
    const quotes = useSelector(getQuotes);
    const carriers = useSelector(getCarries);
    const places = useSelector(getPlaces);
    const favorites = useSelector(getFavorite);

    const flights = () => {
        switch (favorites.length) {
            case 1: {
                return '  рейс';
            }
            case (2):
            case (3):
            case (4): {
                return '  рейса';
            }
            default:
                return '  рейсов';
        }
    };

    const addToFavorite = <div className={st.favoriteText}>Добавлено в Избранное: <span
        className={st.count}>{favorites.length}</span>
        <span>{flights()}</span></div>;

    if (!places.length) {
        return addToFavorite;
    }
    let departureCity = places[1].CityName;
    let departureIataCode = places[1].IataCode;
    let arrivalCity = places[0].CityName;
    let arrivalIataCode = places[0].IataCode;

    let tickets = quotes.map((e, index) => {
        let company = carriers.find(el => e.OutboundLeg.CarrierIds[0] === el.CarrierId)?.Name;
        let favorite = favorites.filter(fElem => fElem.QuoteId === e.QuoteId)[0];
        let isFavorite = favorite && favorite.QuoteId === e.QuoteId;

        return (
            <SkyScannerRow key={1 + index + e.QuoteId} price={e.MinPrice} company={company}
                           time={e.QuoteDateTime}
                           departureDate={e.OutboundLeg.DepartureDate}
                           arrivalCity={arrivalCity}
                           arrivalIataCode={arrivalIataCode}
                           departureCity={departureCity}
                           departureIataCode={departureIataCode}
                           isFavorite={isFavorite ? isFavorite : false}
                           ticket={e}

            />
        );
    });
    return <>
        {addToFavorite}
        <div className={st.scrollBlock}>


            {tickets}
        </div>
    </>;

};
