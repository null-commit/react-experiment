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
        const children = [];
        const {
            dataSource,
            renderRow,
            // onEndReached,
            renderHeader,
            renderFooter,
            renderSeparator,
            ...scrollProps
        } = this.props;

        const header = renderHeader && renderHeader();
        const footer = renderFooter && renderFooter();

        const childrenArr = dataSource.map((item, index)=>{
            const rowData = item; 
            const sectionID = undefined;
            const rowID = undefined; 
            const highlightRow = undefined;

            return React.cloneElement(
                renderRow(rowData,sectionID,rowID, highlightRow),
                {
                    key:`rc_${index}`
                }
            )
        });

        return React.cloneElement(
            this._getContainerComp(scrollProps),
            {},
            header,
            childrenArr,
            footer
        );
    }
    _getContainerComp = (props)=> {
        return <ScrollView {...props} />
    }
}

module.exports = ListView;