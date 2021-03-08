import {Empty} from 'antd';
import React from 'react';
import {useSelector} from 'react-redux';
import {getIsInitialized} from '../../features/f2-SkyScanner/s2-bll/skyScanner-selectors';
import st from '../../features/f2-SkyScanner/s1-ui/s1-ui1-main/SkyScannerBody.module.scss';
import {Loader} from '../Spin/Spin';


export const EmptyList: React.FC = () => {
    const isInitialized = useSelector(getIsInitialized);

    return (
        <>

            <Empty
                description={'Choose the date of flight'}
                style={{paddingTop: '20%'}}
            />
            {!isInitialized ? <div className={st.loader}>
                <Loader/>
            </div> : null}
        </>


    );
};
