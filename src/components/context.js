import React, { useContext, createContext, useState } from "react";
import useJobFilter from "./JobsPagesComponents/useJobFilter";
import { useJobs } from "./Banners/useJobs";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  // destructuring need data from useJobFilter custom hook
  const {
    jobs,
    handleSearch,
    resetToInitialData,
    changePage,
    pageNo,
    data,
  } = useJobFilter();

  // destructuring need data from useJobs custom hook
  const { resetChoicesValues, choice, initialValues } = useJobs();

  // sidebar state
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const toggleSideBar = () => setIsSideBarOpen(!isSideBarOpen);

  return (
    <AppContext.Provider
      value={{
        isSideBarOpen,
        toggleSideBar,
        jobs,
        handleSearch,
        resetToInitialData,
        resetChoicesValues,
        choice,
        initialValues,
        changePage,
        pageNo,
        data,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

// custom hook to export data
export const useGlobalContext = () => {
  return useContext(AppContext);
};
