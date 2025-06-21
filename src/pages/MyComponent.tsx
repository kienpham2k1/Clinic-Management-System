import { useState } from "react";

export default function MyComponent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    document.getElementById('counter')!.innerText = String(count + 1);
    setCount(count + 1);
  };

  return (
    <>
      <div id="counter">{count}</div>
      <button onClick={handleClick}>Update</button>
    </>
  );
}
