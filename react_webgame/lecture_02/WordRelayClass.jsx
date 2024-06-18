const React = require('react');
const { Component } = React; // Compent 만 불러와준다.

// 클래스 방식으로 작성해 본다.
class WordRelay extends Component { // const Component 설정으로 축약 가능!
    state = {
        word: '짜장면', // 먹고싶다.
        value: '',
        result: '',
    };

    onSubmitForm = (e) => {
        // 페이지 리로드 방지
        e.preventDefault();

        // 기존 글자 마지막 vs 입력 글자 첫 글자 비교
        if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
            this.setState({
                result: '성공!',
                word: this.state.value,
                value: ''
            });
        } else {
            this.setState({
                result: '실패!',
                value: ''
            });
        }
        this.input.focus();
    };

    onChangeInput = (e) => {
        this.setState({ value: e.target.value });
    };
    input; // input element

    onRefInput = (c) => { this.input = c; };
    
    render() {
        return (
            <>
                <h3>{ this.state.word }</h3>
                <form onSubmit={ this.onSubmitForm }>
                    <input
                        ref={ this.onRefInput }
                        value={ this.state.value }
                        onChange={ this.onChangeInput }></input>
                    <button>입력</button>
                </form>
                <h3>{ this.state.result }</h3>
            </>
        );
    }
}

// node 의 모듈 시스템을 이용해 export
module.exports = WordRelay; // 다른 파일에서 사용 가능
