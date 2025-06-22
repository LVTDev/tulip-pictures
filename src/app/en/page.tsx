import QuienesSomosEN from '@/components/EN/QuienesSomosEN'
import Contactanos from '@/components/general UI/Contactanos'
import DistribucionHome from '@/components/general UI/DistribucionHome'
import HomeHero from '@/components/general UI/HomeHero'
import ProduccionHome from '@/components/general UI/ProduccionHome'
import React from 'react'


const page = () => {
  return (
      <div className=" mx-auto w-screen">
      <HomeHero />
      <QuienesSomosEN />
      <DistribucionHome />
      <ProduccionHome />
      <Contactanos lang="en" />
    </div>
  )
}

export default page
