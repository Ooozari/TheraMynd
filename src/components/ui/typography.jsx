import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";


/* --- Headings --- */
const headingVariants = cva(
  "",
  {
    variants: {
      level: {
        h1Large: "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px]",
        // Form Heading 48px max
        h1: "text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl",
        Subh1: "text-[16px] sm:text-[22px] md:text-[28px] lg:text-[33px] xl:text-[37px] 2xl:text-[40px]",
        // Component heading + Hero Section
        h2: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl",
        // Card Headings
        h3: "text- sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl",
        // Review
        h4: "text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl",
        // small tour card
        h5: "text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl",

        h6: "text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl",
      
        lgSubText:"text-[14px] sm:text-[17px] md:text-[19px] lg:text-[21px] xl:text-[22.5px] 2xl:text-[24px]",

        mdSubText: "text-[18px] sm:text-[21px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]"
      },
    },
    defaultVariants: { level: "h1" },
  }
);

export function Heading({ className, level = "h1", children }) {
  const Tag = level;
  return <Tag className={cn(headingVariants({ level }), className)}>{children}</Tag>;
}

/* --- Paragraph --- */
const paragraphVariants = cva("", {
  variants: {
    size: {
      subText: "text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]",
      normal: "text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px]",
      md: "text-[12px] lg:text-[14px] xl:text-[14px] 2xl:text-[16px]",
      label: "text-[12px] md:text-[12px]",
      sm: "text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px]",
      btnText: "text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[17.5px] 2xl:text-[18px]",
      xxs: "text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px]"
    },
  },
  defaultVariants: { size: "normal" },
});

export function Paragraph({ className, size = "normal", children }) {
  return <p className={cn(paragraphVariants({ size }), className)}>{children}</p>;
}
