import React, { Component } from 'react';
import { connectRnfyJs } from '../../dist/index';

var i = 0;

class Button extends Component{

    render(){

        const { addNotify } = this.props
        
        return(
            <button onClick={e => {
                addNotify(this, {
                    message: "Hello World! "+i,
                    type: 'alert',
                    animation: 'bounce',
                    time: 5000
                })
                i++
            }}>Add</button>
        )
    }
}

export default connectRnfyJs(Button);