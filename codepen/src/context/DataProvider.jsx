import { createContext, useState } from "react";
const DataContext = createContext();
import useLocalStorage from "../Hooks/useLocalStorage";

 const DataProvider = ({children}) => {
  const [html, setHtml] = useLocalStorage('html',"");
  const [css, setCss] = useLocalStorage('css',"");
  const [js, setJs] = useLocalStorage('js',"");
  return (
    <DataContext.Provider
      value={{
        html,
        setHtml,
        css,
        setCss,
        js,
        setJs,
      }}
      
    >
        {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
export {DataContext};
