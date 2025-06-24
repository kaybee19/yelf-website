"use client"

import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline"

const contactInfo = [
  {
    id: 1,
    icon: <MapPinIcon className="h-6 w-6" />,
    title: "Address",
    content: "Suite 5 Maidabino Plaza, Wuse Zone 5, Abuja",
    color: "blue",
    href: "https://maps.google.com/?q=Suite+5+Maidabino+Plaza,+Wuse+Zone+5,+Abuja",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: 2,
    icon: <PhoneIcon className="h-6 w-6" />,
    title: "Phone",
    content: "+234 706 196 1066",
    color: "green",
    href: "tel:+2347061961066",
  },
  {
    id: 3,
    icon: <EnvelopeIcon className="h-6 w-6" />,
    title: "Email",
    content: "info@yelfclimatetrustfoundation.org",
    color: "purple",
    href: "mailto:info@yelfclimatetrustfoundation.org",
    target: "_blank",
    rel: "noopener noreferrer",
  },
]

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactInfo.map((info) => (
          <div key={info.id} className={`p-6 rounded-lg shadow-md bg-yellow-100 hover:bg-yellow-200 transition-colors cursor-pointer`}>
            <a 
              href={info.href}
              target={info.target}
              rel={info.rel}
              className="block"
            >
              <div className="flex items-center mb-4">
                {info.icon}
                <h2 className="text-xl font-semibold ml-2">{info.title}</h2>
              </div>
              <p className={`text-yellow-600`}>{info.content}</p>
            </a>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Send us a message</h2>
        <form 
          name="contact" 
          method="POST" 
          data-netlify="true"
          action="/success"
          className="max-w-lg mx-auto"
        >
          <input type="hidden" name="form-name" value="contact" />
          
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Message"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
