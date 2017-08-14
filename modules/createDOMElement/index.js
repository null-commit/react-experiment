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

    return <Component {...domProps} />;
};

export default createDOMElement;