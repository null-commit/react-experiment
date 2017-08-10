import React from 'react';


const Icon = ({...props}) => {
    const {
        flex,
        width=24,
        height=24,
        source,
        justifyContent,
        alignItems,
        padding,
        backgroundColor='#fff',
    } = props;

    const container = {
        flex,
        display:'flex',
        justifyContent,
        alignItems,
        backgroundColor,
        padding,
    }

    const iconStyles = {
        width,
        height
    }

    return(
        <div style={ container }>
            <img src={source} alt="" style={iconStyles}/>
        </div>
    )
}

module.exports = Icon;