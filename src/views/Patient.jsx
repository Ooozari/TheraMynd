'use client';
import React from "react";
import { useState } from "react";
import tableData from "@/data/tableData";
import { Paragraph, Heading } from "@/components/ui/typography";
import { Greaterthan, Back, Sad, Forward } from '@/svgs/Icons';
import Link from 'next/link';
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Userinfotabs,
    TabsList,
    TabsTrigger,
    TabsContent,
} from "@/components/ui/userinfotabs";
import { DailyCheckIns, CustomAreaChart } from '@/components/shared'


export default function Patient({ id }) {
    const [metricTab, setMetricTab] = useState("stress");

    const dummyData = [
        { name: 'A', uv: 6 },
        { name: 'B', uv: 3 },
        { name: 'C', uv: 8 },
        { name: 'D', uv: 6 },
        { name: 'E', uv: 4 },
        { name: 'E', uv: 6 },
        { name: 'E', uv: 8 },
        { name: 'E', uv: 5 },
        { name: 'E', uv: 10 },
    ];
    const [date, setDate] = React.useState(new Date());
    const patientId = Number(id);
    const patient = tableData.find(p => p.id === patientId);
    const [currentTab, setCurrentTab] = useState("Details");
    const chartInfo = patient.chartData[metricTab];
    const metricLabelMap = {
        stress: "Stress Lvl (avg.)",
        sleep: "Average Sleep",
        mood: "Average Mood",
        appetite: "Average Appetite",
    };
    const metricLabel = metricLabelMap[metricTab] || "Metric";
    const metricFeedbackMap = {
        stress: "Main Stressor",
        sleep: "Sleep Quality",
        mood: "Emotion",
        appetite: "Emotion",
    };

    const metricFeedback = metricFeedbackMap[metricTab] || "Feedback";

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
            <div className="flex flex-col gap-[16px] sm:gap-[18px] md:gap-[20px] lg:gap-[21px] xl:gap-[22px] 2xl:gap-[23px] ">
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
            <div className="flex flex-col gap-[18px] sm:gap-[19px] md:gap-[20px] lg:gap-[22px] xl:gap-[23px] 2xl:gap-[24px] mt-[28px]">

                {/* Graph details */}
                <div className="flex md:flex-row flex-col bg-White rounded-[15px] 
                shadow-[0px 17.32px 34.65px 0px #1018280D] p-[10px] gap-[20px]">
                    {/* graph and tabs */}
                    <div className="w-full">
                        {/* graph */}
                        <div className="">
                            <CustomAreaChart data={chartInfo.data} color={chartInfo.color} />
                        </div>

                        {/* tabs and select */}
                        <div className="w-full">
                            <Userinfotabs defaultValue="stress" onValueChange={(value) => setMetricTab(value)}>
                                {/* Tab Buttons */}
                                <div className="w-full flex md:flex-row flex-col md:justify-between justify-start gap-[16px] md:gap-2">

                                    <div className="flex justify-center md:justify-start overflow-x-auto w-full scrollbar-thin">
                                        <TabsList
                                            className="
                                            w-fit
                                            flex
                                            overflow-x-auto
                                            overflow-y-hidden
                                            scroll-smooth
                                            scrollbar-thin
                                            whitespace-nowrap
                                            "
                                        >
                                            <TabsTrigger value="stress"
                                                onClick={() => setMetricTab("stress")} className="flex-shrink-0 px-[20px] sm:px-[25px] md:px-[30px] lg:px-[40px] xl:px-[55px] 2xl:px-[60px]">
                                                <Paragraph size="xxs" className="whitespace-nowrap">Stress</Paragraph>
                                            </TabsTrigger>

                                            <TabsTrigger value="sleep"
                                                onClick={() => setMetricTab("sleep")} className="flex-shrink-0 px-[20px] sm:px-[25px] md:px-[30px] lg:px-[40px] xl:px-[55px] 2xl:px-[60px]">
                                                <Paragraph size="xxs" className="whitespace-nowrap">Sleep</Paragraph>
                                            </TabsTrigger>

                                            <TabsTrigger value="mood"
                                                onClick={() => setMetricTab("mood")}
                                                className="flex-shrink-0 px-[20px] sm:px-[25px] md:px-[30px] lg:px-[40px] xl:px-[55px] 2xl:px-[60px]">
                                                <Paragraph size="xxs" className="whitespace-nowrap">Mood</Paragraph>
                                            </TabsTrigger>

                                            <TabsTrigger value="appetite"
                                                onClick={() => setMetricTab("appetite")}
                                                className="flex-shrink-0 px-[20px] sm:px-[25px] md:px-[30px] lg:px-[40px] xl:px-[55px] 2xl:px-[60px]">
                                                <Paragraph size="xxs" className="whitespace-nowrap">Appetite</Paragraph>
                                            </TabsTrigger>
                                        </TabsList>
                                    </div>

                                    {/* select */}
                                    <div className="flex justify-end">
                                        <Select className=''>
                                            <SelectTrigger className="w-[110px] sm:w-[120px] md:w-[130px] lg:w-[140px] xl:w-[178px] 2xl:w-[184px] bg-White border-1 border-[#E1E1E1] rounded-[8px] h-[34px] sm:h-[37px] md:h-[40px] lg:h-[44px] xl:h-[46px] 2xl:h-[48px]">
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="1week" default>1 Week</SelectItem>
                                                <SelectItem value="1month">1 Month</SelectItem>

                                                <SelectItem value="1year">1 Year</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </Userinfotabs>
                        </div>
                    </div>
                    {/* level */}
                    <div className="flex flex-row md:flex-col items-center justify-center gap-[14px]">
                        <div className="shadow-[0_8px_16px_0_#1615130D] rounded-[20px] px-[12px] sm:px-[9px] md:px-[6px] lg:px-[8px] xl:px-[11.5px] 2xl:px-[12px] py-[39.42px] w-full h-full flex-1">
                            <div className="flex flex-col items-center justify-between gap-[14px] px-[13px] sm:px-[13px] md:px-[4px] lg:px-[6px] xl:px-[11.5px] 2xl:px-[13px] h-full">
                                <Paragraph size="subhead" className='text-OptimisticGray60 font-[600] font-urbanist whitespace-nowrap'>{metricLabel}</Paragraph>
                                <Heading level="cardmd2" className='text-MindfulBrown90 font-[800] font-urbanist whitespace-nowrap'>{chartInfo.avg}</Heading>
                            </div>
                        </div>
                        <div className="shadow-[0_8px_16px_0_#1615130D] rounded-[20px] px-[12px] sm:px-[9px] md:px-[6px] lg:px-[8px] xl:px-[11.5px] 2xl:px-[12px] py-[39.42px] w-full h-full flex-1">
                            <div className="flex flex-col items-center justify-between gap-[14px] px-[13px] sm:px-[13px] md:px-[4px] lg:px-[6px] xl:px-[11.5px] 2xl:px-[13px] h-full">
                                <Paragraph size="subhead" className='text-OptimisticGray60 font-[600] font-urbanist'>{metricFeedback}</Paragraph>
                                <Heading level="cardmd2" className='text-MindfulBrown90 font-[800] font-urbanist'>
                                    {typeof chartInfo.feedback === "string" ? (
                                        chartInfo.feedback
                                    ) : (
                                        <span className="inline-flex drop-shadow-md w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] lg:w-[55px] lg:h-[55px] xl:w-[58px] xl:h-[58px] 2xl:w-[60.32px] 2xl:h-[60.32px]">{chartInfo.feedback}</span>
                                    )}
                                </Heading>
                            </div>

                        </div>
                    </div>
                </div>

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
                            <div className="flex flex-col xl:flex-row md:justify-between items-start w-full gap-[12px] md:items-end px-0 pt-0 md:px-[26px] md:pt-[14px] lg:px-[28px] lg:pt-[16px] xl:px-[30px] xl:pt-[18px] 2xl:px-[32px] 2xl:pt-[20px] overflow-x-hidden lg:items-end xl:md:items-center md:gap-4 xl:gap-0">
                                <div className="flex justify-center md:justify-center lg:justify-center xl:justify-start overflow-x-auto w-full scrollbar-thin">
                                    <TabsList
                                        className="
                                    w-max md:w-fit
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
