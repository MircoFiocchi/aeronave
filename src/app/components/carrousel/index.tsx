import React, { FC, useState } from 'react';

import Card from '@/app/components/card';

import LeftArrow from '@/app/icons/LeftArrow';
import RigthArrow from '@/app/icons/RightArrow';

import useResize from '@/app/hooks/utils/useResize';
import useCarrousel from '@/app/hooks/carrousel/useCarrousel';

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const MultipleCarousel: FC = () => {
  const { device } = useResize();
  const [index, setIndex] = useState<number>(1);
  const { slides } = useCarrousel();

  const itemsSlides = () => {
    switch (device) {
      case 'desktop':
        return 3;
      case 'tablet':
        return 2;
      default:
        return 1;
    }
  };

  const onClickArrow = (isRightArrow = false) => {
    if (isRightArrow) {
      setIndex((prevValor) => prevValor + 1);
    } else {
      setIndex((prevValor) => prevValor - 1);
    }
  };

  const formatNumber = (number: number) => {
    return number.toString().padStart(2, '0');
  };

  const disableRightArrow = () => {
    if (device === 'desktop' && slides.length === 3) {
      return true;
    } else if (device === 'tablet' && index === slides.length - 1) {
      return true;
    } else if (device === 'mobile' && slides.length === 1) {
      return true;
    }
    return false;
  };

  return (
    <div className='flex gap-4 w-full overflow-hidden'>
      <div className='flex gap-8 transition-transform duration-300 ease-in-out'>
        <CarouselProvider
          naturalSlideWidth={300}
          isIntrinsicHeight={true}
          totalSlides={slides.length}
          visibleSlides={itemsSlides()}
          step={itemsSlides()}
          infinite={true}
          naturalSlideHeight={100}
          dragStep={1}
        >
          <Slider>
            {slides.map((slide) => (
              <Slide
                index={slide.id}
                key={slide.id}
              >
                <Card
                  src_image={slide.src_image}
                  alt={slide.title}
                  title={slide.title}
                  subtitle={slide.subtitle}
                  action={slide.action}
                />
              </Slide>
            ))}
          </Slider>
          <div className='absolute flex flex-row gap-8 mt-4 mb-4 self-end mr-12 bottom-0 items-center lg:right-32'>
            <span className='w-14'>
              <span className=''>{`${formatNumber(index)}`}</span>
              <span className='text-blue-700 font-semibold'> / </span>
              <span className='text-gray-500'>{`${formatNumber(
                slides.length,
              )}`}</span>
            </span>
            <div className='flex flex-row gap-6'>
              <ButtonBack
                role='button'
                aria-label='slide backward'
                id='prev'
                disabled={index === 1}
                onClick={() => onClickArrow()}
              >
                <LeftArrow disabled={index === 1} />
              </ButtonBack>
              <ButtonNext
                role='button'
                aria-label='slide forward'
                id='next'
                disabled={index === slides.length || disableRightArrow()}
                onClick={() => onClickArrow(true)}
              >
                <RigthArrow
                  disabled={index === slides.length || disableRightArrow()}
                />
              </ButtonNext>
            </div>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
};

export default MultipleCarousel;
