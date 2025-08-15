'use client';
import React from "react";
import { useState } from "react";
import tableData from "@/data/tableData";
import { Greaterthan, NewBack, Sad, Forward } from '@/svgs/Icons';
import Link from 'next/link';
import { Heading, Paragraph } from "@/components/ui/typography";
import { Label } from "@/components/ui/label"
import Readonly from "@/components/ui/readonly"
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
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"

import {
    Userinfotabs,
    TabsList,
    TabsTrigger,
    TabsContent,
} from "@/components/ui/userinfotabs";
import DateRangePicker from '@/components/ui/rangedatepicker'


function Journals({ id }) {
    const [range, setRange] = useState({
        from: new Date(),
        to: new Date(),
    });
    const patientId = Number(id);
    const patient = tableData.find(p => p.id === patientId);
    const [openJournalsDialog, setopenJournalsDialog] = useState(false)

    return (
        <>
            {/*  */}
            <div className='flex gap-[20px] sm:gap-[23px] md:gap-[26px] lg:gap-[29px] xl:gap-[30.5px] 2xl:gap-[32px] md:flex-row flex-col '>
                {/* Calender  and navigation*/}
                <div className="flex flex-col gap-[32px] sm:gap-[34px] md:gap-[36px] lg:gap-[39px] xl:gap-[40.5px] 2xl:gap-[42px] ">
                    {/* Header */}
                    <div className="flex flex-col gap-[16px] sm:gap-[18px] md:gap-[20px] lg:gap-[21px] xl:gap-[24px] 2xl:gap-[28px] ">
                        <Paragraph size="md" className='font-[500] text-OptimisticGray60 flex'>
                            Patients
                            <span className="px-2 flex justify-center items-center"><Greaterthan /></span>
                            <span className="text-[#292929]">Journals</span>
                        </Paragraph>

                        <div className="flex items-center gap-3">
                            <div>
                                <Link href={`/dashboard/providers/patient/${patient.id}`}>
                                    <div className='inline-flex items-center justify-center text-center bg-MindfulBrown80 rounded-full 
                                    w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] md:w-[28px] md:h-[28px] lg:w-[30px] lg:h-[30px] xl:w-[31px] xl:h-[31px] 2xl:w-[32px] 2xl:h-[32px] hover:cursor-pointer'>
                                        <div className='w-[5px] h-[8px] sm:w-[5px] sm:h-[8px] md:w-[6px] md:h-[10px] lg:w-[7px] lg:h-[12px] xl:w-[8px] xl:h-[14px] 2xl:w-[10px] 2xl:h-[16px]'>
                                            <NewBack />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="">
                                <Paragraph size="subText" className='font-[700] text-[#292929]'>Journal Entries</Paragraph>
                            </div>
                        </div>
                    </div>

                    {/* calender */}
                    <div className="md:w-[280px] lg:w-[316px] min-h-[326px] self-center md:flex hidden">
                        <Calendar
                            mode="range"
                            selected={range}
                            onSelect={setRange}
                            className="h-full w-full border-1 border-[#E1E1E1] shadow-[0px_1px_2px_0px_#00000040] rounded-[10px]"
                        />
                    </div>
                </div>

                {/* Table and tabs */}
                <div className="flex flex-col self-start gap-[22px] sm:gap-[24px] md:gap-[36px] lg:gap-[39px] xl:gap-[40.5px] 2xl:gap-[42px] w-full">

                    {/* tabs */}
                    <div className="flex justify-center flex-col">
                        <div className="flex gap-[20px] sm:gap-[23px] md:gap-[26px] lg:gap-[29px] xl:gap-[30.5px] 2xl:gap-[32px] justify-between md:justify-start">
                            {/* select */}
                            <div className=" p-0 m-0">
                                <Label htmlFor="mood" className="pb-[8px]">
                                    <Paragraph size="label" className="text-Gray900 font-bold">
                                        Mood type
                                    </Paragraph>
                                </Label>
                                <Select className='bg-White'>
                                    <SelectTrigger className="w-[154px] bg-White border-1 border-[#DEDFE3] rounded-[10px]">
                                        <SelectValue placeholder="Select mood" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="happy" default>Happy</SelectItem>
                                        <SelectItem value="sad">Sad</SelectItem>
                                        <SelectItem value="good">Good</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* filter */}
                            <div className=" m-0 p-0">
                                <Label htmlFor="Sort" className="pb-[8px]">
                                    <Paragraph size="label" className="text-Gray900 font-bold">
                                        Sort by
                                    </Paragraph>
                                </Label>
                                <Userinfotabs defaultValue="newest" className='w-fit'>
                                    <TabsList className="flex whitespace-nowrap bg-White border-1 border-[#DEDFE3] rounded-[32px] h-[43px] sm:h-[44px] md:h-[45px] lg:h-[46px] xl:h-[47px] 2xl:h-[48px]  shadow-[0px_1px_3px_0px_#00000033] px-[4px]">
                                        <TabsTrigger value="newest" className="h-[37px] sm:h-[38px] md:h-[39px] lg:h-[40px] xl:h-[41px] 2xl:h-[42px]">
                                            <Paragraph size="xxs" className="whitespace-nowrap">Newest</Paragraph>
                                        </TabsTrigger>
                                        <TabsTrigger value="oldest" className="h-[37px] sm:h-[38px] md:h-[39px] lg:h-[40px] xl:h-[41px] 2xl:h-[42px]">
                                            <Paragraph size="xxs" className="whitespace-nowrap">Oldest</Paragraph>
                                        </TabsTrigger>
                                    </TabsList>

                                    <TabsContent value="newest">

                                    </TabsContent>
                                    <TabsContent value="oldest">

                                    </TabsContent>
                                </Userinfotabs>

                            </div>
                        </div>
                        {/* DOB */}
                        <div className="flex md:hidden w-full">
                            <DateRangePicker />
                        </div>
                    </div>

                    {/* table */}
                    <div className="w-full overflow-x-auto border-1 border-[#F9F9F9]">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className='pl-[24px] md:pl-[34px] w-[25%]'>Entry name</TableHead>
                                    <TableHead className='w-[25%] px-2 md:px-2'>Date</TableHead>
                                    <TableHead className='w-[25%] px-2 md:px-2'>Time added</TableHead>
                                    <TableHead className='w-[25%]'></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {patient.journalsData.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium pl-[24px] md:pl-[34px] pr-2 md:pr-2">
                                            <Paragraph size="tabletext" className="text-[#292929]">
                                                {item.entryName}
                                            </Paragraph>

                                        </TableCell>
                                        <TableCell className='px-2 md:px-2'>
                                            <Paragraph size="tabletext" className="text-[#292929]">
                                                {item.date}
                                            </Paragraph>
                                        </TableCell>
                                        <TableCell className='px-2 md:px-2'>
                                            <Paragraph size="tabletext" className="text-[##292929] ">
                                                {item.timeAdded}
                                            </Paragraph>
                                        </TableCell>

                                        <TableCell className='sticky right-0 bg-white z-5 text-right pr-[22px] md:pr-[42px]'>
                                            <button onClick={() => { setopenJournalsDialog(true) }}>
                                                <div className='w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] md:w-[21px] md:h-[21px] lg:w-[22px] lg:h-[22px] xl:w-[23px] xl:h-[23px] 2xl:w-[24px] 2xl:h-[24px] bg-[#00738A] flex justify-center items-center rounded-full cursor-pointer'
                                                >
                                                    <Forward />
                                                </div>
                                            </button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>

            <Dialog open={openJournalsDialog} onOpenChange={setopenJournalsDialog}>
                <DialogContent className="p-[18px] sm:p-[20px] md:p-[21px] lg:p-[22px] xl:p-[23px] 2xl:p-[24px] gap-[5px] sm:gap-[6px] md:gap-[7px] lg:gap-[8px] xl:gap-[9px] 2xl:gap-[10px] xs:w-[440x] sm:w-[460px] md:w-[500px] lg:w-[560px] xl:w-[600px] 2xl:w-[623px] ">
                    <DialogHeader>
                        <DialogTitle className='text-start'>
                            <Heading level='detailsheading' className='text-[#292929] font-[700]'>Journal</Heading>

                        </DialogTitle>
                    </DialogHeader>

                    {/* details */}
                    <div>
                        <div className='flex flex-col gap-[14px] sm:gap-[15.5px] md:gap-[17px] lg:gap-[19px] xl:gap-[20px] 2xl:gap-[21px]'>

                            {/* Journal title */}
                            <div className='w-full'>
                                <Label htmlFor="title" className='mb-[8px]'>
                                    <Paragraph size="label" className="text-Gray900 font-bold">Journal title</Paragraph>
                                </Label>
                                <Readonly value="Feeling Bad Again" textClassNames="font-[600] text-[#2A2A2A] text-[12px] sm:text-[12.5px] md:text-[13px] lg:text-[13.5px] xl:text-[13.8px] 2xl:text-[14px]" />

                            </div>

                            {/* Emotion  */}
                            <div className='w-full'>
                                <Label htmlFor="Emotion " className='mb-[8px]'>
                                    <Paragraph size="label" className="text-Gray900 font-bold">Emotion</Paragraph>
                                </Label>
                                <Readonly value={
                                    <>
                                        <span className="w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] md:w-[15px] md:h-[15px] lg:w-[16px] lg:h-[16px] xl:w-[17px] xl:h-[17px] 2xl:w-[18px] 2xl:h-[18px]">
                                            <Sad />
                                        </span>
                                        <span>Sad</span>
                                    </>
                                } textClassNames="font-[600] text-[#2A2A2A] text-[12px] sm:text-[12.5px] md:text-[13px] lg:text-[13.5px] xl:text-[13.8px] 2xl:text-[14px]" />

                            </div>

                            {/* Journal entry */}
                            <div>
                                <Label htmlFor="entry" className='mb-[8px]'>
                                    <Paragraph size="label" className="text-Gray900 font-bold">Journal entry</Paragraph>
                                </Label>
                                <Readonly value="Today I had a hard time concentrating. I was very worried about making mistakes. Today I had a hard time concentrating. I was very worried about making mistakes. Today I had a hard time concentrating. I was very worried about making mistakes. Today I had a hard time concentrating. I was very worried about making mistakes." textClassNames="font-medium text-[#3F3C36] leading-[160%]"
                                    outerDivClassNames="min-h-[179px] sm:min-h-[184px] md:min-h-[189px] lg:min-h-[179px] 2xl:min-h-[218px]" />
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Journals
