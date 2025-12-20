import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import React from 'react'

const projects = [
    {
        id: 1,
        title: "Aaahar Food Delivery",
        description: "Aaahar is your trusted food delivery service, bringing fresh, hygienic, and delicious meals straight to your doorstep. We focus on quality ingredients, quick delivery, and home-style taste to make every meal satisfying and convenient for you.",
        image: "/projects/aaahar-food-delivery.png",
        tags: ["React", "Tailwind CSS", "Node Js", "Express Js", "MongoDB", "Json Web Token"],
        url: "#",
        code: "#",
    },

    {
        id: 2,
        title: "AI Student Mentorship System",
        description: "Our AI Student Mentor System is designed to guide students through their academic journey with personalized support, smart recommendations, and 24/7 assistance. It helps students understand concepts better, manage their studies efficiently, and achieve their learning goals with confidence.",
        image: "/projects/ai-student-mentor.png",
        tags: ["React", "Tailwind CSS", "Node Js", "Express Js", "MongoDB", "Json Web Token", "Generative AI", "Gemini API"],
        url: "#",
        code: "#",
    },

    {
        id: 3,
        title: "Authentication System",
        description: "Our Authentication System ensures secure, reliable, and seamless access to digital platforms. By using modern security techniques, it protects user data, prevents unauthorized access, and delivers a smooth login experience you can trust.",
        image: "/projects/authentication-system.png",
        tags: ["React", "Tailwind CSS", "Node Js", "Express Js", "MongoDB", "Json Web Token", "Brevo SMTP", "NodeMailer"],
        url: "#",
        code: "#",
    },

    {
        id: 4,
        title: "Background Removal App",
        description: "Our Background Removal tool uses AI to instantly remove backgrounds from images with precision and clarity. Perfect for product photos, profiles, and designs, it saves time while delivering professional-quality results in just one click.",
        image: "/projects/background-removal-app.png",
        tags: ["React", "Tailwind CSS", "Node Js", "Express Js", "MongoDB", "Clerk", "ClipDrop API"],
        url: "#",
        code: "#",
    },

    {
        id: 5,
        title: "Brahmaputra Real Estate",
        description: "Brahmaputra Real Estate is committed to helping you find the perfect property with trust and transparency. From residential homes to commercial spaces, we offer reliable real estate solutions that combine local expertise with customer-focused service.",
        image: "/projects/brahmaputra-RE.png",
        tags: ["React", "Tailwind CSS"],
        url: "#",
        code: "#",
    },

    {
        id: 6,
        title: "2025 Portfolio",
        description: "This portfolio showcases my early projects, skills, and learning journey as a developer. It reflects my growth, experimentation, and foundation in web development, highlighting the work that shaped my technical skills.",
        image: "/projects/pallab-portfolio2025.png",
        tags: ["React", "Tailwind CSS", "Web3Forms"],
        url: "#",
        code: "#",
    },
]
const ProjectsSection = () => {
    return (
        <section id='projects' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    Featured <span className='text-primary'>Projects</span>
                </h2>
                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
                    {projects.map((project, key) => (
                        <div key={key} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
                            <div className='h-50 overflow-hidden'>
                                <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110' />
                            </div>
                            <div className='p-5'>
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {project.tags.map((tag, key) => (
                                        <span key={key} className='border-none px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground'>{" "} • {" "}{tag}</span>
                                    ))}
                                </div>

                                <h3 className='text-xl font-semibold mb-1 text-primary'>{project.title}</h3>
                                <p className='text-muted-foreground text-sm mb-4'>{project.description}</p>
                                <div className='flex justify-between items-center'>
                                    <div className='flex space-x-3'>
                                        <a href={project.url} target='_blank' className='text-foreground/80 hover:text-primary transition-colors duration-300'><ExternalLink size={20} /></a>
                                        <a href={project.code} target='_blank' className='text-foreground/80 hover:text-primary transition-colors duration-300'><Github size={20} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='text-center mt-12'>
                    <a 
                    href='#'
                    target='_blank'
                    className='cosmic-button w-fit flex items-center mx-auto gap-2'>
                        Checkout My GitHub <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection