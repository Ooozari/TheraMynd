import React from 'react'
import { UserInfoTabLayout,TabLayout } from "@/components/shared"
import { Heading } from "@/components/ui/typography"


function Settings() {
    return (
        <div className='flex flex-col gap-[20px] sm:gap-[24px] md:gap-[28px] lg:gap-[33px] xl:gap-[36px] 2xl:gap-[39px]'>
            <Heading level="cardmd" className="font-[800] text-[#292929] font-urbanist">
                Settings
            </Heading>

            {/* Desktop */}
            <div className='hidden md:flex'>
                <TabLayout />
            </div>

            {/* Mobile */}
            <div className='md:hidden flex'>
                <UserInfoTabLayout />
            </div>
        </div>
    )
}

export default Settings
