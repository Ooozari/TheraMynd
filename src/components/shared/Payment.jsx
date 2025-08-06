'use client';
import React from 'react';
import Plan from './Plan';
import { Button } from "@/components/ui/button"
import { Paragraph } from "@/components/ui/typography";
function Payment({ selectedPlanIndex, setSelectedPlanIndex, setIsConfirmed }) {
  const plans = [
    {
      type: "Basic Plan",
      userNo: "5",
      status: [{ text: "Current", bg: "bg-MindfulBrown80" }],
      price: "$8",
      specs: [
        { status: true, text: "Additional text can be added here" },
        { status: true, text: "Additional text can be added here" },
        { status: false, text: "Additional text can be added here" },
        { status: false, text: "Additional text can be added here" },
      ],
    },
    {
      type: "Business Plan",
      userNo: "12",
      status: [{ text: "Popular", bg: "bg-SerenityGreen40" }],
      price: "$8",
      specs: [
        { status: true, text: "Additional text can be added here" },
        { status: true, text: "Additional text can be added here" },
        { status: true, text: "Additional text can be added here" },
        { status: false, text: "Additional text can be added here" },
      ],
    },
    {
      type: "Gold Plan",
      userNo: "30",
      price: "$24",
      specs: [
        { status: true, text: "Additional text can be added here" },
        { status: true, text: "Additional text can be added here" },
        { status: true, text: "Additional text can be added here" },
        { status: true, text: "Additional text can be added here" },
      ],
    },
  ];

  const handleNext = () => {
    setIsConfirmed(true);
  };
  return (
    <>
      <div className='w-full flex flex-col gap-[20px] sm:gap-[23px] md:gap-[26px] lg:gap-[28px] xl:gap-[30px] 2xl:gap-[32px]'>
        <div className="flex flex-col items-center space-y-5">
          {plans.map((plan, i) => (
            <Plan
              key={i}
              {...plan}
              isSelected={selectedPlanIndex === i}
              onSelect={() => setSelectedPlanIndex(i)}
            />
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <Button
            type="submit"
            variant="secondary"
            onClick={handleNext}
            className="w-full bg-[#00738A] font-satoshi font-[900]"
          >
            <Paragraph size="normal">
              Continue
            </Paragraph>
          </Button>
        </div>
      </div>
    </>


  );
}

export default Payment;
