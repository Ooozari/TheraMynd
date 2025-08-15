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
            currentpassword: Yup.string().min(8, 'Minimum 8 characters')
                .matches(/[A-Z]/, 'Must contain uppercase letter')
                .matches(/[0-9]/, 'Must contain number')
                .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Must contain special character')
                .required('Password is required'),
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
            newpassword: Yup.string().min(8, 'Minimum 8 characters')
                .matches(/[A-Z]/, 'Must contain uppercase letter')
                .matches(/[0-9]/, 'Must contain number')
                .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Must contain special character')
                .required('Password is required'),
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
                    <div className="bg-White shadow-[0px_17.32px_34.65px_0px_#1018280D] rounded-[15px] py-[12px] px-[13px] sm:py-[17px] sm:px-[18px] md:py-[22px] md:px-[23px] lg:py-[27px] lg:px-[28px] xl:py-[30px] xl:px-[31px] 2xl:py-[32px] 2xl:px-[33px] flex flex-col gap-[14px] sm:gap-[16px] md:gap-[18px] lg:gap-[21px] xl:gap-[22.5px] 2xl:gap-[24px] w-full ">
                        <Heading level="lgSubText" className="font-[800] font-urbanist text-[#292929]">Password</Heading>

                        <div className="flex justify-between items-center border-1 border-[#E1E1E0] h-[54px] sm:h-[63px] md:h-[70px] lg:h-[77px] xl:h-[82px] 2xl:h-[86px] rounded-[12px] px-[12px] sm:px-[14px] md:px-[16px] lg:px-[18px] xl:px-[20px] 2xl:px-[25px]">
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
                    <DialogContent  className='rounded-[20px] xs:w-[400px] sm:w-[440px] md:w-[480px] lg:w-[490px] xl:w-[500px] 2xl:w-[540px] p-[20px] xs:p-[25px] md:p-[30px] lg:p-[35px] xl:p-[40px]'>
                        <DialogHeader>
                            <DialogTitle className="text-start">
                                <Heading level="mdSubText" className="font-[800] font-urbanist text-[#424242]">Enter Current Password</Heading>
                            </DialogTitle>
                        </DialogHeader>
                        <form onSubmit={currentPasswordFormik.handleSubmit} className="grid gap-6 md:gap-8">
                            <div>
                                <Label htmlFor="currentpassword" className='mb-[8px]'>
                                    <Paragraph size="label" className="text-[#292929] font-[600]">Current password</Paragraph>
                                </Label>
                                <div className='relative'>
                                <Input id="currentpassword"
                                    name="currentpassword"
                                    type="password"
                                    placeholder="Enter current password"
                                    value={currentPasswordFormik.values.currentpassword}
                                    onChange={currentPasswordFormik.handleChange}
                                    onBlur={currentPasswordFormik.handleBlur}
                                />
                                {currentPasswordFormik.touched.currentpassword && currentPasswordFormik.errors.currentpassword && (
                                    <p className="text-red-500 text-xs absolute left-0 bottom-[-16px]">{currentPasswordFormik.errors.currentpassword}</p>
                                )}
                                </div>
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
                <DialogContent  className='rounded-[20px] xs:w-[400px] sm:w-[440px] md:w-[480px] lg:w-[490px] xl:w-[500px] 2xl:w-[540px] p-[20px] xs:p-[25px] md:p-[30px] lg:p-[35px] xl:p-[40px]'>
                    <DialogHeader>
                        <DialogTitle className="text-start">Edit Password</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={newPasswordFormik.handleSubmit} className="grid gap-6 md:gap-8">
                        <div className="">
                            <Label htmlFor="newpassword" className='mb-[8px]'>
                                <Paragraph size="label" className="text-[#292929] font-[600]">New password</Paragraph>
                            </Label>
                            <div className='relative'>
                            <Input
                                id="newpassword"
                                name="newpassword"
                                type="password"
                                placeholder="Enter new password"
                                value={newPasswordFormik.values.newpassword}
                                onChange={newPasswordFormik.handleChange}
                                onBlur={newPasswordFormik.handleBlur}
                            />
                            {newPasswordFormik.touched.newpassword && newPasswordFormik.errors.newpassword && (
                                <p className="text-red-500 text-xs absolute left-0 bottom-[-16px]">{newPasswordFormik.errors.newpassword}</p>
                            )}
                            </div>
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
                <DialogContent className='rounded-[20px] xs:w-[400px] sm:w-[440px] md:w-[480px] lg:w-[490px] xl:w-[500px] 2xl:w-[540px] p-[20px] xs:p-[25px] md:p-[30px] lg:p-[35px] xl:p-[40px]'>
                    <DialogHeader>
                        <DialogTitle className="text-start">Password updated! 🎉</DialogTitle>
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
