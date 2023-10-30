const StaffList = ({ data }: StaffListProps) => {
    return (
      <div className=' bg-white w-[350px] rounded-xl'>
        {data.map((data: userData) => (
          <ul
            role='list'
            className='p-6 divide-y divide-slate-200'
            key={data.id}
          >
            <li className='flex py-4 first:pt-0 last:pb-0'>
              <img
                className='h-10 w-10 rounded-full'
                src={data.image}
                alt='woman face'
              />
              <div className='ml-3 overflow-hidden'>
                <p className='text-sm font-medium text-slate-900'>
                  {data.name}
                </p>
                <p className='text-sm text-slate-500 truncate'>{data.email}</p>
              </div>
            </li>
            <hr className='border-black' />
          </ul>
        ))}
      </div>
    );
};

export default StaffList;
