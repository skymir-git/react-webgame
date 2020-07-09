import React from 'react';
import Tr from "./Tr";

const Table = ({ onClickTable, tableData, dispatch }) => {
    return (
        <table onClick={onClickTable}>
            {Array(tableData.length).fill().map((tr, i) => (<Tr dispatch={dispatch} rowIndex={i} rowData={tableData[i]}/>))}
        </table>
    );
}

export default Table;