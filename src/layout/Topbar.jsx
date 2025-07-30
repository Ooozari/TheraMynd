import React from 'react';
import { Bell } from '@/svgs/Icons';
import { Menu } from 'lucide-react';
import { Paragraph } from "@/components/ui/typography";

function TopBar({ onMenuClick }) {
  return (
    <header className="flex items-center justify-between pt-[20px] pr-[14px] sm:pt-[25px] sm:pr-[19px] md:pt-[30px] md:pr-[24px] lg:pt-[35px] lg:pr-[29px] xl:pt-[40px] xl:pr-[34px] 2xl:pt-[53px] 2xl:pr-[39px]
        pb-[8px] sticky top-0 z-10 gap-3 w-full bg-[#F0F0F0]">
      
      {/* Hamburger Menu on Mobile */}
      <div className="block lg:hidden pl-4">
        <Menu
          className="w-6 h-6 text-[#292929] cursor-pointer"
          onClick={onMenuClick}
        />
      </div>

      {/* Right Side */}
      <div className="ml-auto flex items-center gap-3">
        <div className="flex justify-center">
          <div className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] md:w-[22px] md:h-[22px] lg:w-[24px] lg:h-[24px] xl:w-[25.5px] xl:h-[25.5px] 2xl:w-[27px] 2xl:h-[27px] cursor-pointer">
            <Bell />
          </div>
        </div>
        <Paragraph size="md" className="text-[#292929] font-medium cursor-pointer">
          John Smith
        </Paragraph>
      </div>
    </header>
  );
}

export default TopBar;
