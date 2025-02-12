"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "your-email@example.com", // Replace with your email
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    })
    return { success: true }
  } catch (error) {
    console.error(error)
    return { success: false }
  }
}

