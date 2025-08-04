import React from 'react'
import { cn } from "@/lib/utils"

function Readonly({ value, textClassNames = "", outerDivClassNames = "" }) {
    return (
        <div
            className={cn(
                "bg-[#F2F2F2] border border-[#E1E1E1] rounded-[8px] py-[10px] sm:py-[11px] md:py-[12px] lg:py-[13.5px] xl:py-[14.5px] 2xl:py-[15px] flex items-center justify-start px-[8px] sm:px-[10px] md:px-[12px] lg:px-[15px] xl:px-[16.5px] 2xl:px-[18px]",
                outerDivClassNames
            )}
        >
            {typeof value === "string" || typeof value === "number" ? (
                <p className={cn("text-[12px] sm:text-[12.5px] md:text-[13px] lg:text-[13.5px] xl:text-[13.8px] 2xl:text-[14px] ", textClassNames)}>
                    {value}
                </p>
            ) : (
                <div className={cn("flex items-center gap-[6px]  ", textClassNames)}>
                    {value}
                </div>
            )}
        </div>
    )
}

export default Readonly
