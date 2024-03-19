"use server"
import { componentMap } from "./_helpers"

const components = Object.entries(componentMap).map(([key, value]) => ({
  name: key,
  description: value.description,
  schema: value.props,
}))

export async function submitMessage(history) {
  const response = await fetch(`${process.env.API_URL}/chat`, {
    method: "POST",
    body: JSON.stringify({ history, components }),
    headers: {
      "Content-Type": "application/json",
    },
  })
  const data = await response.json()

  return data
}
