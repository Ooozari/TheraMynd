'use client'
import React, { useState } from 'react';
import { Union } from '@/svgs/Icons';
import CreateAccTab from '@/components/ui/createacctab';
import { AboutYou, Payment, YourProfession } from '@/components/shared';
import ThanksForRegister from '@/components/shared/ThanksForRegister';


function AccountDetails() {
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    return (


        <>
            {isConfirmed ? <ThanksForRegister /> : (
            <div className='h-screen overflow-y-auto'>
            <div className='min-h-screen w-full flex items-center justify-center py-[40px] sm:py-[55px] md:py-[70px] lg:py-[85px] xl:py-[95px] 2xl:py-[100px] px-4'>
                <div className='flex flex-col bg-White rounded-[10px] shadow-[0px_9px_34px_0px_#0000001A] gap-[20px] sm:gap-[23px] md:gap-[26px] lg:gap-[28px] xl:gap-[30px] 2xl:gap-[32px] max-w-[682px] p-[18px] sm:p-[19px] md:p-[20px] lg:p-[22px] xl:p-[23px] 2xl:p-[24px] w-full'>

                    <div className='flex justify-center'>
                        <div className='w-[25.1px] h-[25.1px] sm:w-[29.3px] sm:h-[29.3px] md:w-[33.5px] md:h-[33.5px] lg:w-[36.7px] lg:h-[36.7px] xl:w-[39px] xl:h-[39px] 2xl:w-[41.1px] 2xl:h-[41.1px]'>
                            <Union />
                        </div>
                    </div>

                    <CreateAccTab
                        currentStep={currentStep}
                    >
                        <div><AboutYou setCurrentStep={setCurrentStep} /></div>
                        <div><YourProfession setCurrentStep={setCurrentStep} /></div>
                        <div><Payment setIsConfirmed={setIsConfirmed} /></div>
                    </CreateAccTab>
                </div>
            </div>
            </div>
        )}


        </>


    );
}

export default AccountDetails;