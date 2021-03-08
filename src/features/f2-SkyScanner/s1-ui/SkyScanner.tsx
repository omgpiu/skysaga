import React, {useCallback, useEffect} from 'react';
import {PlacesCarousel} from '../../f3-placesCarousel/PlacesCarousel';
import st from './SkyScanner.module.css';
import {SkyScannerHeader} from './s1-ui1-main/SkyScannerHead';
import {SkyScannerBody} from './s1-ui1-main/SkyScannerBody';
import {Redirect} from 'react-router-dom';
import {LOGIN, PropsType} from '../../../common/c1-routes/Routes';
import {useDispatch, useSelector} from 'react-redux';
import {fetchData} from '../s2-bll/skyScanner-sagas';
import {getDepartureDate} from '../s2-bll/skyScanner-selectors';
import {Button} from 'antd';
import {UploadOutlined} from '@ant-design/icons';


const SkyScanner: React.FC<PropsType> = React.memo(({setIsAuth, isAuth}) => {
    const dispatch = useDispatch();
    const departureDate = useSelector(getDepartureDate);

    useEffect(() => {
        dispatch(fetchData(departureDate));
    }, [departureDate]);


    const onClickHandler = useCallback(() => {
        setIsAuth(false);
    }, [isAuth]);

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


        // </div>
    );

});
export default SkyScanner;
