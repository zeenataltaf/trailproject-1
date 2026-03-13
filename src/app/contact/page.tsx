"use client"

import { useState } from "react"

export default function ContactPage() {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")
  const [status,setStatus] = useState("")

  async function handleSubmit(e: React.FormEvent) {

    e.preventDefault()

    const res = await fetch("/api/contact",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({name,email,message})
    })

    const data = await res.json()

    if(data.success){
      setStatus("Message Sent Successfully ✅")
      setName("")
      setEmail("")
      setMessage("")
    }else{
      setStatus("Something went wrong ❌")
    }

  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">

        <h1 className="text-2xl font-bold mb-6 text-center">
          Contact Us
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}

          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              required
              className="w-full border p-2 rounded mt-1"
            />
          </div>

          {/* Email */}

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
              className="w-full border p-2 rounded mt-1"
            />
          </div>

          {/* Message */}

          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              placeholder="Write your message..."
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
              required
              rows={4}
              className="w-full border p-2 rounded mt-1"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Send Message
          </button>

        </form>

        {status && (
          <p className="text-center mt-4 text-sm">
            {status}
          </p>
        )}

      </div>

    </div>

  )
}