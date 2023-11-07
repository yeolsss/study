import { useContext } from "react";
import { FamilyContext } from "../context/FamilyContext.js";

function Child() {
  const data = useContext(FamilyContext);
  const style = {
    color: "red",
    fontWeight: "bold",
  };
  return (
    <div>
      <h4>Child</h4>
      나는 이 집안의 막내... <br />
      할아버지가 우리 집 이름을 <span style={style}>{data.houseName}</span>
      이라고 하셨슴돠. <br />
      용돈도 <span style={style}>{data.pocketMoney}</span>원 이나 주셨슴돠.
    </div>
  );
}

export default Child;
