'use client';

import React, { useState } from 'react';
import TopBar from '@/layout/Topbar';
import SideBar from '@/layout/SideBar';

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="hidden lg:block h-full">
        <SideBar />
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 flex lg:hidden">
          <div className="max-w-[250px] bg-white h-full">
            <SideBar onClose={() => setIsSidebarOpen(false)} />
          </div>
          {/* Overlay */}
          <div
            className="flex-1 bg-black/40"
            onClick={() => setIsSidebarOpen(false)}
          />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full">
        {/* TopBar (non-scrollable) */}
        <TopBar onMenuClick={() => setIsSidebarOpen(true)} />

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-[10px] sm:px-[14px] md:px-[18px] lg:px-[20px] xl:px-[24px] 2xl:px-[29px] pt-[10px] md:pt-0 pb-[10px] sm:pb-[12px] md:pb-[14px] lg:pb-[16px] xl:pb-[18px] 2xl:pb-[20px] bg-[#F0F0F0]">
          {children}
        </div>
      </div>
    </div>
  );
}
