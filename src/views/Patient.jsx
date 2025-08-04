'use client';
import React from "react";
import { useState } from "react";
import tableData from "@/data/tableData";
import { Paragraph } from "@/components/ui/typography";
import { Greaterthan, Back, Sad, Forward } from '@/svgs/Icons';
import Link from 'next/link';
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import {
    Userinfotabs,
    TabsList,
    TabsTrigger,
    TabsContent,
} from "@/components/ui/userinfotabs";
import { DailyCheckIns } from '@/components/shared'


export default function Patient({ id }) {
    const [date, setDate] = React.useState(new Date());
    const patientId = Number(id);
    const patient = tableData.find(p => p.id === patientId);
    const [currentTab, setCurrentTab] = useState("Details");

    const [tab, setTab] = useState("daily");

    const getTabPath = (tab) => {
        switch (tab) {
            case "daily":
                return "check-ins";
            case "journal":
                return "journals";
            case "coping":
                return "coping";
            default:
                return "";
        }
    };


    if (!patient) {
        return <div className="p-6 text-red-500">Patient not found.</div>;
    }

    return (
        <>
            {/* Header */}
            <div className="flex flex-col gap-[16px] sm:gap-[18px] md:gap-[20px] lg:gap-[21px] xl:gap-[22px] 2xl:gap-[23px]">
                <Paragraph size="md" className='font-[500] text-OptimisticGray60 flex'>
                    Patients
                    <span className="px-2 flex justify-center items-center"><Greaterthan /></span>
                    <span className="text-Black">{currentTab}</span>
                </Paragraph>

                <div className="flex items-center gap-3">
                    <div>
                        <Link href='/dashboard/providers'>
                            <div className='inline-flex items-center justify-center text-center bg-MindfulBrown80 rounded-full 
                            w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] md:w-[28px] md:h-[28px] lg:w-[30px] lg:h-[30px] xl:w-[31px] xl:h-[31px] 2xl:w-[32px] 2xl:h-[32px] hover:cursor-pointer'>
                                <Back />
                            </div>
                        </Link>
                    </div>
                    <div className="">
                        <Paragraph size="head" className='font-[700] text-[#292929]'>{patient.name}</Paragraph>
                        <Paragraph size="uid" className='font-urbanist font-[600] text-[#292929]'>{patient.uid}</Paragraph>

                    </div>
                </div>
            </div>

            {/* details */}
            <div className="flex flex-col gap-[18px] sm:gap-[19px] md:gap-[20px] lg:gap-[22px] xl:gap-[23px] 2xl:gap-[24px]">

                {/* Graph details */}
                <div></div>

                {/* Calender and tabel */}
                <div className="flex md:flex-row flex-col bg-White rounded-[15px] shadow-[0px 12.13px 44.49px 0px #0000001A]">

                    {/* Calender */}
                    <div className="w-full md:w-[300px] lg:w-[330.05px] xl:w-[380.05px] 2xl:w-[426.05px] pt-[15.78px] pl-[9.44px] pb-[16px]">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="h-full w-full xs:border-b-[1.35px] xs:border-[#DBDBDB] xs:border-r-0 md:border-r-[1.35px] md:border-[#DBDBDB] md:border-b-0"
                        />
                    </div>

                    <div className="flex-1 min-w-0 px-[12px] md:px-0">
                        <Userinfotabs defaultValue="daily" onValueChange={(value) => setTab(value)}>
                            {/* Tab Buttons */}
                            <div className="flex flex-col md:flex-row md:justify-between items-start w-full gap-[12px] md:gap-0 md:items-center px-0 pt-0 md:px-[26px] md:pt-[14px] lg:px-[28px] lg:pt-[16px] xl:px-[30px] xl:pt-[18px] 2xl:px-[32px] 2xl:pt-[20px] overflow-x-hidden">
                                <div className="flex justify-center md:justify-start overflow-x-auto">
                                    <TabsList
                                        className="
                                    w-[90%] md:w-fit
                                    flex
                                    overflow-x-auto
                                    overflow-y-hidden
                                    scroll-smooth
                                    scrollbar-thin
                                    whitespace-nowrap
                                    "
                                    >
                                        <TabsTrigger value="daily" className="flex-shrink-0">
                                            <Paragraph size="xxs" className="whitespace-nowrap">Daily Check-ins</Paragraph>
                                        </TabsTrigger>
                                        <TabsTrigger value="journal" className="flex-shrink-0">
                                            <Paragraph size="xxs" className="whitespace-nowrap">Journal Entries</Paragraph>
                                        </TabsTrigger>
                                        <TabsTrigger value="coping" className="flex-shrink-0">
                                            <Paragraph size="xxs" className="whitespace-nowrap">Coping Mechanisms</Paragraph>
                                        </TabsTrigger>
                                    </TabsList>
                                </div>

                                <div className="w-full md:w-auto flex justify-end md:justify-start">
                                    <Button variant="newghost" asChild>
                                        <Link href={`/dashboard/providers/patient/${patient.id}/${getTabPath(tab)}`}>
                                            <Paragraph size="md" className="text-MindfulBrown90 font-inter">View all</Paragraph>
                                        </Link>
                                    </Button>
                                </div>

                            </div>

                            {/* Tab Contents */}
                            <TabsContent value="daily">
                                <DailyCheckIns />
                            </TabsContent>
                            <TabsContent value="journal">
                                <DailyCheckIns />
                            </TabsContent>
                            <TabsContent value="coping">
                                <DailyCheckIns />
                            </TabsContent>
                        </Userinfotabs>
                    </div>

                </div>
            </div>
        </>
    );
}
