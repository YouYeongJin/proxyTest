const createProxyMiddleware = require('http-proxy-middleware'); 

module.exports = function(app) { 
  app.use(
    '/usersb', 
    createProxyMiddleware({
      target: "https://jsonplaceholder.typicode.com/"
      , changeOrigin: true 
      , pathRewrite : {"^/usersb" : "/users"}
    })
  ); 
};
