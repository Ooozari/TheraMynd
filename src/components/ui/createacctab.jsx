"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Paragraph } from "@/components/ui/typography";

const steps = [
  { id: 1, label: "About You" },
  { id: 2, label: "Your Profession" },
  { id: 3, label: "Payment" },
];

export default function CreateAccTab({ children }) {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="w-full flex flex-col gap-[22px] sm:gap-[24px] md:gap-[26px] lg:gap-[28px] xl:gap-[30px] 2xl:gap-[32px]">
      {/* Stepper Header */}
      <div className="flex items-center justify-center w-full">
        {steps.map((step, index) => {
          const isActive = step.id === currentStep;
          const isCompleted = step.id < currentStep;

          const circleBg =
            isActive || isCompleted
              ? "bg-Secondary text-White"
              : "bg-[#9CB0AF] text-White";

          return (
            <React.Fragment key={step.id}>
              {/* Step with Circle + Label */}
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] md:w-[26px] md:h-[26px] lg:w-[30px] lg:h-[30px] xl:w-[32px] xl:h-[32px] 2xl:w-[34px] 2xl:h-[34px] rounded-full flex items-center justify-center font-bold transition",
                    circleBg
                  )}
                >
                  <Paragraph size="md">{step.id}</Paragraph>
                </div>

                <span
                  className={cn(
                    "mt-2 text-center font-urbanist font-[800]",
                    isActive || isCompleted
                      ? "text-Secondary"
                      : "text-[#979797]"
                  )}
                >
                  <Paragraph size="normal">{step.label}</Paragraph>
                </span>
              </div>

              {/* Line (skip after last step) */}
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "h-[2px] md:h-[4px] lg:h-[6px] flex-1  w-full rounded-full",
                    isCompleted ? "bg-MindfulBrown80" : "bg-[#0000001A]"
                  )}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Stepper Content */}
      <div>{React.Children.toArray(children)[currentStep - 1]}</div>

      {/* Stepper Controls */}
      <div className="flex justify-center">
        <Button
          onClick={
            currentStep === 3 ? undefined : () => setCurrentStep((s) => s + 1)
          }
          variant="secondary"
          className="w-full bg-[#00738A] font-satoshi font-[900]"
        >
          <Paragraph size="normal">
            {currentStep === 1 && "Continue"}
            {currentStep === 2 && "Continue"}
            {currentStep === 3 && "Confirm"}
          </Paragraph>
        </Button>
      </div>
    </div>
  );
}