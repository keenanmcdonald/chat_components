import Food from "./_components/Food"
import Chart from "./_components/Chart"

export const componentMap = {
  food: {
    element: Food,
    description:
      "A representation of a food item. Allows the user to log the food to their diary or add it to their saved meals.",
    schema: {
      name: { type: "string", description: "The name of the food item." },
      calories: {
        type: "number",
        description: "The number of calories in the food item.",
      },
      carbs: {
        type: "number",
        description: "The number of grams of carbs in the food item.",
      },
      fat: {
        type: "number",
        description: "The number of grams of fat in the food item.",
      },
    },
  },
  chart: {
    element: Chart,
    description: "A chart that displays some data.",
    schema: {
      title: { type: "string", description: "The title of the chart." },
      data: {
        type: "array",
        description: "The data to be displayed on the chart.",
        items: {
          type: "object",
          properties: {
            x: {
              type: "string",
              description: "Value on the x axis for a given point.",
            },
          },
          required: ["x"],
          additionalProperties: {
            type: "number",
            description: "A value for the y axis for a given point.",
          },
          examples: [{ x: "Jan", steps: 4000, calories: 2400 }],
        },
      },
      x_axis_label: {
        type: "string",
        description: "The label for the x axis.",
      },
      required: ["title", "data"],
    },
  },
}
