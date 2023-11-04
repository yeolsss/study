import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../reducers/ThemeReducer";

function Header() {
  const dispatch = useDispatch();

  const onClickThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <HeaderSection>
      <div>
        <h1>To Do</h1>
      </div>
      <div>
        <button onClick={onClickThemeToggle}>toggle</button>
      </div>
    </HeaderSection>
  );
}

const HeaderSection = styled.header`
  display: flex;
  justify-content: center;
  position: relative;
  margin: 10rem 0 5rem;
  > div h1 {
    font-size: 10rem;
    font-weight: bold;
  }
  > div:last-child {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export default Header;
