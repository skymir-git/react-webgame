import React, { useState, useRef, useEffect, useCallback } from 'react';

const MineForm = () => {
    const [mine, setMine] = useState(10);
    const [row, setRow] = useState(10);
    const [cell, setCell] = useState(10);
    const target = useRef();

    const onChangeRow = () => {
        setRow(target.current);
    }

    const onChangeCell = () => {
        setCell(target.current);
    }

    const onChangeMine = () => {
        setMine(target.current);
    }

    const onClickBtn = () => {

    }

    useEffect(() => {

    }, []);

    useCallback(() => {

    }, []);

    return (
        <>
            <div>
                <input type="number" placeholder="세로" value={row} onChange={onChangeRow} />
                <input type="number" placeholder="가로" value={cell} onChange={onChangeCell} />
                <input type="number" placeholder="지뢰" value={mine} onChange={onChangeMine} />
                <button onClick={onClickBtn}>시작</button>
            </div>
        </>
    );
}

export default MineForm;