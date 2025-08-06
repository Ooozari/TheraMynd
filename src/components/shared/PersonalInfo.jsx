'use client';
import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Edit, PersonIcon } from '@/svgs/Icons'
import { Heading, Paragraph } from "@/components/ui/typography";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const validationSchema = Yup.object({
    fname: Yup.string().required('First name is required'),
    lname: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.number().required('Phone is required').typeError('Phone must be a number'),
    personalPhone: Yup.number().required('Personal phone is required').typeError('Phone must be a number'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    allowPatient: Yup.string().required('Required'),
});

function PersonalInfo() {
    const [isEditable, setIsEditable] = useState(false);

    const formik = useFormik({
        initialValues: {
            fname: 'John',
            lname: 'Doe',
            email: 'abc@gamil.com',
            phone: '123-456-7890',
            personalPhone: '321-654-0987',
            city: 'New York',
            state: 'illinois',
            allowPatient: 'work',
        },
        validationSchema,
        enableReinitialize: true,
        onSubmit: (values) => {
            console.log("Form Submitted:", values);
            setIsEditable(false);
        },
    });
    return (
        <>

            <div className='bg-White shadow-[0px 17.32px 34.65px 0px #1018280D] rounded-[15px] py-[12px] px-[13px] sm:py-[17px] sm:px-[18px] md:py-[22px] md:px-[23px] lg:py-[27px] lg:px-[28px] xl:py-[30px] xl:px-[31px] 2xl:py-[32px] 2xl:px-[33px]  flex flex-col
             gap-[14px] sm:gap-[16px] md:gap-[18px] lg:gap-[21px] xl:gap-[22.5px] 2xl:gap-[24px] max-w-[668px]'>

                {/* Header */}
                <div className='flex items-center gap-5'>
                    {/* Icon */}
                    <div>
                        <div className="relative w-[40px] h-[40px] sm:w-[49px] sm:h-[49px] md:w-[58px] md:h-[58px] lg:w-[66px] lg:h-[66px] xl:w-[72px] xl:h-[72px] 2xl:w-[77px] 2xl:h-[77px] rounded-full bg-[#D9D9D9] flex items-end justify-center">
                            {/* Center User Icon: Head + Body */}
                            <div className="">
                                <PersonIcon className="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] lg:w-[55px] lg:h-[55px] xl:w-[58px] xl:h-[58px] 2xl:w-[60px] 2xl:h-[60px] text-White" />
                            </div>
                            {/* Bottom-right Edit Icon */}
                            <div className="absolute -bottom-0 -right-0 bg-Secondary p-0.5 md:p-[4px] xl:p-[5px] 2xl:p-[6px] rounded-full cursor-pointer">
                                <div className='w-[6px] h-[7px] sm:w-[7px] sm:h-[8px] md:w-[8px] md:h-[9px] lg:w-[9px] lg:h-[10px] xl:w-[9.5px] xl:h-[10.5px] 2xl:w-[10px] 2xl:h-[11px]'>
                                    <Edit color="white" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text */}
                    <div className='w-full'>
                        <div className='flex justify-between items-baseline'>
                            <Heading level="lgSubText" className="font-[800] font-urbanist text-[#292929]">
                                Personal Info
                            </Heading>
                            <button type="button"
                                className='cursor-pointer'
                                onClick={() => setIsEditable(true)}>
                                <Paragraph size="md" className="text-MindfulBrown60 font-[700] font-urbanist flex gap-1 items-center">
                                    <span>Edit</span>
                                    <div className='w-[6px] h-[7px] sm:w-[7px] sm:h-[8px] md:w-[8px] md:h-[9px] lg:w-[9px] lg:h-[10px] xl:w-[9.5px] xl:h-[10.5px] 2xl:w-[10px] 2xl:h-[11px]
                                '><span>
                                            <Edit />
                                        </span>
                                    </div>

                                </Paragraph>
                            </button>
                        </div>
                        <Paragraph size="md" className="text-[#292929] font-medium font-urbanist leading-2.5">Add, update, or remove your billing methods.
                        </Paragraph>
                    </div>
                </div>

                <form onSubmit={formik.handleSubmit} className='flex flex-col gap-[14px] sm:gap-[16px] md:gap-[18px] lg:gap-[21px] xl:gap-[22.5px] 2xl:gap-[24px]'>
                    {/* Input div */}
                    <div className='flex flex-col gap-[14px] sm:gap-[16px] md:gap-[18px] lg:gap-[21px] xl:gap-[22.5px] 2xl:gap-[24px]'>

                        {/* Names */}
                        <div className='w-full flex flex-col lg:flex-row gap-5'>
                            <div className='w-full'>
                                <Label htmlFor="fname" className='mb-[8px]'>
                                    <Paragraph size="label" className="text-Gray900 font-bold">First Name</Paragraph>
                                </Label>
                                <Input
                                    id="fname"
                                    name="fname"
                                    type="text"
                                    disabled={!isEditable}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.fname}
                                    onChange={formik.handleChange}
                                />
                                {formik.touched.fname && formik.errors.fname && (
                                    <p className="text-red-500 text-sm mt-1">{formik.errors.fname}</p>
                                )}
                            </div>
                            <div className='w-full'>
                                <Label htmlFor="lname" className='mb-[8px]'>
                                    <Paragraph size="label" className="text-Gray900 font-bold">Last Name</Paragraph>
                                </Label>
                                <Input
                                    id="lname"
                                    name="lname"
                                    type="text"
                                    disabled={!isEditable}
                                    value={formik.values.lname}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                                {formik.touched.lname && formik.errors.lname && (
                                    <p className="text-red-500 text-sm mt-1">{formik.errors.lname}</p>
                                )}
                            </div>
                        </div>


                        {/* Email */}
                        <div>
                            <Label htmlFor="email" className='mb-[8px]'>
                                <Paragraph size="label" className="text-Gray900 font-bold">Email</Paragraph>
                            </Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                disabled={!isEditable}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                            )}
                        </div>

                        {/* Practise Phone Number */}
                        <div>
                            <Label htmlFor="phone" className='mb-[8px]'>
                                <Paragraph size="label" className="text-Gray900 font-bold">Practice phone number</Paragraph>
                            </Label>
                            <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                disabled={!isEditable}
                                onBlur={formik.handleBlur}
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.phone && formik.errors.phone && (
                                <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
                            )}
                        </div>

                        {/*Personal phone number Optional*/}
                        <div>
                            <Label htmlFor="personalPhone" className='mb-[8px]'>
                                <Paragraph size="label" className="text-Gray900 font-bold">Work or cell phone number</Paragraph>
                            </Label>
                            <Input
                                id="personalPhone"
                                name="personalPhone"
                                type="tel"
                                onBlur={formik.handleBlur}
                                disabled={!isEditable}
                                value={formik.values.personalPhone}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.personalPhone && formik.errors.personalPhone && (
                                <p className="text-red-500 text-sm mt-1">{formik.errors.personalPhone}</p>
                            )}
                        </div>


                        {/* Allow Patient */}
                        <div>
                            <Label htmlFor="phone" className='mb-[8px]'>
                                <Paragraph size="label" className="text-Gray900 font-bold">Allow Patients to call my</Paragraph>
                            </Label>
                            <Select disabled={!isEditable}
                                value={formik.values.allowPatient}
                                onValueChange={(value) => formik.setFieldValue("allowPatient", value)}>
                                <SelectTrigger disabled={!isEditable} className="w-[169px]">
                                    <SelectValue placeholder="Select permission" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="personal">Personal</SelectItem>
                                    <SelectItem value="work">Work</SelectItem>
                                    <SelectItem value="public">Public</SelectItem>
                                    <SelectItem value="neither">Neither</SelectItem>

                                </SelectContent>
                            </Select>
                            {formik.touched.allowPatient && formik.errors.allowPatient && (
                                <p className="text-red-500 text-sm mt-1">{formik.errors.allowPatient}</p>
                            )}
                        </div>

                        {/*Office address Input div */}
                        <div className='flex flex-col gap-[12px] sm:gap-[14px] md:gap-[16px] lg:gap-[18px] xl:gap-[19px] 2xl:gap-[20px]'>
                            {/* Headings */}
                            <div>
                                <Heading level="minih" className='font-urbanist font-[700] text-[#424242]'>What is your office address?</Heading>
                            </div>

                            {/* Inputs */}
                            <div className='flex flex-col gap-[8px] sm:gap-[10px] md:gap-[12px] lg:gap-[14px] xl:gap-[15px] 2xl:gap-[16px]
                                        '>

                                {/* State & Zip Code */}
                                <div className='flex flex-col lg:flex-row gap-4'>

                                    {/* City */}
                                    <div className=' w-full lg:w-[75%]'>
                                        <Label htmlFor="city" className='mb-[8px]'>
                                            <Paragraph size="label" className="text-Gray900 font-bold">City</Paragraph>
                                        </Label>
                                        <Input
                                            id="city"
                                            name="city"
                                            type="text"
                                            disabled={!isEditable}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.city}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.touched.city && formik.errors.city && (
                                            <p className="text-red-500 text-sm mt-1">{formik.errors.city}</p>
                                        )}
                                    </div>
                                    {/* State */}
                                    <div className='w-full lg:w-[25%]'>
                                        <Label htmlFor="state" className='mb-[8px]'>
                                            <Paragraph size="label" className="text-Gray900 font-bold">State</Paragraph>
                                        </Label>
                                        <Select disabled={!isEditable}
                                            value={formik.values.state}
                                            onValueChange={(value) => formik.setFieldValue("state", value)}>
                                            <SelectTrigger disabled={!isEditable} className="w-full">
                                                <SelectValue placeholder="Select state" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="california">California</SelectItem>
                                                <SelectItem value="texas">Texas</SelectItem>
                                                <SelectItem value="new-york">New York</SelectItem>
                                                <SelectItem value="florida">Florida</SelectItem>
                                                <SelectItem value="illinois">Illinois</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        {formik.touched.state && formik.errors.state && (
                                            <p className="text-red-500 text-sm mt-1">{formik.errors.state}</p>
                                        )}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Save Changes button */}
                    {isEditable && (<div>
                        <Button variant="secondary" className='w-full' type='submit' >
                            <Paragraph size="btnText" className="text-White font-black font-satoshi">Save changes
                            </Paragraph>
                        </Button>
                    </div>)}
                </form>
            </div>

        </>
    )
}

export default PersonalInfo