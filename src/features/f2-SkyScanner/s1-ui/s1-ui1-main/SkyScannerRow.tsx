import React from 'react';
import logo from '../../../../assets/row/plane.png';
import {HeartOutlined} from '@ant-design/icons';
import st from './ScySkannerRow.module.css';
import moment from 'moment';
// import {getAll} from '../../s2-bll/skyScanner-selectors';
type PropsType = {
    company: string
    date: string
    price: number
    departureDate: string
    departureCity: string
    departureIataCode: string
    arrivalCity: string
    arrivalIataCode: string


}
export const SkyScannerRow: React.FC<PropsType> = (props) => {

    const {company, date, price, departureDate, departureCity, departureIataCode, arrivalCity, arrivalIataCode} = props;

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
                    <HeartOutlined/>
                </div>
                {price}
            </div>
        </div>


    );
};
