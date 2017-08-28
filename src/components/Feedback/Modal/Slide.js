import React from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Transition from 'react-transition-group/Transition';
import { View ,StyleSheet } from '../../../index.js';


const Slide = ({ children, duration =500, enter=duration, exit=duration,...props }) => {
    const { in:inProp } = props;

    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
    }
    //中间态
    const midStatus = { opacity: 0, zIndex:undefined, display:'block'};
    const transitionStyles={
        exited:{ opacity: 0, zIndex:-999, display:'none'},
        //添加中间态
    };
    //中间态
    if(inProp ===true) {
        transitionStyles['entering'] = midStatus;
    } else {
        transitionStyles['entered'] = { opacity: 0, zIndex:-999, display:'none'};
        transitionStyles['exiting'] = midStatus;
    }
    
    return (
        <Transition
            in={inProp}
            timeout={{
                enter: enter,
                exit: exit,
            }}
        >
            {
                (state)=>{
                    let __inProp = false;
                    if(inProp && state==='entered'){
                        __inProp = true;
                    }

                    return (
                        <View style={[styles.container,defaultStyle, transitionStyles[state] ]}>
                            <Transition
                                in={__inProp}
                                timeout={{
                                    enter: enter,
                                    exit: exit,
                                }}
                            >
                            {
                                (state)=>{
                                    console.log('slide----222 __inProp---------->',__inProp);
                                    console.log('slide----222----------->',state);
                                    return(
                                        <View style={[ styles.slide ,defaultStyle]}>
                                            {children}
                                        </View>
                                    )
                                }
                            }
                            </Transition>
                        </View>
                    )
                }
            }
        </Transition>
    )
}
const styles = StyleSheet.create({
    container:{
        position:'absolute',
        left:0,
        right:0,
        bottom:0,
        top:0,
        backgroundColor:'black',
    },
    slide:{
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'red'
    }
})


export default Slide;