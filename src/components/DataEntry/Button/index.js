import React ,{ Component }from 'react';

import { View, StyleSheet } from '../../../../src';

class Button extends Component {
    static displayName='Button';

    _onMouseDown = ()=>{
        console.log('点击----_onMouseDown--------->');
    }
    _onMouseUp = ()=> {
        console.log('点击----_onMouseUp--------->');
    }

    _onTouchStart = ()=>{
        console.log('点击----_onTouchStart--------->');
    }
    _onTouchEnd = ()=>{
        console.log('点击----_onTouchEnd--------->');
    }

    render() {
        const {
            onPress,
            disabled=false,
            ...other,
        } = this.props;

        // console.log('button----------------->',this);

        return(
            <View 
                onPress={onPress}
                onMouseDown={this._onMouseDown}
                onMouseUp={this._onMouseUp}
                onTouchStart={this._onTouchStart}
                onTouchEnd={this._onTouchEnd}
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