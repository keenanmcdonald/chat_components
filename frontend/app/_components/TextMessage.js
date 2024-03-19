export default function UserMessage({ role, content }) {
  return (
    <div className="flex justify-end">
      <div className="px-4 py-2 mr-2 my-2 rounded-lg bg-blue-500 ml-10">
        {content}
      </div>
    </div>
  )
}
