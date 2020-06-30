# React Native with Smoothie

React Native 를 학습한 내용을 정리합니다. 
React Native를 활용해 만든 Counter app입니다.

![image](https://user-images.githubusercontent.com/60806840/86162068-325a3200-bb49-11ea-91ff-1ec745c8c005.png)


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