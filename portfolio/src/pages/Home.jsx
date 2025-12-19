import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden text-center'>
      {/* ThemeToggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground/>
    </div>
  )
}

export default Home