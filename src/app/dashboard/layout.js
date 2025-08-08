'use client';

import React, { useState } from 'react';
import TopBar from '@/layout/Topbar';
import SideBar from '@/layout/SideBar';
import clsx from 'clsx';

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block h-full">
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
      <div className="flex flex-col w-full min-h-screen">
        {/* TopBar */}
        <TopBar onMenuClick={() => setIsSidebarOpen(true)} />

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-[10px] sm:px-[14px] md:px-[18px] lg:px-[20px] xl:px-[24px] 2xl:px-[29px] pt-[10px] md:pt-0 pb-[10px] sm:pb-[12px] md:pb-[14px] lg:pb-[16px] xl:pb-[18px] 2xl:pb-[20px] bg-[#F4F4F4] min-h-screen">
            {children}
        </div>
      </div>
    </div>
  );
}
