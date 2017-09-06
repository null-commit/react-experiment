import React ,{ Component }from 'react';
import { View, Text } from '../../../index.js';

const normalizeTouchEvent = e => {
    return e.touches[0];
};


let initPosition={clientX:0, clientY:0};
const RefreshControl = ({...props})=>{
    let isLoading=true;
    const {
        refreshing,
        onRefresh,
        title,
        titleColor,
        tintColor,
        progressBackgroundColor,
        children,
        component,
        offSet,
        horizontal,//暂不支持水平加载
    } = props;
    console.log('RefreshControl-------------->',props);

    //1.存在自定义下拉加载器
    if(component){
        return <Text style={{color:'orange'}}>未实现</Text>;
    }
    //2.默认显示loading
    // 判断是可以下拉
    const _canLoading = (offSet,isLoading)=> {
        if(offSet<=0 && isLoading){
            console.log('success');
        }
        return false;
    }
    // 判断是否是下拉
    const _isLoading = (e)=> {
        const direction = (e.clientY -initPosition.clientY)< 0 ? false: true;
        return direction;
    }

    //=======================================//
    //2.0 判断是否可以下拉刷新
    const _onTouchMove = e=>{
        console.log('_onTouchStart------------->');
        const nativeEvent = normalizeTouchEvent(e);
        isLoading = _isLoading(nativeEvent);

        if(_canLoading(offSet, isLoading)){
            //2.0.1显示下拉组件
        }
        e.stopPropagation();
    }
    //2.1 下拉 显示组件
    const _onTouchStart = e=>{
        console.log('_onTouchStart------------->');
        const nativeEvent = normalizeTouchEvent(e);
        //2.1.1 初始化起点位置
        initPosition.clientX = nativeEvent.clientX;
        initPosition.clientY = nativeEvent.clientY;

        e.stopPropagation();
    }
    //2.2 下拉结束 执行动画
    const _onTouchEnd = e=>{
        console.log('_onTouchEnd------------->');
        e.stopPropagation();
    }

    return(
        <View 
            style={props.style} 
            onTouchMove={_onTouchMove}
            onTouchStart={_onTouchStart}
            onTouchEnd={_onTouchEnd}
        >
            {
                refreshing ?
                <Text style={{color:'orange'}}>loading</Text>:
                null
            }
            {children}
        </View>
    )

}
module.exports = RefreshControl;