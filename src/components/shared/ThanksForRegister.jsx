import React from 'react'
import { Union } from '@/svgs/Icons';
import { Heading, Paragraph } from "@/components/ui/typography";

function ThanksForRegister() {
    return (
        <>
            <div className='min-h-screen w-full flex items-center justify-center py-[40px] sm:py-[55px] md:py-[70px] lg:py-[85px] xl:py-[95px] 2xl:py-[100px] px-4'>
                <div className='flex flex-col bg-White rounded-[20px] shadow-[0px_9px_34px_0px_#0000001A] gap-[20px] sm:gap-[23px] md:gap-[26px] lg:gap-[28px] xl:gap-[30px] 2xl:gap-[32px] w-[280px] sm:w-[300px] md:w-[500px] lg:w-[580px] xl:w-[640px] 2xl:w-[681px]
                 p-[20px] sm:p-[25px] md:p-[30px] lg:p-[35px] xl:p-[38px] 2xl:p-[40px]'>
                    <div className='flex justify-center'>
                        <div className='w-[25.1px] h-[25.1px] sm:w-[29.3px] sm:h-[29.3px] md:w-[33.5px] md:h-[33.5px] lg:w-[36.7px] lg:h-[36.7px] xl:w-[39px] xl:h-[39px] 2xl:w-[41.1px] 2xl:h-[41.1px]'>
                            <Union />
                        </div>
                    </div>

                    <div className="w-full flex flex-col items-center justify-center text-center">
                        <Heading level="cardmd" className="font-[800] text-[#424242] font-urbanist leading-[22px] sm:leading-[27px] md:leading-[32px] lg:leading-[37px] xl:leading-[41px] 2xl:leading-[44px]">
                            Thanks for Registering to TheraMynd! 🎉
                        </Heading>
                        <Paragraph size="md" className="text-[#4D4D4D] font-medium font-urbanist mt-2">
                            Thank you for signing up for TheraMynd, you will receive an email in the next few hours with the next steps
                        </Paragraph>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ThanksForRegister
