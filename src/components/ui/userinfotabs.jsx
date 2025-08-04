"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

export function Userinfotabs({ className, ...props }) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-4", className)}
      {...props}
    />
  )
}

export function TabsList({ className, ...props }) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-[#F5F5F5] rounded-[38px] flex h-[34px] sm:h-[37px] md:h-[40px] lg:h-[44px] xl:h-[46px] 2xl:h-[48px] items-center justify-between",
        className
      )}
      {...props}
    />
  )
}

export function TabsTrigger({ className, ...props }) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
     className={cn(
  "inline-flex h-full items-center rounded-[1480.1px] justify-center px-4 font-[800] font-urbanist transition " +
  "data-[state=active]:bg-[#005F72] data-[state=active]:text-White text-[#3F3C36]" +
  "hover:bg-[#1E365C1A] hover:text-[#005F72] " +
  "disabled:pointer-events-none cursor-pointer disabled:opacity-50 ",
  className
)}
      {...props}
    />
  )
}

export function TabsContent({ className, ...props }) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  )
}