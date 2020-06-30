import React from 'react';
import styled from 'styled-components/native';
import {ThemeProvider} from 'styled-components';
import Theme from './Theme';

interface StyledProps {
  theme: ITheme;
}

// background-color: #f5fcff;
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props: StyledProps) =>
    // A 가 Truthy 한 값이라면, B 가 결과값
    props.theme && props.theme.color.yellow};
`;

const MainText = styled.Text`
  font-size: 20;
  text-align: center;
  margin: 10px;
  color: red;
`;

interface Props {}
const App = ({}: Props) => {
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <MainText>Hello world</MainText>
      </Container>
    </ThemeProvider>
  );
};

export default App;
