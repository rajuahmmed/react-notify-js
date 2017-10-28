import ReactNotifyJS from './ReactNotifyJS';
import PropTypes from 'prop-types';

export const connectRnfyJs = (component) => {
    if(component.contextTypes == undefined){
        component.contextTypes = {}
    }
    component.contextTypes.notify = PropTypes.object
    
    
    return component
}

export default ReactNotifyJS;