import React from 'react';
import { Union } from '@/svgs/Icons';
import { User, Settings } from "lucide-react";
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button"
import { Heading, Paragraph } from "@/components/ui/typography";
import Link from 'next/link';
import clsx from 'clsx';
import { Menu } from 'lucide-react';

function SideBar() {
    const pathname = usePathname();

    const menuItems = [
        { label: "Providers", icon: <User className='w-full h-full' />, href: "/dashboard/providers" },
        { label: "Settings", icon: <Settings className='w-full h-full' />, href: "/dashboard/settings" },
    ];

    return (
        <aside className="bg-white w-[248px] lg:w-[180px] xl:w-[218px] 2xl:w-[248px] px-4 pt-[38px] pb-[48px] md:pb-[28px] flex flex-col justify-between h-screen">
            <div>
                {/* Logo and Name */}
                <div className="flex items-center justify-center gap-[6px] sm:gap-[7px] md:gap-[8px] lg:gap-[10px] xl:gap-[11px] 2xl:gap-[12px]">
                    <div className='flex justify-center'>
                        <div className='w-[18px] h-[18px] sm:w-[23px] sm:h-[23px] md:w-[28px] md:h-[28px] lg:w-[33px] lg:h-[33px] xl:w-[37px] xl:h-[37px] 2xl:w-[41.1px] 2xl:h-[41.1px]'>
                            <Union />
                        </div>
                    </div>
                    <Heading level="minih" className="font-[700] text-MindfulBrown80 font-urbanist">
                        TheraMynd
                    </Heading>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-2 mt-[37px]">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (

                            <Link
                                key={item.href}
                                href={item.href}
                                className={clsx(
                                    "flex items-center gap-2 px-[8px] sm:px-[12px] md:px-[16px] lg:px-[20px] xl:px-[22px] 2xl:px-[23px] py-[6px] sm:py-[7px] md:py-[8px] lg:py-[10px] xl:py-[11px] 2xl:py-[12px] rounded-[5px] font-semibold text-sm transition-all h-[40px] sm:h-[43px] md:h-[45px] lg:h-[47px] xl:h-[49px] 2xl:h-[50px]",
                                    isActive
                                        ? "bg-[#2E2E2E] text-White"
                                        : "text-[#2E2E2E] hover:bg-gray-100"
                                )}
                            >
                                <Paragraph size="md" className="flex items-center gap-2 m-0 p-0 font-[600]">
                                    <div className='w-[18px] h-[18px] sm:w-[19.5px] sm:h-[19.5px] md:w-[21px] md:h-[21px] lg:w-[23px] lg:h-[23px] xl:w-[24px] xl:h-[24px] 2xl:w-[25px] 2xl:h-[25px]
'>
                                        {item.icon}
                                    </div>

                                    <span>{item.label}</span>
                                </Paragraph>
                            </Link>


                        );
                    })}
                </nav>
            </div>

            {/* Logout Button */}
            <Button variant="negative" className='w-full'>
                <Paragraph size="md" className="font-[600]">Log out
                </Paragraph>
            </Button>
        </aside>
    );
}

export default SideBar;
