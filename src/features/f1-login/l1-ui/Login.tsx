import {Button, Form, Input} from 'antd';
import {EyeInvisibleOutlined, EyeTwoTone, LockOutlined, UserOutlined} from '@ant-design/icons';
import st from './Login.module.scss';
import React, {useCallback} from 'react';
import {Redirect} from 'react-router-dom';
import {PropsType, SKY_SCANNER} from '../../../common/c1-routes/Routes';
import style from '../../../main/m1-ui/App.module.scss';


export const Login: React.FC<PropsType> = React.memo(({isAuth, setIsAuth,}) => {
    const error = '';
    const onSubmit = useCallback((values: {
        email: string,
        password: string,
    }) => {
        setIsAuth(true);
    }, [setIsAuth]);

    if (isAuth) {
        return <Redirect to={SKY_SCANNER}/>;

    }
    return (
        <>
            <Form onFinish={onSubmit}
                  className={st.login_form_wrapper}
            >
                <div className={st.login_form_title}>Simple Flight Check</div>
                <div>
                    <Form.Item
                        className={st.form_item}
                        name="email"
                        {...error && {
                            help: error,
                            validateStatus: 'error',
                        }}
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your Email!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined/>}
                               type="email"
                               name="email"
                               placeholder="Email"
                        />
                    </Form.Item>
                    <Form.Item
                        className={st.form_item}
                        name="password"
                        {...error && {
                            help: error,
                            validateStatus: 'error'
                        }}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                            {
                                min: 8,
                                message: 'Must be more than  8 characters!',
                            },

                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined/>}
                            placeholder="Password"
                            iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}

                        />
                    </Form.Item>
                    <div className={st.button_form_position}>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className={style.main_button}
                            >
                                Войти
                            </Button>
                        </Form.Item>
                    </div>

                </div>
            </Form>
            <div className={style.backGround}></div>
        </>
    );
});


