import React ,{ Component }from 'react';
import { ListView, StyleSheet, View, Text } from '../../../../src';

class ListViewScreen extends Component{
    state = {
        reload:false
    }
    config = [
        {id:1,title:'1'},
        {id:2,title:'2'},
        {id:3,title:'3'},
        {id:4,title:'4'},
        {id:5,title:'5'},
        {id:6,title:'6'},
        {id:7,title:'7'},
        {id:8,title:'8'},
        {id:9,title:'9'},
        {id:10,title:'10'},
    ]

    _onEndReached = ()=> {
        console.log('_onEndReached----------------->');
    }
    _onRenderRow = ()=> {
        console.log('_onRenderRow----------------->');
        return(
            <View><Text>test</Text></View>
        )
    }
    render(){
        return(
            <View style={styles.container}>
                <ListView 
                    style={styles.scrollView}
                    dataSource={this.config}
                    onEndReached={this._onEndReached}
                    renderRow={this._onRenderRow}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        height:'calc(100vh)',
    },
    scrollView:{
        flex:1,
        backgroundColor:'black'
    }
})
module.exports = ListViewScreen;