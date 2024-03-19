"use client"

import { useState } from "react"
import LoadingSpinner from "./LoadingSpinner"

export default function AddFoodButton({ ...props }) {
  const [confirmed, setConfirmed] = useState(false)

  const onClick = () => {
    setConfirmed((prev) => !prev)
  }

  return (
    <button onClick={onClick} {...props}>
      {confirmed ? <CheckIcon /> : <PlusIcon />}
    </button>
  )
}

function PlusIcon() {
  return (
    <svg
      x="0px"
      y="0px"
      width="24"
      viewBox="0 0 30 30"
      style={{ fill: "#FFFFFF" }}
    >
      <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M21,16h-5v5 c0,0.553-0.448,1-1,1s-1-0.447-1-1v-5H9c-0.552,0-1-0.447-1-1s0.448-1,1-1h5V9c0-0.553,0.448-1,1-1s1,0.447,1,1v5h5 c0.552,0,1,0.447,1,1S21.552,16,21,16z"></path>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 64 64"
      aria-hidden="true"
      role="img"
      class="iconify iconify--emojione"
      preserveAspectRatio="xMidYMid meet"
    >
      <circle cx="32" cy="32" r="30" fill="#4bd37b"></circle>
      <path
        fill="#ffffff"
        d="M46 14L25 35.6l-7-7.2l-7 7.2L25 50l28-28.8z"
      ></path>
    </svg>
  )
}
