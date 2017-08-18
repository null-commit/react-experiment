import ObjectHash from 'object-hash';
import hash from '../../../modules/hash';
import generateCss from './generateCss';

const emptyObject = {};
const STYLE_ELEMENT_ID = 'react-components-stylesheet';

const createCssRule = (className, prop, key) => {
    //1.生成css
    const css = generateCss(prop[key]);
    const selector = `.${className}`;
    const result = `${selector}{${css}}`;

    return result
};

//不存在样式类时 创建
const createClassName = (key, value) => {
    if(key){
        const hashed = hash(key + ObjectHash(value));
        return process.env.NODE_ENV !== 'production' ? `rc-${key}-${hashed}` : `rc-${hashed}`;
    }
};


class StyleManager {
    cache = null;
    mainSheet = null;

    constructor(){
        this.cache = {
            byClassName:{},
            byProp:{},
        };
        //0.初始化 查找样式类
        const prerenderedStyleSheet = document.getElementById(STYLE_ELEMENT_ID);
        //1.预加载样式
        if(prerenderedStyleSheet){
            this.mainSheet = prerenderedStyleSheet;
        } else {
            document.head.insertAdjacentHTML('afterbegin',this.getStyleSheetHtml());
            this.mainSheet = document.getElementById(STYLE_ELEMENT_ID);
        }
    }
    getClassName(prop) {
        return this.cache.byProp[prop];
    }
    getStyleSheetHtml(){
        const stylesheets = this.getStyleSheets();
        return stylesheets
            .map(sheet=>{
                return `<style id="${sheet.id}"></style>`
            })
            .join('\n')
    };
    getStyleSheets() {
        return[
            {
                id:STYLE_ELEMENT_ID,
            },
        ]
    }
    //1.声明类
    setDeclaration(prop, value) {
        const key = Object.keys(prop)[0];
        let className = this.getClassName(key);
        
        if(!className){
            //1.1.1 新建样式类
            className = createClassName(key, value);
            //1.1.2 添加样式类到缓存中
            this._addToCache(className, prop, key);
            //1.1.3 通过id获取样式dom
            const sheet = this.mainSheet.sheet;
            console.log('setDeclaration-----className------------>',className);
            console.log('setDeclaration-----this.cache------------>',this.cache);
            //1.1.4不存在该样式
            if(!this.cache.byProp[className]){
                //1.1.5 创建新css规则
                const rule = createCssRule(className, prop ,key);
                this.cache.byProp[className] = true;
                sheet.insertRule(rule, sheet.cssRules.length);
            }
        }
        // //1.2返回样式类
        return className;
    }

    _addToCache(className, prop, key) {
        const cache = this.cache;
        cache.byClassName[className] = { prop, key };
    }
}


export default StyleManager;