const React = require('react');
const { useState, useRef } = React;

const WordRelay = () => {
    // state 설정
    const [ word, setWord ]      = useState('짜장면');
    const [ value, setValue ]   = useState('');
    const [ result, setResult ] = useState('');
    
    let input; // input element

    const onSubmitForm = (e) => {
        e.preventDefault();

        if (word[word.length - 1] === value[0]) {
            setResult('성공!');
            setWord(value);
            setValue('');
        } else {
            setResult('실패!');
            setValue('');
        }
        input.focus();
    };
    
    const inputEl = useRef(null);

    // currentTarget: 이벤트 리스너를 등록한 element
    // target       : 이벤트가 실제로 발생한 element
    return (
        <>
            <h3>{ word }</h3>
            <form onSubmit={ onSubmitForm }>
                <input value={ value }
                    ref={ inputEl }
                    onChange={ (e) => setValue(e.currentTarget.value) }></input>
                <button>입력</button>
            </form>
            <h3>{ result }</h3>
        </>
    )
}

module.exports = WordRelay;
