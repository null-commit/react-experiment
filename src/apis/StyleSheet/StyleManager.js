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
            console.log('======================动态添加start===========================');
            document.head.insertAdjacentHTML('afterbegin',this.getStyleSheetHtml());
            this.mainSheet = document.getElementById(STYLE_ELEMENT_ID);
            console.log('======================动态添加end===========================');
        }
    }
    getClassName(prop) {
        return this.cache.byProp[prop];
    }
    getStyleSheetHtml(){
        console.log('======================getStyleSheets start===========================');
        const stylesheets = this.getStyleSheets();
        console.log('======================getStyleSheets=========================',stylesheets);
        console.log('======================getStyleSheets end===========================');
        return stylesheets
            .map(sheet=>{
                return `<style id="${sheet.id}"></style>`
            })
            .join('\n')
    };
    getStyleSheets() {
        const cache = this.cache.byProp;
        console.log('======================cache cache===========================',cache);
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
        // console.log('value--------- -1------->',value);
        // console.log('缓存---------0------->',this.cache);
        // console.log('className---------1--key------->',key);
        // console.log('className---------2---className------>',className);

        if(!className){
            //1.1.1 新建样式类
            className = createClassName(key, value);
            // console.log('className-----3----hashclassName------->',className);
            //1.1.2 添加样式类到缓存中
            this._addToCache(className, prop, key);
            // console.log('缓存---------4--------->',this.cache);
            //1.1.3 通过id获取样式dom
            const sheet = this.mainSheet.sheet;
            // console.log('sheet------5------->',sheet);
            //1.1.4不存在该样式
            if(!this.cache.byProp[className]){
                // console.log('dom 中不存在该样式-----6--------->');
                //1.1.5 创建新css规则
                const rule = createCssRule(className, prop ,key);
                this.cache.byProp[className] = true;
                // console.log('rule新建规则------7------------>',rule);
                sheet.insertRule(rule, sheet.cssRules.length);
                // console.log('插入规则结束------8----------->');
            }
        }
        // //1.2返回样式类
        return className;
    }

    _addToCache(className, prop, key) {
        // console.log('_addToCache-----prop------------>',prop);
        // console.log('_addToCache-----key------------>',key);
        const cache = this.cache;
        // if(!cache.byProp[className]){
        //     cache.byProp[className] = {};
        // }
        // cache.byProp[prop][value] = className;
        cache.byClassName[className] = { prop, key };
        // console.log('添加至缓存中------------>',cache);
    }
}


export default StyleManager;