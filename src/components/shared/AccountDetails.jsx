'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Union } from '@/svgs/Icons';
import CreateAccTab from '@/components/ui/createacctab';
import { AboutYou, Payment, YourProfession,ThanksForRegister } from '@/components/shared';



function AccountDetails() {
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const router = useRouter();
    useEffect(() => {
        if (isConfirmed) {
            const timeout = setTimeout(() => {
                router.push('/dashboard/providers');
            }, 3000); 
            return () => clearTimeout(timeout);
        }
    }, [isConfirmed, router]);
    return (
        <>
            {isConfirmed ? <ThanksForRegister /> : (
                <div className=''>
                    <div className='min-h-screen w-full flex items-center justify-center px-5 py-20'>
                        <div className='container mx-auto flex flex-col bg-White rounded-[10px] shadow-[0px_9px_34px_0px_#0000001A] gap-[20px] sm:gap-[23px] md:gap-[26px] lg:gap-[28px] xl:gap-[30px] 2xl:gap-[32px] max-w-[682px] px-[20.5px] sm:px-[25px] md:px-[30px] lg:px-[35px] xl:px-[38px] 2xl:px-[40.5px] py-[30px] sm:py-[33px] md:py-[35px] lg:py-[37px] xl:py-[39px] 2xl:py-[40px] w-full '>
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