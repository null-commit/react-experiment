import React from 'react';
import { ScrollView, View ,Text, StyleSheet} from '../../../../src';

const ScrollViewScreen = ()=> {
    return(
        <ScrollView >
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
            <View style={styles.item}><Text>123</Text></View>
            <View style={styles.item}><Text>123</Text></View>
            <View style={styles.item}><Text>123</Text></View>
            <View style={styles.item}><Text>123</Text></View>
            <View style={styles.item}><Text>123</Text></View>
            <View style={styles.item}><Text>123</Text></View>
            <View style={styles.item}><Text>123</Text></View>
            <View style={styles.item}><Text>123</Text></View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    item:{
        height:250,
        backgroundColor:'red',
        marginTop:10
    }
})

module.exports = ScrollViewScreen;