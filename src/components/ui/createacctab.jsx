'use client';
import React from "react";
import { cn } from "@/lib/utils";
import { Paragraph } from "@/components/ui/typography";

const steps = [
  { id: 1, label: "About You" },
  { id: 2, label: "Your Profession" },
  { id: 3, label: "Payment" },
];

export default function CreateAccTab({ currentStep, children }) {
  return (
    <div className="w-full flex flex-col gap-[40px] sm:gap-[45px] md:gap-[50px] lg:gap-[55px] xl:gap-[60px] 2xl:gap-[65px]">

      {/* Stepper Header */}
      <div className="flex items-center justify-center px-[35.5px] sm:px-[40px] md:px-[44.5px] lg:px-[48.5px] xl:px-[51px] 2xl:px-[52.5px]
      w-full relative">
        {steps.map((step, index) => {
          const isActive = step.id === currentStep;
          const isCompleted = step.id < currentStep;

          const circleBg =
            isActive || isCompleted
              ? "bg-Secondary text-White"
              : "bg-[#9CB0AF] text-White";

          return (
            <React.Fragment key={step.id}>
              <div className="relative flex flex-col items-center justify-center">
                {/* Circle */}
                <div
                  className={cn(
                    "w-[24px] h-[24px] sm:w-[25px] sm:h-[25px] md:w-[26px] md:h-[26px] lg:w-[30px] lg:h-[30px] xl:w-[32px] xl:h-[32px] 2xl:w-[34px] 2xl:h-[34px] rounded-full flex items-center justify-center font-bold transition",
                    circleBg
                  )}
                >
                  <Paragraph size="md">{step.id}</Paragraph>
                </div>

                {/* Label */}
                <span
                  className={cn(
                    "absolute top-full mt-[12px] left-1/2 -translate-x-1/2 whitespace-nowrap font-urbanist font-[800] text-center",
                    isActive || isCompleted ? "text-Secondary" : "text-[#979797]"
                  )}
                >
                  <Paragraph size="normal">{step.label}</Paragraph>
                </span>
              </div>

              {/* Horizontal Line Between Steps */}
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "h-[4px] lg:h-[6px] w-full mx-[10px] sm:mx-[12px] md:mx-[14px] lg:mx-[17px] xl:mx-[19px] 2xl:mx-[20px] rounded-full",
                    isCompleted ? "bg-MindfulBrown80" : "bg-[#0000001A]"
                  )}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Current Step Content */}
      <div>{React.Children.toArray(children)[currentStep - 1]}</div>
    </div>
  );
}
