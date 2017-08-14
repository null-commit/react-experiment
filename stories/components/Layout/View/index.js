import React from 'react';

import { View ,StyleSheet} from '../../../../src';

const ViewScreen = ({...props}) => {
    return(
        <div>
            view3
            <View style={styles.container}>
                viewtest
            </View>
        </div>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'red',
        height:60,
    }
})

module.exports = ViewScreen;