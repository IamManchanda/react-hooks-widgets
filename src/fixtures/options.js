import { v4 as uuidv4 } from "uuid";

const options = [
  {
    id: uuidv4(),
    label: "Dynamic Color Red",
    value: "red",
  },
  {
    id: uuidv4(),
    label: "The Tinge of Green",
    value: "green",
  },
  {
    id: uuidv4(),
    label: "A Shade of Blue",
    value: "blue",
  },
];

export default options;
