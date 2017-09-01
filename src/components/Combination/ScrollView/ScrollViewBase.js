import React from 'react';
import { View } from '../../../../src';

const ScrollViewBase = ({...props})=>{
    const { children } = props;

    return(
        <View>
            {children}
        </View>
    )
}

module.exports = ScrollViewBase;