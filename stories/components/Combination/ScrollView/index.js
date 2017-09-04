import React ,{ Component }from 'react';
import { ScrollView, View ,Text, StyleSheet} from '../../../../src';

class ScrollViewScreen extends Component {
    state = {
        reload:false,
    }
    page =1;
    config = [
        {id:0,title:'hh'},
        {id:1,title:'hh'},
        {id:2,title:'hh'},
        {id:3,title:'hh'},
        {id:4,title:'hh'},
        {id:5,title:'hh'},
        {id:6,title:'hh'},
        {id:7,title:'hh'},
        {id:8,title:'hh'},
        {id:9,title:'hh'},
    ];
    
    scrollToEnd = ()=> {
        console.log('scrollToEnd------------->');
        const config = [
            {id: this.page+'0',title:'hh'},
            {id: this.page+'1',title:'hh'},
            {id: this.page+'2',title:'hh'},
            {id: this.page+'3',title:'hh'},
            {id: this.page+'4',title:'hh'},
            {id: this.page+'5',title:'hh'},
            {id: this.page+'6',title:'hh'},
            {id: this.page+'7',title:'hh'},
            {id: this.page+'8',title:'hh'},
            {id: this.page+'9',title:'hh'},
        ]
        this.page += 1;
        this.config = this.config.concat(config);
        console.log('this.config------------>',this.config);
        this.setState({
            reload:!this.state.reload
        })
    }
    scrollTo = e => {
        console.log('scrollTo----------->',e);
    }
    render(){
        
        return(
            <View style={styles.container}>
                <ScrollView 
                    style={styles.scrollView}
                    scrollToEnd={this.scrollToEnd}
                    scrollTo={this.scrollTo}
                >
                {
                    this.config.map((item, index)=>
                        <View key={'item'+index} style={styles.item}><Text>{item.id}</Text></View>
                    )
                }
                </ScrollView>
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
    },
    item:{
        height:250,
        backgroundColor:'red',
        marginTop:10,
    }
})

module.exports = ScrollViewScreen;