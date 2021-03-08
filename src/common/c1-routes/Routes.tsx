import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Page404} from '../c2-page404/page404';
import SkyScanner from '../../features/f2-SkyScanner/s1-ui/SkyScanner';
import {Login} from '../../features/f1-login/l1-ui/Login';
import {useSessionStorage} from '../../utils/useHooks/uH1-storage/use-localstorage';


export const LOGIN = '/login';
export const SKY_SCANNER = '/';
export const PAGE_NOT_FOUND = '*';


export const Routes = () => {

    const [isAuth, setIsAuth] = useSessionStorage({
        key: 'isAuth',
        initialValue: false

    });

    return <>
        <Switch>
            <Route path={LOGIN} render={() => <Login setIsAuth={setIsAuth} isAuth={isAuth}/>}/>
            <Route exact path={SKY_SCANNER} render={() => <SkyScanner setIsAuth={setIsAuth} isAuth={isAuth}/>}/>
            <Route path={PAGE_NOT_FOUND}
                   render={() => <Page404/>}
            />
        </Switch>
    </>;
};

export type PropsType = {
    isAuth: boolean | null
    setIsAuth: (value: boolean) => void
}
