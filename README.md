# react-components
react-components
1.View
2.Text
3.StyleSheet
    3.1 
        暂时不支
        const styles = StyleSheet({
            container:{},
            background:{},
        })
        <Text style={[styles.container,{backgroundColor:'red'}]}></Text>

        支持
        <Text style={[styles.container,styles.background]}></Text>
