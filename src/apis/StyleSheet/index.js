
import flattenStyle from './flattenStyle';
import StyleRegistry from './registry.js';

const StyleSheet = {
    create(styles) {
        // console.log('创建样式表----------->',StyleSheet);
        const result = {};
        Object.keys(styles).forEach(key => {
            result[key] = StyleRegistry.register(styles[key]);
        });
        return result;
    },
    flatten: flattenStyle,
    hairlineWidth: 1
}

module.exports = StyleSheet;