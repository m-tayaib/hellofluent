import React, { useState } from 'react';

function ContactAbout() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Here you can add logic to send the form data to a backend or email service
    };

    return (
        <section className="w-full bg-bgSecondary p-8 md:p-16 '">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-10  overflow-hidden">
                {/* Left Side: Message & Belief */}
                <div className="flex flex-col justify-center items-start  ">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Send Us a Message</h2>
                    <p className="text-lg text-secondary mb-6">
                        Have something on your mind? Reach out to us! <br />
                        We value your feedback and ideas. <span className="font-semibold text-logo">Let’s make HelloFluent even better—together.</span> <br />
                        Send us a message and impress us with your thoughts!
                    </p>
                    <blockquote className="italic text-logo border-l-4 border-logo pl-4">"Belief in communication is belief in humanity."</blockquote>
                </div>
                {/* Right Side: Contact Form */}
                <div className="flex flex-col justify-center ">
                    {submitted ? (
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold text-logo mb-2">Thank you!</h3>
                            <p className="text-secondary">Your message has been sent. We appreciate your interest and will get back to you soon.</p>
                        </div>
                    ) : (
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            <label className="flex flex-col gap-1">
                                <span className="font-medium text-primary">Name</span>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="border border-accent rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-logo bg-bgSecondary"
                                    placeholder="Your Name"
                                />
                            </label>
                            <label className="flex flex-col gap-1">
                                <span className="font-medium text-primary">Email</span>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className="border border-accent rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-logo bg-bgSecondary"
                                    placeholder="you@email.com"
                                />
                            </label>
                            <label className="flex flex-col gap-1">
                                <span className="font-medium text-primary">Message</span>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="border border-accent rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-logo bg-bgSecondary resize-none"
                                    placeholder="Type your message here..."
                                />
                            </label>
                            <button
                                type="submit"
                                className="mt-2 bg-logo text-white font-semibold py-2 rounded shadow hover:bg-gradient-to-r from-logo to-primary cursor-pointer duration-150 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}

export default ContactAbout;