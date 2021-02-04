import useSlider from "../useSlider";
export const data = [
  {
    itemZero: {
      indexZero: 0,
      batchZero: [
        { img: "../../../coyLogos/bpl.webp", altText: "bpl" },
        { img: "../../../coyLogos/strategicOut.webp", altText: "strategicOut" },
        { img: "../../../coyLogos/ariosh.webp", altText: "ariosh" },
        { img: "../../../coyLogos/M.webp", altText: "M" },
        { img: "../../../coyLogos/ARM.webp", altText: "ARM" },
        { img: "../../../coyLogos/lawUnionRock.webp", altText: "LAW UNION" },
      ],
    },
  },
  {
    itemOne: {
      indexOne: 1,
      batchOne: [
        { img: "../../../coyLogos/MRP.webp", altText: "MRP" },
        { img: "../../../coyLogos/hardRock.webp", altText: "hardRock" },
        { img: "../../../coyLogos/verifyMe.webp", altText: "verifyMe" },
        { img: "../../../coyLogos/sterlingBank.webp", altText: "sterlingBank" },
        { img: "../../../coyLogos/green.webp", altText: "green" },
        { img: "../../../coyLogos/sterlingBank.webp", altText: "sterlingBank" },
      ],
    },
  },
  {
    itemTwo: {
      indexTwo: 2,
      batchTwo: [
        { img: "../../../coyLogos/AIICO.webp", altText: "AIICO" },
        { img: "../../../coyLogos/axa.webp", altText: "axa" },
        { img: "../../../coyLogos/BIOFEM.webp", altText: "BIOFEM" },
        {
          img: "../../../coyLogos/enterpriseHub.webp",
          altText: "enterpriseHub",
        },
        { img: "../../../coyLogos/db.webp", altText: "db" },
        { img: "../../../coyLogos/rockGardens.webp", altText: "rockGardens" },
      ],
    },
  },
];

// destructuring and exporting the needed parts
// const { itemZero, itemOne, itemTwo } = data;
// const { batchZero, indexZero } = itemZero;
// const { batchOne, indexOne } = itemOne;
// const { batchTwo, indexTwo } = itemTwo;

const getItems = (data) => {
  const { batchZero, indexZero } = data[0].itemZero;
  const { batchOne, indexOne } = data[1].itemOne;
  const { batchTwo, indexTwo } = data[2].itemTwo;
  return { batchZero, indexZero, batchOne, indexOne, batchTwo, indexTwo };
};

// const

export { getItems };
