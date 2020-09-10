module.exports = {
    /* 配置路径(别名配置) */
    configureWebpack: {
        resolve :{
            alias :{
                'src':'@/src',
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views',
            }
        }
    }
}





