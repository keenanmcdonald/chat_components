"use client"

export default function ConfirmButton({ text, onConfirm }) {
  return (
    <button
      onClick={onConfirm}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {text}
    </button>
  )
}
