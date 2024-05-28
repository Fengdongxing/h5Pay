//最外层新建，设计稿为375时添加如下配置
/*module.exports = {
    plugins: {
        'postcss-pxtorem': {
            rootValue: 37.5,
            propList: ['*'],
        },
    },
};*/
//如果设计稿的尺寸不是 375，而是 750 或其他大小，可以将 rootValue 配置调整为:
// postcss.config.js
module.exports = {
    plugins: {
        // postcss-pxtorem 插件的版本需要 >= 5.0.0
        'postcss-pxtorem': {
            rootValue({ file }) {
                return file.indexOf('vant') !== -1 ? 37.5 : 75;
            },
            propList: ['*'],
        },
    },
};
