
import createReactDOMStyle from './createReactDOMStyle';
import ReactPropRegistry from '../../../modules/ReactPropRegistry';
import flattenStyle from './flattenStyle';
import flattenArray from '../../../modules/flattenArray';
import StyleManager from './StyleManager.js';
import { prefixInlineStyles } from '../../../modules/prefixStyles';

const emptyObject = {};
const classListToString = list => list.join(' ').trim();

class StyleRegistry {
    styleManager = new StyleManager();
    /************************StyleSheet注册样式******start**********************************/
    //1.通过StyleSheet注册样式
    register(style) {
        const id = ReactPropRegistry.register(style);//2.1返回样式id
        this._registerById(id);//2.2通过样式id注册

        return id;
    }
    //2.通过id注册样式
    _registerById(id) {
        const style = flattenStyle(id);//2.1通过 样式id 查找样式
        const domStyle = createReactDOMStyle(style);

        // console.log('_registerById----domStyle------>',domStyle);
        this._setDeclaration(domStyle);
    }
    /***************************StyleSheet注册样式*****end*****************************/
    
    
    /**************************读取StyleSheet注册样式*****start*****************************/
    //3.处理样式
    resolve(reactStyle, options= emptyObject){
        if (!reactStyle) {
            return emptyObject;
        }
        // 1.2.如果已缓存
        if (typeof reactStyle === 'number') {
            console.log('reactStyle----number------->',reactStyle);
            
            this._registerById(reactStyle);
            return this._resolveStyle(reactStyle, options);
        }
        // 1.3 不是数组
        if(!Array.isArray(reactStyle)){
            console.log('reactStyle----!isArray------->',reactStyle);
            return;
        }
        // 1.4 没有缓存样式 降低数组维度
        const flatArray = flattenArray(reactStyle);
        return this._resolveStyle(flatArray, options);
    }
   
    //4.处理样式
    _resolveStyle(reactStyle, options ) {
        console.log('reactStyle------->',reactStyle);
        const flatStyle = flattenStyle(reactStyle);
        console.log('flatStyle------->',flatStyle);
        const domStyle = createReactDOMStyle(flatStyle);
        console.log('domStyle------->',domStyle);
        
        const props = { classList:[] , style:null };
        Object.keys(domStyle).map( (item ,index)=> {
            const value = domStyle[item];
            if(value !=null ){
                const className = this._setDeclaration({ [item]: domStyle[item] });
                console.log('_resolveStyle className------->',className);
                if(className){
                    props.classList.push(className);
                } else { 
                    if(!props.style) {
                        props.style={}
                    }
                    props.style[styleProp] = value;
                }
            }
        });
        console.log('props-11111------>',props);
        props.className = classListToString(props.classList);
        if (props.style) {
            props.style = prefixInlineStyles(props.style);
        }
        console.log('props-22222------>',props);
        return props;
    }
    //5.查找样式
    _setDeclaration(style) {
        return Object.keys(style).map((styleProp,index)=>{
            const value = style[styleProp];
            if(value !=null){
                return this.styleManager.setDeclaration(style ,value);
            }
        });
    }
    /**************************读取StyleSheet注册样式*****end*****************************/
}

export default StyleRegistry;