import {Button, Form, Input} from 'antd';
import {EyeInvisibleOutlined, EyeTwoTone, LockOutlined, UserOutlined} from '@ant-design/icons';
import st from './Login.module.css';
import React from 'react';
import {Redirect} from 'react-router-dom';
import {SKY_SCANNER} from '../../../common/c1-routes/Routes';
import {useSessionStorage} from '../../../utils/useHooks/uH1-storage/use-localstorage';


export const Login = () => {

    const [isAuth, setIsAuth] = useSessionStorage({
        key: 'isAuth',
        initialValue: false
    });
    // const error = useSelector(getError);
    const error = '';


    console.log(isAuth + ' login');
    const onSubmit = (values: {
        email: string,
        password: string,
        captcha: string,
        rememberMe: boolean
    }) => {
        setIsAuth(true);
        // await dispatch(login(values));

    };

    // const resetError = () => {
    //     // dispatch(setError({error: ''}));
    // };


    if (isAuth) {
        return <Redirect to={SKY_SCANNER}/>;

    }
    return (
        <>
            <Form onFinish={onSubmit}
                  className={st.loginForm}
            >
                <Form.Item

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
                           className={st.inp}

                    />
                </Form.Item>
                <Form.Item
                    className={st.inp}
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
                        // onClick={resetError}
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className={st.loginFormButton}
                    >
                        Log in
                    </Button>

                </Form.Item>

            </Form>

        </>
    );
};


