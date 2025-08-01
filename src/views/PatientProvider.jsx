import React from 'react'
import { Heading, Paragraph } from "@/components/ui/typography";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
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

function PatientProvider() {
    return (
        <>
            <div className='flex flex-col gap-[12px] sm:gap-[14px] md:gap-[17px] lg:gap-[20px] xl:gap-[21.5px] 2xl:gap-[23px] border-2 border-Black h-full'>

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
                        <TableCaption>A list of your recent invoices.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Invoice</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Method</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">INV001</TableCell>
                                <TableCell>Paid</TableCell>
                                <TableCell>Credit Card</TableCell>
                                <TableCell className="text-right">$250.00</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>

            </div>
        </>
    )
}

export default PatientProvider
