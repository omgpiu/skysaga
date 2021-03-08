import React, {useCallback, useEffect} from 'react';
import {PlacesCarousel} from '../../f3-placesCarousel/PlacesCarousel';
import st from './SkyScanner.module.css';
import {SkyScannerHeader} from './s1-ui1-main/SkyScannerHead';
import {SkyScannerBody} from './s1-ui1-main/SkyScannerBody';
import {Redirect} from 'react-router-dom';
import {LOGIN, PropsType} from '../../../common/c1-routes/Routes';
import {Button, message} from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import {useDispatch, useSelector} from 'react-redux';
import {getError} from '../s2-bll/skyScanner-selectors';
import {airTableActions} from '../s2-bll/skyScanner-reducer';
import moment from 'moment';

const SkyScanner: React.FC<PropsType> = React.memo(({setIsAuth, isAuth}) => {
    const dispatch = useDispatch();
    const error = useSelector(getError);


    useEffect(() => {
        dispatch(airTableActions.setDepartureDate(moment().format('YYYY-MM')));
    }, [dispatch]);


    useEffect(() => {
        error && message.error(error, 1);
        return () => {
            dispatch(airTableActions.setError(''));
        };
    }, [dispatch, error]);


    const onClickHandler = useCallback(() => {
        setIsAuth(false);
    }, [setIsAuth]);

    if (!isAuth) {
        return <Redirect to={LOGIN}/>;
    }
    return (
        <div className={st.sky_scanner_wrapper}>
            <div className={st.logout_bnt_position}>
                <Button onClick={onClickHandler}
                        className={st.logout_btn}
                >Выйти
                    {<UploadOutlined rotate={90} className={st.logout_btn_logo}/>}
                </Button>

            </div>
            <div className={st.sky_scanner_skeleton}>

                <SkyScannerHeader/>
                <PlacesCarousel/>
                <SkyScannerBody/>
            </div>
        </div>


    );

});
export default SkyScanner;
