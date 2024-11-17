import Banner from '@/components/section/Banner'
import Blogs from '@/components/section/Blogs'
import Booking from '@/components/section/Booking'
import Faq from '@/components/section/Faq'
import Footer from '@/components/section/Footer'
import HappyCliend from '@/components/section/HappyCliend'
import Header from '@/components/section/header/Header'
import Hero from '@/components/section/Hero'
import InsurencePartners from '@/components/section/InsurencePartners'
import MeetTeam from '@/components/section/MeetTeam'
import Offers from '@/components/section/Offers'
import Services from '@/components/section/Services'
import React from 'react'

const HomePage = () => {
  return (
  <React.Fragment>
    <Header/>
    <Hero/>
    <Services/>
    <MeetTeam />
    <Offers/>
    <Banner/>
    <HappyCliend/>
    <InsurencePartners/>
    <Blogs/>
    <Faq/>
    <Booking />
    <Footer/>
  </React.Fragment>

  )
}

export default HomePage