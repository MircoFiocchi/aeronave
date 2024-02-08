'use client';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import Loading from './components/loading';
import Information from './components/information';
import useLocales from './hooks/information/useLocales';

const MultipleCarousel = dynamic(() => import('./components/carrousel/index'), {
  ssr: false,
  loading: () => <Loading />,
});

export default function Home() {
  const {
    locales: { information },
  } = useLocales();

  return (
    <>
      <div className='sm:h-screen md:h-screen lg:h-screen xl:h-screen 2xl:h-screen relative'>
        <Image
          src='/plane.png'
          alt=''
          className='w-full lg:h-screen lg:-mt-16 object-cover'
          width={2880}
          height={1600}
        />
        <div className='lg:absolute lg:left-0 lg:bottom-0 lg:flex items-center justify-center lg:w-2/5'>
          <Information
            className='p-5 lg:p-8'
            header={information.header}
            title={information.title}
            subtitle={information.subtitle}
            textButton={information.textButton}
          />
        </div>
        <div className='flex flex-col lg:flex-row px-5 py-16 relative gap-8'>
          <div className='w-full lg:w-2/6 place-self-end'>
            <Information
              showLine
              hideArrow
              transparentButton
              header={information.header}
              title={information.title}
              subtitle={information.subtitle}
              textButton={information.textButton}
            />
          </div>
          <div>
            <MultipleCarousel />
          </div>
        </div>
      </div>
    </>
  );
}
