import React from 'react'

const ProjectView = () => {
  return (
    <a
      href='#'
      className='group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500'
    >
      <div className='flex items-center space-x-3'>
        <div className='h-6 w-6 stroke-sky-500 rounded-xl group-hover:stroke-white fill-none'>
          {/* <FolderSimpleStar
              size={32}
            /> */}
          <img src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTIDgdMNyoLyfSyeueiRrVnI5cDF9hbRCa_2TeD5PHJKCaqErXn' />
        </div>
        <h3 className='text-slate-900 group-hover:text-white text-sm font-semibold'>
          New Project
        </h3>
      </div>
      <p className='text-slate-500 group-hover:text-white text-sm'>
        Create a new project rom a variety of statrting templates.
      </p>
    </a>
  );
}

export default ProjectView
