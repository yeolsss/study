import { useEffect, useState } from "react";

function UseEffect() {
  const [value, setValue] = useState("");
  useEffect(() => {
    console.log(`hello useEffect: ${value}`);

    // clean up (컴포넌트가 사라질떄 실행)
    return () => {
      console.log("useEffect clean Up");
    };
  }, [value]);
  return (
    <>
      <div>
        <hr />
        <h1>useEffect</h1>
        <div>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default UseEffect;
