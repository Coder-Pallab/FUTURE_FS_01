import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'
 import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden text-center'>
      <ToastContainer/>
      {/* Background Effects */}
      <StarBackground/>
      {/* Navbar */}
      <Navbar/>
      {/* Main content */}
      <HeroSection/>
      <AboutSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <ContactSection/>
    </div>
  )
}

export default Home