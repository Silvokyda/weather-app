import React from 'react';
import { getCurrentDate } from '../utilis/currentDate';
import { MdLocationOn } from 'react-icons/md';
import Image from 'next/image';

interface CurrentProps {
  data: {
    current: {
      condition: {
        icon: string;
        text: string;
      };
      temp_f: number;
    };
    location: {
      name: string;
      region: string;
    };
  };
}

const Current: React.FC<CurrentProps> = ({ data }) => {
  const currentDate = getCurrentDate();
  const weatherIcon = data.current.condition.icon;
  return (
    <div className='flex flex-col mb-8 md:mb-0 items-satrt gap-2 w-1/2'>
      <div className='flex items-center'>
        <div>
          <h1 className='text-3xl text-white'>Today</h1>
          <p className='text-white'>{currentDate}</p>
        </div>
          {weatherIcon && (
            <div>
              <Image
                src={weatherIcon}
                alt={data.current.condition.text}
                width={50}
                height={50} // Set the appropriate width and height
              />            
            </div>
          )}
      </div>
      <div>
      <p className='text-5xl text-white'>{data.current.temp_f.toFixed()}
      <span>°</span></p>
      <span className="text-white">{data.current.condition.text}</span>
      </div>
      <div>
        <div className='flex items-center text-black bg-white/90 px-2 py-2 rounded-xl'>
          <MdLocationOn />
          <span>
            {data.location.name}, {data.location.region}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Current