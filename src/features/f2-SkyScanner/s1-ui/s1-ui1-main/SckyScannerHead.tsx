import React from 'react';
import {SkyDatePicker} from './SkyDatePicker';

export const SkyScannerHeader = () => {

    return (
        <div>
        <span>
            Вылеты {'>'}
            SVO-JFK
        </span>
            <SkyDatePicker/>
        </div>
    );

};
