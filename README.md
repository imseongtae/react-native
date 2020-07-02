# React Native with Smoothie

React Native 를 학습한 내용을 정리합니다. 

## ToDo App
Context API와 AsyncStorage를 활용한 ToDo List App입니다.

![image](https://user-images.githubusercontent.com/60806840/86366019-428f2000-bcb5-11ea-9a58-a2033e414200.png)

### 문제.1
TextInput 입력창이 화면 밑으로 내려가서 보이지 않는 문제가 생김  
그래서 컴포넌트의 bottom 값을 100px를 줌..! 보이지 않는 문제는 다소 나아졌지만..! 올바른 해결은 아니라고 생각됨

```js
const Container = Styled.KeyboardAvoidingView`
  position: absolute;
  top: 0;
  bottom: 100px;
  left: 0;
  right: 0;
  justify-content: center;
`;
```

### 문제.2
텍스트를 입력할 때마다 
글씨가 커졌다가 작아지는 축소확대 문제가 발생하는데 
왜 생기는 것인지.. 모르겠다..!

## npm setting

```bash
npm i --save @react-native-community/async-storage
```

### package 버전으로 인한 설정

```
npm audit --fix
```

### AsyncStorage를 사용할 준비

```cd
cd ios
pod install
```

## Context
