import React, { useState } from 'react'
import { cn } from '../lib/utils';

const skills = [
    { name: "HTML/CSS", level: 90, category: "Frontend" },
    { name: "Javascript", level: 80, category: "Frontend" },
    { name: "React Js", level: 80, category: "Frontend" },
    { name: "Tailwind CSS", level: 90, category: "Frontend" },
    { name: "Framer Motion", level: 90, category: "Animation" },

    { name: "Node Js", level: 70, category: "Backend" },
    { name: "Express Js", level: 90, category: "Backend" },
    { name: "MongoDB", level: 70, category: "Database" },
    { name: "MySQL", level: 60, category: "Database" },
    { name: "Json Web Token", level: 70, category: "Authentication" },
    { name: "Python", level: 60, category: "Backend" },
    { name: "Java", level: 50, category: "Backend" },
    { name: "C", level: 80, category: "Programming Language" },

    { name: "Git/Github", level: 90, category: "Tools" },
    { name: "Figma", level: 90, category: "Tools" },
    { name: "VS Code", level: 90, category: "Tools" },
    { name: "IntelliJ Idea", level: 40, category: "Tools" },
    { name: "Ms Word", level: 100, category: "Tools" },
    { name: "Ms Powerpoint", level: 100, category: "Tools" },
    { name: "Ms Exel", level: 100, category: "Tools" },
];

const categories = ["All", "Frontend", "Backend", "Database", "Tools", "Programming Language", "Authentication"]

const SkillsSection = () => {

    const [activeCategory, setActiveCategory] = useState("All");

    const filterSkills = skills.filter((skill) => activeCategory === "All" || skill.category === activeCategory);

    return (
        <section
            id='skills'
            className='py-24 px-4 relative bg-secondary/30'>
            <div className='container mx-auto max-w-5xl '>
                <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                    My <span className='text-primary'>Skills</span>
                </h2>

                <div className='flex flex-wrap justify-center gap-4 mb-12'>
                    {categories.map((category, key)=> (
                        <button
                        key={key}
                        onClick={()=> setActiveCategory(category)}
                        className={cn('px-5 py-2 rounded-full transition-colors duration-300 capitalize',
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary")
                        }>{category}</button>
                    ))}
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {filterSkills.map((skill, key) => (
                        <div key={key} className='bg-card p-6 rounded-lg shadow-xs card-hover'>
                            <div className='text-left mb-4'>
                                <h3 className='font-semibold text-lg'>{skill.name}</h3>
                            </div>
                            <div className='w-full bg-secondary/50 h-2 rounded-full overflow-hidden'>
                            <div className='bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]' style={{width: skill.level + "%"}}/>
                            </div>
                            <div className='text-right mt-1'>
                                <span className='text-sm text-muted-foreground'>{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SkillsSection