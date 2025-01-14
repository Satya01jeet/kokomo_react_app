import React, { useState, useEffect } from 'react'
import { wanderlust, giddy_up } from '../assets/images';
import ScrollReveal from 'scrollreveal';
import ReCAPTCHA from 'react-google-recaptcha';
import { useLocation } from 'react-router-dom';
import Testimonial from '../components/TestimonialsSection';

const Contact = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [help, setHelp] = useState('I Want to Join the Yacht Club');
  const [message, setMessage] = useState('');

  const location = useLocation();

  useEffect(() => {
    // Restore scroll position
    const storedScrollPosition = sessionStorage.getItem(location.pathname);
    if (storedScrollPosition) {
      window.scrollTo(0, parseInt(storedScrollPosition, 10));
    } else {
      window.scrollTo(0, 0);
    }

    return () => {
      sessionStorage.setItem(location.pathname, window.scrollY);
    };
  }, [location]);

  useEffect(() => {
    const sr = ScrollReveal({
      opacity: 0,
      duration: 1000,
      distance: '0px',
      scale: 1,
      easing: 'ease-in-out',
      reset: false
    });

    sr.reveal('.fade-in', {
      interval: 200
    });

    return () => sr.destroy();
  }, []);

  const handleCaptcha = () => {
    setIsVerified(true);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!isVerified) {
    //   alert("Please verify that you are not a robot!");
    //   return;
    // }

    if (phone.length != 10) {
      alert(`Please enter 10 digits mobile number!`);
    } else if (!(validateEmail(email))) {
      alert(`Please enter a valid email!`);
    } else {
      try {
        const response = await fetch('http://3.27.181.229/vistors/add-visitor', {
          method: 'POST',
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            visitor_name: name,
            phone_no: phone,
            req_help: help,
            ques: message,
          }),
        });

        if (!response.ok) {
          throw new Error('Error submitting form');
        }

        console.log('Form submitted successfully!');
        setName('');
        setPhone('');
        setEmail('');
        setHelp('I Want to Join the Yacht Club');
        setMessage('');
        setIsVerified(false);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className='space-y-16'>
      {/* Hero Section */}
      <div
        className="fade-in relative w-full bg-cover bg-center py-16"
        style={{
          backgroundImage: `url(${wanderlust})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-midnightblue to-transparent"></div>
        <div className='z-10 px-6 md:px-20'>
          <p className='text-3xl md:text-5xl text-white text-center md:text-left drop-shadow-md'>
            Contact Us
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className='flex flex-col md:flex-row space-y-6'>
        {/* Image */}
        <div className='md:w-1/2 flex justify-center items-center'>
          <img src={giddy_up} className='xl:w-[600px] w-[350px] rounded-lg' alt="" />
        </div>
        {/* Content */}
        <div className='md:w-1/2 flex flex-col px-6 space-y-4'>
          <p className='text-2xl md:text-4xl text-midnightblue'>Contact Us</p>
          <div className="flex justify-start">
            <div className="w-3 rounded-full mr-2 bg-blue-500"></div>
            <p>
              If you have questions or would like to apply for a yacht club membership, fill out this form and we'll reach out to you soon.
            </p>
          </div>

          {/* Form Section */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Name"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Phone"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Email"
                />
              </div>

              {/* Dropdown - How Can We Help? */}
              <div className="space-y-2 relative">
                <label htmlFor="help" className="block text-sm font-medium text-gray-700">
                  How Can We Help?
                </label>
                <select
                  id="help"
                  name="help"
                  required
                  value={help}
                  onChange={(e) => setHelp(e.target.value)}
                  className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-midnightblue/80 w-full"
                >
                  <option value="I Want to Join the Yacht Club">I Want to Join the Yacht Club</option>
                  <option value="I Have a Question">I Have a Question</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Anything to Add?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Message"
                ></textarea>
              </div>

              {/* reCAPTCHA */}
              <ReCAPTCHA
                sitekey="YOUR_SITE_KEY"
              // onChange={handleCaptcha}
              />

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white rounded-full py-2 font-semibold hover:bg-blue-700"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <Testimonial />
    </div>
  )
}

export default Contact;
