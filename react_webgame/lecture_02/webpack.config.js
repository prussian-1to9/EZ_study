// node module requirement
const path = require('path');
const webpack = require('webpack');
const reactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development', // 실서비스: production
    devtool: 'eval', // '빠르게' 정도로만 알면 됨

    resolve: {
        extensions: ['.js', '.jsx'] // 여기 확장자를 기입하면 생략 가능
    },

    // 입출력 설정
    entry: {
        app: [ './client' ], // relsolve 설정으로 인해 확장자 생략 가능
    },
    module: {
        rules: [{
            test: /\.jsx?/, // regEx
            loader: 'babel-loader',
            options: {
                presets: [ // 설치한 @babel* 패키지들을 넣어준다.
                    ['@babel/preset-env', { // preset-env: 환경에 맞게 알아서 바꿔줌
                        targets: {
                            browsers: ['> 5% in KR']
                        }
                    }],
                    '@babel/preset-react' // preset-react: 리액트 코드를 바꿔줌
                ],
                plugins: ['react-refresh/babel'],
            }
        }],
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({ debug: true }),
        new reactRefreshWebpackPlugin(),
    ],

    output: {
        path: path.join(__dirname, 'dist'), // 현재 폴더 안에 있는 dist 폴더
        filename: 'app.js',
        publicPath: '/dist/',
    },

    // dev server 설정
    devServer: {
        devMiddleware: { publicPath: '/dist' },
        static: { directory: path.resolve(__dirname) },
        hot: true
    }
};