import { useState } from "react";

function UseState() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <div>
        <h1>useState</h1>
        <div>Number State: {number}</div>
        <button
          onClick={() => {
            // 기본 업데이트
            // 3번 호출 했으니 +3이 될거같지만...
            // 1씩 증가되는걸 확인할 수 있다.
            // setNumber(number + 1);
            // setNumber(number + 1);
            // setNumber(number + 1);

            // 함수형 업데이트
            // 하지만 함수형 업데이트를 사용하면 내가 생각했던 +3이 되는걸 확인할 수 있다.
            setNumber((prevState) => prevState + 1);
            setNumber((prevState) => prevState + 1);
            setNumber((prevState) => prevState + 1);
          }}
        >
          UP!!!
        </button>
      </div>
    </>
  );
}

export default UseState;
