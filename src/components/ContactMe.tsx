"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactMe() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
      const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
      const userID = process.env.NEXT_PUBLIC_USER_ID;
      const response = await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        userID
      );

      console.log('SUCCESS!', response.status, response.text);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      setSuccessMessage('Thank you for reaching out! I will get back to you soon.');
    } catch (error) {
      console.error('FAILED...', error);
      setIsSubmitting(false);
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <section id="contact" className="relative bg-gradient-to-r from-gradientStart to-gradientEnd text-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div className="bg-white bg-opacity-10 p-8 rounded-3xl shadow-xl">
          <h2 className="text-4xl font-bold text-white mb-6">Contact Me</h2>
          <p className="text-gray-200 mb-8">
            Have a question, want to work together, or just want to say hi? Drop me a message and I&apos;ll get back to you as soon as possible!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                value={formData.name} 
                onChange={handleInputChange} 
                required 
                className="w-full p-4 text-black bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                value={formData.email} 
                onChange={handleInputChange} 
                required 
                className="w-full p-4 text-black bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="example@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
              <textarea 
                name="message" 
                id="message" 
                rows={4} 
                value={formData.message} 
                onChange={handleInputChange} 
                required 
                className="w-full p-4 text-black bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting} 
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-4 rounded-lg hover:shadow-lg transition-all"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {successMessage && (
              <p className="mt-4 text-center text-green-400">{successMessage}</p>
            )}

            {errorMessage && (
              <p className="mt-4 text-center text-red-400">{errorMessage}</p>
            )}
          </form>
        </div>

        <div className="flex flex-col justify-center items-center text-center space-y-6">
          <h2 className="text-4xl font-bold">Let&apos;s Connect</h2>
          <p className="text-gray-200">
            Feel free to reach out to me on any of these platforms. I&apos;d love to hear from you!
          </p>

          <div className="flex justify-center space-x-8 mt-8">
            <a 
              href="https://www.github.com/lucas-svi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white text-4xl hover:text-pink-400 transition-all"
            >
              <FaGithub />
            </a>

            <a 
              href="https://www.linkedin.com/in/lucas-svirsky-00a96922b/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white text-4xl hover:text-blue-400 transition-all"
            >
              <FaLinkedin />
            </a>

            <a 
              href="mailto:lsvirsky@wesleyan.edu" 
              className="text-white text-4xl hover:text-red-400 transition-all"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}