import { useState, useEffect } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    console.log("mount");
    document.addEventListener("mousedown", incrementCount);
    return () => {
      console.log("unmount");
      document.removeEventListener("mousedown", incrementCount);
    };
  });
  //effect => state change => return => effect

  return (
    <div>
      <h3>{count}</h3>
    </div>
  );
}
