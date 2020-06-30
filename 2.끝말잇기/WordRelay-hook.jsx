const React = require('react')
const { useState, useRef } = React;

const WordRelay = () => {
    const [word, setWord] = useState('실시간');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const InputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (word[word.length -1] === value[0]) {
            setResult('정답!');
            setWord(value);
            setValue('');
            InputRef.current.focus();
        } else {
            setResult('땡!');
            setValue('');
            InputRef.current.focus();
        }
    }

    const onChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <>
            <div id="word">{word}</div>
            <label htmlFor="word">시작</label>
            <form onSubmit={onSubmitForm}>
                <label htmlFor="wordInput">글자를 입력하세요.</label>
                <input id="wordInput" className="wordInput" type="text" ref={InputRef} value={value} onChange={onChange}/>
                <button>확인!</button>
            </form>
            <div>{result}</div>
        </>
    )
}

module.exports = WordRelay;