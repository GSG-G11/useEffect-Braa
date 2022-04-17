import { useState, useEffect } from "react";

export default function MouseMove() {
  const [color, setColor] = useState({ x: 0, y: 0 });
  const [background,setbackground] = useState('white')

  useEffect(() => {
    document.addEventListener("mousemove", handleChange);
    return () => {
      document.removeEventListener("mousemove", handleChange);
    };
  });

  const handleChange = (e) => {
      console.log(e.clientX)
    const screenW = window.innerWidth / 2;
    if (color.x > screenW) {
      setbackground("tomato")
    } else {
      setbackground("blue")
    }
    setColor({ x: e.clientX, y: e.clienty });
  };

  return (
    <div style={{ textAlign: 'center', background:background }} > 
      x={color.x}, y={color.y}
    </div>
  );
}
