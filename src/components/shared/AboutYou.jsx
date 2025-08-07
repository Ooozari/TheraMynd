'use client';
import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Heading, Paragraph } from "@/components/ui/typography";
import { Button } from "@/components/ui/button"
import { Label, Input } from "@/components/ui";
import Datepicker from '@/components/ui/Datepicker'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

function AboutYou({ setCurrentStep }) {
    const formik = useFormik({
        initialValues: {
            fname: '',
            lname: '',
            dob: '',
            email: '',
            practicePhone: '',
            personalPhone: '',
            dateOfBirth: '',
            permission: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zipcode: '',
        },
        validationSchema: Yup.object({
            fname: Yup.string().required("First name is required"),
            lname: Yup.string().required("Last name is required"),
            email: Yup.string().email("Invalid email").required("Email is required"),
            practicePhone: Yup.string().required("Practice phone is required"),
            permission: Yup.string().required("Permission is required"),
            dateOfBirth: Yup.string().required("Date of Birth is required"),
            address1: Yup.string().required("Address 1 is required"),
            address2: Yup.string().required("Address 2 is required"),
            city: Yup.string().required("City is required"),
            state: Yup.string().required("State is required"),
            zipcode: Yup.number().typeError("Must be a number").required("Zip code is required"),
        }),
        onSubmit: (values) => {
            setCurrentStep(2);
        },
    });
    return (
        <>
            <div className='w-full flex flex-col gap-[20px] sm:gap-[23px] md:gap-[26px] lg:gap-[28px] xl:gap-[30px] 2xl:gap-[32px]'>

                {/* Heading */}
                <div>
                    <Heading level="mdSubText" className='font-urbanist font-[700] text-[#424242]'>Welcome! Let’s Get You Set Up</Heading>
                    <Paragraph size='md' className='text-[#4D4D4D] font-urbanist font-[600] mt-[6px] md:mt-[7px] lg:mt-[7px] 2xl:mt-[8px]'>Please enter the following information below</Paragraph>
                </div>

                <form onSubmit={formik.handleSubmit}>
                    <div className='w-full flex flex-col gap-[20px] sm:gap-[23px] md:gap-[26px] lg:gap-[28px] xl:gap-[30px] 2xl:gap-[32px]'>
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
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.fname}
                                    />
                                    {formik.touched.fname && formik.errors.fname && (
                                        <p className="text-red-500 text-xs mt-1">{formik.errors.fname}</p>
                                    )}
                                </div>
                                <div className='w-full'>
                                    <Label htmlFor="lname" className='mb-[8px]'>
                                        <Paragraph size="label" className="text-Gray900 font-bold">Last Name</Paragraph>
                                    </Label>
                                    <Input
                                        id="lname"
                                        type="text"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.lname}
                                    />
                                    {formik.touched.lname && formik.errors.lname && (
                                        <p className="text-red-500 text-xs mt-1">{formik.errors.lname}</p>
                                    )}
                                </div>
                            </div>

                            {/* DOB */}
                            <div>
                                <Datepicker formik={formik} />
                            </div>

                            {/* Email */}
                            <div>
                                <Label htmlFor="email" className='mb-[8px]'>
                                    <Paragraph size="label" className="text-Gray900 font-bold">Email</Paragraph>
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
                                )}
                            </div>

                            {/* Practise Phone Number */}
                            <div>
                                <Label htmlFor="practicePhone" className='mb-[8px]'>
                                    <Paragraph size="label" className="text-Gray900 font-bold">Practice phone number</Paragraph>
                                </Label>
                                <Input
                                    id="practicePhone"
                                    name="practicePhone"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.practicePhone}
                                />
                                {formik.touched.practicePhone && formik.errors.practicePhone && (
                                    <p className="text-red-500 text-xs mt-1">{formik.errors.practicePhone}</p>
                                )}
                            </div>

                            {/*Personal phone number Optional*/}
                            <div>
                                <Label htmlFor="phone" className='mb-[8px]'>
                                    <Paragraph size="label" className="text-Gray900 font-bold">Personal phone number (Optional)</Paragraph>
                                </Label>
                                <Input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                />
                            </div>


                            {/* Allow Patient */}
                            <div>
                                <Label htmlFor="permission" className='mb-[8px]'>
                                    <Paragraph size="label" className="text-Gray900 font-bold">Allow patients to Call My</Paragraph>
                                </Label>
                                <Select onValueChange={(value) => formik.setFieldValue("permission", value)}>
                                    <SelectTrigger className="w-[169px]">
                                        <SelectValue placeholder="Select permission" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="call">Personal</SelectItem>
                                        <SelectItem value="message">Work</SelectItem>
                                        <SelectItem value="schedule">Public</SelectItem>
                                    </SelectContent>
                                </Select>
                                {formik.touched.permission && formik.errors.permission && (
                                    <p className="text-red-500 text-xs mt-1">{formik.errors.permission}</p>
                                )}
                            </div>
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
                                {/* Address One */}
                                <div>
                                    <Label htmlFor="address1" className='mb-[8px]'>
                                        <Paragraph size="label" className="text-Gray900 font-bold">Address 1</Paragraph>
                                    </Label>
                                    <Input
                                        id="address1"
                                        name="address1"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.address1}
                                    />
                                    {formik.touched.address1 && formik.errors.address1 && (
                                        <p className="text-red-500 text-xs mt-1">{formik.errors.address1}</p>
                                    )}
                                </div>
                                {/* Address 2 */}
                                <div>
                                    <Label htmlFor="address2" className='mb-[8px]'>
                                        <Paragraph size="label" className="text-Gray900 font-bold">Address 2</Paragraph>
                                    </Label>
                                    <Input
                                        id="address2"
                                        name="address2"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.address2}
                                    />
                                    {formik.touched.address2 && formik.errors.address2 && (
                                        <p className="text-red-500 text-xs mt-1">{formik.errors.address2}</p>
                                    )}
                                </div>
                                {/* City */}
                                <div>
                                    <Label htmlFor="city" className='mb-[8px]'>
                                        <Paragraph size="label" className="text-Gray900 font-bold">City</Paragraph>
                                    </Label>
                                    <Input
                                        id="city"
                                        name="city"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.city}
                                    />
                                    {formik.touched.city && formik.errors.city && (
                                        <p className="text-red-500 text-xs mt-1">{formik.errors.city}</p>
                                    )}
                                </div>

                                {/* State & Zip Code */}
                                <div className='flex flex-col lg:flex-row gap-4'>
                                    {/* State */}
                                    <div className='w-full'>
                                        <Label htmlFor="state" className='mb-[8px]'>
                                            <Paragraph size="label" className="text-Gray900 font-bold">State</Paragraph>
                                        </Label>
                                        <Select onValueChange={(value) => formik.setFieldValue("state", value)}>
                                            <SelectTrigger className="w-full">
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
                                            <p className="text-red-500 text-xs mt-1">{formik.errors.state}</p>
                                        )}
                                    </div>
                                    {/* Zip Code */}
                                    <div className='w-full'>
                                        <Label htmlFor="zipcode" className='mb-[8px]'>
                                            <Paragraph size="label" className="text-Gray900 font-bold">Zip Code</Paragraph>
                                        </Label>
                                        <Input
                                            id="zipcode"
                                            name="zipcode"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.zipcode}
                                        />
                                        {formik.touched.zipcode && formik.errors.zipcode && (
                                            <p className="text-red-500 text-xs mt-1">{formik.errors.zipcode}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center mt-6">
                            <Button
                                type="submit"
                                variant="secondary"
                                className="w-full bg-[#00738A] font-satoshi font-[900]"
                            >
                                <Paragraph size="normal">
                                    Continue
                                </Paragraph>
                            </Button>
                        </div>
                    </div>

                </form>

            </div>
        </>
    )
}

export default AboutYou