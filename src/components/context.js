import React, { useContext, createContext, useState } from "react";
import useJobFilter from "./JobsPagesComponents/useJobFilter";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const { jobs, handleSearch } = useJobFilter();
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
