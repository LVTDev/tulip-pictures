import PeliculasListSection from '@/components/general UI/PeliculasListSection'
import React from 'react'

const page = () => {
  return (
    <div className=' font-poppins pt-20 max-w-[1200px] mx-auto'>
        <h1 className='transparent-text text-5xl'>Péliculas</h1>
        <PeliculasListSection lang="es" />
    </div>
  )
}

export default page