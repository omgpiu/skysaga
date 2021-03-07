import React from 'react';
import {SkyDatePicker} from './SkyDatePicker';
import {useSelector} from 'react-redux';
import {getIataCodes} from '../../s2-bll/skyScanner-selectors';
import st from './SkyScannerHead.module.css';

export const SkyScannerHeader = () => {

    const iataCodes = useSelector(getIataCodes);


    return (
        <div className={st.wrapper}>
            <div className={st.text}>
                Вылеты {'>'}
                SVO-JFK
            </div>
            <SkyDatePicker/>
        </div>
    );

};
