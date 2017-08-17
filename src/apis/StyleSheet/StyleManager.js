
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
const createClassName = (key) => {
    if(key){
        const hashed = hash(key);
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
        if(prerenderedStyleSheet){
            this.mainSheet = prerenderedStyleSheet;
        } else {
            document.head.insertAdjacentHTML('afterbegin',this.getStyleSheetHtml());
            this.mainSheet = document.getElementById(STYLE_ELEMENT_ID);
        }
    }
    getClassName(prop) {
        const cache = this.cache.byProp;
        return cache[prop];
    }
    getStyleSheetHtml(){
        const stylesheets = this.getStyleSheets();
        return stylesheets
            .map(sheet=>{
                return `<style id="${sheet.id}">\n${sheet.textContent}</style>`
            })
            .join('\n')
    };
    getStyleSheets() {
        const cache = this.cache.byProp;

        const mainSheetTextContext = Object.keys(cache)
            .reduce((rules, prop)=> {
                Object.keys(cache[prop]).forEach(value=> {
                    const className = this.getClassName(prop, value);
                    const rule = createCssRule(className, prop, value);
                    rules.push(rule);
                });
                return rules;
            },[])
            .join('\n');

        return[
            {
                id:'react-components-static',
                textContent:``
            },
            {
                id:STYLE_ELEMENT_ID,
                textContent:`${mainSheetTextContext}`
            },
        ]
    }
    //1.声明类
    setDeclaration(prop) {
        let className = this.getClassName(prop);
        const key = Object.keys(prop)[0];

        if(!className){
            //1.1.1 新建样式类
            className = createClassName(key);
            //1.1.2 添加样式类到缓存中
            this._addToCache(className, prop, key);
            // //1.1.3 主页样式表单不保存在该样式
            const sheet = this.mainSheet.sheet;
            if(this.mainSheet.textContent.indexOf(className) === -1){
                const rule = createCssRule(className, prop ,key);
                sheet.insertRule(rule, sheet.cssRules.length);
            }
        }
        // //1.2返回样式类
        return className;
    }

    _addToCache(className, prop, key) {
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