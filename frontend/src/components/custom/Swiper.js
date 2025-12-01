'use client'
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import ApplyCard from '@/components/home/ApplyCard';
import Image from 'next/image';

export default function Slider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" speed={1000}>
        <SwiperSlide>
          <div className="relative">
            <Image
              src={'/home_page.jpg'}
              alt="University ground"
              height={1000}
              width={1000}
              className="w-full"
            />
            <ApplyCard
              title={'Oreo Online'}
              description={'Enroll now for Spring 2026 admissions and become a part of Pakistan’s top-ranked private sector university. Join us and shape your future today!'}
              className={'absolute left-30 top-35 w-[40%]'}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <Image
              src={'/home_page2.jpg'}
              alt="University ground"
              height={1000}
              width={1000}
              className="w-full"
            />
            <ApplyCard
              title={'Admissions Open for Spring 2026'}
              description={'Enroll now for Spring 2026 admissions and become a part of Pakistan’s top-ranked private sector university. Join us and shape your future today!'}
              className={'absolute left-30 top-35 w-[40%]'}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
