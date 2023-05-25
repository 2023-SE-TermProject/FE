const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/',
        createProxyMiddleware({
            target: 'https://gcu-metaverse.shop:8080',
            changeOrigin: true,
        })
    );
};