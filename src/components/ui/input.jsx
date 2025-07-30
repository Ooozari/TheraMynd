import * as React from "react"

import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  ...props
}) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-Gray0 placeholder:text-muted-foreground caret-Secondary selection:bg-Secondary selection:text-primary-foreground dark:bg-input/30 border-Gray0 flex h-[32px] sm:h-[38px] md:h-[44px] lg:h-[48px] xl:h-[52px] 2xl:h-[56px] w-full min-w-0 rounded-[10px] border-1 bg-transparent px-3 py-1 md:text-base font-medium text-Gray900 font-satoshi transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 text-sm",
        "focus-visible:border-2 focus-visible:border-MindfulBrown60 ",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props} />
  );
}

export { Input }
