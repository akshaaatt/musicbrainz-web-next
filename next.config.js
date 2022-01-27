const path = require('path')

module.exports = {
    reactStrictMode: true,
    images: {
        domains: [
            'is1-ssl.mzstatic.com',
            'is2-ssl.mzstatic.com',
            'is3-ssl.mzstatic.com',
            'is4-ssl.mzstatic.com',
            'is5-ssl.mzstatic.com',
        ],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}
