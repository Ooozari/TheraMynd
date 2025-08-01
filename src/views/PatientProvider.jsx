'use client';
import React from 'react'
import { Dots, Forward,NewEdit,See,Generate,User,Bin } from '@/svgs/Icons'
import { Heading, Paragraph } from "@/components/ui/typography";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import tableData from "@/data/tableData"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function PatientProvider() {
    const statusColorMap = {
        Active: "bg-[#00FF1A]",
        Pending: "bg-[#FFC700]",
        Inactive: "bg-[#FF0100]",
    }

    return (
        <>
            <div className='flex flex-col gap-[12px] sm:gap-[14px] md:gap-[17px] lg:gap-[20px] xl:gap-[21.5px] 2xl:gap-[23px]'>

                <div>
                    <Heading level="mdSubText" className="font-[700] text-[#292929]">
                        Patients
                    </Heading>
                </div>

                {/* Filter and button */}
                <div className='flex justify-between items-baseline-last'>
                    <div>
                        <Label htmlFor="state" className='mb-[8px]'>
                            <Paragraph size="label" className="text-Gray900 font-bold">Sort by</Paragraph>
                        </Label>
                        <Select>
                            <SelectTrigger className="w-[184px]">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="date">Date</SelectItem>
                                <SelectItem value="time">Time</SelectItem>
                                <SelectItem value="status">Status</SelectItem>
                                <SelectItem value="type">Type</SelectItem>
                            </SelectContent>
                        </Select>

                    </div>
                    <div>
                        <Button
                            type="button"
                            variant='secondaryLightSmall'
                        >
                            <Paragraph size="smallBtntext" className="text-MindfulBrown90 font-[600] font-inter">+ Add new paitent</Paragraph>

                        </Button>
                    </div>
                </div>

                {/* Table */}
                <div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Days Active</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Start date</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {tableData.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell className="font-medium flex items-center gap-[8px] sm:gap-[12px] md:gap-[16px] lg:gap-[18px] xl:gap-[20px] 2xl:gap-[22px]">
                                        <div className='h-[22px] sm:h-[24px] md:h-[26px] lg:h-[28px] xl:h-[30px] 2xl:h-[31px]'>{item.icon}</div>
                                        <Paragraph size="tabletext" className="text-[#252525] ">
                                            {item.name}
                                        </Paragraph>

                                    </TableCell>
                                    <TableCell>
                                        <Paragraph size="tabletext" className="text-[#252525]">
                                            {item.days}
                                        </Paragraph>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-[6px]">
                                            <div
                                                className={cn(
                                                    "w-[5px] h-[5px] rounded-full",
                                                    item.status === "Active"
                                                        ? "bg-[#00FF1A]"
                                                        : item.status === "Pending"
                                                            ? "bg-[#FFC700]"
                                                            : "bg-[#FF0100]"
                                                )}
                                            />
                                            <Paragraph size="tabletextsm" className="text-[#252525] font-[500]">
                                                {item.status}
                                            </Paragraph>
                                        </div>
                                    </TableCell>

                                    <TableCell>
                                        <Paragraph size="tabletext" className="text-[#252525] ">
                                            {item.startDate}
                                        </Paragraph>
                                    </TableCell>

                                    <TableCell className='text-right'>
                                        <div className='flex gap-[10px] justify-end'>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger> <div className='w-[24px] h-[24px] bg-[#ECECEC] flex justify-center items-center rounded-full cursor-pointer'>
                                                <Dots />
                                            </div>
                                            </DropdownMenuTrigger>

                                                <DropdownMenuContent>
                                                    
                                                    <DropdownMenuItem>
                                                        <NewEdit />
                                                        Edit details
                                                    </DropdownMenuItem>

                                                    <DropdownMenuSeparator />

                                                    <DropdownMenuItem>
                                                        <See />
                                                        See verification code
                                                    </DropdownMenuItem>

                                                    <DropdownMenuSeparator />

                                                    <DropdownMenuItem>
                                                        <Generate />
                                                    Generate new code
                                                    </DropdownMenuItem>

                                                    <DropdownMenuSeparator />

                                                    <DropdownMenuItem>
                                                        <User />
                                                    Make Inactive
                                                    </DropdownMenuItem>

                                                    <DropdownMenuSeparator />

                                                    <DropdownMenuItem>
                                                        <Bin />
                                                        Delete patient
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                           
                                            <div className='w-[24px] h-[24px] bg-[#00738A] flex justify-center items-center rounded-full cursor-pointer'>
                                                <Forward />
                                            </div>
                                        </div>


                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

            </div>
        </>
    )
}

export default PatientProvider
