# React Native with Smoothie

React Native 를 학습한 내용을 정리합니다. 

## hello world react-native

![image](https://user-images.githubusercontent.com/60806840/86027530-ca81e980-ba6b-11ea-892a-82104942f205.png)


## typescript에 필요한 프로젝트 생성

```bash
npm install typescript @types/react @types/react-native --save-dev
```


### tsconfig.json 만들기
root 폴더 레벨에 `tsconfig.json` 만들고 아래 내용 복사

```json
{
  "compilerOptions": {
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "jsx": "react",
    "lib": ["es6", "es2017"],
    "moduleResolution": "node",
    "noEmit": true,
    "strict": true,
    "target": "esnext"
  },
  "exclude": ["node_modules", "babel.config.js", "metro.config.js", "jest.config.js"]
}
```


## styled-components 라이브러리 설치

```bash
npm install --save styled-components
npm install --save-dev @types/styled-components babel-plugin-styled-components
```

### babel-plugin-styled-components
babel.config.js에 아래와 같이 설정하면 디버깅시 class명을 확인하기 쉽게 만들어 줌

```js
module.exports = {
  ...
  plugins: ['babel-plugin-styled-components'],
};
```