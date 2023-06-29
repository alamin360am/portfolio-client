import { useState } from "react";
import "./themes.css";
import { AiFillSetting, AiFillCloseCircle } from "react-icons/ai";
import setTheme from "./setTheme";

const ThemeMode = () => {
  const [condition, setCondition] = useState(true);
  const themeClick = () => {
    setCondition(!condition);
  };

  const theme1 = () =>{setTheme("blue")}

  const theme2 = () =>{setTheme("white")}

  const theme3 = () =>{setTheme("black")}

  return (
    <div className="theme">
      <div onClick={themeClick} className="theme-icon" title="Theme">
        {condition ? (
          <AiFillSetting className="ico"></AiFillSetting>
        ) : (
          <AiFillCloseCircle className="ico"></AiFillCloseCircle>
        )}
      </div>
      {condition ? (
        ""
      ) : (
        <div className="themes">
          <div onClick={theme1} className="theme-1"></div>
          <div onClick={theme2} className="theme-2"></div>
          <div onClick={theme3} className="theme-3"></div>
        </div>
      )}
    </div>
  );
};

export default ThemeMode;
