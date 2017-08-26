import React ,{ Component }from 'react';
import { StyleSheet,View } from '../../../index.js';

import createDOMElement from '../../../../modules/createDOMElement';

class Modal extends Component {
    static displayName='Modal';

    static defaultProps = {
        visible:false,
        transparent:false,
        animationType:'none',
        onRequestClose:()=>{}
    }

    render(){
        const {
            visible,
            transparent,
            animationType,
            onRequestClose,
            children
        } = this.props;

        const modalStyle = {
            display: visible ? 'block':'none',
        }

        return(
            <View style={[styles.container ,modalStyle]}>
                {children}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        position:'absolute',
        left:0,
        right:0,
        bottom:0,
        top:0,
        backgroundColor:'black',
    }
})

module.exports = Modal;