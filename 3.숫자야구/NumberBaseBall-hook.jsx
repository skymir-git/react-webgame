const React = require('react');
const { useState, useRef } = React;

const NumberBaseBall = () => {
    const [text, setText] = useState('React Hooks');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const InputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        setText('');
        InputRef.current.focus();
    }

    const onChange = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div>{text}</div>
            <form onSubmit={onSubmitForm}>
                <input type="text" ref={InputRef} value={value} onChange={onChange}/>
            </form>
            <div>{result}</div>
        </>
    )

}

module.exports = NumberBaseBall;