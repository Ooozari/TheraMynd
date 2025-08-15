'use client';

import React, { useState } from 'react';
import TopBar from '@/layout/Topbar';
import SideBar from '@/layout/SideBar';
import clsx from 'clsx';

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F4F4F4]">
      {/* Desktop Sidebar - Fixed */}
      <div className="hidden lg:block fixed h-full z-30">
        <SideBar />
      </div>

      {/* Mobile Sidebar */}
      <div className={clsx(
        "fixed inset-0 z-40 flex lg:hidden",
        isSidebarOpen ? "pointer-events-auto" : "pointer-events-none"
      )}>
        {/* Sidebar Panel */}
        <div
          className={clsx(
            "max-w-[250px] bg-white h-full transform transition-transform duration-300 ease-in-out",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <SideBar onClose={() => setIsSidebarOpen(false)} />
        </div>
        <div
          onClick={() => setIsSidebarOpen(false)}
          className={clsx(
            "flex-1 bg-black transition-opacity duration-300 ease-in-out",
            isSidebarOpen ? "opacity-40" : "opacity-0"
          )}
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-full lg:pl-[180px] xl:pl-[218px] 2xl:pl-[248px]"> {/* Adjust this padding to match your sidebar width */}
        {/* TopBar - Fixed */}
        <div className="sticky top-0 z-20">
          <TopBar onMenuClick={() => setIsSidebarOpen(true)} />
        </div>

        {/* Scrollable Content */}
        <div className="container overflow-y-auto px-[10px] sm:px-[14px] md:px-[18px] lg:px-[20px] xl:px-[24px] 2xl:px-[29px] pt-[10px] md:pt-0 pb-[10px] sm:pb-[12px] md:pb-[14px] lg:pb-[16px] xl:pb-[18px] 2xl:pb-[20px] md:mb-0 mb-[100px] min-h-[calc(100vh-{topBarHeight})]">
          {children}
        </div>
      </div>
    </div>
  );
}