import Image from 'next/image';
import React from 'react';

const Section3 = () => {
  return (
    <div className=" h-screen mt-[-15%]">
      <Image 
        src='/assets/Classroom.png' 
        objectFit="cover" 
        objectPosition="center" 
        height={1084}
        width={1520}
        alt='Classroom'
      />
    </div>
  )
}

export default Section3;
