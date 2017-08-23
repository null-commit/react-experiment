import React from 'react';

import { Image } from '../../../../src';

const ImageScreen = ()=> {
    const testT = require('./adPage.jpg');

    console.log('testT------------->',testT);

    return(
        <Image 
            source={{uri:'http://7xvvpv.com1.z0.glb.clouddn.com/adPage.jpg'}}
        />
    )
}

module.exports = ImageScreen;