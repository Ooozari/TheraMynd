"use client"

import React, { useState } from "react"
import { CalendarIcon } from "lucide-react"

import { Heading, Paragraph } from "@/components/ui/typography";
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

function isValidDate(date) {
  return date instanceof Date && !isNaN(date.getTime())
}

export default function Datepicker() {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState(null)
  const [month, setMonth] = useState(null)
  const [value, setValue] = useState("")

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="date">
        <Paragraph size="label" className="text-Gray900 font-bold">
          Date of Birth
        </Paragraph>
      </Label>
      <div className="relative">
        <Input
          id="date"
          value={value}
          placeholder="Select a date"
          className="pr-10"
          onChange={(e) => {
            const inputDate = new Date(e.target.value)
            setValue(e.target.value)
            if (isValidDate(inputDate)) {
              setDate(inputDate)
              setMonth(inputDate)
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault()
              setOpen(true)
            }
          }}
        />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-0 h-6 w-6"
            >
              <CalendarIcon className="h-4 w-4 text-gray-500" />
              <span className="sr-only">Select date</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="end" sideOffset={8}>
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              month={month}
              onMonthChange={setMonth}
              onSelect={(d) => {
                setDate(d)
                setValue(formatDate(d))
                setOpen(false)
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
