import {DatePicker} from 'antd';
import locale from 'antd/es/date-picker/locale/ru_RU';
import 'moment/locale/ru';
import moment from 'moment';


export const SkyDatePicker = () => {
    return (
        <>
            <DatePicker bordered={false} defaultValue={moment()} locale={locale}
                        format={'LL'}/>
        </>
    );

};
