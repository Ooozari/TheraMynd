import React from 'react'
import { Edit } from '@/svgs/Icons'
import { Heading, Paragraph } from "@/components/ui/typography";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

function PersonalInfo() {
    return (
        <>
            <div className='bg-White shadow-[0px 17.32px 34.65px 0px #1018280D] rounded-[15px] py-[12px] px-[13px] sm:py-[17px] sm:px-[18px] md:py-[22px] md:px-[23px] lg:py-[27px] lg:px-[28px] xl:py-[30px] xl:px-[31px] 2xl:py-[32px] 2xl:px-[33px]  flex flex-col
             gap-[14px] sm:gap-[16px] md:gap-[18px] lg:gap-[21px] xl:gap-[22.5px] 2xl:gap-[24px] max-w-[668px]'>
                {/* Header */}
                <div className='flex items-center'>
                    {/* Icon */}
                    <div>

                    </div>
                    {/* Text */}
                    <div className='w-full'>
                        <div className='flex justify-between items-baseline'>
                            <Heading level="lgSubText" className="font-[800] font-urbanist text-[#292929]">
                                Personal Info
                            </Heading>
                            <button className='cursor-pointer'>
                                <Paragraph size="md" className="text-MindfulBrown60 font-[700] font-urbanist flex gap-1 items-center">
                                    <span>Edit</span>
                                    <span><Edit /></span>
                                </Paragraph>
                            </button>
                        </div>
                        <Paragraph size="md" className="text-[#292929] font-medium font-urbanist leading-1">Add, update, or remove your billing methods.
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
                                // value={email}
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
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}
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
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
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
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            required
                        />
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
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            required
                        />
                    </div>


                    {/* Allow Patient */}
                    <div>
                        <Label htmlFor="phone" className='mb-[8px]'>
                            <Paragraph size="label" className="text-Gray900 font-bold">Practice phone number</Paragraph>
                        </Label>
                        <Select>
                            <SelectTrigger className="w-[169px]">
                                <SelectValue placeholder="Select permission" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="call">Personal</SelectItem>
                                <SelectItem value="message">Work</SelectItem>
                                <SelectItem value="schedule">Public</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Save Changes button */}
            </div>
        </>
    )
}

export default PersonalInfo
