import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden text-center'>
      {/* ThemeToggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground/>
      {/* Navbar */}
      <Navbar/>
      {/* Main content */}
      <HeroSection/>
    </div>
  )
}

export default Home