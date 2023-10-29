import React from 'react'

const Profile = () => {
  return (
    <div className='p-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>
      <img
        className='block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0'
        src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTBMLhzJwGbu7Ej31ckEKBPFzTfZv0kWdvt4Dc0BTUx6CBfkL2u'
        alt='Woman face'
      />
      <div className='text-center space-y-2 sm:text-left'>
        <div className='space-y-0.5'>
          <p className='text-lg font-semibold text-black'>Erin Lindford</p>
          <p className='text-gray-500 font-medium'>product engineer</p>
        </div>
        <button className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-600 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'>
          Message
        </button>
      </div>
    </div>
  );
}

export default Profile
