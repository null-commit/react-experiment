const emptyObject = {};

import normalizeValue from './normalizeValue';

const createReactDOMStyle = style =>{
    console.log('缓存样式对象==========style================>',style);
    if(style){
        const inlineStyle = {};
        //1.合并样式
        const keys = Object.keys(style);

        const styles = keys.reduce((a,b)=>{
            console.log('a---------------->',a);
            console.log('b---------------->',b);
            console.log('typeof style[b]---------------->',typeof style[b]);

            if(typeof style[b] !=='object'){
                inlineStyle[b] = style[b];
                return Object.assign(a, {});
            }
            return Object.assign(a, style[b]);
        },{});
        console.log('styles------2--------->',styles);
        console.log('styles------3--------->',inlineStyle);
        const __styles = {
            ...styles,
            ...inlineStyle
        }
        console.log('styles------4--------->',__styles);
        return { [keys[0]]: __styles };
    }
    return emptyObject;
}

export default createReactDOMStyle;