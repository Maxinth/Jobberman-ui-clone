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

/*
custom function to export needed data elements 
used a function, because of  
const { items, index, setIndex } = useSlider(data, 6000);

where items =  data  but in order to track state need items needs to be destructured from items and 
not data.
*/
const getItems = (data) => {
  const { batchZero, indexZero } = data[0].itemZero;
  const { batchOne, indexOne } = data[1].itemOne;
  const { batchTwo, indexTwo } = data[2].itemTwo;
  return { batchZero, indexZero, batchOne, indexOne, batchTwo, indexTwo };
};

// const

export { getItems };
