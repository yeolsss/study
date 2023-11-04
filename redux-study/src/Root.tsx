import React from "react";
import { Outlet } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { selectTheme } from "./reducers/ThemeReducer";
import { useSelector } from "react-redux";
import { GlobalStyle } from "./styles/GlobalStyle";

const Container = styled.div`
  max-width: 100rem;
  min-width: 60rem;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
`;

function Root() {
  const theme = useSelector(selectTheme);
  return (
    <>
      <ThemeProvider theme={theme ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Container>
          <Outlet />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Root;
