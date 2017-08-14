const emptyObject = {};

import normalizeValue from './normalizeValue';

const createReactDOMStyle = style =>{
    if(!style){
        return emptyObject;
    }
    return style;
}

export default createReactDOMStyle;