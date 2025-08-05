import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-Secondary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        secondaryOutline:
          "border border-MindfulBrown90 bg-White text-MindfulBrown90 hover:border-none hover:bg-MindfulBrown90 hover:text-White dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-[40px] sm:h-[45px] md:h-[48px] lg:h-[52px] xl:h-[54px] 2xl:h-[56px] py-[16px] px-[24px]",
        secondary:
          "bg-Secondary text-White hover:bg-Secondary/80 rounded-[15px] h-[40px] sm:h-[45px] md:h-[48px] lg:h-[52px] xl:h-[54px] 2xl:h-[56px] py-[16px] px-[24px]",
        secondaryLight:
        "bg-MindfulBrown20 text-Secondary hover:bg-MindfulBrown20/80 rounded-[8px] h-[30px] sm:h-[36px] md:h-[42px] lg:h-[48px] xl:h-[53px] 2xl:h-[58px] py-[17px] px-[16px]",
        secondaryLightSmall: "bg-[#005F721A] font-inter text-MindfulBrown90 hover:bg-[[#005F721A]]/80 rounded-[6.7px] h-[25px] sm:h-[27px] md:h-[29px] lg:h-[31px] xl:h-[33px] 2xl:h-[35px]",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        newghost:
          "bg-[#F4F4F4] rounded-[6.7px] h-[28.78px] sm:h-[30.2px] md:h-[31.6px] lg:h-[33.1px] xl:h-[34.1px] 2xl:h-[34.78px]",
        link: "text-primary underline-offset-4 hover:underline",
        sidebarButton:
        "bg-[#2E2E2E] text-White hover:bg-[#2E2E2E]/80 rounded-[5px] h-[40px] sm:h-[45px] md:h-[48px] lg:h-[52px] xl:h-[54px] 2xl:h-[56px] py-[16px] px-[24px]",
        negative: "bg-[#FFBBBB] text-[#292929] hover:bg-[#FFBBBB]/80 rounded-[5px] h-[40px] sm:h-[41px] md:h-[42px] lg:h-[46px] xl:h-[49px] 2xl:h-[51px]",
        cancel: "bg-[#FFBBBB] text-Red hover:bg-[#FFBBBB]/80 rounded-[15px] h-[40px] sm:h-[45px] md:h-[48px] lg:h-[52px] xl:h-[54px] 2xl:h-[56px] py-[16px] px-[24px]"
      },
      size: {
        default: "px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} />
  );
}

export { Button, buttonVariants }