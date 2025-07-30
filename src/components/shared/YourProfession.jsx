import React from 'react'
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

function YourProfession() {
    return (
        <>
            <div className='w-full flex flex-col gap-[20px] sm:gap-[23px] md:gap-[26px] lg:gap-[28px] xl:gap-[30px] 2xl:gap-[32px]'>

                {/* Heading */}
                <div>
                    <Heading level="mdSubText" className='font-urbanist font-[700] text-[#424242]'>Tell us more about your role and services</Heading>
                    <Paragraph size='md' className='text-[#4D4D4D] font-urbanist font-[600] mt-[6px] md:mt-[7px] lg:mt-[7px] 2xl:mt-[8px]'>Please enter the following information below</Paragraph>
                </div>

                {/* Input div */}
                <div className='flex flex-col gap-[14px] sm:gap-[16px] md:gap-[18px] lg:gap-[21px] xl:gap-[22.5px] 2xl:gap-[24px]'>

                    {/* credentials */}
                    <div className='w-full'>
                        <Label htmlFor="fname" className='mb-[8px]'>
                            <Paragraph size="label" className="text-Gray900 font-bold">What are your credentials?</Paragraph>
                        </Label>

                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select credential" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="lpc">Licensed Professional Counselor (LPC)</SelectItem>
                                <SelectItem value="lcsw">Licensed Clinical Social Worker</SelectItem>
                                <SelectItem value="psyd">Doctor of Psychology</SelectItem>
                            </SelectContent>
                        </Select>

                    </div>


                    {/* Number of patients */}
                    <div>
                        <Label htmlFor="noOfPatient" className='mb-[8px]'>
                            <Paragraph size="label" className="text-Gray900 font-bold">Number of patients</Paragraph>
                        </Label>
                        <Input
                            id="noOfPatient"
                            type="number"
                            required
                        />
                    </div>

                    {/* Professional License Number */}
                    <div>
                        <Label htmlFor="License" className='mb-[8px]'>
                            <Paragraph size="label" className="text-Gray900 font-bold">Professional License Number?</Paragraph>
                        </Label>
                        <Input
                            id="License"
                            type="text"
                            required
                        />
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
                                    type="text"
                                    required
                                />
                            </div>
                             {/* State */}
                            <div className='w-full'>
                                <Label htmlFor="state" className='mb-[8px]'>
                                    <Paragraph size="label" className="text-Gray900 font-bold">License State</Paragraph>
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
                            type="text"
                            required
                        />
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default YourProfession
