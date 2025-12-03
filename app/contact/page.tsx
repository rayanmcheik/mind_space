'use client';
import React, { useState } from 'react';
import AnimatedCirclecontact from './AnimatedCircle'
import Contactdetails from './contactdetails'
import ToTopButton from '../components/totopbutton'


const contact = () => {
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
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        }
        if (!formData.message.trim()) newErrors.message = 'Message cannot be empty';

        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
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
        <div className="w-full h-full bg-black pb-80">
            <ToTopButton></ToTopButton>
            <div className="container w-full h-full px-0 pt-20 pb-12 mx-auto md:pt-20 md:pb-52">
                
                    <AnimatedCirclecontact />
                 <div className="relative z-10 w-full max-w-3xl p-8 border shadow-xl backdrop-blur-lg border-amber-50 rounded-2xl md:p-12">
                <h1 className="mb-6 text-3xl font-bold text-center text-white md:text-4xl">
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
                            className={`w-full pt-6 pb-1 pl-2 text-2xl text-white placeholder-transparent capitalize bg-transparent border-b-2 peer focus:outline-none ${errors.name ? 'border-red-500' : 'border-gray-300 focus:border-white'
                                }`}
                        />
                        <label
                            className={`absolute left-4 transition-all duration-200 ${formData.name ? 'top-0 text-white text-sm' : 'top-6 text-white text-2xl'
                                } peer-focus:top-0 peer-focus:text-white peer-focus:text-sm`}
                        >
                            Name
                        </label>
                        {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                    </div>
                    <div className="relative w-full">
                        <input
                            type="email"
                            name="email"
                            placeholder=" "
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full pt-6 pb-1 pl-2 text-2xl text-white placeholder-transparent bg-transparent border-b-2 peer focus:outline-none ${errors.email ? 'border-red-500' : 'border-gray-300 focus:border-white'
                                }`}
                        />
                        <label
                            className={`absolute left-4 transition-all duration-200 ${formData.email ? 'top-0 text-white text-sm' : 'top-6 text-white text-2xl'
                                } peer-focus:top-0 peer-focus:text-white peer-focus:text-sm`}
                        >
                            Email
                        </label>
                        {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                    </div>

                    <div className="relative w-full">
                        <textarea
                            name="message"
                            placeholder=" "
                            value={formData.message}
                            onChange={handleChange}
                            rows={6}
                            className={`w-full pt-6 pb-1 pl-2 text-2xl text-white placeholder-transparent capitalize bg-transparent border-b-2 peer focus:outline-none ${errors.message ? 'border-red-500' : 'border-gray-300 focus:border-white'
                                }`}
                        />
                        <label
                            className={`absolute left-4 transition-all duration-200 ${formData.message ? 'top-0 text-white text-sm' : 'top-6 text-white text-2xl'
                                } peer-focus:top-0 peer-focus:text-white peer-focus:text-sm`}
                        >
                            Your Message
                        </label>
                        {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
                    </div>
                    <div className="flex items-center justify-center">
                        {/* <Button
                            Text="Send Message"
                            src="#"
                            color="text-white"
                            hovercolor="hover:text-black"
                            bgcolor="bg-black"
                            bgcolorhover="hover:bg-white"
                        /> */}
                    </div>
                    {submitted && (
                        <p className="mt-4 text-center text-green-300">
                            Your message has been sent successfully!
                        </p>
                    )}
                </form>
            </div>
                </div>
            </div>

    )
}

export default contact