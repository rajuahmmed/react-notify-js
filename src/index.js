import ReactNotifyJS from './ReactNotifyJS';
import PropTypes from 'prop-types';

export const connectRnfyJs = (ConnectComponent) => {
    if(ConnectComponent.contextTypes == undefined){
        ConnectComponent.contextTypes = {}
    }
    ConnectComponent.contextTypes.notify = PropTypes.object

    if(ConnectComponent.defaultProps == undefined){
        ConnectComponent.defaultProps = {}
    }

    ConnectComponent.defaultProps.addNotify =  ({ context: { notify: { add } } }, message) => {
        add(message)
    }
    
    
    return ConnectComponent
}

export default ReactNotifyJS;