'use client';
import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { Union } from '@/svgs/Icons'
import { Heading, Paragraph } from "@/components/ui/typography";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { Back } from '@/svgs/Icons'

function ResetPassword() {
    const [emailStatus, setEmailStatus] = useState(false);
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
        }),
        onSubmit: (values) => {
            setEmailStatus(true);
        },
    });
    return (
        <>
            {!emailStatus ? (
                <div>{/* Sent Email */}
                    <div className='min-h-screen w-full flex items-center justify-center px-4 '>
                        <div className='flex flex-col bg-White rounded-[10px] shadow-[0px_9px_34px_0px_#0000001A] gap-[18px] sm:gap-[19px] md:gap-[20px] lg:gap-[21px] xl:gap-[21.5px] 2xl:gap-[22px] max-w-[432px] p-[18px] sm:p-[19px] md:p-[20px] lg:p-[22px] xl:p-[23px] 2xl:p-[24px] w-full'>

                            {/* top */}
                            <div className='flex gap-3 items-center'>
                                <div>
                                    <Link href='/login'>
                                        <div className='inline-flex items-center justify-center text-center bg-Secondary rounded-full 
                            w-[15.65px] h-[15.65px] 
                            sm:w-[18.25px] sm:h-[18.25px] 
                            md:w-[21px] md:h-[21px] 
                            lg:w-[24px] lg:h-[24px] 
                            xl:w-[26.5px] xl:h-[26.5px] 
                            2xl:w-[28.65px] 2xl:h-[28.65px] hover:cursor-pointer'>
                                            <Back />
                                        </div>
                                    </Link>
                                </div>

                                <Heading level="mdSubText" className="font-[800] font-urbanist  text-[#424242]">
                                    Forgot Password
                                </Heading>
                            </div>

                            {/* label */}
                            <div>
                                <Paragraph size="md" className="text-[#4D4D4D] font-medium font-urbanist">
                                    Enter email associated with account
                                </Paragraph>
                            </div>


                            {/* Form */}
                            <form onSubmit={formik.handleSubmit} className='flex flex-col gap-[20px] sm:gap-[23px] md:gap-[26px] lg:gap-[28px] xl:gap-[30px] 2xl:gap-[32px]'>
                                {/* Input Feilds */}
                                <div>
                                    <div className='space-y-[16px] sm:space-y-[18px] md:space-y-[20px] lg:space-y-[22px] xl:space-y-[23px] 2xl:space-y-[24px]'>

                                        <Label htmlFor="email" className='mb-[8px]'>
                                            <Paragraph size="label" className="text-Gray900 font-bold font-satoshi">Enter Email Address</Paragraph>
                                        </Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                    </div>
                                    {formik.touched.email && formik.errors.email && (
                                        <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
                                    )}
                                </div>


                                {/* Button */}
                                <div className=''>
                                    <div className=''>
                                        <Button variant="secondary" className='w-full' type='submit'
                                            disabled={!formik.isValid || formik.isSubmitting}>
                                            <Paragraph size="btnText" className="text-White font-black font-satoshi">Reset Password
                                            </Paragraph>
                                        </Button>
                                    </div>

                                </div>
                            </form>


                        </div>

                    </div>
                </div>
            ) : emailStatus === true ? (
                <div>{/* Check Email - Back to Login */}
                    <div className='min-h-screen w-full flex items-center justify-center px-4 '>

                        <div className='flex flex-col bg-White rounded-[10px] shadow-[0px_9px_34px_0px_#0000001A] gap-[24px] sm:gap-[26px] md:gap-[28px] lg:gap-[30px] xl:gap-[31px] 2xl:gap-[32px]
                max-w-[432px] w-full p-[24px] sm:p-[28px] md:p-[32px] lg:p-[36px] xl:p-[38px] 2xl:p-[40px] '>

                            {/* top */}
                            <div className='flex flex-col gap-[8px]'>
                                <Heading level="mdSubText" className="font-[800] font-urbanist  text-[#424242]">
                                    Check Email
                                </Heading>
                                <Paragraph size="md" className="text-[#4D4D4D] font-medium font-urbanist">
                                    An email has been sent to the provided address
                                </Paragraph>
                            </div>

                            {/* Button */}
                            <div className=''>
                                <Button variant="secondary" className='w-full bg-MindfulBrown80' type='submit'>
                                    <Link href='/login'>
                                        <Paragraph size="btnText" className="text-White font-black font-satoshi">Back to log in
                                        </Paragraph>
                                    </Link>

                                </Button>
                            </div>
                        </div>

                    </div></div>
            ) : null}





        </>
    )
}

export default ResetPassword
