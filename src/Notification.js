import React, { Component } from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';

class Notification extends Component{
    
    constructor(props){
        super(props)

        this.state = {
            animation: ''
        }
    }
    // componentDidUpdate(){
    //     this.setState({
    //         animation: `${this.props.animation}In animated`
    //     })
    // }
    componentDidMount(){
        const { id, animation, time } = this.props;

        let el = findDOMNode(this);

        const clientHeight = el.clientHeight

        el.style.setProperty('height', '0px');

        setTimeout(() => {
            el.style.setProperty('height', (clientHeight + 20)+'px');
        }, 5)

        this.setState({
            animation: `${animation}In animated`
        })

        if(time){
            setTimeout(() => {
                this.removeIt(el)
            }, time)
        }
    }

    removeIt(el){
        const { id, animation, remove, space } = this.props;

        this.setState({
            animation: `${animation}Out animated`
        })

        let parentEl = findDOMNode(this)

        el.addEventListener('animationend', () => {
            parentEl.style.setProperty('height', '0px');
        })

        parentEl.addEventListener('transitionend', () => {
            remove(id)
        })
    }
    render(){
        const { id, message, type, remove } = this.props;


        return (
            <div className="rnfy-item-wrap">
                <div className={`rnfy-item ${type} ${this.state.animation}`} onClick={e => {
                    this.removeIt(e.currentTarget)
                }}>{message}</div>
            </div>
        )
    }
}


export default Notification;