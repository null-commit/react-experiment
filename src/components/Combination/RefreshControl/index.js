import React ,{ Component }from 'react';
import { View , Button} from '../../../index.js';
import { DefaultLoading, CustomLoading } from './Loading.js';

const normalizeTouchEvent = e => {
    return e.touches[0];
};

class RefreshControl extends Component {
    static displayName='RefreshControl';

    state = {
        visible:false
    }
    initPosition={clientX:0, clientY:0};
    isLoading=true;

    _onPress = ()=> {
        console.log('点击隐藏显示');
        this.setState({ visible:!this.state.visible })
    }
    render(){
        const {
            refreshing,
            onRefresh,
            title,
            titleColor,
            tintColor,
            progressBackgroundColor,
            children,
            component,
            horizontal,//暂不支持水平加载
        } = this.props;
        
        const style = {
            title,
            titleColor,
            tintColor,
            progressBackgroundColor,
        }

        return(
            <View 
                style={this.props.style} 
                onTouchMove={this._onTouchMove}
                onTouchStart={this._onTouchStart}
                onTouchEnd={this._onTouchEnd}
            >
                {
                    component  
                    ?   <CustomLoading in={this.state.visible} component={component} style={style}/>
                    :   <DefaultLoading in={this.state.visible} style={style}/> 
                }
                <Button title='显示/隐藏' onPress={this._onPress} />
                {children}
            </View>
        )
    }
    //2.默认显示loading
    // 判断是可以下拉
    _canLoading = (offSet,isLoading)=> {
        if(offSet<=0 && isLoading){
            console.log('success');
        }
        return false;
    }
    // 判断是否是下拉
    _isLoading = (e)=> {
        const direction = (e.clientY - this.initPosition.clientY)< 0 ? false: true;
        return direction;
    }
    //=======================================//
    //2.0 判断是否可以下拉刷新
    _onTouchMove = e=>{
        console.log('_onTouchStart------------->');
        const { offSet } = this.props;
        const nativeEvent = normalizeTouchEvent(e);
        this.isLoading = this._isLoading(nativeEvent);

        if(this._canLoading(offSet, this.isLoading)){
            //2.0.1显示下拉组件
        }
        e.stopPropagation();
    }
    //2.1 下拉 显示组件
    _onTouchStart = e=>{
        console.log('_onTouchStart------------->');
        const nativeEvent = normalizeTouchEvent(e);
        //2.1.1 初始化起点位置
        this.initPosition.clientX = nativeEvent.clientX;
        this.initPosition.clientY = nativeEvent.clientY;

        e.stopPropagation();
    }
    //2.2 下拉结束 执行动画
    _onTouchEnd = e=>{
        console.log('_onTouchEnd------------->');
        e.stopPropagation();
    }
}
module.exports = RefreshControl;