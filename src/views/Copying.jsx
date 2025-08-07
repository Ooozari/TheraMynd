'use client';
import React from "react";
import { useState } from "react";
import tableData from "@/data/tableData";
import { Greaterthan, Back } from '@/svgs/Icons';
import Link from 'next/link';
import {Paragraph } from "@/components/ui/typography";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Calendar } from "@/components/ui/calendar"




function Copying({ id }) {
    const [range, setRange] = useState({
        from: new Date(),
        to: new Date(),
    });
    const patientId = Number(id);
    const patient = tableData.find(p => p.id === patientId);
    return (
        <>
            {/*  */}
            <div className='flex flex-col gap-[32px] sm:gap-[34px] md:gap-[36px] lg:gap-[39px] xl:gap-[40.5px] 2xl:gap-[43px] md:mb-0 mb-[40px]'>
                {/* Header */}
                <div className="flex flex-col gap-[18px] sm:gap-[20px] md:gap-[21px] lg:gap-[22px] xl:gap-[23px] 2xl:gap-[24px] ">
                    <Paragraph size="md" className='font-[500] text-OptimisticGray60 flex'>
                        Patients
                        <span className="px-2 flex justify-center items-center"><Greaterthan /></span>
                        <span className="text-[#292929]">Coping Mechanisms</span>
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
                            <Paragraph size="subText" className='font-[700] text-[#292929]'>Coping Mechanisms Performed </Paragraph>
                        </div>
                    </div>
                </div>
                {/* Calender and table */}
                <div className="flex flex-col md:flex-row gap-[20px] sm:gap-[23px] md:gap-[26px] lg:gap-[29px] xl:gap-[30.5px] 2xl:gap-[32px]">
                    {/* calender */}
                    <div className="min-w-[316px] min-h-[326px]">
                        <Calendar
                            mode="range"
                            selected={range}
                            onSelect={setRange}
                            className="h-full w-full border-1 border-[#E1E1E1] shadow-[0px 1px 2px 0px #00000040] rounded-[10px]"
                        />
                    </div>
                    {/* table */}
                    <div className="w-full ">
                        <Table className='w-full'>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Activity</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Time added</TableHead>
                                    <TableHead></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {patient.copyMechanismData.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium flex items-center gap-[8px] sm:gap-[12px] md:gap-[16px] lg:gap-[18px] xl:gap-[20px] 2xl:gap-[22px]">
                                            <Paragraph size="tabletext" className="text-[#292929]">
                                                {item.activity}
                                            </Paragraph>

                                        </TableCell>
                                        <TableCell>
                                            <Paragraph size="tabletext" className="text-[#292929]">
                                                {item.date}
                                            </Paragraph>
                                        </TableCell>
                                        <TableCell>
                                            <Paragraph size="tabletext" className="text-[##292929] ">
                                                {item.timeAdded}
                                            </Paragraph>
                                        </TableCell>
                                        <TableCell>
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

export default Copying
