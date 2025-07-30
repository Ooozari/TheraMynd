'use client';

import React, { useState } from 'react';
import TopBar from '@/layout/Topbar';
import SideBar from '@/layout/SideBar';

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="hidden lg:block">
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

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col bg-[#F0F0F0] w-full">
        <TopBar onMenuClick={() => setIsSidebarOpen(true)} />

        {/* Page-specific content */}
        <div className="flex-1 px-6 py-4 border-2 border-Black">
          {children}
        </div>
      </main>
    </div>
  );
}
