import React from 'react'
import { Union } from '@/svgs/Icons'
import { Button, Input, CreateAccTab } from '@/components/ui';
function AccountDetails() {
    return (
        <>
            <div className='min-h-screen w-full flex items-center justify-center px-4 '>

                <div className='flex flex-col bg-White rounded-[10px] shadow-[0px_9px_34px_0px_#0000001A] gap-[20px] sm:gap-[23px] md:gap-[26px] lg:gap-[28px] xl:gap-[30px] 2xl:gap-[32px] max-w-[682px]
                            p-[18px] sm:p-[19px] md:p-[20px] lg:p-[22px] xl:p-[23px] 2xl:p-[24px] w-full
                        '>

                    {/* top */}
                    <div className='flex justify-center'>
                        <div className='w-[25.1px] h-[25.1px] sm:w-[29.3px] sm:h-[29.3px] md:w-[33.5px] md:h-[33.5px] lg:w-[36.7px] lg:h-[36.7px] xl:w-[39px] xl:h-[39px] 2xl:w-[41.1px] 2xl:h-[41.1px]
                                        '>
                            <Union />
                        </div>
                    </div>

                    {/* tab */}
                    <div>
                        <CreateAccTab>
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                        </CreateAccTab>
                    </div>


                </div>
            </div>
        </>
    )
}

export default AccountDetails
