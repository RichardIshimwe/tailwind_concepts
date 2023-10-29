import React from 'react';

const CaseStudy = () => {
  return (
    <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
      <div className='md:flex'>
        <div className='md:flex-shrink-0'>
          <img
            className='h-48 w-full object-cover md:h-full md:w-48'
            src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSn6DndlyJmQw_QAucw42sqpszWmEgUnbv9rbGZZUE9wIp4DTZV'
            alt='man looking at item in the store'
          />
        </div>
        <div className='p-8'>
          <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
            Case Study
          </div>
          <a className='bold mt-1 text-lg leading-tight text-black font-medium hover:underline'>
            Finding customers for your business
          </a>
          <p className='mt-2 text-gray-500'>
            Getting a new busines off the ground is a lot of hard work. Here are
            five ideas you can use to find your first customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
