'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Plan from './Plan';
import { Button } from "@/components/ui/button";
import { Paragraph } from "@/components/ui/typography";

function Payment({ setIsConfirmed }) {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(null);
  const [nopPlanSelected, setnopPlanSelected] = useState(false)
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

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
    if (selectedPlanIndex === null) {
      setnopPlanSelected(true);
    } else {
      setIsConfirmed(true);
    }

  };

  return (
    <div className='w-full flex flex-col gap-6'>
      {/* Swiper */}
      <div className='relative'>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          onSlideChange={(swiper) => setCurrentSlideIndex(swiper.activeIndex)}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {plans.map((plan, i) => (
            <SwiperSlide
              key={i}
              className="flex justify-center items-center"
            >
              <div className="flex justify-center items-center">
                <Plan
                  {...plan}
                  isSelected={selectedPlanIndex === i}
                  onSelect={() => {
                    setSelectedPlanIndex(i)
                    setnopPlanSelected(false)}}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Slider Indicators */}
        <div className="flex justify-center gap-1.5 mt-4">
          {plans.map((_, index) => (
            <div
              key={index}
              className={`w-[24px] h-[6px] rounded-sm transition-all duration-300 ${currentSlideIndex === index ? 'bg-[#00738A] w-[34px]' : 'bg-gray-400'
                }`}
            />
          ))}
        </div>

        {/* Error (If no plan selected) */}
        {nopPlanSelected && <p className='text-red-500 text-xs absolute left-1/2 bottom-[-24px] transform -translate-x-1/2'>Please select a plan before continuing</p>}
      </div>

      {/* Continue Button */}
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
  );
}

export default Payment;
