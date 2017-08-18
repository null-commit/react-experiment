# react-components
react-components
1.View
2.Text
3.StyleSheet
    3.1 不支持基础组件行内样式 v2017年08月18日16:37:24
        const styles = StyleSheet({
            container:{},
            background:{},
        })
        <Text style={[styles.container,{backgroundColor:'red'}]}></Text>
    3.2 不支持 基础组件不能继承自定义组件样式
    
    3.3 平行标签 v 2017年08月18日16:37:24
        <View>
            <View style={}></View>
            <View style={}></View>
        </View>
    3.4 嵌套标签 
    3.5 样式取相同名称异常 v 2017年08月18日22:39:01
    
