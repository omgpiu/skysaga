import React from 'react';
import st from './ScySkannerRow.module.css';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import getSymbolFromCurrency from 'currency-symbol-map';
import {QuoteType} from '../../../../main/m3-dal/mainAPI';
import {airTableActions} from '../../s2-bll/skyScanner-reducer';
import heart from '../../../../assets/row/heart.png';
import redHeart from '../../../../assets/row/redHeart.png';
import arrow from '../../../../assets/row/arrow.png';
import dash from '../../../../assets/row/dash.png';

type PropsType = {
    company: string | undefined
    date: string
    price: number
    departureDate: string
    departureCity: string
    departureIataCode: string
    arrivalCity: string
    arrivalIataCode: string
    isFavorite: boolean
    ticket: QuoteType
}


export const SkyScannerRow: React.FC<PropsType> = (props) => {
    const {
        ticket,
        company,
        date,
        price,
        departureDate,
        departureCity,
        departureIataCode,
        arrivalCity,
        arrivalIataCode,
        isFavorite
    } = props;
    const dispatch = useDispatch();
    const followHandler = () => {
        dispatch(airTableActions.followFavorite({
            QuoteId: ticket.QuoteId,
            company, price
        }));
    };
    const unfollowHandler = () => {
        dispatch(airTableActions.unfollowFavorite({
            QuoteId: ticket.QuoteId,
            company, price
        }));
    };

    return (
        <div className={st.wrapper}>
            <div className={st.logo}></div>
            <div className={st.info}>
                <div className={st.info_text}>
                    {departureCity} ({departureIataCode})
                    <img src={arrow} alt="arrow" style={{marginLeft: '12px', marginRight: '12px'}}/>
                    {arrivalCity} ({arrivalIataCode})
                </div>
                <div className={st.info_text_date}>
                    {
                        moment(departureDate).format('LL')
                    } <img src={dash} alt=""/> {moment(ticket.QuoteDateTime).format('HH : mm')}
                </div>
                <div className={st.info_text_date}>
                    {company}
                </div>
            </div>
            <div className={st.price}>
                <div style={{paddingBottom: '16px'}}>
                    {!isFavorite ?
                        <img src={heart} alt="heart" onClick={followHandler} width={23} height={20}/> :
                        <img src={redHeart} alt="red_heart" width={23} height={20} onClick={unfollowHandler}/>}
                </div>
                <div style={{display: 'flex', width: '100px', justifyContent: 'space-around', alignItems: 'center'}}>
                    <span
                        className={st.price_title}>Price:</span><span
                    className={st.price_amount}>{price}</span><span
                    className={st.price_amount}>{getSymbolFromCurrency('RUB')}</span>
                </div>
            </div>
        </div>


    );
};
