import { useCallback, useState } from "react";
import Box1 from "../components/Box1.jsx";
import Box2 from "../components/Box2.jsx";
import Box3 from "../components/Box3.jsx";

function ReactMemo() {
  console.log("reactMemo 렌더링됨");
  const [count, setCount] = useState(0);
  const handleOnClickPlus = () => {
    setCount(count + 1);
  };
  const handleOnClickMinus = () => {
    setCount(count - 1);
  };

  const initCount = useCallback(() => {
    setCount(0);
  }, [count]);

  return (
    <>
      <h2>useMemo</h2>
      <h4>카운트 예제</h4>
      <p>현재 카운트 : {count}</p>
      <button onClick={handleOnClickPlus}>+</button>
      <button onClick={handleOnClickMinus}>-</button>
      <div style={{ display: "flex", marginTop: "10px" }}>
        <Box1 initCount={initCount} />
        <Box2 />
        <Box3 />
      </div>
    </>
  );
}

export default ReactMemo;
