'use client';
import React, { useState } from 'react';
import { Heading, Paragraph } from "@/components/ui/typography";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Plan  from './Plan'

import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { DialogDescription } from '@radix-ui/react-dialog';

function Membership() {
    const [password, setPassword] = useState('password12ioio34');
    const [openCurrentDialog, setOpenCurrentDialog] = useState(false);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [openSuccessDialog, setOpenSuccessDialog] = useState(false);

    const plans = [
        {
            type: "Basic Plan",
            userNo: "5",
            status: [
                { text: "Current", bg: "bg-MindfulBrown80" }
            ],
            price: "$8",
            specs: [
                { status: true, text: "Additional text can be added here" },
                { status: true, text: "Additional text can be added here" },
                { status: false, text: "Additional text can be added here" },
                { status: false, text: "Additional text can be added here" },
            ],
        },
        {
            type: "Business Plan",
            userNo: "12",
            status: [
                { text: "Popular", bg: "bg-SerenityGreen40" }
            ],
            price: "$8",
            specs: [
                { status: true, text: "Additional text can be added here" },
                { status: true, text: "Additional text can be added here" },
                { status: true, text: "Additional text can be added here" },
                { status: false, text: "Additional text can be added here" },
            ],
        },
        {
            type: "Gold Plan",
            userNo: "30",
            price: "$24",
            specs: [
                { status: true, text: "Additional text can be added here" },
                { status: true, text: "Additional text can be added here" },
                { status: true, text: "Additional text can be added here" },
                { status: true, text: "Additional text can be added here" },
            ],
        },
    ]
    return (
        <>
            {/* MAIN Password Card with Trigger */}
            <Dialog open={openCurrentDialog} onOpenChange={setOpenCurrentDialog}>
                <form>
                    <div className="bg-White shadow-[0px 17.32px 34.65px 0px #1018280D] rounded-[15px] py-[12px] px-[13px] sm:py-[17px] sm:px-[18px] md:py-[22px] md:px-[23px] lg:py-[27px] lg:px-[28px] xl:py-[30px] xl:px-[31px] 2xl:py-[32px] 2xl:px-[33px] flex flex-col gap-[14px] sm:gap-[16px] md:gap-[18px] lg:gap-[21px] xl:gap-[22.5px] 2xl:gap-[24px] w-full">
                        <Heading level="lgSubText" className="font-[800] font-urbanist text-[#292929]">Membership Plan</Heading>

                        <div className="flex justify-between items-center border-1 border-[#E1E1E0] h-[42px] sm:h-[53px] md:h-[64px] lg:h-[74px] xl:h-[80px] 2xl:h-[86px] rounded-[12px] px-[12px] sm:px-[15px] md:px-[18px] lg:px-[21px] xl:px-[23px] 2xl:px-[25px]">
                            <Paragraph size="md" className="text-[#292929] font-[600] font-urbanist">
                                Current Plan: <span className='text-MindfulBrown90 font-[800]'>Basic (5 users)</span>
                            </Paragraph>

                            <DialogTrigger asChild>
                                <Button variant="ghost" onClick={() => setOpenCurrentDialog(true)}><Paragraph size="md" className="text-MindfulBrown60 font-[800] font-urbanist">
                                    Upgrade</Paragraph></Button>
                            </DialogTrigger>
                        </div>
                    </div>

                    {/* DIALOG 1: Enter Current Password */}
                    <DialogContent className="pricing-dialog">
                        <DialogHeader>
                            <DialogTitle className='text-center'>
                                <Heading level="h4" className="font-[800] font-urbanist text-[#000000]">Pricing plans</Heading>
                            </DialogTitle>
                        </DialogHeader>
                        <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-4 justify-center items-center">
                            {plans.map((plan, index) => (
                                <Plan
                                    key={index}
                                    type={plan.type}
                                    userNo={plan.userNo}
                                    status={plan.status}
                                    price={plan.price}
                                    specs={plan.specs}
                                />
                            ))}
                        </div>
                    </DialogContent>
                </form>
            </Dialog>

            {/* DIALOG 2: Edit New Password */}
            <Dialog open={openEditDialog} onOpenChange={setOpenEditDialog}>
                <DialogContent >
                    <DialogHeader>
                        <DialogTitle>Edit Password</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <Label htmlFor="newpassword">New password</Label>
                        <Input id="newpassword" name="newpassword" />
                    </div>
                    <DialogFooter>
                        <Button
                            type="button"
                            variant='secondary'
                            className='w-full'
                            onClick={() => {
                                setOpenEditDialog(false);
                                setOpenSuccessDialog(true);
                            }}
                        >   <Paragraph size="btnText" className="text-White font-black font-satoshi">Update password</Paragraph>

                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* DIALOG 3: Success */}
            <Dialog open={openSuccessDialog} onOpenChange={setOpenSuccessDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Password updated! 🎉</DialogTitle>
                        <DialogDescription>Your new password has been set.</DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button
                            variant='secondary'
                            className='w-full' onClick={() => setOpenSuccessDialog(false)}>
                            <Paragraph size="btnText" className="text-White font-black font-satoshi">Done</Paragraph>
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Membership
