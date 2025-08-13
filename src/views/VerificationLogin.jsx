'use client';
import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation'
import { Union } from '@/svgs/Icons'
import { Heading, Paragraph } from "@/components/ui/typography";
import { useRef, useState } from 'react';
import { Input } from "@/components/ui/input"
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export default function VerificationLogin() {
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            code0: '',
            code1: '',
            code2: '',
            code3: '',
            code4: '',
            code5: '',
        },


        validationSchema: Yup.object().shape({
            code0: Yup.string().required('Required').matches(/^\d$/, 'Only 1 digit'),
            code1: Yup.string().required('Required').matches(/^\d$/, 'Only 1 digit'),
            code2: Yup.string().required('Required').matches(/^\d$/, 'Only 1 digit'),
            code3: Yup.string().required('Required').matches(/^\d$/, 'Only 1 digit'),
            code4: Yup.string().required('Required').matches(/^\d$/, 'Only 1 digit'),
            code5: Yup.string().required('Required').matches(/^\d$/, 'Only 1 digit'),
        }),
        onSubmit: (values) => {
            const code = Object.values(values).join('');
            router.push('/dashboard/providers');
        }
    });

    const handleChange = (e, index) => {
        formik.setTouched({
            code0: true,
            code1: true,
            code2: true,
            code3: true,
            code4: true,
            code5: true,
        });
        const value = e.target.value.replace(/\D/g, '').slice(0, 1);
        formik.setFieldValue(`code${index}`, value);
        if (value && index < 5) {
            const next = document.getElementById(`code${index + 1}`);
            if (next) next.focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !formik.values[`code${index}`] && index > 0) {
            const prev = document.getElementById(`code${index - 1}`);
            if (prev) prev.focus();
        }
    };


    return (
        <>
            <div className='min-h-screen w-full flex items-center justify-center px-4 '>

                <div className='flex flex-col bg-White rounded-[10px] shadow-[0px_9px_34px_0px_#0000001A] gap-[20px] sm:gap-[23px] md:gap-[26px] lg:gap-[28px] xl:gap-[30px] 2xl:gap-[32px] max-w-[432px]
                p-[18px] sm:p-[19px] md:p-[20px] lg:p-[22px] xl:p-[23px] 2xl:p-[24px] w-full
            '>

                    {/* top */}
                    <div className='flex flex-col gap-[12px] sm:gap-[13px] md:gap-[14px] lg:gap-[15px] xl:gap-[15.5px] 2xl:gap-[16px]
                     text-center'>
                        <div className='flex justify-center'>
                            <div className='w-[25.1px] h-[25.1px] sm:w-[29.3px] sm:h-[29.3px] md:w-[33.5px] md:h-[33.5px] lg:w-[36.7px] lg:h-[36.7px] xl:w-[39px] xl:h-[39px] 2xl:w-[41.1px] 2xl:h-[41.1px]
                            '>
                                <Union />
                            </div>
                        </div>
                        <Heading level="lgSubText" className="font-bold text-Gray900">
                            Enter Verification Code
                        </Heading>
                        <Paragraph size="md" className="text-Gray700 font-medium font-satoshi leading-[14px] sm:leading-[17px] md:leading-[19px] lg:leading-[21px] xl:leading-[22.5px] 2xl:leading-[24px]
                        ">
                            Please enter your 6-digit verification code from an authenticator app below:
                        </Paragraph>
                    </div>


                    {/* Form */}
                    <form onSubmit={formik.handleSubmit} className='flex flex-col gap-[20px] sm:gap-[23px] md:gap-[26px] lg:gap-[28px] xl:gap-[30px] 2xl:gap-[32px]'>



                        <div>
                            {/* Input Feilds */}
                            <div className='space-y-[16px] sm:space-y-[18px] md:space-y-[20px] lg:space-y-[22px] xl:space-y-[23px] 2xl:space-y-[24px] flex justify-center'>
                                <div className="flex gap-2">
                                    {[...Array(6)].map((_, i) => (
                                        <Input
                                            key={i}
                                            id={`code${i}`}
                                            name={`code${i}`}
                                            type="text"
                                            inputMode="numeric"
                                            maxLength={1}
                                            value={formik.values[`code${i}`]}
                                            onChange={(e) => handleChange(e, i)}
                                            onKeyDown={(e) => handleKeyDown(e, i)}
                                            className="w-[40px] h-[44px] sm:w-[42px] sm:h-[46px] md:w-[44px] md:h-[48px] lg:w-[46px] lg:h-[50px] xl:w-[47.5px] xl:h-[52px] 2xl:w-[49px] 2xl:h-[54px] text-center text-lg font-semibold font-satoshi border-[#B0B0B0] border-1 rounded-[5px]"
                                        />
                                    ))}
                                </div>
                            </div>
                            {/* Error below inputs if any */}
                            {Object.keys(formik.errors).length > 0 && formik.submitCount > 0 && (
                                <p className="text-red-500 text-xs text-center mt-2">All fields must contain exactly 1 digit</p>
                            )}
                        </div>
                        {/* CheckBox */}
                        <div className='flex gap-2 justify-center items-center'>
                            <div className='flex items-center'>
                                <Checkbox className='w-[18px] h-[18px] sm:w-[17px] sm:h-[17px] md:w-[19px] md:h-[19px] lg:w-[21px] lg:h-[21px] xl:w-[22px] xl:h-[22px] 2xl:w-[25px] 2xl:h-[25px]' />
                            </div>
                            <Paragraph size='md' className='text-Gray700 font-medium font-satoshi'>
                                Remember device for 30 days</Paragraph>
                        </div>
                        {/* Button */}
                        <div className=''>
                            <Button variant="secondary" type='submit' className='w-full'>
                                <Paragraph size="btnText" className="text-White font-black font-satoshi">Continue
                                </Paragraph>
                            </Button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

