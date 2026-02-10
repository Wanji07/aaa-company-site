import Background from '../assets/ContactBackground.jpg'
import ContactImage from '../assets/ContactImage.jpg';
import { useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

function Contact() {
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);

    const onHCaptchaChange = (token: string) => {
        setCaptchaToken(token);
    };

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        formData.append("access_key", "444642d0-2aef-42a9-9c43-1eff6e1c27f2");
        if (captchaToken) {
            formData.append("h-captcha-response", captchaToken);
        }

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            form.reset();
        } else {
            console.error("Form submission failed:", data);
        }
    };


    return (
        <>
            <div id="container" className="relative overflow-hidden bg-[#E61E25] text-white h-screen">
                <div className="absolute inset-0 z-0">
                    <img
                        src={Background}
                        alt="Contact background"
                        className="absolute inset-0 w-full h-full object-cover opacity-15"
                    />
                </div>
                <div id="contentContainer" className="relative mt-[5em] z-100 grid grid-cols-2 items-stretch gap-8 max-w-6xl mx-auto px-15">
                    <div id="leftSection">
                        <div id="form" className="relative bg-white/85 backdrop-blur-sm p-8 pb-24 rounded-xl shadow-lg max-w-2xl">
                            <h1 className="font-semibold text-[#E61E25] text-3xl">Get in Touch</h1>
                            <p className="mt-2 text-sm text-gray-600">We’ll get back to you within three business days.</p>
                            <form className="mt-6 space-y-6" onSubmit={onSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div id="input-box-1">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Enter your full name"
                                            autoComplete="off"
                                            required
                                            className="mt-1 w-full rounded-md border border-gray-300 bg-white/80 px-3 py-2 text-gray-900 placeholder-gray-400 placeholder:text-sm shadow-sm focus:border-[#E61E25] focus:ring-2 focus:ring-[#E61E25]"
                                        />
                                    </div>
                                    <div id="input-box-2">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Enter your email address"
                                            autoComplete="off"
                                            required
                                            className="mt-1 w-full rounded-md border border-gray-300 bg-white/80 px-3 py-2 text-gray-900 placeholder-gray-400 placeholder:text-sm shadow-sm focus:border-[#E61E25] focus:ring-2 focus:ring-[#E61E25]"
                                        />
                                    </div>
                                    <div id="input-box-3">
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            autoComplete="off"
                                            placeholder="Enter your phone number"
                                            className="mt-1 w-full rounded-md border border-gray-300 bg-white/80 px-3 py-2 text-gray-900 placeholder-gray-400 placeholder:text-sm shadow-sm focus:border-[#E61E25] focus:ring-2 focus:ring-[#E61E25]"
                                        />
                                    </div>
                                    <div id="input-box-4">
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                                        <input
                                            id="subject"
                                            name="subject"
                                            type="text"
                                            placeholder="Enter subject (ex. Signage)"
                                            autoComplete="off"
                                            className="mt-1 w-full rounded-md border border-gray-300 bg-white/80 px-3 py-2 text-gray-900 placeholder-gray-400 placeholder:text-sm shadow-sm focus:border-[#E61E25] focus:ring-2 focus:ring-[#E61E25]"
                                        />
                                    </div>
                                    <div id="input-box-5" className="md:col-span-2">
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            placeholder="Enter your inquiries"
                                            autoComplete="off"
                                            required
                                            className="mt-1 w-full rounded-md border border-gray-300 bg-white/80 px-3 py-2 text-gray-900 placeholder-gray-400 placeholder:text-sm shadow-sm focus:border-[#E61E25] focus:ring-2 focus:ring-[#E61E25]"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Prefer a call? 0994-654-9679</span>
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center rounded-md bg-[#E61E25] px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E61E25]"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                            <div className="absolute bottom-3 left-0 right-0 flex justify-center">
                                <HCaptcha
                                    sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                                    reCaptchaCompat={false}
                                    onVerify={onHCaptchaChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div id="rightSection">
                        <img src={ContactImage} className="rounded-2xl h-full w-auto max-w-[100%] object-cover shadow-2xl ring-1 ring-black/10 hover:scale-[1.02] hover:shadow-3xl transition-transform duration-300 ease-out w-full max-w-[520px] sm:max-w-[600px] md:max-w-[680px] lg:max-w-[520px] aspect-[4/3]" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact