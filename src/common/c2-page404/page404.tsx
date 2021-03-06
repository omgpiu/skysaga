import {Button, Result} from 'antd';
import React from 'react';
import {Link} from 'react-router-dom';
import style from '../../main/m1-ui/App.module.scss';

export const Page404: React.FC = () => {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Link to={''}> <Button type="primary" className={style.main_button}>Back Home</Button></Link>}
        />
    );
};
