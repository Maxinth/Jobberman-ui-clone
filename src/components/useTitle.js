import { useEffect } from "react";

const useDocumentTitle = (title) => {
  return useEffect(() => {
    document.title = `${title} | JobberMan`;
  }, [title]);
};

export default useDocumentTitle;
