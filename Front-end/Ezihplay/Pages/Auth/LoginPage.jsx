import React, { useState } from "react";
import { Form, Input, Button, Typography, message, Result } from "antd";
import EzihPlayLogo from "../../public/Ezihplaylogo4.png";
import api from "../../api";
import { usePostloginMutation } from "../../src/servies/auth/login";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../config";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../src/store/features/users/Userinfo";

const { Title, Text } = Typography;

const LoginPage = () => {
    const loggedIn = useSelector((state) => state.userinfo.loggedIn)
    const [postlogin, { isLoading }] = usePostloginMutation()
    const dispatch = useDispatch()

    const onFinish = async (values) => {
        const hideLoading = message.loading("Sending request...", 0);
        try {
            const response = await postlogin({ loginuser: values }).unwrap()
            hideLoading();
            console.log(response);
            
            localStorage.setItem(ACCESS_TOKEN, response.access)
            localStorage.setItem(REFRESH_TOKEN, response.refresh)
            window.location.href = '/'
            message.success('Login successful!')
            // do not redirect if you don't want
        } catch (error) {
            hideLoading();
            console.error('Login error:', error)
            message.error(`${error.data.detail}.please try again.`)
        }
    }

    return (
        <div className="min-h-screen  flex justify-center items-center sm:px-35">
            <div className="max-w-screen-xl w-full sm:m-5 bg-white rounded-2xl  flex overflow-hidden sm:shadow-2xl">
                {/* Left side - Form */}
                <div className="w-full lg:w-1/2 p-10 flex flex-col justify-center">
                    <div className="mb-6 flex justify-center">
                        <img src={EzihPlayLogo} alt="EzihPlay Logo" className="w-16 h-16" />
                    </div>

                    <Title level={2} className="text-center text-orange-500 mb-4">
                        EzihPlay
                    </Title>


                    {
                        loggedIn ? (
                            <Result
                                status="info"
                                title="You're already logged in"
                                subTitle="It looks like you have an active session in this browser. You can continue using your account or log out if needed."
                                extra={
                                    <div className="flex gap-3 justify-center">
                                        <Button type="primary" key="home">
                                            <Link to="/">Go to Home</Link>
                                        </Button>
                                        <Link to={"/singin"}>
                                            <Button type="default" danger key="logout" onClick={() => dispatch(logout())}>
                                                Logout
                                            </Button>
                                        </Link>
                                    </div>
                                }
                            />
                        ) : (
                            <>
                                <Text className="text-center mb-8 block" type="secondary">
                                    Login below to preview the app
                                </Text>
                                <Form
                                    name="login"
                                    layout="vertical"
                                    disabled={isLoading}
                                    onFinish={onFinish}
                                    autoComplete="off"
                                    className="max-w-md mx-auto"
                                >
                                    <Form.Item
                                        label="Username"
                                        name="username"
                                        rules={[{ required: true, message: "Please enter your username" }]}
                                    >
                                        <Input placeholder="Username" size="large" />
                                    </Form.Item>

                                    <Form.Item
                                        label="Password"
                                        name="password"
                                        rules={[
                                            { required: true, message: 'Please input your password!' },
                                            { min: 10, message: 'Password must be at least 10 characters long' }
                                        ]}
                                    >
                                        <Input.Password
                                            placeholder="Password" size="large" />
                                    </Form.Item>

                                    <Form.Item>
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                            block
                                            loading={isLoading}
                                            size="large"
                                            style={{ backgroundColor: "#F97316", borderColor: "#F97316" }}
                                        >
                                            Login
                                        </Button>
                                    </Form.Item>
                                </Form>
                                </>
                                )
                    }

                                <Text type="secondary" className="text-center mt-6 block max-w-md mx-auto">
                                    Don't have any account? <Link to={'/signup'} className="text-blue-500">Sign up</Link> <br />
                                    I agree to abide by templatana's
                                    <a href="#" class="border-b border-gray-500 border-dotted">
                                        Terms of Service
                                    </a>
                                    and its
                                    <a href="#" class="border-b border-gray-500 border-dotted">
                                        Privacy Policy
                                    </a>

                                </Text>
                            </div>

                    {/* Right side - Illustration */}
                    <div className="hidden lg:flex flex-1 bg-gray-100 items-center justify-center">
                        <img
                            src="https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg"
                            alt="Illustration"
                            className="w-3/4 max-w-lg"
                        />
                    </div>
                </div>
            </div>
            );
};

            export default LoginPage;
