"use client"

import React, { useState } from "react"
import { CalendarIcon } from "lucide-react"

import { Paragraph } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

function formatDate(date) {
  if (!date) return ""
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
}

export default function DateRangePicker() {
  const [open, setOpen] = useState(false)
  const [month, setMonth] = useState(null)
  const [range, setRange] = useState({ from: null, to: null })

  return (
    <div className="flex flex-col gap-2 w-full">
      <Label htmlFor="dateRange" className="">
        <Paragraph size="label" className="text-Gray900 font-bold">
          Date Range
        </Paragraph>
      </Label>
      <div className="relative">
        <Input
          id="dateRange"
          name="dateRange"
          readOnly
          value={
            range?.from && range?.to
              ? `${formatDate(new Date(range.from))} - ${formatDate(
                  new Date(range.to)
                )}`
              : ""
          }
          placeholder="Select a date range"
          className="pr-10 bg-White border-1 border-[#DEDFE3] w-full"
          onClick={() => setOpen(true)}
        />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-0 h-6 w-6"
            >
              <CalendarIcon className="h-4 w-4 text-gray-400" />
              <span className="sr-only">Select date range</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="end" sideOffset={8}>
            <Calendar
              mode="range"
              selected={range}
              captionLayout="dropdown"
              month={month}
              onMonthChange={setMonth}
              onSelect={(selected) => {
                setRange(selected)
                if (selected?.from && selected?.to) {
                  setOpen(false)
                }
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
