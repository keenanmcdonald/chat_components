"use client"

import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts"

export default function Chart({ data, title, x_axis_label }) {
  return (
    <div className="text-center mt-4">
      <h2>{title}</h2>
      <LineChart
        width={400}
        height={300}
        data={data}
        className="mx-auto right-4"
      >
        <Line type="monotone" dataKey="steps" stroke="#0077B6" />
        <Line type="monotone" dataKey="calories" stroke="#82ca9d" />
        <Line type="monotone" dataKey="weight" stroke="#DA70D6" />
        <XAxis dataKey="x" label={x_axis_label} />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  )
}

function parseData(data) {
  return data.map((entry, index) => {
    return {
      x: index,
      steps: entry,
    }
  })
}
