"use client"

import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

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
    content: "farooq@yelfclimatetrustfoundation.org",
    color: "purple",
    href: "mailto:farooq@yelfclimatetrustfoundation.org",
    target: "_blank",
    rel: "noopener noreferrer",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert("Please fill in all fields")
      return
    }

    if (!formData.email.includes("@")) {
      alert("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          "form-name": "contact",
          ...formData,
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
        alert("Thank you! Your message has been sent successfully.")
      } else {
        setSubmitStatus("error")
        alert("There was an error sending your message. Please try again.")
      }
    } catch (error) {
      setSubmitStatus("error")
      alert("There was an error sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto py-12">
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
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto"
        >
          {/* Netlify hidden inputs */}
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
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
              value={formData.email}
              onChange={handleInputChange}
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
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={5}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Message"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className={`font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                isSubmitting 
                  ? "bg-gray-400 cursor-not-allowed" 
                  : "bg-primary-500 hover:bg-primary-700"
              } text-white`}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
