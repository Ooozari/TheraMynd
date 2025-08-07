'use client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { Union } from '@/svgs/Icons'
import { Heading, Paragraph } from "@/components/ui/typography";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from 'next/link';
import { Button } from "@/components/ui/button"

function SignUp() {
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email').required('Email is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
        }),
        onSubmit: (values) => {
            router.push('/create-account/account-details');
        },
    });
    return (
        <>
            <div className='min-h-screen w-full flex items-center justify-center px-4 '>

                <div className='flex flex-col bg-White rounded-[10px] shadow-[0px_9px_34px_0px_#0000001A] gap-[20px] sm:gap-[23px] md:gap-[26px] lg:gap-[28px] xl:gap-[30px] 2xl:gap-[32px] max-w-[432px]
                p-[18px] sm:p-[19px] md:p-[20px] lg:p-[22px] xl:p-[23px] 2xl:p-[24px] w-full
            '>

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
                        <Paragraph size="md" className="text-Gray700 font-medium font-satoshi">Create account to access TheraMynd</Paragraph>
                    </div>


                    {/* Form */}
                    <form onSubmit={formik.handleSubmit} className='flex flex-col gap-[20px] sm:gap-[23px] md:gap-[26px] lg:gap-[28px] xl:gap-[30px] 2xl:gap-[32px]'>

                        {/* Input Feilds */}
                        <div className='space-y-[16px] sm:space-y-[18px] md:space-y-[20px] lg:space-y-[22px] xl:space-y-[23px] 2xl:space-y-[24px]'>
                            <div>
                                <Label htmlFor="email" className='mb-[8px]'>
                                    <Paragraph size="label" className="text-Gray900 font-bold">Enter Email</Paragraph>
                                </Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
                                )}
                            </div>
                            <div>
                                <div>
                                    <Label htmlFor="password" className='mb-[8px]'>
                                        <Paragraph size="label" className="text-Gray900 font-bold">Create Password</Paragraph>
                                    </Label>
                                    <Input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.password && formik.errors.password && (
                                        <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>
                                    )}
                                </div>

                                <div className='mt-[14px]'>
                                    <Paragraph size="sm" className="text-Gray900 font-medium text-center">Have an account?<Link href='/login'><span className='text-blue-600 ml-[1px]'>Sign in</span></Link></Paragraph>
                                </div>
                            </div>

                        </div>

                        {/* Button */}
                        <div className=''>
                            <div className=''>
                                <Button variant="secondary" className='w-full' type='submit'
                                disabled={!formik.isValid || formik.isSubmitting}>
                                    <Paragraph size="btnText" className="text-White font-black font-satoshi">Create account
                                    </Paragraph>
                                </Button>
                            </div>

                        </div>
                    </form>


                </div>

            </div>
        </>
    )
}

export default SignUp
