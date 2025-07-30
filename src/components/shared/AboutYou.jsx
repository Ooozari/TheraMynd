import React from 'react'
import { Heading, Paragraph } from "@/components/ui/typography";
import { Label, Input } from "@/components/ui";
import Datepicker from '@/components/ui/Datepicker'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"



function AboutYou() {
    return (
        <>
            <div className='w-full flex flex-col gap-[20px] sm:gap-[23px] md:gap-[26px] lg:gap-[28px] xl:gap-[30px] 2xl:gap-[32px]'>

                {/* Heading */}
                <div>
                    <Heading level="mdSubText" className='font-urbanist font-[700] text-[#424242]'>Welcome! Let’s Get You Set Up</Heading>
                    <Paragraph size='md' className='text-[#4D4D4D] font-urbanist font-[600] mt-[6px] md:mt-[7px] lg:mt-[7px] 2xl:mt-[8px]'>Please enter the following information below</Paragraph>
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

                    {/* DOB */}
                    <div>
                        <Datepicker />
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
                                type="address"
                                required
                            />
                        </div>
                        {/* Address 2 */}
                        <div>
                            <Label htmlFor="address2" className='mb-[8px]'>
                                <Paragraph size="label" className="text-Gray900 font-bold">Address 2</Paragraph>
                            </Label>
                            <Input
                                id="address2"
                                type="address"
                                required
                            />
                        </div>
                        {/* City */}
                        <div>
                            <Label htmlFor="city" className='mb-[8px]'>
                                <Paragraph size="label" className="text-Gray900 font-bold">City</Paragraph>
                            </Label>
                            <Input
                                id="city"
                                type="address"
                                required
                            />
                        </div>

                        {/* State & Zip Code */}
                        <div className='flex flex-col lg:flex-row gap-4'>
                            {/* State */}
                            <div className='w-full'>
                                <Label htmlFor="state" className='mb-[8px]'>
                                    <Paragraph size="label" className="text-Gray900 font-bold">State</Paragraph>
                                </Label>
                                <Select>
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

                            </div>
                            {/* Zip Code */}
                            <div className='w-full'>
                                <Label htmlFor="zipcode" className='mb-[8px]'>
                                    <Paragraph size="label" className="text-Gray900 font-bold">Zip Code</Paragraph>
                                </Label>
                                <Input
                                    id="zipcode"
                                    type="text"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}

export default AboutYou
