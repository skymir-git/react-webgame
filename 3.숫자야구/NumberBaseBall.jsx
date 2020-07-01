const React = require('react');
const { Component, PureComponent } = React;

class NumberBaseBall extends PureComponent /*Component*/ {
    state = {
        text: 'React Class!',
        value: '',
        result: '',
    };

    // PureComponent 자동 처리
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.state.value !== nextState.value;
    }

    onSubmitForm = (e) => {
        e.preventDefault()
    }

    onChange = (e) => {
        e.preventDefault();
    }

    input;

    onRefInput = (c) => {
        this.input = c;
    }

    render() {
        return (
            <>
                <div>{this.state.text}</div>
                <form onSubmit={this.onSubmitForm}>
                    <input ref={this.onRefInput} value={this.state.value} onChange={this.onChange}/>
                </form>
                <div>{this.state.result}</div>
            </>
        )
    }
}

module.exports = NumberBaseBall;