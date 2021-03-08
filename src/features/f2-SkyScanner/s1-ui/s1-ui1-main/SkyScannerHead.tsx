import React from 'react';
import {SkyDatePicker} from './SkyDatePicker';
import st from './SkyScannerHead.module.scss';
import vector from '../../../../assets/row/Vector.png';

export const SkyScannerHeader = () => {
    return (
        <div className={st.wrapper}>
            <div className={st.text}>
                <span>Вылеты </span><img src={vector} alt="arrow"/> <span>SVO-JFK</span>
            </div>
            <SkyDatePicker/>
        </div>
    );

};
