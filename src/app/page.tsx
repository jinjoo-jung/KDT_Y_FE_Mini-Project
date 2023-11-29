/* eslint-disable react/no-children-prop */
// pages/index.tsx
'use client';
import React, { useState } from 'react';

import { Header, HeaderNav } from '@/components/common/header';

import Carousel from '../components/main/Carousel';
import IconList from '../components/main/IconList';
import Navigation from '../components/main/Navigation';
import PensionCard from '../components/main/PensionCard';

interface DataType {
  location: string;
  pensions: {
    name: string;
    rating: number;
    price: number;
    image: string;
  }[];
}

interface LocationProps {
  selectedLocation: string | null;
  data: DataType;
  index: number;
}

interface CircleLabelProps {
  label: string;
  image: string;
}

const LocationContent = ({ selectedLocation, data, index }: LocationProps) => (
  <div
    className={`${
      selectedLocation === data.location ||
      (selectedLocation === null && index === 0)
        ? 'block'
        : 'hidden'
    }`}
  >
    <div className='grid grid-cols-4 gap-4'>
      {data.pensions.map((pension, i) => (
        <PensionCard key={i} {...pension} />
      ))}
    </div>
  </div>
);

const CircleLabel = ({ label, image }: CircleLabelProps) => (
  <div
    className='relative mb-4 h-[7.5rem] w-[7.5rem] rounded-full bg-black p-4 text-white'
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
      backgroundSize: 'cover',
    }}
  >
    <p className='flex h-full items-center justify-center text-center text-xl font-semibold'>
      {label}
    </p>
  </div>
);

const HomePage = () => {
  const [selectedChristmasLocation, setSelectedChristmasLocation] = useState<
    string | null
  >(null);
  const [selectedWinterLocation, setSelectedWinterLocation] = useState<
    string | null
  >(null);

  const carouselImages = [
    'images/carousel01.jpg',
    'images/carousel01.jpg',
    'images/carousel01.jpg',
  ];
  const mainIcons = [
    { icon: 'svg/mainIcon/hotel.svg', label: '호텔' },
    { icon: 'svg/mainIcon/pension.svg', label: '펜션' },
    { icon: 'svg/mainIcon/motel.svg', label: '모텔' },
    { icon: 'svg/mainIcon/guestHouse.svg', label: '게스트하우스' },
    { icon: 'svg/mainIcon/condo.svg', label: '콘도' },
    { icon: 'svg/mainIcon/youthHostel.svg', label: '유스호스텔' },
    { icon: 'svg/mainIcon/minbak.svg', label: '민박' },
    { icon: 'svg/mainIcon/homestay.svg', label: '홈스테이' },
    {
      icon: 'svg/mainIcon/servicedResidences.svg',
      label: '서비스드레지던스',
    },
    { icon: 'svg/mainIcon/hanok.svg', label: '한옥' },
  ];

  const ChristmasPensionData = [
    // 가상의 데이터
    {
      location: '부산',
      pensions: [
        {
          name: '부산 펜션 1',
          rating: 4.5,
          price: 100000,
          image: 'svg/mainIcon/hotel.svg',
        },
        {
          name: '부산 펜션 2',
          rating: 4.0,
          price: 120000,
          image: 'svg/mainIcon/hotel.svg',
        },
        {
          name: '부산 펜션 3',
          rating: 4.5,
          price: 100000,
          image: 'svg/mainIcon/hotel.svg',
        },
        {
          name: '부산 펜션 4',
          rating: 4.0,
          price: 120000,
          image: 'svg/mainIcon/hotel.svg',
        },
      ],
    },
    {
      location: '서귀포',
      pensions: [
        {
          name: '서귀포 펜션 1',
          rating: 4.2,
          price: 90000,
          image: 'svg/mainIcon/youthHostel.svg',
        },
        {
          name: '서귀포 펜션 2',
          rating: 3.8,
          price: 110000,
          image: 'svg/mainIcon/youthHostel.svg',
        },
        {
          name: '서귀포 펜션 3',
          rating: 4.2,
          price: 90000,
          image: 'svg/mainIcon/youthHostel.svg',
        },
        {
          name: '서귀포 펜션 4',
          rating: 3.8,
          price: 110000,
          image: 'svg/mainIcon/youthHostel.svg',
        },
      ],
    },
    {
      location: '제주',
      pensions: [
        {
          name: '제주 펜션 1',
          rating: 4.2,
          price: 90000,
          image: 'svg/mainIcon/guestHouse.svg',
        },
        {
          name: '제주 펜션 2',
          rating: 3.8,
          price: 110000,
          image: 'svg/mainIcon/guestHouse.svg',
        },
        {
          name: '제주 펜션 3',
          rating: 4.2,
          price: 90000,
          image: 'svg/mainIcon/guestHouse.svg',
        },
        {
          name: '제주 펜션 4',
          rating: 3.8,
          price: 110000,
          image: 'svg/mainIcon/guestHouse.svg',
        },
      ],
    },
    {
      location: '대부도',
      pensions: [
        {
          name: '대부도 펜션 1',
          rating: 4.2,
          price: 90000,
          image: 'svg/mainIcon/hanok.svg',
        },
        {
          name: '대부도 펜션 2',
          rating: 3.8,
          price: 110000,
          image: 'svg/mainIcon/hanok.svg',
        },
        {
          name: '대부도 펜션 3',
          rating: 4.2,
          price: 90000,
          image: 'svg/mainIcon/hanok.svg',
        },
        {
          name: '대부도 펜션 4',
          rating: 3.8,
          price: 110000,
          image: 'svg/mainIcon/hanok.svg',
        },
      ],
    },
  ];

  const WinterStaycationData = [
    // 가상의 데이터
    {
      location: '서울/강북',
      pensions: [
        {
          name: '서울/강북 호텔 1',
          rating: 4.5,
          price: 100000,
          image: 'svg/mainIcon/motel.svg',
        },
        {
          name: '서울/강북 호텔 2',
          rating: 4.0,
          price: 120000,
          image: 'svg/mainIcon/motel.svg',
        },
        {
          name: '서울/강북 호텔 3',
          rating: 4.5,
          price: 100000,
          image: 'svg/mainIcon/motel.svg',
        },
        {
          name: '서울/강북 호텔 4',
          rating: 4.0,
          price: 120000,
          image: 'svg/mainIcon/motel.svg',
        },
      ],
    },
    {
      location: '서울/강남',
      pensions: [
        {
          name: '서울/강남 호텔 1',
          rating: 4.2,
          price: 90000,
          image: 'svg/mainIcon/servicedResidences.svg',
        },
        {
          name: '서울/강남 호텔 2',
          rating: 3.8,
          price: 110000,
          image: 'svg/mainIcon/servicedResidences.svg',
        },
        {
          name: '서울/강남 호텔 3',
          rating: 4.2,
          price: 90000,
          image: 'svg/mainIcon/servicedResidences.svg',
        },
        {
          name: '서울/강남 호텔 4',
          rating: 3.8,
          price: 110000,
          image: 'svg/mainIcon/servicedResidences.svg',
        },
      ],
    },
    {
      location: '경기·인천',
      pensions: [
        {
          name: '경기·인천 호텔 1',
          rating: 4.2,
          price: 90000,
          image: 'svg/mainIcon/condo.svg',
        },
        {
          name: '경기·인천 호텔 2',
          rating: 3.8,
          price: 110000,
          image: 'svg/mainIcon/condo.svg',
        },
        {
          name: '경기·인천 호텔 3',
          rating: 4.2,
          price: 90000,
          image: 'svg/mainIcon/condo.svg',
        },
        {
          name: '경기·인천 호텔 4',
          rating: 3.8,
          price: 110000,
          image: 'svg/mainIcon/condo.svg',
        },
      ],
    },
    {
      location: '부산',
      pensions: [
        {
          name: '부산 호텔 1',
          rating: 4.2,
          price: 90000,
          image: 'svg/mainIcon/pension.svg',
        },
        {
          name: '부산 호텔 2',
          rating: 3.8,
          price: 110000,
          image: 'svg/mainIcon/pension.svg',
        },
        {
          name: '부산 호텔 3',
          rating: 4.2,
          price: 90000,
          image: 'svg/mainIcon/pension.svg',
        },
        {
          name: '부산 호텔 4',
          rating: 3.8,
          price: 110000,
          image: 'svg/mainIcon/pension.svg',
        },
      ],
    },
  ];

  return (
    <>
      <Header>
        <HeaderNav showLogo showCart showMyPage />
      </Header>
      <main className='bg-white pt-[3rem]'>
        <Carousel images={carouselImages} />
        <IconList icons={mainIcons} />
        <section className='p-10'>
          <h1 className='mb-6 text-lg	 font-bold'>크리스마스 펜션 예약하기</h1>
          <Navigation
            locations={ChristmasPensionData.map((data) => data.location)}
            onSelectLocation={(location) =>
              setSelectedChristmasLocation(location)
            }
            selectedLocation={selectedChristmasLocation}
          />
          {ChristmasPensionData.map((data, index) => (
            <LocationContent
              key={index}
              selectedLocation={selectedChristmasLocation}
              data={data}
              index={index}
            />
          ))}
        </section>
        <section className='p-10'>
          <h1 className='mb-6 text-lg	 font-bold'>겨울 도심 호캉스</h1>
          <Navigation
            locations={WinterStaycationData.map((data) => data.location)}
            onSelectLocation={(location) => setSelectedWinterLocation(location)}
            selectedLocation={selectedWinterLocation}
          />
          {WinterStaycationData.map((data, index) => (
            <LocationContent
              key={index}
              selectedLocation={selectedWinterLocation}
              data={data}
              index={index}
            />
          ))}
        </section>
        <section className='p-10'>
          <h1 className='mb-6	 text-lg font-bold'>사랑받는 겨울 여행지</h1>
          <div className='mb-6 flex justify-around'>
            <CircleLabel label='강릉' image='svg/mainIcon/homestay.svg' />
            <CircleLabel label='제주도' image='svg/mainIcon/homestay.svg' />
            <CircleLabel label='속초' image='svg/mainIcon/homestay.svg' />
            <CircleLabel label='평창' image='svg/mainIcon/homestay.svg' />
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
