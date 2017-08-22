const ReactComponent = {
    // //Combination
    // get ListView (){ return require('./Combination/ListView'); },
    // // get ScrollView (){ return require('./Combination/ScrollView'); },
    // //DataDisplay
    // get Grid () { return require('./DataDisplay/Grid'); },
    // get Icon () { return require('./DataDisplay/Icon'); },
    get Text () { return require('./DataDisplay/Text'); },
    // Feedback
    get ActivityIndicator () { return require('./Feedback/ActivityIndicator'); },
    // //Navigation
    // get NavBar () { return require('./Navigation/NavBar'); },
    // get Tabbar () { return require('./Navigation/Tabbar'); },
    // get TabItem () { return require('./Navigation/Tabbar/TabItem.js'); },
    //Layout
    get View () { return require('./Layout/View'); },
    // get WhiteSpace () { return require('./Layout/WhiteSpace'); },
    //DataEntry
    get Button () { return require('./DataEntry/Button') }
}


module.exports = ReactComponent;