import React from 'react';

import { View ,StyleSheet } from '../../../../src';

import {
    UIExplorer
} from '../../../ui-explorer'

const ViewScreen = ({...props}) => {
    console.log('UIExplorer------->',UIExplorer);
    return(
        <UIExplorer title='View' description='UI building block'>
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