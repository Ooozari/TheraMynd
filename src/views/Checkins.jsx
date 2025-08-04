'use client';
import React from "react";
import { useState } from "react";
import tableData from "@/data/tableData";
import { Greaterthan, Back, Sad, Forward } from '@/svgs/Icons';
import Link from 'next/link';
import { Heading, Paragraph } from "@/components/ui/typography";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
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
import { Button } from "@/components/ui/button"
import {
    Userinfotabs,
    TabsList,
    TabsTrigger,
    TabsContent,
} from "@/components/ui/userinfotabs";
import { DailyCheckIns } from '@/components/shared'


function Checkins({ id }) {
    const [range, setRange] = useState({
        from: new Date(),
        to: new Date(),
    });
    const patientId = Number(id);
    const patient = tableData.find(p => p.id === patientId);
    console.log(patient)
    console.log(patientId)
    return (
        <>   
        {/*  */}
            <div className='flex gap-[20px] sm:gap-[23px] md:gap-[26px] lg:gap-[29px] xl:gap-[30.5px] 2xl:gap-[32px] md:flex-row flex-col'>
                {/* Calender  and navigation*/}
                <div className="flex flex-col gap-[32px] sm:gap-[34px] md:gap-[36px] lg:gap-[39px] xl:gap-[40.5px] 2xl:gap-[42px] bg-amber-900">
                    {/* Header */}
                    <div className="flex flex-col gap-[16px] sm:gap-[18px] md:gap-[20px] lg:gap-[21px] xl:gap-[24px] 2xl:gap-[28px] bg-green-600">
                        <Paragraph size="md" className='font-[500] text-OptimisticGray60 flex'>
                            Patients
                            <span className="px-2 flex justify-center items-center"><Greaterthan /></span>
                            <span className="text-Black">Daily Check-ins</span>
                        </Paragraph>

                        <div className="flex items-center gap-3">
                            <div>
                                <Link href={`/dashboard/providers/patient/${patient.id}`}>
                                    <div className='inline-flex items-center justify-center text-center bg-MindfulBrown80 rounded-full 
                                           w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] md:w-[28px] md:h-[28px] lg:w-[30px] lg:h-[30px] xl:w-[31px] xl:h-[31px] 2xl:w-[32px] 2xl:h-[32px] hover:cursor-pointer'>
                                        <Back />
                                    </div>
                                </Link>
                            </div>
                            <div className="">
                                <Paragraph size="subText" className='font-[700] text-[#292929]'>Check-Ins</Paragraph>
                            </div>
                        </div>
                    </div>

                    {/* calender */}
                    <div className="min-w-[316px] min-h-[326px]">
                        <Calendar
                            mode="range"
                            selected={range}
                            onSelect={setRange}
                            className="h-full w-full border-1 border-[#E1E1E1] shadow-[0px 1px 2px 0px #00000040] rounded-[10px]"
                        />
                    </div>
                </div>

                {/* Table and tabs */}
                <div className="flex flex-col self-start gap-[32px] sm:gap-[34px] md:gap-[36px] lg:gap-[39px] xl:gap-[40.5px] 2xl:gap-[42px] w-full bg-sky-900">

                    {/* tabs */}
                    <div className="flex gap-[20px] sm:gap-[23px] md:gap-[26px] lg:gap-[29px] xl:gap-[30.5px] 2xl:gap-[32px] bg-blue-300">
                        {/* select */}
                        <div className="bg-orange-400 p-0 m-0">
                            <Label htmlFor="mood" className="pb-[8px]">
                                <Paragraph size="label" className="text-Gray900 font-bold">
                                    Mood type
                                </Paragraph>
                            </Label>
                            <Select className='bg-White'>
                                <SelectTrigger className="w-[169px] bg-White border-1 border-[#DEDFE3] rounded-[10px]">
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
                        <div className="bg-red-500 m-0 p-0">
                            <Label htmlFor="Sort" className="pb-[8px]">
                                <Paragraph size="label" className="text-Gray900 font-bold">
                                    Sort by
                                </Paragraph>
                            </Label>
                            <Userinfotabs defaultValue="newest" className='w-fit shadow-[0px 1px 3px 0px #00000033]'>
                                <TabsList className="flex whitespace-nowrap bg-White border-1 border-[#DEDFE3] rounded-[32px] " >
                                    <TabsTrigger value="newest" className="flex-shrink-0">
                                        <Paragraph size="xxs" className="whitespace-nowrap">Newest</Paragraph>
                                    </TabsTrigger>
                                    <TabsTrigger value="oldest" className="flex-shrink-0">
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

                    {/* table */}
                    <div className="w-full bg-Gray500">
                        <Table className='w-full'>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Entry name</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Emotion</TableHead>
                                    <TableHead>Stressor</TableHead>
                                    <TableHead></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {patient.checkinData.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium flex items-center gap-[8px] sm:gap-[12px] md:gap-[16px] lg:gap-[18px] xl:gap-[20px] 2xl:gap-[22px]">
                                            <Paragraph size="tabletext" className="text-[#292929]">
                                                {item.entryName}
                                            </Paragraph>

                                        </TableCell>
                                        <TableCell>
                                            <Paragraph size="tabletext" className="text-[#292929]">
                                                {item.date}
                                            </Paragraph>
                                        </TableCell>
                                        <TableCell>
                                            <Paragraph size="tabletext" className="text-[#292929]">
                                                {item.emotion}
                                            </Paragraph>
                                        </TableCell>

                                        <TableCell>
                                            <Paragraph size="tabletext" className="text-[##292929] ">
                                                {item.stressor}
                                            </Paragraph>
                                        </TableCell>

                                        <TableCell className='text-right'>
                                            <div className='w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] md:w-[21px] md:h-[21px] lg:w-[22px] lg:h-[22px] xl:w-[23px] xl:h-[23px] 2xl:w-[24px] 2xl:h-[24px] bg-[#00738A] flex justify-center items-center rounded-full cursor-pointer'
                                            >
                                                <Forward />
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkins
