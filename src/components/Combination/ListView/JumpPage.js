import React from 'react';
import { View, Text } from '../../../index.js';

const JumpPage = ({...props})=> {
    const {
        marginLeft,
        marginRight
    } = props;

    const container = {
        marginLeft,
        marginRight,
    }
    return(
        <View style={container}><Text>submit</Text></View>
    )
}

export default JumpPage;