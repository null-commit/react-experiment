import React from 'react';
import { View , StyleSheet, Text } from '../../../index.js';
import Transition from 'react-transition-group/Transition';

const styles = StyleSheet.create({
    loading:{
        color:'orange'
    }    
})

export const DefaultLoading = ({ ...props })=> {
    const { 
        duration =250, 
        enter= duration, 
        exit= duration,
        in:inProp , 
        style ,
        height=50, 
        onTransitionEnd
    } = props;
    
    const defaultStyle = {
        transition: `height ${duration}ms linear`,
    }
    const midStatus = { height: 0, zIndex:undefined, display:'block'};
    const transitionStyles={
        exited:{ height: 0 ,display:'none'},
        entered:{ height: height ,display:'block'}
    }
    //中间态
    if(inProp ===true) {
        transitionStyles['entering'] = midStatus;
    } else {
        transitionStyles['exiting'] = midStatus;
    }

    const {
        title ='loading',
        progressBackgroundColor='#fff',
        tintColor='#ff0000',
        titleColor,
    } = style;

    const container = {
        backgroundColor:progressBackgroundColor,
    }
    const loadingTitle = {
        color: tintColor
    }

    return(
        <Transition 
            in={inProp}
            timeout={{
                enter: enter,
                exit: exit,
            }}
        >
        {
            (state)=> {
                return(
                    <View style={[container ,defaultStyle, transitionStyles[state]]} onTransitionEnd={onTransitionEnd}>
                        <Text style={loadingTitle}>{title}</Text>
                    </View>
                )
            }
        }
        </Transition>
    )
}

export const CustomLoading = ({duration =500, enter=duration, exit=duration, ...props})=> {
    const { in:inProp , style} = props;
    return(
        <View style={[container ,defaultStyle, transitionStyles[state]]}>
            <Text style={styles.loading}>default</Text>
        </View>
    )
}