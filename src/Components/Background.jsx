import React from 'react'

function Background() {
  return (
    <>
    <div className='fixed z-[2] w-full h-screen'>
    <div className='flex justify-center py-10 w-full absolute top-[5%] text-zinc-200'>Documents</div>
    <h1 className='text-[12vw] top-1/2 left-1/2 absolute -translate-x-[50%] -translate-y-[50%] text-zinc-200'>Docs</h1>
    </div>
    </>
  )
}

export default Background;