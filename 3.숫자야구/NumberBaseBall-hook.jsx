import React, { useState } from 'react';
import Try from "./Try-hook";

function getNumbers() { // 숫자 4개, 겹치지 않게
    const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i = 0; i < 4; i += 1) {
        const choice = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(choice)
    }

    return array;
}


const NumberBaseBall = () => {
    const [result, setResult] = useState('');
    const [value, setValue] = useState('');
    const [answer, setAnswer] = useState(getNumbers());
    const [tries, setTries] = useState([]);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (value === answer.join('')) {
            setResult('홈런!');
            setTries((prevTries) => {
                return [...prevTries, {try: value, result: '홈런!'}]
            })
            alert('게임을 다시 시작합니다!')
            setValue('');
            setAnswer(getNumbers());
            setTries([]);
        } else {
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (tries.length >= 9) {
                setResult(`최대 시도 횟수를 초과 하셨습니다!<br>정답은 ${answer.join(',')}였습니다.`);
                alert('게임을 다시 시작합니다!')
                setValue('');
                setAnswer(getNumbers());
                setTries([]);
            } else {
                for (let i = 0; i < 4; i += 1) {
                    if (answerArray[i] === answer[i]) {
                        strike += 1;
                    } else if (answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                setTries((prevTries) => {
                    return [...prevTries, {try: value, result: `${strike} 스트라이크, ${ball}볼 입니다.`}]
                })
                setValue('');
            }
        }
    }

    const onChangeInput = (e) => {
        console.log(answer);
        setValue(e.target.value);
    }

    return (
        <>
            <h1>{result}</h1>
            <form onSubmit={onSubmitForm}>
                <input type="text" maxLength={4} value={value} onChange={onChangeInput}/>
            </form>
            <div>시도 : {tries.length}</div>
            <ul>
                {tries.map((v, i) => {
                    return (
                        <Try key={`${v.try} + ${i + 1}`} info={v}/>
                    )
                })}
            </ul>
        </>
    )
}

export default NumberBaseBall;