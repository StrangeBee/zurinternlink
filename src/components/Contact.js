import React from 'react'
import Footer from '../components/Footer.js';
import '../App.css'

export default function Contact() {
  return (
    <div>
      <form className="form-container">
        <div className="g-name">
          <label className="f-name" htmlFor="first_name">
            First name
            <input className="i-fname" id="first_name" type="text" placeholder="Enter your first name" required/>
          </label>

          <label className="block text-sm font-medium text-gray-700" htmlFor="last_name">
            Last name
            <input className="w-full px-3 py-2 mt-2 border rounded-md outline-none appearance-none focus:shadow-ring" id="last_name" type="text" placeholder="Enter your last name" required/>
          </label>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">
            Email
            <input className="w-full px-3 py-2 mt-2 border rounded-md outline-none appearance-none focus:shadow-ring" id="email" type="email" placeholder="yourname@email.com" required/>
          </label>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">
            Message
            <textarea className="w-full h-32 px-3 py-2 mt-2 border rounded-md outline-none appearance-none"  id="message" type="text" placeholder="Send me a message and I'll reply you as soon as possible..." />
          </label>
           <p className="text-[#F89687]">Please enter a message</p>
        </div>
        <div class="flex items-center mb-4">
          <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2" />
          <label for="default-checkbox" class="ml-4 text-sm font-medium text-gray-500">You agree to providing your data to Oduola Ebenezer who may contact you.</label>
        </div>
        <div className="flex items-center justify-between">
          <button className="w-full px-5 py-3 font-bold text-center text-white rounded-md bg-primary hover:bg-hover focus:outline-none focus:shadow-ring" type="submit" id="btn__submit">
            Send Message
          </button>
        </div>
      </form>


      <Footer />
    </div>
  )
}
