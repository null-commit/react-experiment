
const PLATFROM_OS = {
    Android: 'Android',
    iPhone:'ios',
}

const getPlatform = ()=> {
    const u = global.navigator.userAgent;
    console.log('global----navigator--------->', u);
    const os = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;

    if(PLATFROM_OS[]){

    }

    return 'web';
}

const Platform = {
    OS: getPlatform(),

}


module.exports = Platform;