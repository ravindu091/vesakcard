import VesakCard from '@/components/VesakCard'
import React from 'react'

function page() {
  return (
    <div className=' bg-green-300 flex justify-center items-center '>
      <div className='flex flex-col justify-center items-center gap-2 py-5'>
        <VesakCard />
        <VesakCard />
        <VesakCard />
        <VesakCard />
        <VesakCard />
      </div>
        
      
    </div>
  )
}

export default page