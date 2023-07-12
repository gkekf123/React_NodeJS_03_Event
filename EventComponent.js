import { useState } from "react";

function EventComponent() {
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const handleClick = () => {
    alert(`${name}님의 할일목록 ${topic}`);
    setName("");
    setTopic("");
  };

  return (
    <div>
      <h3>리액트의 이벤트 핸들링(인풋 태그의 change)</h3>
      <input type="text" onChange={handleChange} value={name} />
      변경 된 값 : {name}
      <br />
      <h3>리액트 이벤트(keyUp)</h3>
      <input
        type="text"
        onChange={(e) => setTopic(e.target.value)}
        onKeyUp={handleKeyUp}
        value={topic}
      />
      변경 된 값 : {topic}
      <br />
      <h3>리액트 이벤트(click)</h3>
      <button onClick={handleClick}>클릭me</button>
    </div>
  );
}

export default EventComponent;
