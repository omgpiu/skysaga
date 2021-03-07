import React from 'react';
import logo from '../../../../assets/row/airLogo.png';
import {HeartOutlined} from '@ant-design/icons';
import st from './ScySkannerRow.module.css';
// import {getAll} from '../../s2-bll/skyScanner-selectors';
type PropsType = {
    company: string
    date: string
    price: number


    departureDate: string
}
export const SkyScannerRow: React.FC<PropsType> = (props) => {

    const {company, date, price, departureDate} = props;

    return (
        <div>
            <div className={st.logo}><img src={logo} alt="" width={50} height={50}/></div>
            <div className={st.info}>

                <div>

                </div>


                <div>Moscow (SVO) {'=>'} New York City (JFK)</div>
                <div>
                    28 June, 2020 - 14:50

                </div>

                <div>
                    Aeroflot

                </div>
            </div>


            <div className={st.price}>

                <div>

                    <HeartOutlined/>

                </div>

            </div>
        </div>


    );
};
