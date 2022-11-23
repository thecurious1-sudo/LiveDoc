import Classes from './TripleDots.module.css';
import React from "react";
function ThreeDots() {
  return (
      <div className={Classes.dots}>
        <div className={Classes.dot}></div>
        <div className={Classes.dot}></div>
      </div>
  );
}

export default ThreeDots;