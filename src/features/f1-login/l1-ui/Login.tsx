import {Button, Form, Input} from 'antd';
import {EyeInvisibleOutlined, EyeTwoTone, LockOutlined, UserOutlined} from '@ant-design/icons';
import st from './Login.module.css';
import React from 'react';
import {Redirect} from 'react-router-dom';
import {SKY_SCANNER} from '../../../common/c1-routes/Routes';
import {useDispatch} from 'react-redux';

export type PropsType = {
    isAuth: boolean | null
    setIsAuth: (value: boolean) => void
}

export const Login = (props: PropsType) => {
    const dispatch = useDispatch();

    const error = '';


    const onSubmit = (values: {
        email: string,
        password: string,
    }) => {
        console.log(values);
        props.setIsAuth(true);
        // dispatch(authActions.setAuthUserData(values.email, values.password, true));
        // await dispatch(login(values));

    };

    // const resetError = () => {
    //     // dispatch(setError({error: ''}));
    // };


    if (props.isAuth) {
        return <Redirect to={SKY_SCANNER}/>;

    }
    return (
        <>
            <Form onFinish={onSubmit}
                  className={st.loginForm}

            >
                <div className={st.title}>Simple Flight Check</div>
                <div>
                    <Form.Item
                        className={st.form}
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
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                               type="email"
                               name="email"
                               placeholder="Email"
                            // onClick={resetError}
                               className={st.formInput}
                            // bordered={false}

                        />
                    </Form.Item>
                    <Form.Item
                        className={st.form}

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
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            placeholder="Password"
                            iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}

                            className={st.formInput}
                        />
                    </Form.Item>
                    <div className={st.buttonPosition}>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className={st.loginFormButton}
                            >
                                Войти
                            </Button>

                        </Form.Item>
                    </div>

                </div>
            </Form>
            <div className={st.backGround}></div>
        </>
    );
};


