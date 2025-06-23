import DistribucionHomeEN from '@/components/EN/DistribucionHomeEN'
import ProduccionHomeEN from '@/components/EN/ProduccionHomeEN'
import QuienesSomosEN from '@/components/EN/QuienesSomosEN'
import Contactanos from '@/components/general UI/Contactanos'
import HomeHero from '@/components/general UI/HomeHero'
import React from 'react'


const page = () => {
  return (
      <div className=" mx-auto w-screen">
      <HomeHero />
      <QuienesSomosEN />
      <DistribucionHomeEN />
      <ProduccionHomeEN />
      <Contactanos lang="en" />
    </div>
  )
}

export default page
