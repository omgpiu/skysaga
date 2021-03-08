import React from 'react';
import st from './SkySkannerRow.module.css';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import getSymbolFromCurrency from 'currency-symbol-map';
import {QuoteType} from '../../../../main/m3-dal/mainAPI';
import {airTableActions} from '../../s2-bll/skyScanner-reducer';
import heart from '../../../../assets/row/heart.png';
import redHeart from '../../../../assets/row/redHeart.png';
import arrow from '../../../../assets/row/arrow.png';
import dash from '../../../../assets/row/dash.png';
import style from '../../../../main/m1-ui/App.module.scss';

type PropsType = {
    company: string | undefined
    time: string
    price: number
    departureDate: string
    departureCity: string
    departureIataCode: string
    arrivalCity: string
    arrivalIataCode: string
    isFavorite: boolean
    ticket: QuoteType
}


export const SkyScannerRow: React.FC<PropsType> = React.memo((props) => {
    const {
        ticket,
        company,
        time,
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
        <div className={st.ticket_container}>
            <div className={st.ticket_logo}></div>
            <div className={st.ticket_info}>
                <div className={style.ticket_font_info}>
                    {departureCity} ({departureIataCode})
                    <img src={arrow} alt="arrow" className={st.ticket_info_arrow}/>
                    {arrivalCity} ({arrivalIataCode})
                </div>
                <div className={style.info_text_date}>
                    {
                        moment(departureDate).format('LL')
                    } <img src={dash} alt=""/> {moment(time).format('HH : mm')}
                </div>
                <div className={style.info_text_date}>
                    {company}
                </div>
            </div>
            <div className={st.price}>
                <div className={st.favorite}>
                    {!isFavorite ?
                        <img src={heart} alt="heart" onClick={followHandler} className={st.heartSize}/> :
                        <img src={redHeart} alt="red_heart" className={st.heartSize} onClick={unfollowHandler}/>}
                </div>
                <div className={st.price_block}>
                    <span
                        className={style.price_title}>Price:</span><span
                    className={style.price_amount}>{price}</span><span
                    className={style.price_amount}>{getSymbolFromCurrency('RUB')}</span>
                </div>
            </div>
        </div>


    );
});
