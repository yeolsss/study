import React from "react";

function Box3() {
  console.log("box3 컴포넌트가 렌더링됨");
  const style = {
    width: "100px",
    height: "100px",
    background: "black",
    color: "white",
  };
  return <div style={style}>Box3</div>;
}

export default React.memo(Box3);
