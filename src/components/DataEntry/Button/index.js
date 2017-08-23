import React ,{ Component }from 'react';

import { TouchableOpacity, StyleSheet } from '../../../../src';

class Button extends Component {
    static displayName='Button';

    render() {
        const {
            title,
            disabled=false,
            onPress,
            ...other,
        } = this.props;
        
        return(
            <TouchableOpacity style={styles.button} onPress={onPress && onPress()}>
                {title}
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#17BF63',
        color:'#fff',
        width:120,
        height:30,
        alignItems:'center',
        justifyContent:'center'
    }
})

module.exports = Button;