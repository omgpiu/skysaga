import React from 'react';
import {Login} from './features/f1-login/l1-ui/Login';
import SkyScanner from './features/f2-SkyScanner/s1-ui/SkyScanner';
import {useSessionStorage} from './utils/useHooks/uH1-storage/use-localstorage';
import {Routes} from './common/c1-routes/Routes';
import {skyScannerAPI} from './main/m3-dal/mainAPI';

function App() {




    return (
        <>
            <Routes/>
        </>


    );
}

export default App;
