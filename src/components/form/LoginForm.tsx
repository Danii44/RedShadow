"use client";

import { CloseEyeIcon, OpenEyeIcon } from "@/svg/AuthSvgs";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type LoginFormValues = {
    email: string;
    password: string;
    remember: boolean;
};

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<LoginFormValues>();

    const onSubmit = (data: LoginFormValues) => {
        toast.success(`Login successful! Welcome ${data.email}`);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="tp-login-option">
                {/* Social login */}
                <div className="tp-login-social mb-10 d-flex flex-wrap align-items-center justify-content-center">
                    <div className="tp-login-option-item has-google">
                        <Link href="#">
                            <Image
                                width={22}
                                height={22}
                                src="/assets/img/login/google.svg"
                                alt="google image"
                            />{" "}
                            Sign in with google
                        </Link>
                    </div>
                    <div className="tp-login-option-item">
                        <Link href="#">
                            <Image
                                width={22}
                                height={22}
                                src="/assets/img/login/facebook.svg"
                                alt="facebook image"
                            />
                        </Link>
                    </div>
                    <div className="tp-login-option-item">
                        <Link href="#">
                            <Image
                                className="apple"
                                width={22}
                                height={22}
                                src="/assets/img/login/apple.svg"
                                alt="apple image"
                            />
                        </Link>
                    </div>
                </div>

                <div className="tp-login-mail text-center mb-40">
                    <p>
                        or Sign in with <Link href="#">Email</Link>
                    </p>
                </div>

                {/* Inputs */}
                <div className="tp-login-input-wrapper">
                    {/* Email */}
                    <div className="tp-login-input-box">
                        <div className="tp-login-input-title">
                            <label htmlFor="email">Your Email</label>
                        </div>
                        <div className="tp-login-input">
                            <input
                                id="email"
                                type="email"
                                placeholder="Your Email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Enter a valid email",
                                    },
                                })}
                            />
                        </div>
                        {errors.email && (
                            <p className="form-error">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="tp-login-input-box">
                        <div className="tp-login-input-title d-flex align-items-center justify-content-between">
                            <label htmlFor="password">Your Password</label>
                            <div className="tp-login-forgot">
                                <Link href="/forgot">Forgot Password?</Link>
                            </div>
                        </div>
                        <div className="tp-login-input p-relative">
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Min 6 characters"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters",
                                    },
                                })}
                            />
                            <span
                                className="tp-login-input-eye"
                                onClick={() => setShowPassword(!showPassword)}
                                style={{ cursor: "pointer" }}
                            >
                                {showPassword ? <OpenEyeIcon /> : <CloseEyeIcon />}
                            </span>
                        </div>
                        {errors.password && (
                            <p className="form-error">{errors.password.message}</p>
                        )}
                    </div>
                </div>

                {/* Remember Me */}
                <div className="tp-login-sugest mb-35 d-flex align-items-center justify-content-between">
                    <div className="tp-login-remeber">
                        <input
                            id="remeber"
                            type="checkbox"
                            {...register("remember")}
                        />
                        <label htmlFor="remeber">Remember me</label>
                    </div>
                </div>

                {/* Button */}
                <div className="tp-login-bottom">
                    <button type="submit" className="tp-login-btn w-100">
                        Sign In
                    </button>
                    <div className="tp-login-bottom-text text-center mt-25">
                        <p>
                            Don&apos;t have an account? <Link href="/register">Register</Link>
                        </p>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default LoginForm;
