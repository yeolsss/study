// GF -> Child에게 어떤 정보를 알려주고 Child가 그 내용을 출력한다.
import Father from "./Father.jsx";
import { FamilyContext } from "../context/FamilyContext.js";

function GrandFather() {
  const houseName = "스파르타";
  const pocketMoney = 10000;

  return (
    <div>
      <h2>GrandFather</h2>
      <FamilyContext.Provider
        value={{
          houseName,
          pocketMoney,
        }}
      >
        <Father />
      </FamilyContext.Provider>
    </div>
  );
}

export default GrandFather;
