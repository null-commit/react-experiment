import React from 'react';

import { View ,StyleSheet } from '../../../../src';

import UIExplorer,{
    Description,
    DocItem
} from '../../../ui-explorer'

const ViewScreen = ({...props}) => {
    console.log('UIExplorer------->',UIExplorer);
    return(
        <UIExplorer title='View' description='UI building block'>
            <DocItem 
                label="web"
                example={{
                    code: '<View hitSlop={{top: 10, bottom: 10, left: 0, right: 0}} />'
                }}
            /> 
            <View style={styles.container}>
                viewtest
            </View>
        </UIExplorer>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'red',
        height:60,
    }
})

module.exports = ViewScreen;