import React ,{ Component }from 'react';
import { View, StyleSheet } from '../../../../src';

const normalizeScrollEvent = e => ({
  nativeEvent: {
    contentOffset: {
      get x() {
        return e.target.scrollLeft;
      },
      get y() {
        return e.target.scrollTop;
      }
    },
    contentSize: {
      get height() {
        return e.target.scrollHeight;
      },
      get width() {
        return e.target.scrollWidth;
      }
    },
    layoutMeasurement: {
      get height() {
        return e.target.offsetHeight;
      },
      get width() {
        return e.target.offsetWidth;
      }
    }
  },
  timeStamp: Date.now()
});

const ScrollViewBase = ({...props})=>{
    const { 
        children,
        scrollEnabled,//是否可以滚动
        style,//样式
        onScroll
    } = props;

    const _handleScroll = ()=> {
        if(onScroll){
            onScroll();
        }
    }
    return(
        <View 
            style={[styles.container,style,!scrollEnabled && styles.scrollDisabled]}
            onScroll={_handleScroll}
        >
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        overflowX: 'hidden',
        overflowY: 'auto',
    },
    scrollDisabled: {
        touchAction: 'none'
    }
})

module.exports = ScrollViewBase;