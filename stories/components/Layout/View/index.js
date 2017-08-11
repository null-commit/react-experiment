import React from 'react';

import { View } from '../../../../src/index.js';

    // const {
    //     display='column',
    //     children,
    //     style,
    // } = props;

    // let tmpClassName;
    // switch (display) {
    //     case 'row': 
    //         tmpClassName = 'row-container';
    //         break;
    //         break;
    //     case 'column':
    //         tmpClassName = 'column-container';
    //         break;
    //     default: 
    // }   
const ViewScreen = ({...props}) => {
    console.log('View ----------->', View);
    console.log('View --------123--->');
    return(
        <div>
           view3
           <View />
        </div>
    )
}

module.exports = ViewScreen;