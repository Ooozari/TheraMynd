import React from 'react'
import { Heading, Paragraph } from "@/components/ui/typography";
import { Switch } from "@/components/ui/switch"
import { Label } from '../ui';


function Notification() {
    return (
        <>
            <div className="bg-White shadow-[0px 17.32px 34.65px 0px #1018280D] rounded-[15px] py-[12px] px-[13px] sm:py-[17px] sm:px-[18px] md:py-[22px] md:px-[23px] lg:py-[27px] lg:px-[28px] xl:py-[30px] xl:px-[31px] 2xl:py-[32px] 2xl:px-[33px] flex flex-col gap-[14px] sm:gap-[16px] md:gap-[18px] lg:gap-[21px] xl:gap-[22.5px] 2xl:gap-[24px] w-full">
                <Heading level="lgSubText" className="font-[800] font-urbanist text-[#292929]">Notifications</Heading>
                <div className='flex flex-col gap-[6px] sm:gap-[7px] md:gap-[9px] lg:gap-[10px] xl:gap-[11px] 2xl:gap-[12px]'>
                    <div className="flex justify-between items-center border-1 border-[#E1E1E0] h-[42px] sm:h-[53px] md:h-[64px] lg:h-[74px] xl:h-[80px] 2xl:h-[86px] rounded-[12px] px-[12px] sm:px-[15px] md:px-[18px] lg:px-[21px] xl:px-[23px] 2xl:px-[25px]">
                        <Label htmlFor="email">
                            <Paragraph size="md" className="text-[#292929] font-[600] font-urbanist">
                                Email Notifications
                            </Paragraph>
                        </Label>

                        <Paragraph size="md" className="text-MindfulBrown60 font-[800] font-urbanist">
                            <Switch id="email" />
                        </Paragraph>

                    </div>

                    <div className="flex justify-between items-center border-1 border-[#E1E1E0] h-[42px] sm:h-[53px] md:h-[64px] lg:h-[74px] xl:h-[80px] 2xl:h-[86px] rounded-[12px] px-[12px] sm:px-[15px] md:px-[18px] lg:px-[21px] xl:px-[23px] 2xl:px-[25px]">
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



