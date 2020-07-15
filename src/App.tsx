import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {ThemeProvider} from 'styled-components';
import Theme from './Theme';

import {Platform} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

import CurrentPosition from './Components/CurrentPosition';

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
  useEffect(() => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization('always');
    }
  }, []);
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <MainText>Hello world~</MainText>
        <CurrentPosition />
      </Container>
    </ThemeProvider>
  );
};

export default App;

// watchman watch-del-all;
// rm -rf $TMPDIR/react-native-packager-cache-;
// rm -rf $TMPDIR/metro-bundler-cache-;
// rm -rf node_modules/;
// npm cache clean --force;
// npm install;
// npm start
