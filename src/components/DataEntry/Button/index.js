import React ,{ Component }from 'react';

import { View, StyleSheet,Platform } from '../../../../src';


console.log('Platform.OS------------>',Platform.OS);

class Button extends Component {
    static displayName='Button';

    _onMouseDown = ()=>{
        console.log('点击------------->',this._onMouseDown);
    }

    render() {
        const {
            onPress,
            disabled=false,
            ...other,
        } = this.props;

        console.log('button----------------->',this);

        return(
            <View 
                onPress={onPress}
                style={[ 
                    styles.root, 
                    disabled && styles.actionable, 
                    this.props.style,
                    disabled && styles.buttonDisabled, 
                ]}
            >
                {this.props.children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root: {
      transitionProperty: 'opacity',
      transitionDuration: '0.15s',
      userSelect: 'none'//用户不能选择文字
    },
    actionable: {
        cursor: 'pointer',
        touchAction: 'manipulate'
    },
    buttonDisabled: {
        backgroundColor: '#dfdfdf'
    },
});

module.exports = Button;