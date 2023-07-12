import { useState } from "react";

function EventComponentQ2() {
  const [form, setForm] = useState({ content: "", NewContent: "" });

  const handleChange = (e) => {
    // setForm({content: e.target.value, NewContent: form.newContent})
    const copy = { ...form, [e.target.name]: e.target.value };
    setForm(copy);
  };

  const handleClick = () => {
    // setForm({ content: "", NewContent: form.content });
    setForm({ ...form, content: "", NewContent: form.content });
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div>
      <h2>인풋데이터 핸들링 (실습)</h2>
      <p>
        클릭 시 데이터는 공백으로 결과를 인풋이 입력한 값으로 처리 <br />
        힌트는 state는 두 개가 필요
      </p>
      <input
        type="text"
        name="content"
        value={form.content}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
      <button onClick={handleClick}>추가하기</button>
      <h2>결과</h2>
      <p>{form.NewContent}</p>
    </div>
  );
}

export default EventComponentQ2;
