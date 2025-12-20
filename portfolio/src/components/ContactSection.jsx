import { Building, Facebook, Instagram, Linkedin, Mail, MapPin, PhoneCall, Send, Twitter, X } from 'lucide-react'
import React, { useState } from 'react'
import { cn } from '../lib/utils'
import { toast } from 'react-toastify';


const ContactSection = () => {

    const [result, setResult] = useState("")
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "ba52bf24-ff53-422e-b614-da3d01f9a879");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            toast.success("Message Sent")
            event.target.reset();
        } else {
            console.log("Error", data);
            toast.error(data.message)
            setResult("");
        }
    };
    return (
        <section id='contact' className='py-24 px-4 relative bg-secondary/30'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold'>Get In <span className='text-primary'>Touch</span> </h2>

                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    Have a project in mind or want to collaborate? Fell free to reach out. I'm always open to discuss new opportunities.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 '>
                    <div className='space-y-8'>
                        <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>

                        <div className='space-y-6 justify-center'>
                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'><Mail className='h-6 w-6 text-primary' />
                                </div>
                                <div className=''>
                                    <h4 className='font-medium text-left'>Email</h4>
                                    <a className='text-muted-foreground hover:text-primary transition-colors ' href='mailto:duarahpallab0@gmail.com'>
                                        duarahpallab0@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'><PhoneCall className='h-6 w-6 text-primary' />
                                </div>
                                <div className=''>
                                    <h4 className='font-medium text-left'>Phone</h4>
                                    <a className='text-muted-foreground hover:text-primary transition-colors ' href='tel:+916001478031'>
                                        +91 6001478031
                                    </a>
                                </div>
                            </div>

                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'><MapPin className='h-6 w-6 text-primary' />
                                </div>
                                <div className=''>
                                    <h4 className='font-medium text-left'>Location</h4>
                                    <a className='text-muted-foreground hover:text-primary transition-colors '>
                                        Sibsagar, Assam
                                    </a>
                                </div>
                            </div>

                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'><Building className='h-6 w-6 text-primary' />
                                </div>
                                <div className=''>
                                    <h4 className='font-medium text-left'>College</h4>
                                    <a className='text-muted-foreground hover:text-primary transition-colors '>
                                        Sibsagar Commerce College, 785640
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='pt-8 '>
                            <h4 className='font-medium mb-4'>Connect With Me</h4>
                            <div className='flex space-x-4 justify-center'>
                                <a href='' target='_blank'>
                                    <Linkedin />
                                </a>
                                <a href='' target='_blank'>
                                    <Instagram />
                                </a>
                                <a href='' target='_blank'>
                                    <Facebook />
                                </a>
                                <a href='' target='_blank'>
                                    <Twitter />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='bg-card p-8 rounded-lg shadow-xs'>
                        <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>

                        <form onSubmit={onSubmit} className='space-y-6'>
                            <div>
                                <label htmlFor='name' className='block text-sm font-medium mb-2'>
                                    {" "}
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                                    placeholder='Eg. pallab...' />
                            </div>

                            <div>
                                <label htmlFor='email' className='block text-sm font-medium mb-2'>
                                    {" "}
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                                    placeholder='Eg. pallab@gmail.com...' />
                            </div>

                            <div>
                                <label htmlFor='message' className='block text-sm font-medium mb-2'>
                                    {" "}
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none'
                                    placeholder='Eg. Hello, How are you...' />
                            </div>
                            <button type='submit' className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                                {result ? result : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection