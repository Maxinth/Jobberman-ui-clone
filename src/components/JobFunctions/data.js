export const data = {
  firstBatch: [
    {
      text: "a",
      items: ["Accounting, Auditing & Finance", "Admin & Office"],
    },
    {
      text: "b",
      items: ["Building & Architecture"],
    },
    {
      text: "c",
      items: [
        "Community & Social Services",
        "Consulting & Strategy",
        "Creative & Design",
        "Customer Service & Support",
      ],
    },
  ],
  secondBatch: [
    {
      text: "d",
      items: ["Driver & Transport Services"],
    },
    {
      text: "e",
      items: [
        "Engineering & Technology",
        "Estate Agents & Property Management",
      ],
    },
    {
      text: "f",
      items: ["Farming & Agriculture", "Food Services & Catering"],
    },
    {
      text: "h",
      items: ["Health & Safety", "Hospitality & Leisure", "Human Resources"],
    },
  ],
  thirdBatch: [
    {
      text: "l",
      items: ["Legal Services"],
    },
    {
      text: "m",
      items: [
        "Management & Business Development",
        "Marketing & Communications",
        "Medical & Pharmaceutical",
      ],
    },
    {
      text: "p",
      items: ["Product & Project Management"],
    },
    {
      text: "q",
      items: ["Quality Control & Assurance"],
    },
  ],
  fourthBatch: [
    {
      text: "r",
      items: ["Research, Teaching & Training"],
    },
    {
      text: "s",
      items: ["Sales", "Software & Data", "Supply Chain & Procurement"],
    },
    {
      text: "t",
      items: ["Trades & Services"],
    },
  ],
};

const { firstBatch, secondBatch, thirdBatch, fourthBatch } = data;

// creating an array to be mapped
export const batches = [
  {
    id: 1,
    batch: firstBatch,
  },
  {
    id: 2,
    batch: secondBatch,
  },
  {
    id: 3,
    batch: thirdBatch,
  },
  {
    id: 4,
    batch: fourthBatch,
  },
];

// custom function to tweak the listing padding based on its letter.
export const checkItemName = (item) => {
  let value;
  let id = "";
  if (item === "e" || item === "f") {
    value = 1.15;
    id = "ef";
  }
  if (item === "c") value = 1.05;
  if (item === "d" || item === "h") value = 0.95;
  if (item === "l" || item === "t") value = 1.1;
  if (item === "m") value = 0.75;
  if (item === "p") value = 1.05;
  if (item === "q") value = 0.9;
  if (item === "s") {
    value = 1.15;
    id = "s";
  }
  if (item === "t") id = "t";
  // if ) value = 1.1;
  return { value, id };
};
