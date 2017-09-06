import React ,{ Component }from 'react';
import { View, Text } from '../../../index.js';

const RefreshControl = ({...props})=>{
    const {
        refreshing,
        onRefresh,
        title,
        titleColor,
        tintColor,
        progressBackgroundColor,
        children
    } = props;
    console.log('RefreshControl-------------->',props);


    return(
        <View style={props.style}>
            <Text style={{color:'orange'}}>RefreshControl</Text>
            {children}
        </View>
    )
}
module.exports = RefreshControl;