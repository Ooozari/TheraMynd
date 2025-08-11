import React from 'react'
import { TickSelected, TickUnSelected } from '@/svgs/Icons'
import { Heading, Paragraph } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"

function Plan({ type, userNo, status, price, specs, onSelect, isSelected }) {
    return (
        <>
            <div
                className={`flex flex-col ${type === "Business Plan" ? "bg-Secondary" : "bg-White"
                    } rounded-[8px] shadow-[0px_4px_30px_0px_#0000001A] gap-2 p-[10px] sm:p-[11px] md:p-[12px] lg:p-[14px] xl:p-[15px] 2xl:p-[16px] max-w-[384px]`}
            >
                {/* Top */}
                <div className='bg-White rounded-[8px] p-[10px] sm:p-[12px] md:p-[13px] lg:p-[14px] xl:p-[15px] 2xl:p-[16px]
                 flex flex-col gap-[20px] sm:gap-[21px] md:gap-[22px] lg:gap-[23px] xl:gap-[24px] 2xl:gap-[32px]'>
                    <div className='flex justify-between items-baseline'>
                        <div>
                            <Heading level="lgSubText" className='font-urbanist font-[800] text-Black '>{type}</Heading>
                            <Paragraph size="sm" className="text-Gray600 font-[500] font-satoshi">{userNo} users</Paragraph>
                        </div>

                        {status?.length > 0 && (
                            <div className={`${status[0].bg} text-White py-1 px-2 rounded-[99px]`}>
                                <Paragraph size="sm" className="font-[700] font-satoshi">
                                    {status[0].text}
                                </Paragraph>
                            </div>
                        )}
                    </div>

                    <div className='flex justify-between items-baseline'>
                        <div className='flex items-baseline'>
                            <Heading level="cardmd" className='font-urbanist font-[700] text-Black'>
                                {price}
                            </Heading>
                            <Paragraph size="md" className="text-Gray800 font-[600] font-satoshi">/month</Paragraph>
                        </div>
                        <div>
                            <Paragraph size="md" className="text-Gray800 font-[600] font-urbanist">
                                <span className='text-Red500'>*</span>billed annually
                            </Paragraph>
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-[8px] p-[10px] sm:p-[12px] md:p-[13px] lg:p-[14px] xl:p-[15px] 2xl:p-[16px]
  flex flex-col gap-2'>


                    {/* Specs */}
                    <div className='bg-Gray100 rounded-[8px] p-[10px] sm:p-[11px] md:p-[12px] lg:p-[14px] xl:p-[15px] 2xl:p-[16px]'>
                        <ul className='flex flex-col gap-[10px] sm:gap-[12px] md:gap-[14px] lg:gap-[16px] xl:gap-[18px] 2xl:gap-[20px]'>
                            {specs.map((spec, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    {spec.status ? <TickSelected /> : <TickUnSelected />}
                                    <span className="ml-2">
                                        <Paragraph
                                            size="sm"
                                            className={`font-[500] font-satoshi ${spec.status ? 'text-Black' : 'text-Gray600'}`}
                                        >
                                            {spec.text}
                                        </Paragraph>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Button */}
                    <div >
                        <Button variant={isSelected ? 'secondary' : 'secondaryOutline'} className='w-full' onClick={onSelect} type="button">
                            <Paragraph size="normal" className="font-[900] font-satoshi">
                                Select
                            </Paragraph>
                        </Button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Plan
