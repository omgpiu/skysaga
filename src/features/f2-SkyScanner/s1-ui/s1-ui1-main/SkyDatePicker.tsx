import {DatePicker} from 'antd';
import locale from 'antd/es/date-picker/locale/ru_RU';
import 'moment/locale/ru';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {airTableActions} from '../../s2-bll/skyScanner-reducer';
import st from './SkyScannerHead.module.scss';
import {CalendarOutlined} from '@ant-design/icons';


export const SkyDatePicker = () => {

    const dispatch = useDispatch();

    const onChangeHandler = (date: any) => {
        date && dispatch(airTableActions.setDepartureDate(moment(date).format('YYYY-MM')));
    };
    return (
        <>
            <DatePicker bordered={false} defaultValue={moment()} locale={locale}
                        format={'MMMM YYYY'}
                        onChange={onChangeHandler}
                        className={st.datePickerText}
                        suffixIcon={<CalendarOutlined className={st.datePickerIcon}/>}
                        clearIcon={true}
                        picker={'month'}


            />


        </>
    );

};
