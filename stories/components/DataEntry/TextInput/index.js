import React from 'react';

import { TextInput } from '../../../../src';

const TextInputScreen = ()=> {

    const _onChangeText = rs=> {
        console.log('rs----------------->',rs);
    }

    return(
        <TextInput 
            onChangeText={ _onChangeText }
        />
    )
}

module.exports = TextInputScreen;


