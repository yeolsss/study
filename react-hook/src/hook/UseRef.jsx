import { useEffect, useRef } from "react";

function UseRef() {
  const idRef = useRef(null);
  useEffect(() => {
    idRef.current.focus();
  }, []);
  return (
    <>
      <div>
        아이디: <input type="text" ref={idRef} />
      </div>
      <div>
        비밀번호: <input type="password" />
      </div>
    </>
  );
}

export default UseRef;
