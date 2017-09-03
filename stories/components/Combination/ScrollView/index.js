import React from 'react';
import { ScrollView, View ,Text, StyleSheet} from '../../../../src';

const ScrollViewScreen = ()=> {
    return(
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.item}><Text>123</Text></View>
                <View style={styles.item}><Text>123</Text></View>
                <View style={styles.item}><Text>123</Text></View>
                <View style={styles.item}><Text>123</Text></View>
                <View style={styles.item}><Text>123</Text></View>
                <View style={styles.item}><Text>123</Text></View>
                <View style={styles.item}><Text>123</Text></View>
                <View style={styles.item}><Text>123</Text></View>
                <View style={styles.item}><Text>123</Text></View>
                <View style={styles.item}><Text>123</Text></View>
                <View style={styles.item}><Text>123</Text></View>
                <View style={styles.item}><Text>123</Text></View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:'calc(100vh)',
    },
    scrollView:{
        flex:1,
        backgroundColor:'black'
    },
    item:{
        height:250,
        backgroundColor:'red',
        marginTop:10,
    }
})

module.exports = ScrollViewScreen;