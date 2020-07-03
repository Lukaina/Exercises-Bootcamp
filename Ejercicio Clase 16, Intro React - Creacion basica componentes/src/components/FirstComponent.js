import React from 'react';

class FirstComponent extends React.Component{
    constructor(){
        super()
        this.state={
            number: 1
        }
    }
    render(){
        return(
        <div>
            <h1>😊 This is my first component in React. 👍</h1>
            <h2>{this.props.name} {this.state.number}</h2>
            <button onClick={() => {
                this.setState({number:this.state.number+1})
            }}>¡CLICK ME!</button>
        </div>
        );
    }

}

export default FirstComponent;