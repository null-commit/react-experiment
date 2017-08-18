const emptyObject = {};

import normalizeValue from './normalizeValue';

const createReactDOMStyle = style =>{
    console.log('缓存样式对象==========start================>');
    console.log('缓存样式对象===============================>',style);
    if(style){
        const inlineStyle = {};
        //1.合并样式
        const keys = Object.keys(style);
        
        const styles = keys.reduce((a,b)=>{
            if(typeof style[b] !=='object'){
                inlineStyle[b] = style[b];
                return Object.assign(a, {});
            }
            return Object.assign(a, style[b]);
        },{});
        const __styles = {
            ...styles,
            ...inlineStyle
        }
        console.log('styles------4--------->',__styles);
        console.log('缓存样式对象===========end===============>');
        return { [keys[0]]: __styles };
    }
    return emptyObject;
}

export default createReactDOMStyle;