import React from 'react';
import {HeartFilled} from '@ant-design/icons';
import st from './ScySkannerRow.module.css';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import getSymbolFromCurrency from 'currency-symbol-map';
import {QuoteType} from '../../../../main/m3-dal/mainAPI';
import {airTableActions} from '../../s2-bll/skyScanner-reducer';
// import {getAll} from '../../s2-bll/skyScanner-selectors';
type PropsType = {
    company: string | undefined
    date: string
    price: number
    departureDate: string
    departureCity: string
    departureIataCode: string
    arrivalCity: string
    arrivalIataCode: string
    addToFavorite: () => void
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
        addToFavorite,
        isFavorite
    } = props;
    const dispatch = useDispatch();


    const followHandler = () => {
         dispatch(airTableActions.followFavorite(ticket as any)); //TODO типизация
    };
    const unfollowHandler = () => {
        dispatch(airTableActions.unfollowFavorite(ticket as any));
    };




    const onClickHandler = () => {
        addToFavorite();
    };


    return (
        <div className={st.wrapper}>
            {/*<img src={logo} alt="" width={35} height={35}/>*/}
            <div className={st.logo}></div>
            <div className={st.info}>
                <div>

                </div>
                <div>{departureCity} ({departureIataCode}) {'=>'} {arrivalCity} ({arrivalIataCode})</div>
                <div>
                    {
                        moment(departureDate).format('LL')
                    }
                </div>

                <div>
                    {company}
                </div>
            </div>
            <div className={st.price}>
                <div style={{paddingBottom: '16px'}}>
                    <HeartFilled onClick={followHandler}/>
                    <HeartFilled onClick={unfollowHandler}/>
                </div>
                {
                    isFavorite ? 'FAVORITE' : 'NOT FAVORITE'
                }
                <div style={{display: 'flex', width: '100px', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span>Price:</span><span>{price}</span><span>{getSymbolFromCurrency('RUB')}</span>
                </div>

            </div>
        </div>


    );
};
