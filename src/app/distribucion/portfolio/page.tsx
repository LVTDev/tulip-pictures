import AnnouncementBar from '@/components/general UI/AnnouncementBar'
import PortfolioList from '@/components/general UI/PortfolioList'
import React from 'react'

const page = () => {
  return (
    <div>
      <AnnouncementBar />
      <PortfolioList title="distribucion" />

    </div>
  )
}

export default page