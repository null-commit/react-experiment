import React from 'react';

import './index.css';

const View = ({...props}) => {
    const {
        display='column',
        children,
        style,
    } = props;

    let tmpClassName;
    switch (display) {
        case 'row': 
            tmpClassName = 'row-container';
            break;
        case 'column':
            tmpClassName = 'column-container';
            break;
        default: 
            break;
    }   

    return(
        <div className={ tmpClassName } style={style}>
            {children}
        </div>
    )
}

module.exports = View;