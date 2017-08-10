import React from 'react';

const Text = ({...props}) => {
    const {
        children,
        style,
        onPress,
        numberOfLines,//用来当文本过长的时候裁剪文本。包括折叠产生的换行在内，总的行数不会超过这个属性的限制。
        selectable,//决定用户是否可以长按选择文本，以便复制和粘贴。
    } = props;

    // console.log('Text----------->',props);
    // console.log('Text---style-------->',style);
    return(
        <p style={style} >{children}</p>
    )
}


module.exports = Text;