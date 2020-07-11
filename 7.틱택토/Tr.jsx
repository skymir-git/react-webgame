import React from 'react';
import Td from "./Td";

const Tr = ({ rowData, rowIndex, dispatch }) => {
    return (
        <tr>
            {Array(rowData.length).fill().map((td, i) => (
                <Td key={'Td' + i} dispatch={dispatch} rowIndex={rowIndex} cellIndex={i} cellData={rowData[i]}/>
            ))}
        </tr>
    );
}

export default Tr;