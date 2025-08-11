'use client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react'
import { useState } from 'react';
import { Union, Eye } from '@/svgs/Icons'
import { Heading, Paragraph } from "@/components/ui/typography";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { AccountDetails } from "@/components/shared"
AccountDetails

function SignUp() {
    const [showDetailsForm, setshowDetailsForm] = useState(false)
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email').required('Email is required'),
            password: Yup.string()
                .min(8, 'Minimum characters')
                .matches(/[A-Z]/, 'Must contain uppercase letter')
                .matches(/[0-9]/, 'Must contain number')
                .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Must contain special character')
                .required('Password is required'),
        }),
        onSubmit: (values) => {
            setshowDetailsForm(true);
        },
    });
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            {showDetailsForm ? <AccountDetails /> : (
                <div className='min-h-screen overflow-y-auto px-5 py-20 w-full flex items-center'>
                    <div className='container mx-auto flex flex-col rounded-[10px] shadow-[0px_9px_34px_0px_#0000001A] gap-[20px] sm:gap-[23px] md:gap-[26px] lg:gap-[28px] xl:gap-[30px] 2xl:gap-[32px] max-w-[484px]
                p-[18px] sm:p-[19px] md:p-[20px] lg:p-[22px] xl:p-[23px] 2xl:p-[24px] w-full'>

                        {/* top */}
                        <div className='space-y-[10px] sm:space-y-[11px] md:space-y-[13px] lg:space-y-[14px] xl:space-y-[15px] 2xl:space-y-[16px]
                    text-center'>
                            <div className='flex justify-center'>
                                <div className='w-[25.1px] h-[25.1px] sm:w-[29.3px] sm:h-[29.3px] md:w-[33.5px] md:h-[33.5px] lg:w-[36.7px] lg:h-[36.7px] xl:w-[39px] xl:h-[39px] 2xl:w-[41.1px] 2xl:h-[41.1px]
                            '>
                                    <Union />
                                </div>
                            </div>
                            <Heading level="Subh1" className="font-bold text-Gray900">
                                Create Account
                            </Heading>
                            <Paragraph size="normalmd" className="text-Gray700 font-medium font-satoshi">Create account to access TheraMynd</Paragraph>
                        </div>


                        {/* Form */}
                        <form onSubmit={formik.handleSubmit} className='flex flex-col gap-[20px] sm:gap-[23px] md:gap-[26px] lg:gap-[28px] xl:gap-[30px] 2xl:gap-[32px]'>

                            {/* Input Feilds */}
                            <div className='space-y-[16px] sm:space-y-[18px] md:space-y-[20px] lg:space-y-[22px] xl:space-y-[23px] 2xl:space-y-[24px]'>
                                <div>
                                    <Label htmlFor="email" className='my-[8px]'>
                                        <Paragraph size="label" className="text-Gray900 font-bold">Enter Email</Paragraph>
                                    </Label>
                                    <div className='relative'>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.email && formik.errors.email && (
                                            <p className="text-red-500 text-xs absolute left-0 bottom-[-16px]">{formik.errors.email}</p>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <Label htmlFor="password" className='my-[8px]'>
                                            <Paragraph size="label" className="text-Gray900 font-bold">Create Password</Paragraph>
                                        </Label>
                                        <div className='relative'>
                                            <Input
                                                id="password"
                                                name="password"
                                                type={showPassword ? "text" : "password"}
                                                value={formik.values.password}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            <div className='absolute right-4 top-1/2 -translate-y-1/2 p-0 h-6 w-6 z-10'>
                                                <button
                                                    type="button"
                                                    onMouseDown={() => setShowPassword(true)}
                                                    onMouseUp={() => setShowPassword(false)}
                                                    onMouseLeave={() => setShowPassword(false)}
                                                    onTouchStart={() => setShowPassword(true)}
                                                    onTouchEnd={() => setShowPassword(false)}
                                                    className='cursor-pointer'
                                                >
                                                    <Eye />
                                                </button>
                                            </div>
                                            {formik.touched.password && formik.errors.password && (
                                                <p className="text-red-500 text-xs absolute left-0 bottom-[-16px]">{formik.errors.password}</p>
                                            )}
                                        </div>


                                    </div>

                                    <div className='mt-[14px]'>
                                        <Paragraph size="sm" className="text-Gray900 font-medium text-center">Have an account?<Link href='/login'><span className='text-[#5167F6] ml-[5px]'>Sign in</span></Link></Paragraph>
                                    </div>
                                </div>

                            </div>

                            {/* Button */}
                            <div className=''>
                                <div className=''>
                                    <Button variant="secondary" className='w-full' type='submit'>
                                        <Paragraph size="btnText" className="text-White font-black font-satoshi">Create account
                                        </Paragraph>
                                    </Button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>)}


        </>
    )
}

export default SignUp