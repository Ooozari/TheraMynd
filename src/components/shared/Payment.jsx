'use client';
import React from 'react';
import Plan from './Plan';

function Payment({ selectedPlanIndex, setSelectedPlanIndex }) {
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


  return (
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
  );
}

export default Payment;
