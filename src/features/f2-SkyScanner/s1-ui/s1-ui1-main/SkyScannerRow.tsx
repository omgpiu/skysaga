import React from 'react';
import {HeartOutlined} from '@ant-design/icons';
import st from './ScySkannerRow.module.css';
import moment from 'moment';
import {useDispatch} from 'react-redux';
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


}
export const SkyScannerRow: React.FC<PropsType> = (props) => {
    const dispatch = useDispatch();
    const {
        company,
        date,
        price,
        departureDate,
        departureCity,
        departureIataCode,
        arrivalCity,
        arrivalIataCode,
        addToFavorite
    } = props;

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
                <div>
                    <HeartOutlined onClick={onClickHandler}/>
                </div>
                {price}
            </div>
        </div>


    );
};
