import React from 'react';

import { View ,StyleSheet } from '../../../../src';

import UIExplorer,{
    Description,
    DocItem
} from '../../../ui-explorer'

const ViewScreen = ({...props}) => {
    // console.log('UIExplorer------->',UIExplorer);
    return(
        <View style={styles.container}>
            viewtest
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'red',
        height:60,
    }
})

module.exports = ViewScreen;