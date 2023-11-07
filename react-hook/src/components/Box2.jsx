import React from "react";

function Box2() {
  console.log("box2 컴포넌트가 렌더링됨");
  const style = {
    width: "100px",
    height: "100px",
    background: "#4e9321",
    color: "white",
  };
  return <div style={style}>Box2</div>;
}

export default React.memo(Box2);
