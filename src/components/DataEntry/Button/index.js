import React ,{ Component }from 'react';

import { View, StyleSheet } from '../../../../src';


class Button extends Component {
    static displayName='Button';

    render() {
        const {
            onPress,
            ...other,
        } = this.props;
        return(
            <View 
                onPress={onPress}
                style={[ styles.root, this.props.style]}
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
    }
});

module.exports = Button;