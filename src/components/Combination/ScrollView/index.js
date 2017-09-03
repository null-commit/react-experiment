import React,{ Component } from 'react';
import ScrollViewBase from './ScrollViewBase.js';

class ScrollView extends Component {
    static displayName='ScrollView';

    static defaultProps = {
        scrollTo:()=>{},
        scrollToEnd:()=>{},
        horizontal:false,
        onScroll:()=>{},
        scrollWithoutAnimation:false,
        getScrollableNode:()=>{},
        scrollEnabled:true
    }

    _onScroll = e => {
        console.log('_onScroll------------------------->',e);
    }
    render(){
        const { 
            children,
            refreshControl,
            ...otherProps
        } = this.props;

        const props = {
            onScroll:this._onScroll,
        }

        return(
            <ScrollViewBase
                {...otherProps}
                {...props}
            >
                {children}
            </ScrollViewBase>
        )
    }

}


module.exports = ScrollView;