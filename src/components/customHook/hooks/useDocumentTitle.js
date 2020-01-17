import { useEffect } from "react";

function useDocumentTitle(counter) {
  useEffect(() => {
    document.title = `Counter ${counter}`;
    return () => {
      document.title = "Counter 0";
    };
  }, [counter]);
}

export default useDocumentTitle;
