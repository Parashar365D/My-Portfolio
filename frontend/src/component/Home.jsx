import React, { useState } from 'react';
import profile from "../assets/profile.jpeg";
import project1 from "../assets/girlish-glam.png";
import project2 from "../assets/cab-service.png";
import project3 from "../assets/PassKeeper.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {

    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const API = import.meta.env.VITE_API;
    console.log(API);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${API}/contact`, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                toast.success('Message send successfully!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                toast.error('Error sending message!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                setFormData({ name: "", email: "", subject: "", message: "" });
            }
        } catch (error) {
            toast.warn('Network error!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            setFormData({ name: "", email: "", subject: "", message: "" });
        }
    };


    return (
        <>
            <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover={false} theme="dark" />
            <main className='bg-black font-inter text-white'>

                {/* Home section */}
                <section id='home' className='py-10'>
                    <div className='flex flex-col md:flex-row items-center justify-center w-full px-5 md:px-16 border-b-2 border-gray-600 md:h-[570px]'>
                        <div className='md:w-1/2 mb-14'>
                            <h1 className='text-4xl md:text-6xl font-semibold mb-4'>Hi, I AM<br />CHETAN PARASHAR<span className='text-base'>&#9632;</span></h1>
                            <p className='text-sm md:text-lg text-gray-300 mb-4 md:w-4/5'>I am a MERN stack web developer who enjoys building user-friendly apps with clean code.</p>
                            <div className='flex items-center md:gap-8 gap-4'>
                                <a href='#contact' className='rounded-full md:p-4 p-3 bg-[#D3E97A] text-black font-bold text-base hover:scale-105'>CONTACT ME <span className='bg-black text-white rounded-full md:px-4 md:py-3 px-2 py-1.5 text-sm ml-1 md:ml-2'><i className="fa-solid fa-location-arrow"></i></span></a>
                                <a href='https://www.linkedin.com/in/chetan-parashar-365d' target='_blank' className='bg-[#222222] text-[#D3E97A] rounded-full px-4 py-2.5 text-2xl hover:scale-105'><i className="fa-brands fa-linkedin"></i></a>
                                <a href='https://github.com/Parashar365D' className='bg-[#222222] text-[#D3E97A] rounded-full px-4 py-2.5 text-2xl hover:scale-105'><i className="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                        <div className='md:w-1/2 mb-10 hidden md:block'>
                            <img className='rounded-full border-white border-2  mx-auto md:w-96 mb-2' src={profile} alt="Profile" />
                        </div>
                    </div>
                </section>

                {/* Work sections */}
                <section id='work' className='py-5'>
                    <div className='border-b-2 border-gray-600 mb-7 md:mb-0'>
                        <div className='px-5 md:px-16 mb-10 md:mb-0'>
                            <h1 className='md:text-5xl text-4xl font-semibold mb-4'>FEATURED PROJECTS</h1>
                            <p className='text-sm md:text-lg text-gray-300 mb-4 md:w-[31rem]'>Explore my projects, where I've built user-friendly apps, including e-commerce sites and secure tools.</p>
                        </div>

                        {/* project 1 */}
                        <div className='flex flex-col md:flex-row md:w-full md:p-10 px-5 md:h-full mb-7 md:mb-4'>
                            <div className='md:w-1/2 md:px-12 md:py-20 px-5 py-5 mb-8 rounded-xl bg-[#222222] hover:scale-105'>
                                <img className='md:w-[550px] md:h-[300px] border-black border-[3px] rounded-lg' src={project1} alt="project-1" />
                            </div>
                            <div className='md:w-1/2 md:p-10'>
                                <div className='mb-7'>
                                    <h2 className='text-xl md:text-2xl font-medium mb-4'>Girlish Glam: E-Commerce Platform for Beauty Products</h2>
                                    <p className='font-sans text-sm md:text-base text-gray-300 mb-4'>Girlish Glam is an online store designed for beauty lovers. It offers a smooth shopping experience with a wide range of beauty products. The platform includes an easy-to-use admin panel for managing and updating inventory, making it simple to keep everything fresh and up-to-date.</p>
                                </div>
                                <div className='border-b border-gray-600 mb-3'>
                                    <h2 className='text-gray-200 text-base md:text-lg font-medium mb-4'>PROJECT INFO</h2>
                                </div>
                                <div className='flex items-center justify-between border-b border-gray-600 mb-3'>
                                    <h3 className='font-sans text-sm md:text-base text-gray-200 mb-4'>Year</h3>
                                    <h3 className='font-sans text-sm md:text-base text-gray-200 mb-4'>2024</h3>
                                </div>
                                <div className='flex items-center justify-between border-b border-gray-600 mb-8'>
                                    <h3 className='font-sans text-sm md:text-base text-gray-200 mb-4'>Role</h3>
                                    <h3 className='font-sans text-sm md:text-base text-gray-200 mb-4'>Full-Stack Developer</h3>
                                </div>
                                <div className='flex items-center justify-start md:justify-normal md:gap-8 gap-4 mb-10 md:mb-0'>
                                    <a className='text-[#D3E97A] underline underline-offset-8 text-sm md:text-lg font-inter font-normal hover:scale-105' href="https://girlish-glam.onrender.com/" target="_blank" rel="noopener noreferrer">LIVE DEMO <i className="fa-solid fa-square-arrow-up-right"></i></a>
                                    <a className='text-[#D3E97A] underline underline-offset-8 text-sm md:text-lg font-inter font-normal hover:scale-105' href="https://github.com/Parashar365D/Girlish-Glam" target="_blank" rel="noopener noreferrer">SEE ON GITHUB <i className="fa-brands fa-github"></i></a>
                                </div>
                            </div>
                        </div>

                        {/* project 2 */}
                        <div className='flex flex-col md:flex-row md:w-full md:p-10 px-5 md:h-full'>
                            <div className='md:w-1/2 md:px-12 md:py-20 px-5 py-5 mb-8 rounded-xl bg-[#222222] hover:scale-105'>
                                <img className='md:w-[550px] md:h-[300px] border-black border-[3px] rounded-lg' src={project2} alt="project-1" />
                            </div>
                            <div className='md:w-1/2 md:p-10'>
                                <div className='mb-7'>
                                    <h2 className='text-xl md:text-2xl font-medium mb-4'>Gwalior Cab Services: Front-End Booking Interface</h2>
                                    <p className='font-sans text-sm md:text-base text-gray-300 mb-4'>I worked on the front-end for Gwalior Cab Services using React. The interface is designed to be easy to use, making ride bookings straightforward. While the project is still a work in progress, it includes features like real-time updates and smooth navigation to improve the user experience.</p>
                                </div>
                                <div className='border-b border-gray-600 mb-3'>
                                    <h2 className='text-gray-200 text-base md:text-lg font-medium mb-4'>PROJECT INFO</h2>
                                </div>
                                <div className='flex items-center justify-between border-b border-gray-600 mb-3'>
                                    <h3 className='font-sans text-sm md:text-base text-gray-200 mb-4'>Year</h3>
                                    <h3 className='font-sans text-sm md:text-base text-gray-200 mb-4'>2024</h3>
                                </div>
                                <div className='flex items-center justify-between border-b-2 border-gray-600 mb-8'>
                                    <h3 className='font-sans text-sm md:text-base text-gray-200 mb-4'>Role</h3>
                                    <h3 className='font-sans text-sm md:text-base text-gray-200 mb-4'>Front-End Developer</h3>
                                </div>
                                <div className='flex items-center justify-start md:justify-normal md:gap-8 gap-4 mb-10 md:mb-0'>
                                    <a className='text-[#D3E97A] underline underline-offset-8 text-sm md:text-lg font-inter font-normal hover:scale-105' href="https://cab-service-one.vercel.app/" target="_blank" rel="noopener noreferrer">LIVE DEMO <i className="fa-solid fa-square-arrow-up-right"></i></a>
                                    <a className='text-[#D3E97A] underline underline-offset-8 text-sm md:text-lg font-inter font-normal hover:scale-105' href="https://github.com/Parashar365D/Cab_Service" target="_blank" rel="noopener noreferrer">SEE ON GITHUB <i className="fa-brands fa-github"></i></a>
                                </div>
                            </div>
                        </div>

                        {/* project 3 */}
                        <div className='flex flex-col md:flex-row md:w-full md:p-10 px-5 md:h-full'>
                            <div className='md:w-1/2 md:px-12 md:py-20 px-5 py-5 mb-8 rounded-xl bg-[#222222] hover:scale-105'>
                                <img className='md:w-[550px] md:h-[300px] border-black border-[3px] rounded-lg' src={project3} alt="project-1" />
                            </div>
                            <div className='md:w-1/2 md:p-10'>
                                <div className='mb-7'>
                                    <h2 className='text-xl md:text-2xl font-medium mb-4'>PassKeeper: Secure Password Management Tool</h2>
                                    <p className='font-sans text-sm md:text-base text-gray-300 mb-4'>PassKeeper is a simple and secure password management tool designed to store passwords locally on your device. Built with a focus on security and ease of use, it allows users to safely manage their passwords without the need for cloud storage. The intuitive interface ensures that keeping track of multiple passwords is hassle-free and secure.</p>
                                </div>
                                <div className='border-b border-gray-600 mb-3'>
                                    <h2 className='text-gray-200 text-base md:text-lg font-medium mb-4'>PROJECT INFO</h2>
                                </div>
                                <div className='flex items-center justify-between border-b border-gray-600 mb-3'>
                                    <h3 className='font-sans text-sm md:text-base text-gray-200 mb-4'>Year</h3>
                                    <h3 className='font-sans text-sm md:text-base text-gray-200 mb-4'>2024</h3>
                                </div>
                                <div className='flex items-center justify-between border-b-2 border-gray-600 mb-8'>
                                    <h3 className='font-sans text-sm md:text-base text-gray-200 mb-4'>Role</h3>
                                    <h3 className='font-sans text-sm md:text-base text-gray-200 mb-4'>Front-End Developer</h3>
                                </div>
                                <div className='flex items-center justify-start md:justify-normal md:gap-8 gap-4 mb-10 md:mb-0'>
                                    <a className='text-[#D3E97A] underline underline-offset-8 text-sm md:text-lg font-inter font-normal hover:scale-105' href="https://passkeeper.onrender.com" target="_blank" rel="noopener noreferrer">LIVE DEMO <i className="fa-solid fa-square-arrow-up-right"></i></a>
                                    <a className='text-[#D3E97A] underline underline-offset-8 text-sm md:text-lg font-inter font-normal hover:scale-105' href="https://github.com/Parashar365D/PassKeeper" target="_blank" rel="noopener noreferrer">SEE ON GITHUB <i className="fa-brands fa-github"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About section */}
                <section id='about'>
                    <div className='flex flex-col md:flex-row md:w-full md:p-10 mb-7 md:mb-0 border-b border-b-gray-600'>
                        <div className='md:w-1/2 md:px-16 px-5 mb-7'>
                            <h1 className='text-4xl md:text-5xl font-semibold mb-4'>ABOUT ME</h1>
                        </div>
                        <div className='md:w-1/2 px-5 mb-7'>
                            <h2 className='text-xl md:text-3xl font-light mb-2'>I'm a web developer who loves turning ideas into real, functional projects.</h2>
                            <p className='font-sans text-lg text-gray-300 mb-7'> I'm a web developer with a passion for turning ideas into real, functional projects. Specializing in the MERN stack and React, I focus on creating user-friendly, effective applications, from sleek front-ends to full-stack solutions. I love problem-solving and am always striving to improve and exceed expectations.</p>

                            <h1 className='text-2xl md:text-3xl font-semibold mb-2'>MY CAPABILITIES</h1>
                            <p className='font-sans text-lg text-gray-300 mb-7'>I build web applications that are both functional and visually appealing, with a focus on responsive, user-friendly designs. I enjoy simplifying complex problems into elegant solutions, ensuring efficiency and ease of use in every project.</p>

                            {/* Skill's */}
                            <div className='flex items-center flex-wrap gap-3 md:gap-4'>
                                <span className='text-sm py-4 px-8 rounded-full border-[#222222] border text-white hover:cursor-pointer hover:scale-105'>REACT JS</span>
                                <span className='text-sm py-4 px-8 rounded-full border-[#222222] border text-white hover:cursor-pointer hover:scale-105'>FIGMA</span>
                                <span className='text-sm py-4 px-8 rounded-full border-[#222222] border text-white hover:cursor-pointer hover:scale-105'>MONGODB DATABASE</span>
                                <span className='text-sm py-4 px-8 rounded-full border-[#222222] border text-white hover:cursor-pointer hover:scale-105'>NODE JS</span>
                                <span className='text-sm py-4 px-8 rounded-full border-[#222222] border text-white hover:cursor-pointer hover:scale-105'>TAILWIND CSS</span>
                                <span className='text-sm py-4 px-8 rounded-full border-[#222222] border text-white hover:cursor-pointer hover:scale-105'>RESPONSIVE DESIGN</span>
                                <span className='text-sm py-4 px-8 rounded-full border-[#222222] border text-white hover:cursor-pointer hover:scale-105'>EXPRESS JS</span>
                                <span className='text-sm py-4 px-8 rounded-full border-[#222222] border text-white hover:cursor-pointer hover:scale-105'>DJANGO</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact section */}
                <section id='contact'>
                    <div className='flex flex-col md:flex-row justify-between md:w-full md:p-10 border-b-2 border-gray-600'>
                        <div className='md:w-1/2 md:px-16 px-5 mb-7'>
                            <h1 className='text-3xl md:text-5xl font-semibold mb-4'>LET'S CONNECT</h1>
                            <p className='text-sm md:text-lg text-gray-300 mb-2'>Say Hello at <a className='text-base underline underline-offset-8 decoration-[#D3E97A] text-white' href="mailto:chetanparashar2004@gmail.com">chetanparashar2004@gmail.com</a></p>
                            <p className='text-sm md:text-lg text-gray-300 mb-5'>For more info, here's my <a className='text-base underline underline-offset-8 decoration-[#D3E97A] text-white' href='https://drive.google.com/file/d/1m67a6p68YM3s2L8AfANgI_LVb5suHBLw/view?usp=sharing' target='_blank'>resume</a></p>
                            <div className='flex items-center gap-8'>
                                <span className='text-[#D3E97A] text-2xl hover:scale-105'><a href="https://www.linkedin.com/in/chetan-parashar-365d"><i className="fa-brands fa-linkedin-in"></i></a></span>
                                <span className='text-[#D3E97A] text-2xl hover:scale-105'><a href="https://github.com/Parashar365D"><i className="fa-brands fa-github"></i></a></span>
                                <span className='text-[#D3E97A] text-2xl hover:scale-105'><a href="https://www.instagram.com/ichetan_365d/"><i className="fa-brands fa-instagram"></i></a></span>
                            </div>
                        </div>
                        <div className='md:w-1/2 px-5'>
                            <form id='contact-form' className='md:w-[34rem]' onSubmit={handleSubmit} >
                                <div className='flex flex-col mb-4'>
                                    <label htmlFor="name" className='mb-1 text-gray-300'>Name</label>
                                    <input className='bg-[#222222] text-gray-300 p-2.5 md:p-3.5 rounded-md' type="text" id='name' name='name' value={formData.name} onChange={handleChange} required minLength={3} />
                                </div>
                                <div className='flex flex-col mb-4'>
                                    <label htmlFor="email" className='mb-1 text-gray-300'>Email</label>
                                    <input className='bg-[#222222] text-gray-300 p-2.5 md:p-3.5 rounded-md' type="email" id='email' name='email' value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className='flex flex-col mb-4'>
                                    <label htmlFor="subject" className='mb-1 text-gray-300'>Subject</label>
                                    <input className='bg-[#222222] text-gray-300 p-2.5 md:p-3.5 rounded-md' type="text" id='subject' name='subject' value={formData.subject} onChange={handleChange} required minLength={5} />
                                </div>
                                <div className='flex flex-col mb-4'>
                                    <label htmlFor="message" className='mb-1 text-gray-300'>Message</label>
                                    <textarea className='bg-[#222222] text-gray-300 p-2.5 md:p-3.5 rounded-md' id='message' name='message' value={formData.message} onChange={handleChange} rows={5} required minLength={5} />
                                </div>
                                <div className='my-8'>
                                    <button className='hover:scale-105 bg-[#D3E97A] text-black rounded-full py-3 px-8' type="submit">SEND</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Home;
