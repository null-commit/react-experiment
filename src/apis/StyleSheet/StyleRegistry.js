
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
        console.log('======================注册样式id==start=========================');
        console.log('======================StyleRegistry=====register====style===============',style);
        const id = ReactPropRegistry.register(style);//2.1返回样式id
        this._registerById(id);//2.2通过样式id注册
        console.log('======================注册样式id end===========================');

        return id;
    }
    //2.通过id注册样式
    _registerById(id) {
        const style = flattenStyle(id);//2.1通过 样式id 查找样式
        const domStyle = createReactDOMStyle(style);

        console.log('_registerById----domStyle------>',domStyle);
        this._setDeclaration(domStyle);
    }
    /***************************StyleSheet注册样式*****end*****************************/
    //3.处理样式
    resolve(reactStyle, options= emptyObject){
        console.log('======================取样式 start===========================');
        console.log('======================取样式 reactStyle===========================',reactStyle);
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
        console.log('reactStyle----flatArray------->',flatArray);

        // 1.5 是否是数字数组
        for(let i = 0; i< flatArray.length; i++){
            const id = flatArray[i];
            if(typeof id === 'number'){
                this._registerById(id);
            }
        }
        return this._resolveStyle(reactStyle, options);
    }
   
    //4.处理样式
    _resolveStyle(reactStyle, options ) {
        const flatStyle = flattenStyle(reactStyle);

        console.log('createReactDOMStyle-------start----------->');
        const domStyle = createReactDOMStyle(flatStyle);
        console.log('createReactDOMStyle-------end----------->');
        console.log('合并之后的样式------------->',domStyle);

        const props = { classList:[] , style:null };
        Object.keys(domStyle).map( (item ,index)=> {
            const value = domStyle[item];
            if(value !=null ){
                const className = this._setDeclaration({ [item]: domStyle[item] });
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
        props.className = classListToString(props.classList);
        if (props.style) {
            props.style = prefixInlineStyles(props.style);
        }
        console.log('======================取样式 end===========================');
        return props;
    }
    //6.查找样式
    _setDeclaration(style) {

        console.log('注册样式-----------start------------>');
        console.log('注册样式-----------style------------>',style);
       
        return Object.keys(style).map((styleProp,index)=>{
            const value = style[styleProp];
            if(value !=null){
                return this.styleManager.setDeclaration(style ,value);
            }
        });
        return className;
    }
}

export default StyleRegistry;