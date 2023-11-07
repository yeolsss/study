import React from "react";

function Box1({ initCount }) {
  const style = {
    width: "100px",
    height: "100px",
    background: "#01c49f",
    color: "white",
  };
  console.log("box1 컴포넌트가 렌더링됨");
  return (
    <div style={style}>
      <button onClick={initCount}>초기화</button>
    </div>
  );
}

export default React.memo(Box1);
