'use client';
import { useFormik } from "formik";
import * as Yup from "yup";
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
    const currentPasswordFormik = useFormik({
        initialValues: {
            currentpassword: "",
        },
        validationSchema: Yup.object({
            currentpassword: Yup.string().required("Current password is required"),
        }),
        onSubmit: (values) => {
            setOpenCurrentDialog(false);
            setOpenEditDialog(true);
        },
    });
    const newPasswordFormik = useFormik({
        initialValues: {
            newpassword: "",
        },
        validationSchema: Yup.object({
            newpassword: Yup.string().required("Password is required"),
        }),
        onSubmit: (values) => {
            setOpenEditDialog(false);
            setOpenSuccessDialog(true);
        },
    });

    return (
        <>
            {/* MAIN Password Card with Trigger */}
            <Dialog open={openCurrentDialog} onOpenChange={setOpenCurrentDialog}>
                <form>
                    <div className="bg-White shadow-[0px 17.32px 34.65px 0px #1018280D] rounded-[15px] py-[12px] px-[13px] sm:py-[17px] sm:px-[18px] md:py-[22px] md:px-[23px] lg:py-[27px] lg:px-[28px] xl:py-[30px] xl:px-[31px] 2xl:py-[32px] 2xl:px-[33px] flex flex-col gap-[14px] sm:gap-[16px] md:gap-[18px] lg:gap-[21px] xl:gap-[22.5px] 2xl:gap-[24px] w-full">
                        <Heading level="lgSubText" className="font-[800] font-urbanist text-[#292929]">Password</Heading>

                        <div className="flex justify-between items-center border-1 border-[#E1E1E0] h-[42px] sm:h-[50px] md:h-[60px] lg:h-[70px] xl:h-[75px] 2xl:h-[86px] rounded-[12px] px-[12px] sm:px-[14px] md:px-[16px] lg:px-[18px] xl:px-[20px] 2xl:px-[25px]">
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
                        <form onSubmit={currentPasswordFormik.handleSubmit} className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="currentpassword" className='mb-[8px]'>
                                    <Paragraph size="label" className="text-[#292929] font-[600]">Current password</Paragraph>
                                </Label>
                                <Input id="currentpassword"
                                    name="currentpassword"
                                    type="password"
                                    value={currentPasswordFormik.values.currentpassword}
                                    onChange={currentPasswordFormik.handleChange}
                                    onBlur={currentPasswordFormik.handleBlur}
                                />
                                {currentPasswordFormik.touched.currentpassword && currentPasswordFormik.errors.currentpassword && (
                                    <p className="text-red-500 text-sm mt-1">{currentPasswordFormik.errors.currentpassword}</p>
                                )}
                            </div>
                            <DialogFooter>
                                <Button
                                    type="submit"
                                    variant='secondary'
                                    className='w-full'
                                >
                                    <Paragraph size="btnText" className="text-White font-black font-satoshi">Continue</Paragraph>

                                </Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </form>
            </Dialog>

            {/* DIALOG 2: Edit New Password */}
            <Dialog open={openEditDialog} onOpenChange={setOpenEditDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit Password</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={newPasswordFormik.handleSubmit} className="grid gap-4">
                        <div className="grid gap-4">
                            <Label htmlFor="newpassword">New password</Label>
                            <Input
                                id="newpassword"
                                name="newpassword"
                                type="password"
                                value={newPasswordFormik.values.newpassword}
                                onChange={newPasswordFormik.handleChange}
                                onBlur={newPasswordFormik.handleBlur}
                            />
                            {newPasswordFormik.touched.newpassword && newPasswordFormik.errors.newpassword && (
                                <p className="text-red-500 text-sm mt-1">{newPasswordFormik.errors.newpassword}</p>
                            )}
                        </div>
                        <DialogFooter>
                            <Button
                                type="submit"
                                variant='secondary'
                                className='w-full'
                            >   <Paragraph size="btnText" className="text-White font-black font-satoshi">Update password</Paragraph>

                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>

            {/* DIALOG 3: Success */}
            <Dialog open={openSuccessDialog} onOpenChange={setOpenSuccessDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Password updated! 🎉</DialogTitle>
                        <DialogDescription className='font-urbanist text-start text-[12px] md:text-[13px] lg:text-[14px] xl:text-[14px] 2xl:text-[16px]'>Your new password has been set.</DialogDescription>
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
