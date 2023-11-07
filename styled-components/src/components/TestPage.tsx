import styled from 'styled-components';

interface IProps {
  title: string;
  contents: string;
}

function TestPage({ title, contents }: IProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Contents>{contents}</Contents>
    </Wrapper>
  );
}

const Title = styled.h1`
  margin: 0 0 8px;
`;

const Contents = styled.p`
  margin: 0;
  font-size: 1rem;
`;

const Wrapper = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  padding: 20px;
  margin: 16px auto;
  max-width: 400px;
`;

export default TestPage;