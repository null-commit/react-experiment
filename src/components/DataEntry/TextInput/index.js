import React ,{ Component } from 'react';

import { StyleSheet } from '../../../../src';
import createDOMElement from '../../../../modules/createDOMElement';


class TextInput extends Component {
    static displayName = 'TextInput';

    static defaultProps = {
        multiline:false,
        onChange:()=>{},
        onChangeText:()=>{},
        pattern: undefined
    }

    _customEvent = {
        onChange:true,
        onChangeText:true,
    }

    render(){
        console.log('textinput--------------->',this.porps);
        const {
            multiline,
        } = this.props;

        const component = multiline === true ? 'textarea' :'input';
        const resolveProps = this._resolveProps(this.props);

        return createDOMElement(component, this.resolveProps);
    }

    //1.处理input事件
    _resolveProps = (props)=> {
        Object.keys(props).forEach(item=>{
            if(this._customEvent[item]){
                delete props.item
            }
        });
        console.log('处理后的inputprops-------------->',props);

        return props;
    }



}

module.exports = TextInput;