import { useEffect } from "react";
import './FloatingSquares.css'; 

function FloatingSquares() {
  useEffect(() => {
    const numSquares = 22;

    for (let i = 0; i < numSquares; i++) {
      const square = document.createElement("div");
      square.classList.add("floating-square");

      square.style.top = `${Math.random() * 100}vh`;
      square.style.left = `${Math.random() * 100}vw`;

      const size = Math.random() * 70 + 20;
      square.style.width = `${size}px`;
      square.style.height = `${size}px`;

      square.style.animationDuration = `${Math.random() * 5 + 5}s`;

      document.body.appendChild(square);
    }
  }, []);

  return null;
}

export default FloatingSquares;
