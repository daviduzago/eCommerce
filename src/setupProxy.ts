import { createProxyMiddleware } from "http-proxy-middleware"

module.exports = function (app: any) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "https://simple-grocery-store-api.glitch.me",
            changeOrigin: true,
            pathRewrite: {
                "^/api": "",
            },
        })
    )
}
