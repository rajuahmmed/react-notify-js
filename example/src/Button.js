import React, { Component } from 'react';
import { connectRnfyJs } from '../../dist/index';

var i = 0;

class Button extends Component{

    render(){
        
        return(
            <button onClick={e => {
                this.context.notify.add({
                    message: "Hello World! "+i,
                    type: 'alert',
                    animation: 'bounceUp',
                    time: false
                })
                i++
            }}>Add</button>
        )
    }
}

export default connectRnfyJs(Button);