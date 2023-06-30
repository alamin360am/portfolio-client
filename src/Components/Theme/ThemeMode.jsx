import { useState } from "react";
import "./themes.css";
import { AiFillSetting, AiFillCloseCircle } from "react-icons/ai";
import setTheme from "./setTheme";

const ThemeMode = () => {
  const [condition, setCondition] = useState(true);

  const theme1 = () =>{setTheme("blue")}

  const theme2 = () =>{setTheme("white")}

  const theme3 = () =>{setTheme("black")}

  const theme4 = () =>{setTheme("green")}

  return (
    <div className="theme">
      <div onClick={()=> setCondition(!condition)} className="theme-icon" title="Theme">
        {condition ? (
          <AiFillSetting className="ico"></AiFillSetting>
        ) : (
          <AiFillCloseCircle className="ico"></AiFillCloseCircle>
        )}
      </div>
        <div className={`themes ${condition? 'hide-modal': 'show-modal'}`}>
          <div onClick={theme1} className="theme-1"></div>
          <div onClick={theme2} className="theme-2"></div>
          <div onClick={theme3} className="theme-3"></div>
          <div onClick={theme4} className="theme-4"></div>
        </div>
    </div>
  );
};

export default ThemeMode;
