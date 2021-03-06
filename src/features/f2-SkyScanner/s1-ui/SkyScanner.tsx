import React from 'react';
import {PlacesCarousel} from '../../f3-placesCarousel/PlacesCarousel';

import st from './SkyScanner.module.css';
import {SkyScannerHeader} from './s1-ui1-main/SckyScannerHead';
import {SkyScannerBody} from './s1-ui1-main/SkyScannerBody';
import {Redirect} from 'react-router-dom';
import {LOGIN} from '../../../common/c1-routes/Routes';
import {useSessionStorage} from '../../../utils/useHooks/uH1-storage/use-localstorage';


const SkyScanner: React.FC = () => {

    const [isAuth, setIsAuth] = useSessionStorage({
        key: 'isAuth',
        initialValue: true

    });


    const onClickHandler = () => {
        setIsAuth(false);
    };

    console.log(isAuth + ' skyScanner');
    if (!isAuth) {

        return <Redirect to={LOGIN}/>;

    }

    return (
        <div className={st.wrapper}>
            <button onClick={onClickHandler}>Logout</button>
            <SkyScannerHeader/>
            <PlacesCarousel/>
            <SkyScannerBody/>

        </div>
    );

};
export default SkyScanner;
