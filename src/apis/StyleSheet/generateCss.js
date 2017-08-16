import hyphenateStyleName from 'hyphenate-style-name';
import mapKeyValue from '../../../modules/mapKeyValue';
import prefixStyles from '../../../modules/prefixStyles';
import normalizeValue from './normalizeValue';

const createDeclarationString = (prop, val) => {
    const name = hyphenateStyleName(prop);
    const value = normalizeValue(prop, val);
    
    //1如果返回的是数组
    if( Array.isArray(val) ){
        return val.map(v => `${name}:${v}`).join(';');
    }
    return `${name}:${value}`;
}

//一个js对象 生成合法的css规则
const generateCss = style => {
    const _prefixStyles = prefixStyles(style);
    return mapKeyValue(prefixStyles(style), createDeclarationString).sort().join(';')
};

export default generateCss;
    