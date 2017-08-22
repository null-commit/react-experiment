import React from 'react';

import { Button, StyleSheet } from '../../../../src';

const clickFunction = () => {console.log('测试点击事件----------->');};

const ButtonScreen = ()=> {

    return(
        <Button style={styles.button} onPress={clickFunction}>
            button
        </Button>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#17BF63',
        color:'#fff',
        width:120,
        height:30,
        alignItems:'center',
        justifyContent:'center'
    }
})

module.exports = ButtonScreen;
