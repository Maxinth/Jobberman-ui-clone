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
export { firstBatch, secondBatch, thirdBatch, fourthBatch };

export const checkItemName = (item) => {
  let value;
  if (item.text === "e" || item.text === "f") {
    value = 0.5;
  }
  // else{
  //   return;
  // }
  return value;
};
