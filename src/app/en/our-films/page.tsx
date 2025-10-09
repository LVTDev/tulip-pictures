import PeliculasListSection from '@/components/general UI/PeliculasListSection'
import React from 'react'

const page = () => {
  return (
    <div className=' pt-20 max-w-[1200px] mx-auto'>
        <h1 className='transparent-text text-5xl'>Our Films</h1>
        <PeliculasListSection lang={"en"} />
    </div>
  )
}

export default page