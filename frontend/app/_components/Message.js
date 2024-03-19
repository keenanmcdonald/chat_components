import AssistantResponse from "./AssistantResponse"
import TextMessage from "./TextMessage"

export default function Message({ role, content }) {
  console.log({ role, content })
  const isUser = role === "user"
  return (
    <>
      {isUser ? (
        <TextMessage role={role} content={content} />
      ) : (
        <AssistantResponse response={content} />
      )}
    </>
  )
}
