import React from "react";
import "./ComputerIcon.css";

function ComputerIcon() {
  return (
    <svg
      className="computer-icon"
      width="50" height="50"
      viewBox="0 0 32 32" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="4" width="24" height="16" fill="#4A90E2" stroke="black" strokeWidth="2"/>
      
      <rect x="6" y="6" width="20" height="12" fill="black"/>

      <rect className="pixel" x="8" y="8" width="2" height="2" fill="white"/>
      <rect className="pixel" x="12" y="10" width="2" height="2" fill="white"/>
      <rect className="pixel" x="16" y="8" width="2" height="2" fill="white"/>
      <rect className="pixel" x="20" y="12" width="2" height="2" fill="white"/>
      <rect className="pixel" x="22" y="8" width="2" height="2" fill="white"/>

      <rect x="10" y="22" width="12" height="2" fill="gray"/>
      <rect x="14" y="18" width="4" height="4" fill="gray"/>
    </svg>
  );
}

export default ComputerIcon;
