import React from 'react';

import { Text ,StyleSheet } from '../../../../src';

import UIExplorer,{
    Description,
    DocItem
} from '../../../ui-explorer'


const TextScreen = ({...props}) => {
    // console.log('UIExplorer------->',UIExplorer);
    return(
        <Text>xxxx</Text>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'blue',
        height:60,
    },
    title: {
        fontSize: '2rem'
    },
})

module.exports = TextScreen;