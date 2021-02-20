export const data = {
  firstSection: [
    {
      label: "name",
      type: "text",
    },
    {
      label: "position",
      type: "text",
    },
    {
      label: "organisation",
      type: "text",
    },
  ],

  selectBox: {
    selectId: "mobileNumber",
    noItems: [
      { itemName: "Afghanistan(+93)", itemValue: "Afghan" },
      { itemName: "Albania(+355)", itemValue: "albania" },
      { itemName: "Nigeria(+234)", itemValue: "nigeria" },
    ],
  },
  // selectBox:
  //     { items: jobItems, currentChoice: jobs, id: jobId },
};

const { firstSection, selectBox } = data;
const { selectId, noItems } = selectBox;
export { firstSection, selectId, noItems };
