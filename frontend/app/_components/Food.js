import AddFoodButton from "./AddFoodButton"

export default function Food({ name, calories, carbs, fat }) {
  return (
    <div>
      <div className="inline-block backdrop-blur-md rounded-lg my-2 justify-between px-4 py-2 bg-opacity-10 bg-slate-400">
        <div className="flex flex-row items-center justify-between">
          <p className="font-bold">{name}</p>
          <AddFoodButton className="ml-6" />
        </div>
        <div className=" h-px w-full bg-white my-2" />
        <div className="flex flex-row items-center">
          <div className="justify-items-center text-center">
            <p className="text-sm text-blue-500">{calories}</p>
            <p className="text-sm font-thin">Cal</p>
          </div>
          <div className="ml-8 justify-items-center text-center">
            <p className="text-sm text-teal-500">{carbs}</p>
            <p className="text-sm font-thin">Carbs</p>
          </div>
          <div className="ml-8 justify-items-center text-center">
            <p className="text-sm text-purple-500">{fat}</p>
            <p className="text-sm font-thin">Fat</p>
          </div>
        </div>
      </div>
    </div>
  )
}
