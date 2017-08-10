import React from 'react';

const Text = ({...props}) => {
    const {
        children,
        style,
        onPress,
    } = props;
    
    return(
        <p style={style} >Text</p>
    )
}


module.exports = Text;