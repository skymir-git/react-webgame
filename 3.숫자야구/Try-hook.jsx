import React from 'react';

const Try = ({ info }) => {
    return (
        <li>
            <div>{info.try}</div>
            <div>{info.result}</div>
        </li>
    )

}

export default Try;