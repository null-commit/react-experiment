
import hash from '../../../modules/hash';

const emptyObject = {};
const STYLE_ELEMENT_ID = 'react-components-stylesheet';

const createCssRule = (className, prop, value) => {
    console.log('className',className, prop, value);
    // const css = generateCss({ [prop]: value });
    // const selector = `.${className}`;
    // return `${selector}{${css}}`;
};

//不存在样式类时 创建
const createClassName = (prop, value) => {
    const hashed = hash(prop + value);
    return process.env.NODE_ENV !== 'production' ? `rc-${prop}-${hashed}` : `rc-${hashed}`;
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
            document.head.insertAdjacentHTML('afterbegin',this.getStyleManagerHtml());
            this.mainSheet = document.getElementById(STYLE_ELEMENT_ID);
        }
        // this.getStyleManagerHtml();
    }
    getClassName(prop, value) {
        const cache = this.cache.byProp;
        return cache[prop] && cache[prop].hasOwnProperty(value) && cache[prop][value];
    }
    getStyleManagerHtml(){
        const stylesheets = this.getStyleSheets();
        console.log('getStyleManagerHtml-------------->',stylesheets);
    };
    getStyleSheets() {
        const cache = this.cache.byProp;
    }
    //1.声明类
    setDeclaration(prop, value) {
        let className = this.getClassName(prop, value);
        if(!className){
            //1.1.1 新建样式类
            className = createClassName(prop, value);
            //1.1.2 添加样式类到缓存中
            this._addToCache(className, prop, value);
            //1.1.3 主页样式表单不保存在该样式
            if(this.mainSheet.textContent.indexOf(className) === -1){
                const rule = createCssRule(className, prop ,value);

            }

        }
        // console.log('this.cache------------->',this.cache);
        //1.2返回样式类
        return className;
    }

    _addToCache(className, prop, value) {
        const cache = this.cache;
        if(!cache.byProp[prop]){
            cache.byProp[prop] = {};
        }
        cache.byProp[prop][value] = className;
        cache.byClassName[className] = { prop, value };
    }
}


export default StyleManager;