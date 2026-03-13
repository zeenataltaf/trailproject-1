import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {

  const { name, email, message } = await req.json()

  try {

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Contact Message",
      html: `
        <h2>Contact Form Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `
    })

    return NextResponse.json({ success: true })

  } catch (error) {

    console.error("Email Error:", error)

    return NextResponse.json({ success: false })

  }

}