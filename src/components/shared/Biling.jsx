'use client';
import React, { useState } from 'react'
import { Heading, Paragraph } from "@/components/ui/typography";
import { Switch } from "@/components/ui/switch"

import Image from 'next/image';
import visa from '@/assets/visa.png'
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
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

function Biling() {
    const [addCard, setAddCard] = useState(false)
    const handleAddNewCard = () => {
        setAddCard(true)
    }
    const handleAddCard = () => {
        setAddCard(false)
    }
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);
    console.log(showSuccessDialog)
    return (
        <>
            {addCard ?
                (
                    <>

                        <form onSubmit={(e) => {
                            e.preventDefault();
                            const form = e.target;
                            if (form.checkValidity()) {
                                setShowSuccessDialog(true);
                                setAddCard(false);
                            } else {
                                form.reportValidity();
                            }
                        }}>
                            <div className='bg-White shadow-[0px 17.32px 34.65px 0px #1018280D] rounded-[15px] py-[12px] px-[13px] sm:py-[17px] sm:px-[18px] md:py-[22px] md:px-[23px] lg:py-[27px] lg:px-[28px] xl:py-[30px] xl:px-[31px] 2xl:py-[32px] 2xl:px-[33px]  flex flex-col
                            gap-[14px] sm:gap-[16px] md:gap-[18px] lg:gap-[21px] xl:gap-[22.5px] 2xl:gap-[24px] max-w-[668px]'>

                                {/* Header */}
                                <div className=''>
                                    <Heading level="lgSubText" className="font-[800] font-urbanist text-[#292929]">
                                        Add new card
                                    </Heading>
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
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Card Number & Cvc */}
                                    <div className='flex flex-col lg:flex-row gap-4'>

                                        {/* City */}
                                        <div className=' w-full lg:w-[75%]'>
                                            <Label htmlFor="cardNum" className='mb-[8px]'>
                                                <Paragraph size="label" className="text-Gray900 font-bold">Card Number</Paragraph>
                                            </Label>
                                            <Input
                                                id="cardNum"
                                                type="text"
                                                pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}"
                                                required
                                            />
                                        </div>
                                        {/* State */}
                                        <div className='w-full lg:w-[25%]'>
                                            <Label htmlFor="cvv" className='mb-[8px]'>
                                                <Paragraph size="label" className="text-Gray900 font-bold">CVV</Paragraph>
                                            </Label>
                                            <Input
                                                id="cvv"
                                                type="text"
                                                required
                                            />

                                        </div>
                                    </div>

                                    {/* Street Address */}
                                    <div>
                                        <Label htmlFor="Address" className='mb-[8px]'>
                                            <Paragraph size="label" className="text-Gray900 font-bold">Street Address</Paragraph>
                                        </Label>
                                        <Input
                                            type="address"
                                            id="Address"
                                            name="Address"
                                            required
                                        />
                                    </div>

                                    {/*State & Zip Code*/}
                                    <div className='flex flex-col lg:flex-row gap-4'>
                                        {/* City */}
                                        <div className=' w-full lg:w-[75%]'>
                                            <Label htmlFor="city" className='mb-[8px]'>
                                                <Paragraph size="label" className="text-Gray900 font-bold">City</Paragraph>
                                            </Label>
                                            <Input
                                                id="city"
                                                type="text"
                                                required
                                            />
                                        </div>
                                        {/* State */}
                                        <div className='w-full lg:w-[25%]'>
                                            <Label htmlFor="state" className='mb-[8px]'>
                                                <Paragraph size="label" className="text-Gray900 font-bold">State</Paragraph>
                                            </Label>
                                            <Select required>
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

                                    {/* Country and Zip */}
                                    <div className='flex flex-col lg:flex-row gap-4'>
                                        {/* City */}
                                        <div className=' w-full lg:w-[75%]'>
                                            <Label htmlFor="country" className='mb-[8px]'>
                                                <Paragraph size="label" className="text-Gray900 font-bold">Country</Paragraph>
                                            </Label>
                                            <Select required>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select country" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="pakistan">Pakistan</SelectItem>
                                                    <SelectItem value="india">India</SelectItem>
                                                    <SelectItem value="united-kingdom">United Kingdom</SelectItem>
                                                    <SelectItem value="canada">Canada</SelectItem>
                                                    <SelectItem value="australia">Australia</SelectItem>

                                                </SelectContent>
                                            </Select>
                                        </div>
                                        {/* State */}
                                        <div className='w-full lg:w-[25%]'>
                                            <Label htmlFor="zip" className='mb-[8px]'>
                                                <Paragraph size="label" className="text-Gray900 font-bold">Zip</Paragraph>
                                            </Label>
                                            <Input
                                                id="zip"
                                                type="number"
                                                required
                                            />
                                        </div>
                                    </div>

                                </div>

                                {/* Add Card button */}
                                <div>

                                    <Button variant="secondary" className='w-full' type="submit">
                                        <Paragraph size="btnText" className="text-White font-black font-satoshi">Add card
                                        </Paragraph>
                                    </Button>
                                </div>
                            </div>

                        </form>


                    </>

                )

                : (<div className="bg-White shadow-[0px 17.32px 34.65px 0px #1018280D] rounded-[15px] py-[12px] px-[13px] sm:py-[17px] sm:px-[18px] md:py-[22px] md:px-[23px] lg:py-[27px] lg:px-[28px] xl:py-[30px] xl:px-[31px] 2xl:py-[32px] 2xl:px-[33px] flex flex-col gap-[14px] sm:gap-[16px] md:gap-[18px] lg:gap-[21px] xl:gap-[22.5px] 2xl:gap-[24px] w-full">

                    {/* Heading and SubHead */}
                    <div className='flex flex-col gap-2'>
                        <Heading level="lgSubText" className="font-[800] font-urbanist text-[#292929]">
                            Billing & Payment
                        </Heading>
                        <Paragraph size="md" className="text-[#292929] font-medium font-urbanist leading-2.5">Add, update, or remove your billing methods.
                        </Paragraph>
                    </div>

                    <div className='flex flex-col gap-[7px] sm:gap-[8px] md:gap-[9px] lg:gap-[10px] xl:gap-[11px] 2xl:gap-[12px]'>
                        <div className='flex flex-col gap-[6px] sm:gap-[7px] md:gap-[9px] lg:gap-[10px] xl:gap-[11px] 2xl:gap-[12px]'>
                            <div className="flex justify-between items-center border-1 border-[#E1E1E0] h-[42px] sm:h-[53px] md:h-[64px] lg:h-[74px] xl:h-[80px] 2xl:h-[86px] rounded-[12px] px-[12px] sm:px-[15px] md:px-[18px] lg:px-[21px] xl:px-[23px] 2xl:px-[25px]">

                                <Label htmlFor="card">
                                    <div className='w-[30px] h-[20px] sm:w-[34px] sm:h-[22px] md:w-[37px] md:h-[24px] lg:w-[41px] lg:h-[27px] xl:w-[43px] xl:h-[28.5px] 2xl:w-[45px] 2xl:h-[30px]'>
                                        <Image
                                            src={visa}
                                            alt='card icon'
                                            className='object-cover w-full h-full'
                                        />
                                    </div>
                                    <Paragraph size="md" className="text-[#292929] font-[600] font-urbanist">
                                        Visa ending in 6396
                                    </Paragraph>
                                </Label>

                                <div className='flex gap-[20px] sm:gap-[27px] md:gap-[34px] lg:gap-[41px] xl:gap-[46px] 2xl:gap-[50px]'>
                                    <Paragraph size="md" className="text-MindfulBrown60 font-[800] font-urbanist">
                                        <Switch id="card" />
                                    </Paragraph>
                                    <div className='flex gap-[10px] sm:gap-[12px] md:gap-[14px] lg:gap-[16px] xl:gap-[18px] 2xl:gap-[20px]'>
                                        <Paragraph size="md" className="text-MindfulBrown60 font-[600] font-urbanist cursor-pointer">
                                            Edit
                                        </Paragraph>
                                        <Paragraph size="md" className="text-PresentRed80 font-[600] font-urbanist cursor-pointer">
                                            Remove
                                        </Paragraph>
                                    </div>

                                </div>
                            </div>


                        </div>

                        <div className='flex flex-col gap-[6px] sm:gap-[7px] md:gap-[9px] lg:gap-[10px] xl:gap-[11px] 2xl:gap-[12px]'>
                            <div className="flex justify-between items-center border-1 border-[#E1E1E0] h-[42px] sm:h-[53px] md:h-[64px] lg:h-[75px] xl:h-[80px] 2xl:h-[86px] rounded-[12px] px-[12px] sm:px-[15px] md:px-[18px] lg:px-[21px] xl:px-[23px] 2xl:px-[25px]">

                                <Label htmlFor="card">
                                    <div className='w-[30px] h-[20px] sm:w-[34px] sm:h-[22px] md:w-[37px] md:h-[24px] lg:w-[41px] lg:h-[27px] xl:w-[43px] xl:h-[28.5px] 2xl:w-[45px] 2xl:h-[30px]'>
                                        <Image
                                            src={visa}
                                            alt='card icon'
                                            className='object-cover w-full h-full'
                                        />
                                    </div>
                                    <Paragraph size="md" className="text-[#292929] font-[600] font-urbanist">
                                        Visa ending in 6396
                                    </Paragraph>
                                </Label>

                                <div className='flex gap-[20px] sm:gap-[27px] md:gap-[34px] lg:gap-[41px] xl:gap-[46px] 2xl:gap-[50px]'>
                                    <Paragraph size="md" className="text-MindfulBrown60 font-[800] font-urbanist">
                                        <Switch id="card" />
                                    </Paragraph>
                                    <div className='flex gap-[10px] sm:gap-[12px] md:gap-[14px] lg:gap-[16px] xl:gap-[18px] 2xl:gap-[20px]'>
                                        <Paragraph size="md" className="text-MindfulBrown60 font-[600] font-urbanist cursor-pointer">
                                            Edit
                                        </Paragraph>
                                        <Paragraph size="md" className="text-PresentRed80 font-[600] font-urbanist cursor-pointer">
                                            Remove
                                        </Paragraph>
                                    </div>

                                </div>
                            </div>


                        </div>

                        <div>
                            <button onClick={handleAddNewCard}>
                                <Paragraph size="btnText" className="text-MindfulBrown80 font-[700] font-urbanist cursor-pointer">+ Add new card
                                </Paragraph>
                            </button>
                        </div>
                    </div>


                </div>)}


            <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Card successfully added! 🎉</DialogTitle>
                        <DialogDescription>Your new credit card has been successfully added as a payment method.</DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button
                            variant='secondary'
                            className='w-full'
                            onClick={() => setShowSuccessDialog(false)}
                        >
                            <Paragraph size="btnText" className="text-White font-black font-satoshi">Done</Paragraph>
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Biling
