import React from 'react'
import tableData from "@/data/tableData";
import { Paragraph } from "@/components/ui/typography";
import { Sad, Forward } from '@/svgs/Icons';
import Link from 'next/link';
function JournalEntries({id}) {
    const patientId = Number(id);
    const patient = tableData.find(p => p.id === patientId);
    return (
        <>
            <table className="table-auto w-full border-collapse text-center">
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-y-[1.35px] border-[#D9D9D9] ">
                        {/* 1 */}
                        <td className="text-start px-[20px] py-[8px] sm:px-[23px] sm:py-[9px] md:px-[26px] md:py-[10px] lg:px-[29px] lg:py-[12px] xl:px-[31px] xl:py-[13px] 2xl:px-[32px] 2xl:py-[14px]">
                            <div className="flex flex-col gap-[4px] sm:gap-[5px] md:gap-[6.5px] lg:gap-[8px] xl:gap-[9px] 2xl:gap-[10px]">
                                <span>
                                    <Paragraph size="tablecell" className="text-[#292929] font-medium">Good day today</Paragraph>
                                </span>
                                <span>
                                    <Paragraph size="cellsubTitle" className="text-Gray500 font-inter">Journal entry title</Paragraph>
                                </span>
                            </div>
                        </td>

                        {/* 2 */}
                        <td className="">
                            <div className="flex flex-col gap-[4px] sm:gap-[5px] md:gap-[6.5px] lg:gap-[8px] xl:gap-[9px] 2xl:gap-[10px] items-center justify-center">
                                <div className="flex gap-[7px] items-center justify-center">
                                    <span className="w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] md:w-[15px] md:h-[15px] lg:w-[16px] lg:h-[16px] xl:w-[17px] xl:h-[17px] 2xl:w-[18px] 2xl:h-[18px]">
                                        <Sad />
                                    </span>
                                    <span>
                                        <Paragraph size="normal" className="text-[#292929] font-medium">Sad</Paragraph>
                                    </span>
                                </div>
                                <span>
                                    <Paragraph size="cellsubTitle" className="text-Gray500 font-inter">Emotion</Paragraph>
                                </span>
                            </div>
                        </td>

                        {/* 3 */}
                        <td className="text-center">
                            <div className="flex flex-col items-start self-center w-max gap-[4px] sm:gap-[5px] md:gap-[6.5px] lg:gap-[8px] xl:gap-[9px] 2xl:gap-[10px] mx-auto">
                                <Paragraph size="tablecell" className="text-[#292929] font-medium">
                                    10:12am
                                </Paragraph>
                                <Paragraph size="cellsubTitle" className="text-Gray500 font-inter">
                                    Time
                                </Paragraph>
                            </div>
                        </td>


                        {/* 4 */}
                        <td className="">
                            <Link href={`/dashboard/providers/patient/${patient.id}/journals`}>
                                <div className="inline-flex items-center justify-center text-center bg-MindfulBrown80 rounded-full w-[23px] h-[23px] sm:w-[25px] sm:h-[25px] md:w-[27px] md:h-[27px] lg:w-[29px] lg:h-[29px] xl:w-[30px] xl:h-[30px] 2xl:w-[31px] 2xl:h-[31px] hover:cursor-pointer">
                                    <Forward />
                                </div>
                            </Link>
                        </td>
                    </tr>
                    <tr className="border-y-[1.35px] border-[#D9D9D9] ">
                        {/* 1 */}
                        <td className="text-start px-[20px] py-[8px] sm:px-[23px] sm:py-[9px] md:px-[26px] md:py-[10px] lg:px-[29px] lg:py-[12px] xl:px-[31px] xl:py-[13px] 2xl:px-[32px] 2xl:py-[14px]">
                            <div className="flex flex-col gap-[4px] sm:gap-[5px] md:gap-[6.5px] lg:gap-[8px] xl:gap-[9px] 2xl:gap-[10px]">
                                <span>
                                    <Paragraph size="tablecell" className="text-[#292929] font-medium">Good day today</Paragraph>
                                </span>
                                <span>
                                    <Paragraph size="cellsubTitle" className="text-Gray500 font-inter">Journal entry title</Paragraph>
                                </span>
                            </div>
                        </td>

                        {/* 2 */}
                        <td className="">
                            <div className="flex flex-col gap-[4px] sm:gap-[5px] md:gap-[6.5px] lg:gap-[8px] xl:gap-[9px] 2xl:gap-[10px] items-center justify-center">
                                <div className="flex gap-[7px] items-center justify-center">
                                    <span className="w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] md:w-[15px] md:h-[15px] lg:w-[16px] lg:h-[16px] xl:w-[17px] xl:h-[17px] 2xl:w-[18px] 2xl:h-[18px]">
                                        <Sad />
                                    </span>
                                    <span>
                                        <Paragraph size="normal" className="text-[#292929] font-medium">Sad</Paragraph>
                                    </span>
                                </div>
                                <span>
                                    <Paragraph size="cellsubTitle" className="text-Gray500 font-inter">Emotion</Paragraph>
                                </span>
                            </div>
                        </td>

                        {/* 3 */}
                        <td className="text-center">
                            <div className="flex flex-col items-start self-center w-max gap-[4px] sm:gap-[5px] md:gap-[6.5px] lg:gap-[8px] xl:gap-[9px] 2xl:gap-[10px] mx-auto">
                                <Paragraph size="tablecell" className="text-[#292929] font-medium">
                                    10:12am
                                </Paragraph>
                                <Paragraph size="cellsubTitle" className="text-Gray500 font-inter">
                                    Time
                                </Paragraph>
                            </div>
                        </td>


                        {/* 4 */}
                        <td className="">
                            <Link href={`/dashboard/providers/patient/${patient.id}/journals`}>
                                <div className="inline-flex items-center justify-center text-center bg-MindfulBrown80 rounded-full w-[23px] h-[23px] sm:w-[25px] sm:h-[25px] md:w-[27px] md:h-[27px] lg:w-[29px] lg:h-[29px] xl:w-[30px] xl:h-[30px] 2xl:w-[31px] 2xl:h-[31px] hover:cursor-pointer">
                                    <Forward />
                                </div>
                            </Link>
                        </td>
                    </tr>
                    <tr className="border-y-[1.35px] border-[#D9D9D9] ">
                        {/* 1 */}
                        <td className="text-start px-[20px] py-[8px] sm:px-[23px] sm:py-[9px] md:px-[26px] md:py-[10px] lg:px-[29px] lg:py-[12px] xl:px-[31px] xl:py-[13px] 2xl:px-[32px] 2xl:py-[14px]">
                            <div className="flex flex-col gap-[4px] sm:gap-[5px] md:gap-[6.5px] lg:gap-[8px] xl:gap-[9px] 2xl:gap-[10px]">
                                <span>
                                    <Paragraph size="tablecell" className="text-[#292929] font-medium">Good day today</Paragraph>
                                </span>
                                <span>
                                    <Paragraph size="cellsubTitle" className="text-Gray500 font-inter">Journal entry title</Paragraph>
                                </span>
                            </div>
                        </td>

                        {/* 2 */}
                        <td className="">
                            <div className="flex flex-col gap-[4px] sm:gap-[5px] md:gap-[6.5px] lg:gap-[8px] xl:gap-[9px] 2xl:gap-[10px] items-center justify-center">
                                <div className="flex gap-[7px] items-center justify-center">
                                    <span className="w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] md:w-[15px] md:h-[15px] lg:w-[16px] lg:h-[16px] xl:w-[17px] xl:h-[17px] 2xl:w-[18px] 2xl:h-[18px]">
                                        <Sad />
                                    </span>
                                    <span>
                                        <Paragraph size="normal" className="text-[#292929] font-medium">Sad</Paragraph>
                                    </span>
                                </div>
                                <span>
                                    <Paragraph size="cellsubTitle" className="text-Gray500 font-inter">Emotion</Paragraph>
                                </span>
                            </div>
                        </td>

                        {/* 3 */}
                        <td className="text-center">
                            <div className="flex flex-col items-start self-center w-max gap-[4px] sm:gap-[5px] md:gap-[6.5px] lg:gap-[8px] xl:gap-[9px] 2xl:gap-[10px] mx-auto">
                                <Paragraph size="tablecell" className="text-[#292929] font-medium">
                                    10:12am
                                </Paragraph>
                                <Paragraph size="cellsubTitle" className="text-Gray500 font-inter">
                                    Time
                                </Paragraph>
                            </div>
                        </td>


                        {/* 4 */}
                        <td className="">
                            <Link href={`/dashboard/providers/patient/${patient.id}/journals`}>
                                <div className="inline-flex items-center justify-center text-center bg-MindfulBrown80 rounded-full w-[23px] h-[23px] sm:w-[25px] sm:h-[25px] md:w-[27px] md:h-[27px] lg:w-[29px] lg:h-[29px] xl:w-[30px] xl:h-[30px] 2xl:w-[31px] 2xl:h-[31px] hover:cursor-pointer">
                                    <Forward />
                                </div>
                            </Link>
                        </td>
                    </tr>
                    <tr className="border-t-[1.35px] border-[#D9D9D9] ">
                        {/* 1 */}
                        <td className="text-start px-[20px] py-[8px] sm:px-[23px] sm:py-[9px] md:px-[26px] md:py-[10px] lg:px-[29px] lg:py-[12px] xl:px-[31px] xl:py-[13px] 2xl:px-[32px] 2xl:py-[14px]">
                            <div className="flex flex-col gap-[4px] sm:gap-[5px] md:gap-[6.5px] lg:gap-[8px] xl:gap-[9px] 2xl:gap-[10px]">
                                <span>
                                    <Paragraph size="tablecell" className="text-[#292929] font-medium">Good day today</Paragraph>
                                </span>
                                <span>
                                    <Paragraph size="cellsubTitle" className="text-Gray500 font-inter">Journal entry title</Paragraph>
                                </span>
                            </div>
                        </td>

                        {/* 2 */}
                        <td className="">
                            <div className="flex flex-col gap-[4px] sm:gap-[5px] md:gap-[6.5px] lg:gap-[8px] xl:gap-[9px] 2xl:gap-[10px] items-center justify-center">
                                <div className="flex gap-[7px] items-center justify-center">
                                    <span className="w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] md:w-[15px] md:h-[15px] lg:w-[16px] lg:h-[16px] xl:w-[17px] xl:h-[17px] 2xl:w-[18px] 2xl:h-[18px]">
                                        <Sad />
                                    </span>
                                    <span>
                                        <Paragraph size="normal" className="text-[#292929] font-medium">Sad</Paragraph>
                                    </span>
                                </div>
                                <span>
                                    <Paragraph size="cellsubTitle" className="text-Gray500 font-inter">Emotion</Paragraph>
                                </span>
                            </div>
                        </td>

                        {/* 3 */}
                        <td className="text-center">
                            <div className="flex flex-col items-start self-center w-max gap-[4px] sm:gap-[5px] md:gap-[6.5px] lg:gap-[8px] xl:gap-[9px] 2xl:gap-[10px] mx-auto">
                                <Paragraph size="tablecell" className="text-[#292929] font-medium">
                                    10:12am
                                </Paragraph>
                                <Paragraph size="cellsubTitle" className="text-Gray500 font-inter">
                                    Time
                                </Paragraph>
                            </div>
                        </td>


                        {/* 4 */}
                        <td className="">
                            <Link href={`/dashboard/providers/patient/${patient.id}/journals`}>
                                <div className="inline-flex items-center justify-center text-center bg-MindfulBrown80 rounded-full w-[23px] h-[23px] sm:w-[25px] sm:h-[25px] md:w-[27px] md:h-[27px] lg:w-[29px] lg:h-[29px] xl:w-[30px] xl:h-[30px] 2xl:w-[31px] 2xl:h-[31px] hover:cursor-pointer">
                                    <Forward />
                                </div>
                            </Link>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </>
    )
}

export default JournalEntries
