'use client';
import React, { useState } from 'react'
import { Dots, Forward, NewEdit, See, Generate, User, Bin } from '@/svgs/Icons'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Heading, Paragraph } from "@/components/ui/typography";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import tableData from "@/data/tableData"
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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


function PatientProvider() {
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            notify: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email').required('Email is required'),
            phone: Yup.string().matches(/^\d{11}$/, 'Phone number must be exactly 11 digits').required('Phone is required'),
            notify: Yup.string().required('Notification method is required'),
        }),
        onSubmit: values => {
            setopenAddPatientDialog(false);
        },
    });

    // Add new patinet dialog box
    const [openAddPatientDialog, setopenAddPatientDialog] = useState(false)

    // verfication code 
    const [seeVarificationCode, setSeeVarificationCode] = useState(false)

    // new verfication code
    const [openNewVerifacationCode, setopenNewVerifacationCode] = useState(false)

    // new code success message
    const [openNewSuccessDialog, setopenNewSuccessDialog] = useState(false)

    // delete patinet
    const [deletePatient, setdeletePatient] = useState(false)
    const [deletePatientSuccessMsg, setdeletePatientSuccessMsg] = useState(false)


    return (
        <>
            <div className='flex flex-col gap-[18px] sm:gap-[19px] md:gap-[20px] lg:gap-[21px] xl:gap-[22px] 2xl:gap-[23px]'>

                <div>
                    <Heading level="mdSubText" className="font-[700] text-[#292929]">
                        Patients
                    </Heading>
                </div>

                {/* Filter and button */}
                <div className='flex justify-between items-baseline-last'>
                    <div>
                        <Label htmlFor="state" className='mb-[8px]'>
                            <Paragraph size="label" className="text-Gray900 font-bold">Sort by</Paragraph>
                        </Label>
                        <Select>
                            <SelectTrigger className="w-[144px] md:w-[164px] xl:w-[184px] bg-White">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="date">Date</SelectItem>
                                <SelectItem value="time">Time</SelectItem>
                                <SelectItem value="status">Status</SelectItem>
                                <SelectItem value="type">Type</SelectItem>
                            </SelectContent>
                        </Select>

                    </div>
                    <div>
                        <Button
                            type="button"
                            variant='secondaryLightSmall'
                            onClick={() => setopenAddPatientDialog(true)}
                        >
                            <Paragraph size="smallBtntext" className="text-MindfulBrown90 font-[600] font-inter">+ Add new paitent</Paragraph>

                        </Button>
                    </div>
                </div>
                {/* Table */}
                <div className="w-full overflow-x-auto">
                    <Table className=''>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="[5%]"></TableHead> {/* icon column */}
                                <TableHead className="w-[35%]">Name</TableHead>
                                <TableHead className="w-[15%]">Days Active</TableHead>
                                <TableHead className="w-[15%]">Status</TableHead>
                                <TableHead className="w-[15%]">Start date</TableHead>
                                <TableHead className="w-[15%]"></TableHead> {/* action buttons */}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {tableData.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell className=' pr-[18px] pl-[18px] md:pl-[18px] md:pr-[18px]'>
                                        <span className='h-[22px] sm:h-[24px] md:h-[26px] lg:h-[28px] xl:h-[30px] 2xl:h-[31px] w-full'>{item.icon}</span>
                                    </TableCell>
                                    <TableCell className="text-left">
                                        <Paragraph size="tabletext" className="text-[#252525] ">
                                            {item.name}
                                        </Paragraph>

                                    </TableCell>
                                    <TableCell >
                                        <Paragraph size="tabletext" className="text-[#252525]">
                                            {item.days}
                                        </Paragraph>
                                    </TableCell>
                                    <TableCell >
                                        <div className="flex items-center gap-[6px]">
                                            <div
                                                className={cn(
                                                    "w-[5px] h-[5px] rounded-full",
                                                    item.status === "Active"
                                                        ? "bg-[#00FF1A]"
                                                        : item.status === "Pending"
                                                            ? "bg-[#FFC700]"
                                                            : "bg-[#FF0100]"
                                                )}
                                            />
                                            <Paragraph size="tabletextsm" className="text-[#252525] font-[500]">
                                                {item.status}
                                            </Paragraph>
                                        </div>
                                    </TableCell>

                                    <TableCell>
                                        <Paragraph size="tabletext" className="text-[#252525] ">
                                            {item.startDate}
                                        </Paragraph>
                                    </TableCell>

                                    <TableCell className='sticky right-0 bg-white z-5 text-right  pr-[12px]  md:pr-[26px]'>
                                        <div className='flex gap-[10px] justify-end'>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger> <div className='w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] md:w-[21px] md:h-[21px] lg:w-[22px] lg:h-[22px] xl:w-[23px] xl:h-[23px] 2xl:w-[24px] 2xl:h-[24px] bg-[#ECECEC] flex justify-center items-center rounded-full cursor-pointer'>
                                                    <Dots />
                                                </div>
                                                </DropdownMenuTrigger>

                                                <DropdownMenuContent>

                                                    <DropdownMenuItem className='flex items-center gap-[7px]'>
                                                        <NewEdit />

                                                        <Paragraph size='dialogtext' className='text-[#000000]'>Edit details</Paragraph>

                                                    </DropdownMenuItem>

                                                    <DropdownMenuSeparator />

                                                    <DropdownMenuItem >
                                                        <button className='flex items-center gap-[7px]' onClick={() => setSeeVarificationCode(true)}>
                                                            <See />
                                                            <Paragraph size='dialogtext' className='text-[#000000]'>See verification code</Paragraph>
                                                        </button>

                                                    </DropdownMenuItem>

                                                    <DropdownMenuSeparator />

                                                    <DropdownMenuItem>
                                                        <button className='flex items-center gap-[7px]' onClick={() => setopenNewVerifacationCode(true)}>                                    <Generate />
                                                            <Paragraph size='dialogtext' className='text-[#000000]'>Generate new code</Paragraph>
                                                        </button>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuSeparator />

                                                    <DropdownMenuItem >
                                                        <User />
                                                        <Paragraph size='dialogtext' className='text-[#000000]'>
                                                            {item.status === 'Inactive' ? 'Reactivate' : 'Make Inactive'}
                                                        </Paragraph>
                                                    </DropdownMenuItem>

                                                    <DropdownMenuSeparator />

                                                    <DropdownMenuItem>
                                                        <button className='flex items-center gap-[7px]' onClick={() => setdeletePatient(true)}>
                                                            <Bin />
                                                            <Paragraph size='dialogtext' className='text-[#000000]'>Delete patient</Paragraph>
                                                        </button>

                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>

                                            <div className='w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] md:w-[21px] md:h-[21px] lg:w-[22px] lg:h-[22px] xl:w-[23px] xl:h-[23px] 2xl:w-[24px] 2xl:h-[24px] bg-[#00738A] flex justify-center items-center rounded-full cursor-pointer'
                                                onClick={() => router.push(`/dashboard/providers/patient/${item.id}`)}>
                                                <Forward />
                                            </div>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>

            {/* DIALOG 1: Add patinet */}
            <Dialog open={openAddPatientDialog} onOpenChange={setopenAddPatientDialog}>
                <DialogContent className="p-[14px] sm:p-[16px] md:p-[18px] lg:p-[20px] xl:p-[20px] 2xl:p-[24px] gap-[5px] sm:gap-[6px] md:gap-[7px] lg:gap-[8px] xl:gap-[9px] 2xl:gap-[10px] 
">
                    <DialogHeader>
                        <DialogTitle className='text-start'>
                            <Heading level='lgSubText' className='text-MindfulBrown90 font-[800] font-urbanist'>Add New Patient</Heading>

                        </DialogTitle>
                        <DialogDescription className='font-urbanist text-[#4D4D4D] text-start text-[11.5px] sm:text-[12px] md:text-[12.5px] lg:text-[13px] xl:text-[13.5px] 2xl:text-[14px]'>
                            Please enter patient details, once submitted, we will send your patient a link to access the app.
                        </DialogDescription>
                    </DialogHeader>

                    {/* input details */}
                    <form onSubmit={formik.handleSubmit}>
                        <div className='flex flex-col gap-[14px] sm:gap-[16px] md:gap-[18px] lg:gap-[16px] xl:gap-[20px] 2xl:gap-[24px]'>
                            {/* Patient Name */}
                            <div className='w-full'>
                                <Label htmlFor="name" className='my-[8px]'>
                                    <Paragraph size="label" className="text-Gray900 font-bold">Patient Name</Paragraph>
                                </Label>
                                <div className='relative'>
                                    <Input
                                        className='h-[40px] sm:h-[42px] md:h-[42px] lg:h-[44px] xl:h-[46px] 2xl:h-[48px]
'                                   id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Enter patient name"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.name}
                                    />
                                    {formik.touched.name && formik.errors.name && (
                                        <p className="text-red-500 text-xs absolute left-0 bottom-[-16px]">{formik.errors.name}</p>
                                    )}
                                </div>
                            </div>

                            {/* Patients email */}
                            <div>
                                <Label htmlFor="email" className='my-[8px]'>
                                    <Paragraph size="label" className="text-Gray900 font-bold">Patients email</Paragraph>
                                </Label>
                                <div className='relative'>
                                    <Input
                                        id="email"
                                        name="email"
                                        placeholder="Enter patient email"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                        className='h-[40px] sm:h-[42px] md:h-[42px] lg:h-[44px] xl:h-[46px] 2xl:h-[48px]'
                                    />
                                    {formik.touched.email && formik.errors.email && (
                                        <p className="text-red-500 text-xs absolute left-0 bottom-[-16px]">{formik.errors.email}</p>
                                    )}
                                </div>
                            </div>

                            {/*Patients phone*/}
                            <div>
                                <Label htmlFor="phone" className='my-[8px]'>
                                    <Paragraph size="label" className="text-Gray900 font-bold">Patients phone</Paragraph>
                                </Label>
                                <div className='relative'>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="Enter patient phone"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.phone}
                                        className='h-[40px] sm:h-[42px] md:h-[42px] lg:h-[44px] xl:h-[46px] 2xl:h-[48px]'
                                    />
                                    {formik.touched.phone && formik.errors.phone && (
                                        <p className="text-red-500 text-xs absolute left-0 bottom-[-16px]">{formik.errors.phone}</p>
                                    )}
                                </div>
                            </div>

                            {/* Notify patient by */}
                            <div>
                                <Label htmlFor="Notify" className='my-[8px]'>
                                    <Paragraph size="label" className="text-Gray900 font-bold">Notify patient by</Paragraph>
                                </Label>
                                <div className='relative'>
                                    <Select name="notify"
                                        value={formik.values.notify}
                                        onValueChange={(value) => formik.setFieldValue('notify', value)}>
                                        <SelectTrigger className='h-[40px] sm:h-[42px] md:h-[42px] lg:h-[44px] xl:h-[46px] 2xl:h-[48px] w-full'>
                                            <SelectValue placeholder="Select type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Email">Email</SelectItem>
                                            <SelectItem value="Phone">Phone</SelectItem>
                                            <SelectItem value="Sms">Sms</SelectItem>
                                            <SelectItem value="Neither">Neither</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {formik.touched.notify && formik.errors.notify && (
                                        <p className="text-red-500 text-xs absolute left-0 bottom-[-16px]">{formik.errors.notify}</p>
                                    )}
                                </div>
                            </div>

                        </div>

                        <DialogFooter className='w-full mt-[12px] sm:mt-[16px] md:mt-[20px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px]'>
                            <Button
                                variant='secondary'
                                className='w-full'
                                type='submit'
                            >
                                <Paragraph size="btnText" className="text-White font-black font-satoshi">Add Patient</Paragraph>
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>

            {/* See Varification Code*/}
            <Dialog open={seeVarificationCode} onOpenChange={setSeeVarificationCode}>
                <DialogContent className='gap-[12px] sm:gap-[14px] md:gap-[16px] lg:gap-[18px] xl:gap-[19px] 2xl:gap-[20px]'>
                    <DialogHeader>
                        <DialogTitle className='text-center'>
                            <Paragraph size='subText' className='text-MindfulBrown90 font-urbanist font-[800]'>Current verification code:</Paragraph>
                        </DialogTitle>
                    </DialogHeader>
                    <div>
                        <Paragraph size='code' className='text-[#353535] font-urbanist font-[700] text-center'>
                            1234
                        </Paragraph>
                    </div>
                    <DialogFooter className='w-full'>
                        <div className='w-full'>
                            <Button
                                variant='secondary'
                                className='w-full'
                                onClick={() => {
                                    setopenNewVerifacationCode(true)
                                    setSeeVarificationCode(false)
                                }}
                            >
                                <Paragraph size="btnText" className="text-White font-black font-satoshi">Generate new code</Paragraph>
                            </Button>
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Generate New Varification Code*/}
            <Dialog open={openNewVerifacationCode} onOpenChange={setopenNewVerifacationCode}>
                <DialogContent className='gap-[12px] sm:gap-[14px] md:gap-[16px] lg:gap-[18px] xl:gap-[19px] 2xl:gap-[20px]'
                    onInteractOutside={(e) => e.preventDefault()}>
                    <DialogHeader>
                        <DialogTitle className='text-center'>
                            <Paragraph size='subText' className='text-MindfulBrown90 font-urbanist font-[800]'>Your new verification code is:</Paragraph></DialogTitle>
                    </DialogHeader>
                    <div>
                        <Paragraph size='code' className='text-[#353535] font-urbanist font-[700] text-center'>
                            1435
                        </Paragraph>
                    </div>
                    <DialogFooter className='w-full'>
                        <div className='w-full'>
                            <Button
                                variant='secondary'
                                className='w-full'
                                onClick={() => {
                                    setopenNewVerifacationCode(false)
                                    setopenNewSuccessDialog(true)
                                }}
                            >
                                <Paragraph size="btnText" className="text-White font-black font-satoshi">Send new code to patient</Paragraph>
                            </Button>
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>


            {/* Success Message (New Varification Code)*/}
            <Dialog open={openNewSuccessDialog} onOpenChange={setopenNewSuccessDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            New code successfully sent! 🎉</DialogTitle>
                        <DialogDescription className='font-urbanist text-start text-[12px] md:text-[13px] lg:text-[14px] xl:text-[14px] 2xl:text-[16px]'>A new unique code and  link to access the app has been sent to your desired destination.</DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button
                            variant='secondary'
                            className='w-full' onClick={() => setopenNewSuccessDialog(false)}>
                            <Paragraph size="btnText" className="text-White font-black font-satoshi">Done</Paragraph>
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>


            {/* Are you sure (delete patients) */}
            <Dialog open={deletePatient} onOpenChange={setdeletePatient}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className='text-start'>Are you sure you want to deactivate patient? </DialogTitle>
                        <DialogDescription className='font-urbanist text-start text-[12px] md:text-[13px] lg:text-[14px] xl:text-[14px] 2xl:text-[16px]'>
                            Once a patient is deleted, there information will be non recoverable.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className='w-full'>
                        <div className='w-full'>
                            <Button
                                variant='secondaryOutline'
                                className='w-full rounded-[15px] hover:bg-Secondary  group'
                                onClick={() => { setdeletePatient(false) }}
                            >
                                <Paragraph size="btnText" className="text-Secondary font-[700] font-satoshi group-hover:text-White">I changed my mind</Paragraph>
                            </Button>
                        </div>
                        <div className='w-full'>
                            <Button
                                variant='cancel'
                                className='w-full bg-[#CD1110] hover:bg-[#CD1110]/80'
                                onClick={() => {
                                    setdeletePatient(false);
                                    setdeletePatientSuccessMsg(true);
                                }}
                            >
                                <Paragraph size="btnText" className=" font-black font-satoshi text-White">Yes, delete forever</Paragraph>
                            </Button>
                        </div>


                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Patient deleted */}
            <Dialog open={deletePatientSuccessMsg} onOpenChange={setdeletePatientSuccessMsg}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className='text-start'>Patient successfully deleted </DialogTitle>
                    </DialogHeader>
                    <DialogFooter>
                        <Button
                            variant='secondary'
                            className='w-full'
                            onClick={() => setdeletePatientSuccessMsg(false)}
                        >
                            <Paragraph size="btnText" className="text-White font-black font-satoshi">Close</Paragraph>
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default PatientProvider
