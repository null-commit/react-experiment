import React from 'react';

import createDOMProps from '../createDOMProps';

const eventHandlerNames = {
    onClick: true,
    onClickCapture: true,
    onMoveShouldSetResponder: true,
    onMoveShouldSetResponderCapture: true,
    onResponderGrant: true,
    onResponderMove: true,
    onResponderReject: true,
    onResponderRelease: true,
    onResponderTerminate: true,
    onResponderTerminationRequest: true,
    onStartShouldSetResponder: true,
    onStartShouldSetResponderCapture: true,
    onTouchCancel: true,
    onTouchCancelCapture: true,
    onTouchEnd: true,
    onTouchEndCapture: true,
    onTouchMove: true,
    onTouchMoveCapture: true,
    onTouchStart: true,
    onTouchStartCapture: true
};

const u = navigator.userAgent, app = navigator.appVersion; 
console.log('global----------------->', global.navigator);
console.log('global---u---------------->', u);
console.log('global---app-------------->', app);


const createDOMElement = (component, props) => {
    const Component = component;

    const domProps = createDOMProps(Component, props);
    
    Object.keys(domProps).forEach( item => {
        if(item.indexOf('onPress')> -1 ){
            domProps['onClick'] = domProps[item];
            delete domProps[item];
        }
    });
    console.log('domProps===============>',domProps);
    

    return <Component {...domProps} />;
};

export default createDOMElement;