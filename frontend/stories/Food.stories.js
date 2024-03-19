import React from "react"
import Food from "../app/_components/Food"

export default {
  title: "Components/Food",
  component: Food,
}

const Template = (args) => <Food {...args} />

export const Default = Template.bind({})
Default.args = {
  name: "Tropical Acai Bowl",
  calories: 530,
  carbs: 90,
  fat: 20,
}
