import TestPage from './components/TestPage.tsx';
import { GlobalStyle } from './components/GlobalStyle.tsx';

function App() {
  // const colorArr = ['red', 'blue', 'green', ''];
  //
  // const getBoxName = (color: string = 'black') => {
  //   switch (color) {
  //     case 'red':
  //       return '빨간 박스';
  //     case 'blue':
  //       return '파란 박스';
  //     case 'green':
  //       return '초록 박스';
  //     default:
  //       return '검은 박스';
  //   }
  // };

  return (
    /*<StContainer>
      {colorArr.map((color, index) => (
        <StBox key={index} $borderColor={color}>
          <p>{getBoxName(color)}</p>
        </StBox>
      ))}
    </StContainer>*/
    <>
      <GlobalStyle />
      <TestPage title={'제목입니다.'} contents={'내용입니다.'} />
    </>
  );
}

// const StContainer = styled.section`
//   display: flex;
// `;
// const StBox = styled.div<{ $borderColor: string }>`
//   width: 100px;
//   height: 100px;
//   border: 1px solid ${(props) => props.$borderColor};
//   margin: 20px;
//
//   > p {
//     color: blue;
//   }
// `;
export default App;
