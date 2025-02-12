"use client"

import { useState } from "react"
import { useFormStatus } from "react-dom"
import { sendEmail } from "@/app/actions"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      disabled={pending}
    >
      {pending ? "Sending..." : "Send Message"}
    </button>
  )
}

export default function Contact() {
  const [message, setMessage] = useState("")

  async function handleSubmit(formData: FormData) {
    const result = await sendEmail(formData)
    if (result.success) {
      setMessage("Thank you for your message. We'll get back to you soon!")
    } else {
      setMessage("There was an error sending your message. Please try again.")
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <form action={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <SubmitButton />
        </form>
        {message && <p className="mt-4 text-center text-green-600">{message}</p>}
      </div>
    </section>
  )
}

