import React, { Component } from 'react';

class Try extends Component{
    render() {
        const { info } = this.props;
        return (
            <li>
                <div>{info.try}</div>
                <div>{info.result}</div>
            </li>
        )
    }
}

export default Try;