import React from "react"
import ConfirmButton from "../app/_components/ConfirmButton"

export default {
  title: "Components/ConfirmButton",
  component: ConfirmButton,
}

const Template = ({ onConfirm, text }) => (
  <ConfirmButton onConfirm={onConfirm}>{text}</ConfirmButton>
)

export const Default = Template.bind({})
Default.args = {
  text: "Confirm",
  onConfirm: () => alert("Confirmed!"),
}
