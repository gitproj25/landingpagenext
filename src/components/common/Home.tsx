import React from 'react'
import Banner from '../ui/Banner'
import Clients from '../ui/Clients'
import Community from '../ui/Community'
import UnseenSection from '../ui/Unseen'
import HelpingClients from '../ui/HelpingClients'
import Business from '../ui/Business'
import Smith from '../ui/Smith'
import Marketing from '../ui/Marketing'

const Home = () => {
  return (
    <main className="overflow-hidden">

      <Banner/>
      <Clients/>
      <Community/>
      <UnseenSection/>

      <HelpingClients/>
      <Business/>
      <Smith/>
      <Marketing/>
      
    </main >
  )
}

export default Home
