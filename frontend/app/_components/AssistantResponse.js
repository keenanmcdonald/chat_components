import TextMessage from "./TextMessage"
import { componentMap } from "../_helpers"

export default function AssistantResponse({ response }) {
  console.log(response)
  return (
    <div className="ml-2 p-4 rounded-lg bg-slate-800 mr-10">
      {response.map((message, index) => {
        if (message.type === "text") {
          return <p key={index}>{message.content}</p>
        } else if (componentMap.hasOwnProperty(message.type)) {
          const Component = componentMap[message.type]["element"]
          return <Component key={index} {...message.content} />
        }
      })}
    </div>
  )
}
