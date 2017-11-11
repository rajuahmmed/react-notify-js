import React, { Component } from 'react';
import { connectRnfyJs } from '../../dist/index';

var i = 0;

class Button extends Component{

    render(){

        const { addNotify } = this.props
        let types = ['default', 'success', 'primary', 'danger', 'warning']
        let animations = ['bounce', 'bounceDown', 'bounceUp']
        
        return(
            <button onClick={e => {
                let type = types[Math.floor(Math.random() * (4 + 1))]
                let animation = animations[Math.floor(Math.random() * (2 + 1))]
                addNotify(this, {
                    message: `Hello World! ${type} alert with ${animation} animation`,
                    type: type,
                    animation: animation,
                    time: 5000
                })
                i++
            }}>Add</button>
        )
    }
}

export default connectRnfyJs(Button);