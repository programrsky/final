import { useEffect, useState } from "react";

export default function Final() {
  let [color, setColor] = useState("red");
  useEffect(() => {}, []);
  const divStyle = {
    color: "blue",
    backgroundColor: { color },
  };
  return (
    <>
      <div className="">
        <input type="text" onChange={setColor} />
        <div style={divStyle}>Hello World!</div>
      </div>
    </>
  );
}
