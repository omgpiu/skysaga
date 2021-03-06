import React from 'react';
import logo from '../../../../assets/row/airLogo.png';
import {HeartOutlined} from '@ant-design/icons';
import st from './ScySkannerRow.module.css';
import {useSelector} from 'react-redux';
import {getAll, getCarries, getPlaces, getQuotes} from '../../s2-bll/skyScanner-selectors';

export const SkyScannerRow = () => {

    const tickets = useSelector(getQuotes);
    console.log(tickets);
    const carrier = useSelector(getCarries);
    console.log(carrier);
    const places = useSelector(getPlaces);
    console.log(places);
    const all = useSelector(getAll);
    console.log(all);
    // const company = useSelector(ge)
    // console.log(price);


    return <div>
        {tickets.map((all, index) => {
            return (
                <div className={st.wrapper}>
                    <div className={st.logo}><img src={logo} alt="" width={50} height={50}/></div>

                    <div className={st.info}>
                        <div>Moscow (SVO) {'=>'} New York City (JFK)</div>
                        <div>
                            28 June, 2020 - 14:50
                        </div>
                        {carrier.map(e => <div>{e.Name}</div>)}
                    </div>
                    <div className={st.price}>
                        <div>
                            <HeartOutlined/>
                        </div>
                        <div>
                            {/*price:{ticket.MinPrice}*/}
                        </div>
                    </div>


                </div>);


        })}
    </div>;


    {/*<div className={st.logo}><img src={logo} alt="" width={50} height={50}/></div>*/
    }

    {/*<div className={st.info}>*/
    }
    {/*    <div>Moscow (SVO) {'=>'} New York City (JFK)</div>*/
    }
    {/*    <div>*/
    }
    {/*        28 June, 2020 - 14:50*/
    }
    {/*    </div>*/
    }
    {/*    <div>*/
    }
    {/*        Aeroflot*/
    }
    {/*    </div>*/
    }
    {/*</div>*/
    }
    {/*<div className={st.price}>*/
    }
    {/*    <div>*/
    }
    {/*        <HeartOutlined/>*/
    }
    {/*    </div>*/
    }
    {/*    <div>*/
    }
    {/*        /!*price:{price}*!/*/
    }
    {/*    </div>*/
    }
    {/*</div>*/
    }


};

