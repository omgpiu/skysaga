import React from 'react';
import logo from '../../../../assets/row/airLogo.png';
import {HeartOutlined} from '@ant-design/icons';
import st from './ScySkannerRow.module.css'

export const SkyScannerRow = () => {
    return <div className={st.wrapper}>

        <div className={st.logo}><img src={logo} alt="" width={50} height={50}/></div>

        <div className={st.info}>
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
            <div>
                price: 23924
            </div>
        </div>


    </div>;


};
