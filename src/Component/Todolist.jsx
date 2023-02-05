import React, { useState } from "react";

export const Todolist = () => {
  const [data, setdata] = useState([]);
  const [text, setText] = useState("");

  const handleClick = () => {
    setdata([...data, text]);
    setText(" ");
  };

  const delet = (item) => {
    const filtered = data.filter((e) => e !== item);
    setdata([...filtered]);
  };
  return (
    <div style={{ backgroundColor: "skyblue" }}>
      <h1 style={{ backgroundColor: "chartreuse" }}> This is TODOLIST </h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
      {data.map((item) => {
        return (
          <div>
            <h1>{item}</h1>
            <button onClick={() => delet(item)}>delet</button>
          </div>
        );
      })}
    </div>
  );
};
export default Todolist;
