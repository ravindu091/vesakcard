import React from 'react'
import { Card } from './ui/card'
import Image from 'next/image'

function VesakCard() {
  return (
    <Card className='w-[300px] h-90 p-0'>
        
            <Image 
                src="/card/img1.png"
                alt='Vesak card picture'
                width={300}
                height={400}
                />
        
    </Card>
  )
}

export default VesakCard