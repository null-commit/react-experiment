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

    render(){
        const { children } = this.props;
        return(
            <ScrollViewBase
                {...this.props}

            >
                {children}
            </ScrollViewBase>
        )
    }
}

module.exports = ScrollView;