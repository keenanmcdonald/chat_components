"use client"

import React, { useState, useRef } from "react"
import { submitMessage } from "./_server-actions"
import LoadingSpinner from "./_components/LoadingSpinner"
import Message from "./_components/Message"

//TODO: The CLIENT should tell the BACKEND what UI components are available and what data they require

export default function Home() {
  const [history, setHistory] = useState([])
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSendMessage = async (e, message) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")
    const prevHistory = history
    setHistory((prev) => [...prev, { role: "user", content: message }])
    try {
      const output = await submitMessage([
        ...prevHistory,
        { role: "user", content: message },
      ])
      setHistory((prev) => [...prev, { role: "assistant", content: output }])
    } catch (error) {
      console.log(error)
      setHistory((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, something went wrong" },
      ])
    }
    setLoading(false)
    scrollToBottom
  }

  return (
    <div className="flex flex-col justify-between h-screen bg-gray-900 text-white max-w-lg mx-auto">
      <div className="overflow-y-scroll flex-grow">
        {history.map((message, index) => (
          <Message key={index} {...message} />
        ))}
        {loading && <LoadingSpinner />}
        <div ref={messagesEndRef} />
      </div>
      <form
        className="flex items-center justify-between p-4"
        onSubmit={(e) => handleSendMessage(e, message)}
      >
        <input
          type="text"
          placeholder="Type a message"
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="ml-4 px-4 py-2 rounded-lg bg-blue-500 text-white focus:outline-none"
        >
          Send
        </button>
      </form>
    </div>
  )
}
