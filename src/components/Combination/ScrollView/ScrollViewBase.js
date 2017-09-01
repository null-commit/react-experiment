import React from 'react';
import { View, StyleSheet } from '../../../../src';

const ScrollViewBase = ({...props})=>{
    const { 
        children,
        scrollEnabled,//是否可以滚动
        style,//样式
    } = props;

    console.log('ScrollViewBase------------->',ScrollViewBase);

    return(
        <View style={[ style,!scrollEnabled && styles.scrollDisabled]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    scrollDisabled: {
        touchAction: 'none'
    }
})

module.exports = ScrollViewBase;