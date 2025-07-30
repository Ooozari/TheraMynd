'use client';
import React from 'react'
import { Edit, PersonIcon } from '@/svgs/Icons'
import { Heading, Paragraph } from "@/components/ui/typography";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { User, Pencil } from "lucide-react";
import { useState } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

function PersonalInfo() {
    const [Status, setStatus] = useState(true);
    const [isEditable, setisEditable] = useState(false)
    const handleEdit = () => {
        setStatus(false)
        setisEditable(true)
    } 
    const handleSaveChanges = () => {
        setStatus(true)
        setisEditable(false)
    }
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
                            <div className="absolute -bottom-0.5 -right-0.5 bg-Secondary p-1.5 rounded-full">
                                <Edit color="white" />
                            </div>
                        </div>
                    </div>

                    {/* Text */}
                    <div className='w-full'>
                        <div className='flex justify-between items-baseline'>
                            <Heading level="lgSubText" className="font-[800] font-urbanist text-[#292929]">
                                Personal Info
                            </Heading>
                            <button className='cursor-pointer' onClick={handleEdit}>
                                <Paragraph size="md" className="text-MindfulBrown60 font-[700] font-urbanist flex gap-1 items-center">
                                    <span>Edit</span>
                                    <span><Edit /></span>
                                </Paragraph>
                            </button>
                        </div>
                        <Paragraph size="md" className="text-[#292929] font-medium font-urbanist leading-2.5">Add, update, or remove your billing methods.
                        </Paragraph>
                    </div>
                </div>

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
                                type="text"
                                disabled={Status}
                                value='abc@gamil.com'
                                // onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className='w-full'>
                            <Label htmlFor="lname" className='mb-[8px]'>
                                <Paragraph size="label" className="text-Gray900 font-bold">Last Name</Paragraph>
                            </Label>
                            <Input
                                id="lname"
                                type="text"
                                disabled={Status}
                                required
                            />
                        </div>
                    </div>


                    {/* Email */}
                    <div>
                        <Label htmlFor="email" className='mb-[8px]'>
                            <Paragraph size="label" className="text-Gray900 font-bold">Email</Paragraph>
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            disabled={Status}
                            required
                        />
                    </div>

                    {/* Practise Phone Number */}
                    <div>
                        <Label htmlFor="phone" className='mb-[8px]'>
                            <Paragraph size="label" className="text-Gray900 font-bold">Practice phone number</Paragraph>
                        </Label>
                        <Input
                            type="tel"
                            id="phone"
                            name="phone"
                            disabled={Status}
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            required
                        />
                    </div>

                    {/*Personal phone number Optional*/}
                    <div>
                        <Label htmlFor="phone" className='mb-[8px]'>
                            <Paragraph size="label" className="text-Gray900 font-bold">Work or cell phone number</Paragraph>
                        </Label>
                        <Input
                            type="tel"
                            id="phone"
                            name="phone"
                            disabled={Status}
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            required
                        />
                    </div>


                    {/* Allow Patient */}
                    <div>
                        <Label htmlFor="phone" className='mb-[8px]'>
                            <Paragraph size="label" className="text-Gray900 font-bold">Allow Patients to call my</Paragraph>
                        </Label>
                        <Select disabled={Status}>
                            <SelectTrigger disabled={Status} className="w-[169px]">
                                <SelectValue placeholder="Select permission" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="call">Personal</SelectItem>
                                <SelectItem value="message">Work</SelectItem>
                                <SelectItem value="schedule">Public</SelectItem>
                                <SelectItem value="schedule">Neither</SelectItem>
                            </SelectContent>
                        </Select>
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
                                        type="text"
                                        value='New York'
                                        disabled={Status}
                                        required
                                    />
                                </div>
                                {/* State */}
                                <div className='w-full lg:w-[25%]'>
                                    <Label htmlFor="state" className='mb-[8px]'>
                                        <Paragraph size="label" className="text-Gray900 font-bold">State</Paragraph>
                                    </Label>
                                    <Select disabled={Status}>
                                        <SelectTrigger disabled={Status} className="w-full">
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

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Save Changes button */}
                {isEditable && (<div>
                    <Button variant="secondary" className='w-full' onClick={handleSaveChanges}>
                        <Paragraph size="btnText" className="text-White font-black font-satoshi">Save changes
                        </Paragraph>
                    </Button>
                </div>)}

            </div>
        </>
    )
}

export default PersonalInfo
