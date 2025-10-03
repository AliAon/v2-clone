// components/TimelineStepper.jsx
import { ChevronRight, ChevronLeft } from 'lucide-react';
import Image from 'next/image';

const steps = [
  {
    number: '01',
    title: 'Lorem Ipsum is simply dummy',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    align: 'right',
    last: false
  },
  {
    number: '02',
    title: 'Lorem Ipsum is simply dummy',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    align: 'left',
    last: false
  },
  {
    number: '03',
    title: 'Lorem Ipsum is simply dummy',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    align: 'right',
    last: false
  },
{
    number: '04',
    title: 'Lorem Ipsum is simply dummy',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    align: 'left',
    last: true
  },
];

export default function TimelineStepper() {
  return (
    <div className="relative  flex flex-col items-center py-8 sm:py-12 quick_sand">
      {/* Vertical gradient line */}
      <div className="absolute left-1/2 top-0 h-full w-2 -translate-x-1/2  rounded-full z-0" />
      <div className="space-y-9 w-full sm:max-w-3xl max-w-[90%] mx-auto z-10">
        {steps.map((step, idx) => (
          <div key={step.number} className={`relative flex items-center ${step.align === 'right' ?  'justify-end' : 'justify-start' }`}>
            {/* Step circle */}
            <div className={`${step.align === 'left' ? 'order-1' : ''} relative z-10 flex flex-col items-center`}>
              <div className="sm:w-60 sm:h-60 w-20 h-20 rounded-full border-4 border-dashed border-[#247586] bg-[#66D8F0] flex items-center justify-center text-3xl font-bold text-gray-700 shadow-lg">
              <span className='bg-white h-full w-full flex items-center justify-center rounded-full sm:text-6xl text-2xl text-[#667085] quick_sand font-normal'>  {step.number}</span>
              </div>
            </div>
            {/* Arrow and content */}
            <div className={`flex items-center ${step.align === 'right' ? 'ml-5 md:ml-8' : 'mr-5 md:mr-8'}`}>
              {step.align === 'right' ? (
                <>
                  <div className="block">
                    <Image src="/assets/svg/arrow-right.svg" className='sm:w-[25px] sm:h-[25px] w-[60px] h-[60px]' alt="" width={25} height={25} />
                  </div>
                  <div className="bg-white sm:pl-10  p-4 sm:w-80">
                    <div className="font-semibold text-sm sm:text-base">{step.title}</div>
                    <div className="text-gray-500 text-xs mt-2">{step.description}</div>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-white  p-4 sm:w-80 text-right">
                    <div className="font-semibold text-sm sm:text-base">{step.title}</div>
                    <div className="text-gray-500 text-xs mt-2">{step.description}</div>
                  </div>
                  <div className="block">
                    <Image src="/assets/svg/arrow-left.svg" alt="" className='sm:w-[25px] sm:h-[25px] w-[60px] h-[60px]' width={25} height={25} />
                  </div>
                </>
              )}
            </div>
            {step.align === 'right' && !step.last ? (
             <Image className='absolute left-[50%] sm:block hidden transform -translate-x-1/2 bottom-[-49%] -rotate-3' src="/assets/svg/left-to-right.svg" alt="" width={200} height={300} />
            ) : !step.last ? (
                <Image className='absolute left-[50%] sm:block hidden transform -translate-x-1/2 bottom-[-51%] rotate-3' src="/assets/svg/right-to-left.svg" alt="" width={200} height={300} />
            ):''}
          </div>
        ))}
      </div>
    </div>
  );
}
