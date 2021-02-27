import React from "react";
import MainBannerForm from "./MainBannerForm";
import { useJobs } from "./useJobs";

const FormMain = () => {
  const { onChange, selectBoxList } = useJobs();
  return <MainBannerForm selectBoxList={selectBoxList} onChange={onChange} />;
};

export default FormMain;
