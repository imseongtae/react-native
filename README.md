# React Native with Smoothie

React Native 를 학습한 내용을 정리합니다. 

## npm setting

```bash
npm i --save styled-components
npm i --save-dev typescript @types/react @types/react-native @types/styled-components babel-plugin-root-import
```



## tsconfig.json 파일에 내용 추가

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
    "target": "esnext",
    "baseUrl": "./src",
    "paths": {
      "~/*": ["*"]
    },
  },
  "exclude": ["node_modules", "babel.config.js", "metro.config.js", "jest.config.js"]
}
```

## babel.config.js
babel.config.js 수정

```js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    ],
  ],
};
```


## 절대 경로로 수정

```js
import App from './App';
import App from '~/App';
```