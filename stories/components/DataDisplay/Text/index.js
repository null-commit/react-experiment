import React from 'react';

import { View ,StyleSheet } from '../../../../src';

import {
    UIExplorer,
    AppText
} from '../../../ui-explorer'


const Title = ({children})=> {
    return(
        <AppText style={styles.title}>
            {children}
        </AppText>
    )
}

const ViewScreen = ({...props}) => {
    console.log('UIExplorer------->',UIExplorer);
    return(
        <UIExplorer description='UI building block'>
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
    },
    title: {
        fontSize: '2rem'
    },
})

module.exports = ViewScreen;