import React from "react";
import MainBannerForm from "./MainBannerForm";
import { useJobs } from "./useJobs";
import { useGlobalContext } from "../context";

const FormMain = () => {
  const { onChange, selectBoxList, filterParameters } = useJobs();
  const { handleSearch } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(e, filterParameters);
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
