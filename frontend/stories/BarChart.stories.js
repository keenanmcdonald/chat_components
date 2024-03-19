import React from "react"
import BarChart from "../app/_components/Chart"

export default {
  title: "Components/BarChart",
  component: BarChart,
}

const Template = (args) => <BarChart {...args} />

export const Default = Template.bind({})
Default.args = {
  title: "Steps by month",
  data: [
    { x: "Jan", steps: 4000, calories: 2400 },
    { x: "Feb", steps: 3000, calories: 1398 },
    { x: "Mar", steps: 2000, calories: 3200 },
    { x: "Apr", steps: 2780, calories: 3908 },
    { x: "May", steps: 1890, calories: 4800 },
    { x: "Jun", steps: 2390, calories: 3800 },
    { x: "Jul", steps: 3490, calories: 4300 },
    { x: "Aug", steps: 4000, calories: 2400 },
    { x: "Sep", steps: 3000, calories: 1398 },
    { x: "Oct", steps: 2000, calories: 3200 },
    { x: "Nov", steps: 2780, calories: 3908 },
    { x: "Dec", steps: 1890, calories: 4800 },
  ],
  x_axis_label: "month",
}
