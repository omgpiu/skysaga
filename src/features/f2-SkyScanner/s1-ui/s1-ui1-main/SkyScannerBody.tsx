import React from 'react';
import {SkyScannerRow} from './SkyScannerRow';
import {useSelector} from 'react-redux';
import {getCarries, getQuotes} from '../../s2-bll/skyScanner-selectors';

export const SkyScannerBody = () => {
    const quotes = useSelector(getQuotes);
    const carriers = useSelector(getCarries);
    let tickets = quotes.map((e, index) => {
        let company = carriers.filter(el => e.OutboundLeg.CarrierIds[0] === el.CarrierId)[0].Name;
        return (
            <SkyScannerRow key={1 + index + e.QuoteId} price={e.MinPrice} company={company}
                           date={e.QuoteDateTime}
                           departureDate={e.OutboundLeg.DepartureDate}
            />
        );
    });
    return <div>
        {tickets}
    </div>;

};
