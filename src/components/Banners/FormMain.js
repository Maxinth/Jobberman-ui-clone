import React, { useState } from "react";
import MainBannerForm from "./MainBannerForm";
import { useJobs } from "./useJobs";

const FormMain = () => {
  const { onChange, selectBoxList } = useJobs();
  // state to get user's choice

  // const [choice, setChoice] = useState(selectBoxList);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(selectBoxList);

    const filterParameters = selectBoxList.map((item) => {
      return { id: item.id, choice: item.currentChoice };
    });

    console.log(filterParameters);
  };

  return (
    <MainBannerForm
      selectBoxList={selectBoxList}
      onChange={onChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default FormMain;
