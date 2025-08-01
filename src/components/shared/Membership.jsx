'use client';
import React, { useState } from 'react';
import { Heading, Paragraph } from "@/components/ui/typography";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Plan from './Plan'
import { Back } from '@/svgs/Icons'

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
    const [openCancelConfirmDialog, setOpenCancelConfirmDialog] = useState(false);
    const [openCancelledDialog, setOpenCancelledDialog] = useState(false);

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
    const handlePlanSelect = (planType) => {
        setSelectedPlanType(planType); // save selected plan type
        setOpenCurrentDialog(false);   // close Dialog 1
        setOpenEditDialog(true);        // open password edit dialog
    };
    const [selectedPlanType, setSelectedPlanType] = useState('');

    return (
        <>
            <div className="bg-White shadow-[0px 17.32px 34.65px 0px #1018280D] rounded-[15px] py-[12px] px-[13px] sm:py-[17px] sm:px-[18px] md:py-[22px] md:px-[23px] lg:py-[27px] lg:px-[28px] xl:py-[30px] xl:px-[31px] 2xl:py-[32px] 2xl:px-[33px] flex flex-col gap-[14px] sm:gap-[16px] md:gap-[18px] lg:gap-[21px] xl:gap-[22.5px] 2xl:gap-[24px] w-full">
                <Heading level="lgSubText" className="font-[800] font-urbanist text-[#292929]">Membership Plan</Heading>

                {/* Current Plan: */}
                <div className="flex justify-between items-center border-1 border-[#E1E1E0] h-[42px] sm:h-[50px] md:h-[60px] lg:h-[70px] xl:h-[75px] 2xl:h-[86px] rounded-[12px] px-[12px] sm:px-[14px] md:px-[16px] lg:px-[18px] xl:px-[20px] 2xl:px-[25px]">
                    <Paragraph size="md" className="text-[#292929] font-[600] font-urbanist">
                        Current Plan: <span className='text-MindfulBrown90 font-[800]'>Basic (5 users)</span>
                    </Paragraph>


                    <Button variant="ghost" onClick={() => setOpenCurrentDialog(true)}><Paragraph size="md" className="text-MindfulBrown60 font-[800] font-urbanist">
                        Upgrade</Paragraph></Button>

                </div>
                {/* Billing Cycle: */}
                <div className="flex justify-between items-center border-1 border-[#E1E1E0] h-[42px] sm:h-[50px] md:h-[60px] lg:h-[70px] xl:h-[75px] 2xl:h-[86px] rounded-[12px] px-[12px] sm:px-[14px] md:px-[16px] lg:px-[18px] xl:px-[20px] 2xl:px-[25px]">
                    <Paragraph size="md" className="text-[#292929] font-[600] font-urbanist">
                        Billing Cycle:
                        <span className='text-MindfulBrown90 font-[800]'> Mar 16, 2024 — Apr 15, 2024</span>
                    </Paragraph>
                    <Paragraph size="md" className="text-[#292929] font-[600] font-urbanist">
                        $12.99 next month
                    </Paragraph>
                </div>
                {/* Cancel Memberchsip */}
                <div className="flex justify-between items-center border-1 border-[#E1E1E0] h-[42px] sm:h-[50px] md:h-[60px] lg:h-[70px] xl:h-[75px] 2xl:h-[86px] rounded-[12px] px-[12px] sm:px-[14px] md:px-[16px] lg:px-[18px] xl:px-[20px] 2xl:px-[25px]">
                    <Paragraph size="md" className="text-[#292929] font-[600] font-urbanist">
                        Cancel Membership
                    </Paragraph>


                    <Button
                        variant="ghost"
                        onClick={() => setOpenCancelConfirmDialog(true)}
                    >
                        <Paragraph size="md" className="text-Red font-[800] font-urbanist">
                            Cancel my membership
                        </Paragraph>
                    </Button>


                </div>
            </div>

            {/* DIALOG 1.1: Pricing Plan */}
            <Dialog open={openCurrentDialog} onOpenChange={setOpenCurrentDialog}>
                <DialogContent className="pricing-dialog">
                    <DialogHeader>
                        <DialogTitle className="text-center">
                            <Heading level="h4" className="font-[800] font-urbanist text-[#000000]">
                                Pricing plans
                            </Heading>
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
                                onSelect={() => handlePlanSelect(plan.type)}
                            />
                        ))}
                    </div>
                </DialogContent>
            </Dialog>
            {/* DIALOG 1.2: Confrim Upgrade Plan */}
            <Dialog open={openEditDialog} onOpenChange={setOpenEditDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="flex flex-col gap-3 text-start">
                            <div
                                onClick={() => {
                                    setOpenEditDialog(false);
                                    setOpenCurrentDialog(true);
                                }}
                                className="inline-flex items-center justify-center text-center bg-Secondary rounded-full w-[30px] h-[30px] hover:cursor-pointer"
                            >
                                <Back />
                            </div>
                            <div>
                                Confirm upgrade to: <span className="text-Secondary">{selectedPlanType}</span>
                            </div>
                        </DialogTitle>
                        <DialogDescription className="font-urbanist text-start text-sm">
                            By clicking confirm below, you confirm to updating your current plan and changes that come with it.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <Heading level="mdSubText" className="font-[700] font-urbanist text-[#424242]">
                            Due today: $6.56
                        </Heading>
                        <Paragraph size="md" className="font-[600] font-urbanist text-[#424242]">
                            Due 12/23/24: <span className="font-[800]">$20.99</span>
                        </Paragraph>
                    </div>
                    <DialogFooter>
                        <Button
                            type="button"
                            variant="secondary"
                            className="w-full"
                            onClick={() => {
                                setOpenEditDialog(false);
                                setOpenSuccessDialog(true);
                            }}
                        >
                            <Paragraph size="btnText" className="text-White font-black font-satoshi">
                                Upgrade
                            </Paragraph>
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            {/* DIALOG 1.3: Success */}
            <Dialog open={openSuccessDialog} onOpenChange={setOpenSuccessDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="text-start">Plan successfully upgraded! 🎉</DialogTitle>
                        <DialogDescription className="font-urbanist text-start text-sm">
                            Your plan has now been upgraded, you may now continue to use as normal.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button variant="secondary" className="w-full" onClick={() => setOpenSuccessDialog(false)}>
                            <Paragraph size="btnText" className="text-White font-black font-satoshi">Done</Paragraph>
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* DIALOG 2.1: Are you sure you want to cancel? */}
            <Dialog open={openCancelConfirmDialog} onOpenChange={setOpenCancelConfirmDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className='text-start'>Are you sure you want to cancel?</DialogTitle>
                        <DialogDescription className='font-urbanist text-start text-[12px] md:text-[13px] lg:text-[14px] xl:text-[14px] 2xl:text-[16px]'>
                            Your membership will become inactive at the beginning of the next billing cycle if canceled.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className='w-full'>
                        <div className='w-full'>
                            <Button
                                variant='secondary'
                                className='w-full'
                                onClick={() => setOpenCancelConfirmDialog(false)}
                            >
                                <Paragraph size="btnText" className="text-White font-black font-satoshi">Take me back</Paragraph>
                            </Button>
                        </div>
                        <div className='w-full'>
                            <Button
                                variant='cancel'
                                className='w-full'
                                onClick={() => {
                                    setOpenCancelConfirmDialog(false);
                                    setOpenCancelledDialog(true);
                                }}
                            >
                                <Paragraph size="btnText" className=" font-black font-satoshi">Yes, cancel</Paragraph>
                            </Button>
                        </div>


                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* DIALOG 2.2: Membership cancelled */}
            <Dialog open={openCancelledDialog} onOpenChange={setOpenCancelledDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className='text-start'>Membership cancelled</DialogTitle>
                        <DialogDescription className='font-urbanist text-start text-[12px] md:text-[13px] lg:text-[14px] xl:text-[14px] 2xl:text-[16px]'>
                            Your membership is still active until 10/12/24
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button
                            variant='secondary'
                            className='w-full'
                            onClick={() => setOpenCancelledDialog(false)}
                        >
                            <Paragraph size="btnText" className="text-White font-black font-satoshi">Done</Paragraph>
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

        </>
    )
}

export default Membership