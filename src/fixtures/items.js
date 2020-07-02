import { v4 as uuidv4 } from "uuid";

const items = [
  {
    id: uuidv4(),
    title: "What is React?",
    content: "React is a frontend javascript framework.",
  },
  {
    id: uuidv4(),
    title: "Why use React?",
    content:
      "React is a popular javasccript library among engineers and developers.",
  },
  {
    id: uuidv4(),
    title: "How do you use React?",
    content: "You use React by creating components in yours apps.",
  },
];

export default items;
