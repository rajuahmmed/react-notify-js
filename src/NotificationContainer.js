import React, { Component } from 'react';
import Notification from './Notification';

class NotificationContainer extends Component{
    render(){
        
        let items = Object.keys(this.props.items);

        return(
            <div className="rnfy-items" >
                {
                    items.map((item, index) => {
                        let notification = this.props.items[item]
                        return(
                            <Notification  key={item} id={item} {...notification} remove={this.props.remove} />
                        )
                    })
                }
            </div>
        )
    }
}

export default NotificationContainer