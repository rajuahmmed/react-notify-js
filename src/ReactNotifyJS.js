import React, { Component } from 'react';
import PropTypes from 'prop-types';
import notifications from './notifications';
import NotificationContainer from './NotificationContainer';

class ReactNotifyJS extends Component{
    constructor(props){
        super(props)

        this.notifications = new notifications;
        this.addItemsToState = this.addItemsToState.bind(this)
        this.removeNotification = this.removeNotification.bind(this)

        this.state = {
            items: this.notifications.items
        }
    }
    componentDidMount(){
        this.notifications.on('change', this.addItemsToState)
    }
    addItemsToState(){
        this.setState({
            items: this.notifications.items
        })
    }
    renderNotifyContainer(){

        let items = Object.keys(this.state.items);

        return(
            <div className="rnfy-items" >
                {
                    items.map((item, index) => {
                        let notification = this.state.items[item]
                        return(
                            <Notification  key={item} id={item} {...notification} remove={this.removeNotification} setHeight={this.setHeight} />
                        )
                    })
                }
            </div>
        )
    }
    removeNotification(id){
        this.notifications.remove(id)
    }
    getChildContext() {
        return {notify: {
            add: this.notifications.add.bind(this.notifications),
            remove: this.notifications.remove.bind(this.notifications)
        }};
    }
    render(){
        
        return[
            this.props.children,
            <NotificationContainer key="notify-1" remove={this.removeNotification} items={this.state.items} />
        ]
    }
}


ReactNotifyJS.childContextTypes = {
    notify: PropTypes.object
};



export default ReactNotifyJS;