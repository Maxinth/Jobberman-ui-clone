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
      { itemName: "", itemValue: "initial" },
      { itemName: "Afghanistan (+93)", itemValue: "Afghan" },
      { itemName: "Albania (+355)", itemValue: "albania" },
      { itemName: "Algeria (+213)", itemValue: "algeria" },
      { itemName: "American Samoa (+1)", itemValue: "samoa" },
      { itemName: "Andorra (+375)", itemValue: "andorra" },
      { itemName: "Angola (+244)", itemValue: "angola" },
      { itemName: "Anguila (+1)", itemValue: "anguila" },
      { itemName: "Antarctica (+0)", itemValue: "antarctica" },
      { itemName: "Argentina (+54)", itemValue: "messi" },
      { itemName: "Benin (+229)", itemValue: "benin" },
      { itemName: "Bolivia (+591)", itemValue: "bol" },
      { itemName: "Canada (+1)", itemValue: "canada" },
      { itemName: "Chad (+235)", itemValue: "chad" },
      { itemName: "Nigeria (+234)", itemValue: "nigeria" },
    ],
  },
  // selectBox:
  //     { items: jobItems, currentChoice: jobs, id: jobId },
};

const { firstSection, selectBox } = data;
const { selectId, noItems } = selectBox;
export { firstSection, selectId, noItems };
