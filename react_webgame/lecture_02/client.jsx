/*
    js vs jsx
    - js: 자바스크립트 파일
    - jsx: 자바스크립트 확장 파일

    babel 문법을 쓰면 jsx 확장자로 해주는 것이 좋다.
    리액트 전용파일이라는 것을 인지 가능하게 함.
*/

const React = require('react');
//const ReactDOM = require('react-dom');
const { createRoot } = require('react-dom/client'); // react 18


//const WordRelay = require('./WordRelayClass');
const WordRelay = require('./WordRelayHooks');

// react 18
const root = createRoot(document.getElementById('root'));
root.render(<WordRelay />);

// react 17
// ReactDOM.render(<WordRelay />, document.querySelector('#root'));