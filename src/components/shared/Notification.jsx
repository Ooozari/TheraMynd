import React from 'react'
import { Heading, Paragraph } from "@/components/ui/typography";
import { Switch } from "@/components/ui/switch"
import { Label } from '../ui';


function Notification() {
    return (
        <>
            <div className="bg-White shadow-[0px_17.32px_34.65px_0px_#1018280D] rounded-[15px] py-[12px] px-[13px] sm:py-[17px] sm:px-[18px] md:py-[22px] md:px-[23px] lg:py-[27px] lg:px-[28px] xl:py-[30px] xl:px-[31px] 2xl:py-[32px] 2xl:px-[33px] flex flex-col gap-[14px] sm:gap-[16px] md:gap-[18px] lg:gap-[21px] xl:gap-[22.5px] 2xl:gap-[24px] w-full">
                <Heading level="lgSubText" className="font-[800] font-urbanist text-[#292929]">Notifications</Heading>
                <div className='flex flex-col gap-[6px] sm:gap-[7px] md:gap-[9px] lg:gap-[10px] xl:gap-[11px] 2xl:gap-[12px]'>
                    <div className="flex justify-between items-center border-1 border-[#E1E1E0] h-[54px] sm:h-[63px] md:h-[70px] lg:h-[77px] xl:h-[82px] 2xl:h-[86px] rounded-[12px] px-[12px] sm:px-[14px] md:px-[16px] lg:px-[18px] xl:px-[20px] 2xl:px-[25px]">
                        <Label htmlFor="email">
                            <Paragraph size="md" className="text-[#292929] font-[600] font-urbanist">
                                Email Notifications
                            </Paragraph>
                        </Label>

                        <Paragraph size="md" className="text-MindfulBrown60 font-[800] font-urbanist">
                            <Switch id="email" />
                        </Paragraph>

                    </div>

                    <div className="flex justify-between items-center border-1 border-[#E1E1E0] h-[54px] sm:h-[63px] md:h-[70px] lg:h-[77px] xl:h-[82px] 2xl:h-[86px] rounded-[12px] px-[12px] sm:px-[14px] md:px-[16px] lg:px-[18px] xl:px-[20px] 2xl:px-[25px]">
                        <Label htmlFor="sms">
                            <Paragraph size="md" className="text-[#292929] font-[600] font-urbanist">
                                SMS Notifications
                            </Paragraph>
                        </Label>

                        <Paragraph size="md" className="text-MindfulBrown60 font-[800] font-urbanist">
                            <Switch id="sms" />
                        </Paragraph>

                    </div>
                </div>

            </div>
        </>
    )
}
export default Notification



