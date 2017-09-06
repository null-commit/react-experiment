import React,{ Component } from 'react';

import { ScrollView } from '../../../index.js';

class ListView extends Component {
    state = {
        reload:false
    }
    static displayName='ListView';

    static defatulProps = {
        initialListSize:1,
        dataSource:[],
        onEndReachedThreshold:20,
        onEndReached:()=>{},
        scrollTo:undefined,
        scrollToEnd:undefined,
        pageSize:5,
        removeClippedSubviews:true,
        renderFooter:()=>{},
        renderHeader:()=>{},
        renderRow:()=>{},
        renderSeparator:()=>{},
        scrollRenderAheadDistance:20
    }

    componentWillReceiveProps(nextProps) {
        console.log('ListView nextProps------------------->', nextProps);

    }

    render(){
        const {
            children,
            style,
            renderRow,
            onEndReached
        } = this.props;


        console.log('renderRow----------------->',renderRow);

        return(
            <ScrollView style={style}>
                {children}
            </ScrollView>
        )
    }
}

module.exports = ListView;