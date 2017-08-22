# react-components
react-components
1.View

2.Text
    2.1 Text 中不能使用 \n \t 等转义字符 
    2.2 字符超出文本容器范围没有换行
3.StyleSheet
    3.1 不支持基础组件行内样式 v 2017年08月18日16:37:24
        const styles = StyleSheet({
            container:{},
            background:{},
        })
        <Text style={[styles.container,{backgroundColor:'red'}]}></Text>
    3.2 不支持 基础组件不能继承自定义组件样式 v 2017年08月22日15:01:40
    
    3.3 平行标签 v 2017年08月18日16:37:24
        <View>
            <View style={}></View>
            <View style={}></View>
        </View>
    3.4 样式取相同名称异常 v 2017年08月18日22:39:01
    
