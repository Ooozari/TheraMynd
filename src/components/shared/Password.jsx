'use client';
import React, { useState } from 'react';
import { Heading, Paragraph } from "@/components/ui/typography";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { DialogDescription } from '@radix-ui/react-dialog';

function Password() {
    const [password, setPassword] = useState('password12ioio34');
    const [openCurrentDialog, setOpenCurrentDialog] = useState(false);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [openSuccessDialog, setOpenSuccessDialog] = useState(false);

    return (
        <>
            {/* MAIN Password Card with Trigger */}
            <Dialog open={openCurrentDialog} onOpenChange={setOpenCurrentDialog}>
                <form>
                    <div className="bg-White shadow-[0px 17.32px 34.65px 0px #1018280D] rounded-[15px] py-[12px] px-[13px] sm:py-[17px] sm:px-[18px] md:py-[22px] md:px-[23px] lg:py-[27px] lg:px-[28px] xl:py-[30px] xl:px-[31px] 2xl:py-[32px] 2xl:px-[33px] flex flex-col gap-[14px] sm:gap-[16px] md:gap-[18px] lg:gap-[21px] xl:gap-[22.5px] 2xl:gap-[24px] w-full">
                        <Heading level="lgSubText" className="font-[800] font-urbanist text-[#292929]">Password</Heading>

                        <div className="flex justify-between items-center border-1 border-[#E1E1E0] h-[42px] sm:h-[53px] md:h-[64px] lg:h-[74px] xl:h-[80px] 2xl:h-[86px] rounded-[12px] px-[12px] sm:px-[15px] md:px-[18px] lg:px-[21px] xl:px-[23px] 2xl:px-[25px]">
                            <Paragraph size="md" className="text-[#292929] font-[600] font-urbanist">
                                Current password: <span>{"*".repeat(password.length)}</span>
                            </Paragraph>

                            <DialogTrigger asChild>
                                <Button variant="ghost" onClick={() => setOpenCurrentDialog(true)}><Paragraph size="md" className="text-MindfulBrown60 font-[800] font-urbanist">
                                    Edit</Paragraph></Button>
                            </DialogTrigger>
                        </div>
                    </div>

                    {/* DIALOG 1: Enter Current Password */}
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>
                                <Heading level="mdSubText" className="font-[800] font-urbanist text-[#424242]">Enter Current Password</Heading>
                            </DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-2">
                            <Label htmlFor="currentpassword" className='mb-[8px]'>
                                <Paragraph size="label" className="text-[#292929] font-[600]">Current password</Paragraph>
                            </Label>
                            <Input id="currentpassword" name="currentpassword" />
                        </div>
                        <DialogFooter>
                            <Button
                                type="button"
                                variant='secondary'
                                className='w-full'
                                onClick={() => {
                                    setOpenCurrentDialog(false);
                                    setOpenEditDialog(true);
                                }}
                            >
                                <Paragraph size="btnText" className="text-White font-black font-satoshi">Continue</Paragraph>
                                
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </form>
            </Dialog>

            {/* DIALOG 2: Edit New Password */}
            <Dialog open={openEditDialog} onOpenChange={setOpenEditDialog}>
                <DialogContent>
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
    );
}

export default Password;
