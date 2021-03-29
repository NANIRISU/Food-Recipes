import React,{useState} from 'react'
import {createGlobalStyle,ThemeProvider} from "theme-provider";
const ThemeMode = () => {
    const [theme, setTheme]=useState("light")

    const lightMode={
        body:"#fff",
        fontColor:"#000"
    };
     const darkMode={
        body:"#000",
        fontColor:"#fff",
    };

  const themeToggler=()=>{
    theme==="light"?setTheme("dark"):setTheme("light");
  }
    return (
        <div>
             <ThemeProvider theme={theme==="light" ?lightMode:darkMode}></ThemeProvider>
        </div>
    )
}

export default ThemeMode
