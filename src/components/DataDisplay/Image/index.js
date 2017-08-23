import React,{ Component } from 'react';
import { View ,StyleSheet } from '../../../index.js';

import createDOMElement from '../../../../modules/createDOMElement';

class Image extends Component {
    static displayName = 'Image';

    static getSize(uri, success, failure) {
        // ImageLoader.getSize(uri, success, failure);
    }
    static prefetch(uri) {
        // return ImageLoader.prefetch(uri);
    }

    static resizeMode = '';

    render() {
        console.log('img----------->',this.props);
        const {
            children,
            source,
            alt
        } = this.props;

        const imageStyle = {
            alt,
            src: source && ( typeof source ==='object') ? `${source.uri}`: null 
        }
        console.log('imageStyle------------->',imageStyle);
        const isShowImage = this._isShowImage(source,imageStyle);

        return (
            <View style={styles.container}>
                {isShowImage}
            </View>
        )
    }

    _isShowImage = (source , props)=>{
        const showImage = source 
        ?   createDOMElement('img',{
                alt: props.alt || '',
                src: props.src,
                style: [styles.img]
            })
        :   null
        return showImage;    
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: 'transparent',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        zIndex: 0
    },
    img: {
        height: '100%',
        width: '100%',
        zIndex: -1
    },
    center: {
        backgroundSize: 'auto',
        backgroundPosition: 'center'
    },
    contain: {
        backgroundSize: 'contain'
    },
    cover: {
        backgroundSize: 'cover'
    },
    none: {
        backgroundSize: 'auto'
    },
    repeat: {
        backgroundSize: 'auto',
        backgroundRepeat: 'repeat'
    },
    stretch: {
        backgroundSize: '100% 100%'
    }
})

module.exports = Image;