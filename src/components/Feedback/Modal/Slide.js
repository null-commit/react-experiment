import React , { Component } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Transition from 'react-transition-group/Transition';
import CSSTransition from 'react-transition-group/CSSTransition';
import { View ,StyleSheet } from '../../../index.js';


class Slide extends Component {
    state = {
        reload:false,
    }
    display = 'none';
    startSlide = false;

    render(){
        const { 
            children, 
            duration =500, 
            enter=duration, 
            exit=duration,
            in:inProp
        } = this.props;

        if(inProp){
            this.display = 'block';
        }

        return(
            <CSSTransition
                in={inProp}
                timeout={{
                    enter:enter,
                    exit:exit
                }}
                classNames="fade"
                onEntered={this._onEntered}
                onExited={this._onExited}
            >
                <View style={[styles.container,{display:this.display}]}>
                    <CSSTransition
                        in={this.startSlide}
                        timeout={{
                            enter:enter,
                            exit:exit
                        }}
                        classNames="fade"
                        onExited={this._onExited}
                    >
                        <View style={[styles.container,{display: this.startSlide ? 'block':'none'}]}>
                            {children}
                        </View>
                    </CSSTransition>
                </View>
            </CSSTransition>
        )
    }
    _onEntered = ()=> {
        this.startSlide = true;
        this.setState({
            reload:!this.state.reload
        }) 
    }
    _onExited = (node, isAppearing)=>{
        this.display = 'none';
        this.setState({
            reload:!this.state.reload
        })
    }
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