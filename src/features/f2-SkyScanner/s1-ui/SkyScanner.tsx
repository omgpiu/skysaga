import React from 'react';
import {PlacesCarousel} from '../../f3-placesCarousel/PlacesCarousel';

import st from './SkyScanner.module.css';
import {SkyScannerHeader} from './s1-ui1-main/SckyScannerHead';
import {SkyScannerBody} from './s1-ui1-main/SkyScannerBody';
import {Redirect} from 'react-router-dom';
import {LOGIN} from '../../../common/c1-routes/Routes';
import {useDispatch, useSelector} from 'react-redux';
import {PropsType} from '../../f1-login/l1-ui/Login';
import {fetchData} from '../s2-bll/skyScanner-sagas';
import {getDepartureDate} from '../s2-bll/skyScanner-selectors';
import {Button} from 'antd';
import {UploadOutlined} from '@ant-design/icons';


const SkyScanner: React.FC<PropsType> = (props) => {
    const dispatch = useDispatch();
    const departureDate = useSelector(getDepartureDate);
    const onClickHandler = () => {
        props.setIsAuth(false);
    };
    const ClickHandler = () => {
        dispatch(fetchData(departureDate));
    };
    if (!props.isAuth) {
        return <Redirect to={LOGIN}/>;
    }
    return (
        // <div className={st.body}>

        <div className={st.wrapper}>
            <div style={{alignSelf: 'inherit', paddingLeft: '1241px', paddingTop: '20px'}}>

                <Button onClick={onClickHandler}
                        className={st.logoutButton}
                >Выйти
                    {<UploadOutlined rotate={90} style={{color: '#1157A7'}}/>}
                </Button>


            </div>

            {/*<button onClick={ClickHandler}>link</button>*/}


            <div className={st.bodyWrapper}>
                <SkyScannerHeader/>
                <PlacesCarousel/>
                <SkyScannerBody/>
            </div>
        </div>


        // </div>
    );

};
export default SkyScanner;
