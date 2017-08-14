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

// const adjustProps = domProps => {

// }

const createDOMElement = (component, props) => {
    console.log('createDOMElement');

    const Component = component;
    const domProps = createDOMProps(Component, props);

    console.log('Component--------->',Component);
    console.log('domProps--------->',domProps);
    // adjustProps(domProps);

    return <Component {...domProps} />;
};

export default createDOMElement;