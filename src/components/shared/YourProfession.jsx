'use client';
import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Heading, Paragraph } from "@/components/ui/typography";
import { Label, Input } from "@/components/ui";
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

function YourProfession({ setCurrentStep }) {
    const formik = useFormik({
        initialValues: {
            credentials: '',
            noOfPatient: '',
            licenseNumber: '',
            board: '',
            state: '',
            npi: '',
        },
        validationSchema: Yup.object({
            credentials: Yup.string().required("Credential is required"),
            noOfPatient: Yup.number()
                .typeError("Must be a number")
                .required("Number of patients is required"),
            licenseNumber: Yup.number().typeError("Must be a number")
                .required("License number is required"),
            board: Yup.string().required("Licensing board is required"),
            state: Yup.string().required("License state is required"),
            npi: Yup.number().required("NPI number is required").typeError("Must be a number"),
        }),
        onSubmit: (values) => {
            setCurrentStep(3);
        },
    });
    return (
        <>
            <div className='w-full flex flex-col gap-[20px] sm:gap-[23px] md:gap-[26px] lg:gap-[28px] xl:gap-[30px] 2xl:gap-[32px]'>

                {/* Heading */}
                <div>
                    <Heading level="mdSubText" className='font-urbanist font-[700] text-[#424242]'>Tell us more about your role and services</Heading>
                    <Paragraph size='md' className='text-[#4D4D4D] font-urbanist font-[600] mt-[6px] md:mt-[7px] lg:mt-[7px] 2xl:mt-[8px]'>Please enter the following information below</Paragraph>
                </div>

                <form onSubmit={formik.handleSubmit}>
                    <div className='w-full flex flex-col gap-[20px] sm:gap-[23px] md:gap-[26px] lg:gap-[28px] xl:gap-[30px] 2xl:gap-[32px]'>
                        {/* Input div */}
                        <div className='flex flex-col gap-[14px] sm:gap-[16px] md:gap-[18px] lg:gap-[21px] xl:gap-[22.5px] 2xl:gap-[24px]'>

                            {/* credentials */}
                            <div className='w-full'>
                                <Label htmlFor="fname" className='mb-[8px]'>
                                    <Paragraph size="label" className="text-Gray900 font-bold">What are your credentials?</Paragraph>
                                </Label>

                                <Select onValueChange={(value) => formik.setFieldValue("credentials", value)}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select credential" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="lpc">Licensed Professional Counselor (LPC)</SelectItem>
                                        <SelectItem value="lcsw">Licensed Clinical Social Worker</SelectItem>
                                        <SelectItem value="psyd">Doctor of Psychology</SelectItem>
                                    </SelectContent>
                                </Select>
                                {formik.touched.credentials && formik.errors.credentials && (
                                    <p className="text-red-500 text-xs mt-1">{formik.errors.credentials}</p>
                                )}

                            </div>


                            {/* Number of patients */}
                            <div>
                                <Label htmlFor="noOfPatient" className='mb-[8px]'>
                                    <Paragraph size="label" className="text-Gray900 font-bold">Number of patients</Paragraph>
                                </Label>
                                <Input
                                    id="noOfPatient"
                                    name="noOfPatient"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.noOfPatient}
                                />
                                {formik.touched.noOfPatient && formik.errors.noOfPatient && (
                                    <p className="text-red-500 text-xs mt-1">{formik.errors.noOfPatient}</p>
                                )}
                            </div>

                            {/* Professional License Number */}
                            <div>
                                <Label htmlFor="License" className='mb-[8px]'>
                                    <Paragraph size="label" className="text-Gray900 font-bold">Professional License Number?</Paragraph>
                                </Label>
                                <Input
                                    id="licenseNumber"
                                    name="licenseNumber"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.licenseNumber}
                                />
                                {formik.touched.licenseNumber && formik.errors.licenseNumber && (
                                    <p className="text-red-500 text-xs mt-1">{formik.errors.licenseNumber}</p>
                                )}
                            </div>

                            {/* License (Board & state) + Button  */}
                            <div className='flex flex-col gap-[14px] sm:gap-[16px] md:gap-[18px] lg:gap-[21px] xl:gap-[22.5px] 2xl:gap-[24px] justify-center'>
                                {/* License Board & state */}
                                <div className='flex flex-col lg:flex-row gap-4'>
                                    {/* Board */}
                                    <div className='w-full'>
                                        <Label htmlFor="board" className='mb-[8px]'>
                                            <Paragraph size="label" className="text-Gray900 font-bold">Licensing board</Paragraph>
                                        </Label>
                                        <Input
                                            id="board"
                                            name="board"
                                            type="text"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.board}
                                        />
                                        {formik.touched.board && formik.errors.board && (
                                            <p className="text-red-500 text-xs mt-1">{formik.errors.board}</p>
                                        )}
                                    </div>
                                    {/* State */}
                                    <div className='w-full'>
                                        <Label htmlFor="state" className='mb-[8px]'>
                                            <Paragraph size="label" className="text-Gray900 font-bold">License State</Paragraph>
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
                                </div>

                                {/* + Add Another Professional License Button */}
                                <div className='text-center'>
                                    <Button variant="secondaryLight">
                                        <Paragraph size="md" className="font-medium font-satoshi">+ Add Another Professional License
                                        </Paragraph>
                                    </Button>
                                </div>
                            </div>



                            {/* NPI Number */}
                            <div>
                                <Label htmlFor="npi" className='mb-[8px]'>
                                    <Paragraph size="label" className="text-Gray900 font-bold">NPI number</Paragraph>
                                </Label>
                                <Input
                                    id="npi"
                                    name="npi"
                                    type="text"
                                    inputMode="numeric"
                                    className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.npi}
                                />
                                {formik.touched.npi && formik.errors.npi && (
                                    <p className="text-red-500 text-xs mt-1">{formik.errors.npi}</p>
                                )}
                            </div>

                        </div>

                        <div>
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

export default YourProfession
