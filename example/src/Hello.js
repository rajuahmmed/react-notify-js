import React, { Component } from 'react';

import Button from './Button';
import ReactNotifyJS from '../../dist/index';

class Hello extends Component{

    render(){
        console.log(this);
        return(
            <ReactNotifyJS lol={this}>
                <div>
                    <h2>Hello</h2>
                    <Button />
                </div>
            </ReactNotifyJS>
        )
    }
}

export default Hello;