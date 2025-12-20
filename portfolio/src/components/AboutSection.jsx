import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'

const AboutSection = () => {
  return (
    <section id='about' className='py-24 px-4 relative'>
      {" "}
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold max-w-5xl'>
          About <span className='text-primary'> Me</span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center '>
          <div className='mt-20 space-y-6'>
            <h3 className='text-2xl font-semibold'>Passionate FullStack Developer & Aspiring AI Engineer</h3>

            <p className='text-muted-foreground'>
              Pallab is a focused and thoughtful BCA student who balances ambition with sincerity. At just 19, he’s deeply invested in learning core computer science subjects like Java, DSA, operating systems, and backend development, always trying to understand concepts clearly rather than just for exams.
            </p>
            <p className='text-muted-foreground'>
              He’s disciplined about his goals, even while managing a tight budget, and he genuinely cares about the people in his life, sometimes overthinking but always with good intentions. Curious, hardworking, and emotionally honest, Pallab is someone who keeps moving forward—learning, improving, and figuring things out step by step.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
              <a href='#contact' className='cosmic-button'>
                {" "}
                Get in touch</a>

                <a
                target='_blank'
                href='/projects/resume.pdf' className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>
                {" "}
                Download Resume</a>

            </div>
          </div>

          <div className='grid grid-cols-1 gap-6'>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                <Code className='h-6 w-6 text-primary'/>
                </div>
                <div className='text-left'>
                  <h3 className='font-semibold text-lg'> Software Development</h3>
                  <p className='text-muted-foreground'>Creating responsive websites and web and mobile applications with modern frameworks.</p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                <User className='h-6 w-6 text-primary'/>
                </div>
                <div className='text-left'>
                  <h3 className='font-semibold text-lg'> UI/UX Design</h3>
                  <p className='text-muted-foreground'>Designing intuitive user interfaces and seamless user experiences.</p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                <Briefcase className='h-6 w-6 text-primary'/>
                </div>
                <div className='text-left'>
                  <h3 className='font-semibold text-lg'> Project Management</h3>
                  <p className='text-muted-foreground'>Leading projects from conception to completion with agile methodologies.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection