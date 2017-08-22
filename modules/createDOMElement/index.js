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

const createDOMElement = (component, props) => {
    const Component = component;

    const domProps = createDOMProps(Component, props);
    
    const comProps = {};

    console.log('global.platform--------->',global.platform);

    Object.keys(domProps).forEach( item => {
        console.log('item---------->',item);
        //清除事件
        if(global.platform !=='web' && item.indexOf('onMouse')>-1){
            return;
        }
        if(item.indexOf('onPress')> -1 ){
            return;
        }
        comProps[item] = domProps[item];
    });
    console.log('comProps===============>',comProps);
    

    return <Component {...comProps} />;
};

export default createDOMElement;