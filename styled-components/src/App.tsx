import styled from 'styled-components';

function App() {
  const colorArr = ['red', 'blue', 'black'];

  return (
    <StContainer>
      {colorArr.map((color, index) => (
        <StBox key={index} $borderColor={color}>
          <p>박스</p>
        </StBox>
      ))}
    </StContainer>
  );
}

const StContainer = styled.section`
  display: flex;
`;
const StBox = styled.div<{ $borderColor: string }>`
  width: 100px;
  height: 100px;
  border: 1px solid ${(props) => props.$borderColor};
  margin: 20px;

  > p {
    color: blue;
  }
`;
export default App;
