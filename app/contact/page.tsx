'use client';
import React, { useState } from 'react';
import AnimatedCirclecontact from './AnimatedCircle';
import Contactdetails from './contactdetails';
import ToTopButton from '../components/totopbutton';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const validate = () => {
        const newErrors: typeof errors = {};

        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.message.trim()) newErrors.message = 'Message cannot be empty';

        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length) {
            setErrors(validationErrors);
            setSubmitted(false);
        } else {
            console.log(formData);
            setSubmitted(true);
            setErrors({});
            setFormData({ name: '', email: '', message: '' });
        }
    };

    return (
        <div className="w-full min-h-screen bg-black md:pb-20 pb-[60lvh]">
            <ToTopButton />

            <div className="container w-full px-4 pt-28 mx-auto md:px-0 md:pt-32 md:pb-52">
                <div className="flex flex-col items-center justify-center relative">

                    <div className="flex justify-center w-full mt-20 md:mb-0">
                        <AnimatedCirclecontact />
                    </div>

                    <div className="absolute top-20 md:top-auto md:relative w-full max-w-lg md:max-w-3xl mx-auto p-6 md:p-10 border shadow-xl backdrop-blur-lg border-cyan-500 rounded-2xl">
                        <h1 className="mb-6 text-3xl md:text-4xl font-bold text-center text-white">
                            Contact Us
                        </h1>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                            <div className="relative w-full">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder=" "
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full pt-6 pb-1 pl-2 text-lg md:text-2xl text-white placeholder-transparent bg-transparent border-b-2 peer focus:outline-none
                                    ${errors.name ? 'border-red-500' : 'border-gray-400 focus:border-cyan-500'}`}
                                />
                                <label
                                    className={`absolute left-2 transition-all duration-200
                                    ${formData.name ? 'top-0 text-sm' : 'top-5 text-xl md:text-2xl'} 
                                    peer-focus:top-0 peer-focus:text-sm text-white`}
                                >
                                    Name
                                </label>
                                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                            </div>

                            <div className="relative w-full">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder=" "
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full pt-6 pb-1 pl-2 text-lg md:text-2xl text-white placeholder-transparent bg-transparent border-b-2 peer focus:outline-none
                                    ${errors.email ? 'border-red-500' : 'border-gray-400 focus:border-cyan-500'}`}
                                />
                                <label
                                    className={`absolute left-2 transition-all duration-200
                                    ${formData.email ? 'top-0 text-sm' : 'top-5 text-xl md:text-2xl'}
                                    peer-focus:top-0 peer-focus:text-sm text-white`}
                                >
                                    Email
                                </label>
                                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                            </div>

                            <div className="relative w-full">
                                <textarea
                                    name="message"
                                    placeholder=" "
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className={`w-full pt-6 pb-1 pl-2 text-lg md:text-2xl text-white placeholder-transparent bg-transparent border-b-2 peer focus:outline-none
                                    ${errors.message ? 'border-red-500' : 'border-gray-400 focus:border-cyan-500'}`}
                                />
                                <label
                                    className={`absolute left-2 transition-all duration-200
                                    ${formData.message ? 'top-0 text-sm' : 'top-5 text-xl md:text-2xl'}
                                    peer-focus:top-0 peer-focus:text-sm text-white`}
                                >
                                    Your Message
                                </label>
                                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                            </div>

                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="px-6 py-2 text-xl md:text-2xl font-semibold text-white bg-cyan-500 rounded-lg hover:bg-cyan-600 transition"
                                >
                                    Send Message
                                </button>
                            </div>

                            {submitted && (
                                <p className="text-center text-cyan-500 text-lg md:text-xl">
                                    Your message has been sent successfully!
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
