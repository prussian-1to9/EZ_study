# 코드 작성 전 웹팩 설치 & 서버 설정

## package.json작성, react 설치
```shell
npm init # 명령어 입력 후 package.json 작성
npm i react react-dom # react, reactDOM 설치
```

## webpack 설치
```shell
npm i -D webpack webpack-cli # D : 개발용 옵션으로 설정
```
> - `npm fund` 명령어! **에러가 아니다!**
>     - 설치한 패키지들을 publish 한 기관에 후원을 할 수 있는 사이트를 알려준다.

## jsx, html 설정하기
- `client.jsx` 만들기 : 아래의 설정이 기본적으로 되어있어야 한다.
    ```jsx
    const React = require('react');
    const ReactDOM = require('react-dom');
    ```

- `index.html` 만들기
    ```html
    <html>
    <head>
    <meta charset="UTF-8"/>
    <title>끝말잇기</title>
    </head>
    <body>
        <div id="root"></div>
        <!-- React 기본 설정 방법 -->
        <script src="./dist/app.js"></script>
    </body>
    </html>
    ```
- `dist.js`로 묶어주는 것은 [webpack 설정해주기](#webpack-설정해주기)에서 다룬다.

## jsx 파일 작성하기
- jsx 파일 작성 : `myCompoent.jsx`이 있다고 했을 때, 아래의 코드를 추가해 준다.
    ```jsx
    // node의 module을 이용해 export 해준다.
    model.exports = myComponent; // 컴포넌트를 외부에서 사용할 수 있다.
    ```

- `client.jsx`에서 불러오기
    ```jsx
    const React = require('react');
    const RecatDOM = require('react-dom');

    const myComponent = require('myComponent.jsx_path');
    ```



## webpack 설정해주기
- 작성한 jsx 파일들을 `dist/app.js`로 묶어주는 것이 웹팩이다!
    ```jsx
    // node 설정이다.
    const path = require('path');

    module.exports = {
        name: 'my-application',
        mode: 'development', // 실 서비스 사용시엔 production으로 설정한다.
        devtool: 'eval',
        resolve: { // 확장자 생략을 위한 설정
            extensions: ['.js', '.jsx']
        },

        // 입출력을 설정해준다.
        entry: {
            app: [ 'client.jsx' ], // client에서 require 하기 때문에 별도의 jsx는 적지 않는다.
        },
        output: { // 파이썬 path와 비슷하다고 보면 된다.
            path: path.join(__dirname, 'dist'), // 현재 경로에 dist 디렉토리를 join
            filename: 'app.js', // app.js라는 파일로 export한다.
            publicPath: '/dist/'
        }
    };
    ```

> ### `path` vs `publicPath`
> - `path` : 실제 경로
> - `publicPath` : 일종의 **가상 경로**. node에서의 `express.static`과 비슷하다고 한다.

## 서버 실행
- 현재 작성된 `package.json`을 확인하고, script에 어떤 설정이 되어있는지 확인한다.
- `npm init`으로 작성한 `package.json` 중 일부:
    ```json
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    ```
    - `npm run`을 할 경우 해당 메세지가 출력된다.
    - webpack을 실행시키기 위해서 추가적으로 설정을 해주자.

- webpack 추가 설정하기
    ```json
    "scripts": {
        /* test 부분은 사용하지 않을 예정으로 제거해 주었다. */
        "dev": "webpack:"
    },
    ```
    - "test" 부분은 `npm init` 시 자동 설정된 값으로, 제거해 주었다.

- 서버 실행해 보기
    ```shell
    npm run dev
    ```
    - 사실 `npx webpack`으로도 똑같은 결과를 도출할 수 있긴 하다.

- 여기 까지 했다면 오류가 뜨는게 정상이다. **babel 설정을 안해주었기** 때문!

## babel 설정하기
- babel 설치
    ```shell
    npm i -D @babel/core @babel/preset-env @babel/preset-react #b # babel 설치해주기
    npm i -D babel-loader # 바벨-웹팩 연결
    ```

- `webpack.config.js` 에 `module`값 추가
    ```javascript
    // 입출력 설정
    entry: {
        app: [ './client' ], // relsolve 설정으로 인해 확장자 생략 가능
    },
    module: { // 여기에 작성한다
        rules: [{
            test: /\.jsx?/, // regEx : jsx 파일에 대한 적용임
            loader: 'babel-loader',
            options: {
                presets: [ // 설치한 @babel* 패키지들을 넣어준다.
                    '@babel/preset-env', // preset-env: 환경에 맞게 알아서 바꿔줌
                    '@babel/preset-react' // preset-react: 리액트 코드를 바꿔줌
                ]
            }
        }],
    },
    ```

- 다시 한번 서버를 실행했을 때, **정상출력 된다면 성공**!

***
# 웹팩 심화설정 해보기

## `@babel/presert-env`를 이용해보기
- 본 파일에서는 예시 중 `한국 점유율 5% 이상의 브라우저` 옵션만 적용한다.
    ```javascript
    module: {
        rules: [{
            test: /\.jsx?/, // regEx
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {// preset-env: 환경에 맞게 알아서 바꿔줌
                        targets: {
                            browsers: [
                                'last 2 chrome versions', // 크롬 최근 lastest 버전 2개
                                '> %5 in KR' // 한국에서 점유율 5% 이상인 브라우저면 지원
                            ],
                        }
                    }],
                    '@babel/preset-react' // preset-react: 리액트 코드를 바꿔줌
                ]
            }
        }],
    },
    ```
    - broswer 관련 명령어는 [여기](https://github.com/browserslist/browserslist?tab=readme-ov-file#queries)에서 확인 가능하다.

## 플러그인 설정해보기
- 디버깅을 위해 webpack 기본 디버그 플러그인을 설정해 주었다.
    ```javascript
    const webpack = require('webpack'); // 파일 상단

    plugins: [
        new webpack.LoaderOptionsPlugin({ debug: true })
    ],
    ```
- 이렇게 `new`로 **인스턴스**를 선언하여 **빠른 설정**을 해줄 수 있다.

> ### webpack 설정 더 알아보기
> - 설정할 수 있는 값은 많다! [공식 document](https://webpack.js.org/concepts/)에서 확인해 볼 수 있다.


## 프론트 dev 서버가 필요하다면...
- dev server 설정을 이용해 8080 포트로 서버를 돌릴 수 있다! (별도의 포트 지정도 가능)
- webpack dev server 다운로드
    ```shell
    npm i -D webpack-dev-server
    ```
    
- `package.json` 설정 변경 : `scripts.dev` 설정을 아래와 같이 변환해 준다.
    ```json
    "srcipts": {
        "dev": "webpack serve --env development",
    }
    ```
    - 이렇게 입력해줘야 **webpack dev 서버 실행 가능**.
    - 구 버전 : `webpack-dev-server --hot`

- `webpack.config.js` 설정 변경 : devServer 관련 설정을 기입해준다.
    ```javascript
    module.exports = {
        devServer: {
            devMiddleWare: { publicPath: '/dist' }, // 빌드 결과물 저장 디렉토리
            static: { directory: path.resolve(__dirname) }, // 빌드 대상 파일 경로
        }
    }
    ```
    - `devServer.publicPath` 는 이제 사용되지 않는다.

### hot reloading 설정하기
- `hot : true` 설정이 유효한 경우 어떤일이 일어날까?
    1. 수정된 부분 인식
    2. **수정된 부분만** 새로고침
    3. 에러 발생 시 콘솔에 바로 표시
    - hot reloading은 파일 **수정시 입력했던 데이터가 날라가지 않게** 하기 위해 사용한다.

- react refresh 설치 (dev server `3.*`, `4.*` 버전 지원으로 다운 그레이드 필요)
    ```shell
    npm uninstall -D webpack-dev-server # [필요시] dev server 삭제
    npm i -D react-refresh @pmmmwh/react-refresh-webpack-plugin
    npm i -D webpack-dev-server # [필요시] dev sevrer 재설치
    ```

- `webpack.config.js` 설정 추가
    - react refresh 플러그인 추가
        ```javascript
        // 최상단에 추가
        const reactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

        module.exports = {
            plugins: [ // 해당 부분에 추가
                new reactRefreshWebpackPlugin(),
            ]
        }
        ```

    -  babel-loader부분에도 플러그인 추가
        ```javascript
        module.exports = {
            module: {
                rules: [{
                    loader: 'babel-loader',
                    options: {
                        plugins: ['react-refresh/babel'],
                    }
                }]
            }
        }
        ```

    - dev server 설정해주기
        ```javascript
        module.exports = {
            devServer: {
                hot: true
            }
        }
        ```

***
# React DOM

## controlled input vs uncontrolled input
- 둘의 차이는 복잡해 보이나, [가이드](https://goshacmd.com/controlled-vs-uncontrolled-inputs-react/)를 게시한 블로그에 따르면 아래와 같다.
    |       |**uncontrolled ipnut**|**controlled ipnut**|
    |:-----------------------------------------:|:-:|:-:|
    | one-time value retrieval (e.g. on submit) | O | O |
    | validating on submit                      | O | O |
    | instant field validation                  | X | O |
    | conditionally  disablign submit button    | X | O |
    | enforcing input format                    | X | O |
    | several ipnuts for one piece of data      | X | O |
    | dynamic inputs                            | X | O |
     - 번역이 애매해 원어로 기재하였다.

- `eventListener`로 추가하는 함수에서 받는 **이벤트 파라미터** (주로 `e`)로 모든것이 해결된다면 uncontrolled input을 사용해도 상관 없으나
- 여러 활용을 위하여 controlled input이 권장되고 있다.
