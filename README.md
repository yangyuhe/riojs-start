# rio-start
rio-start旨在提供一个简单的利用riojs+webpack进行多页面开发的例子。目前的webpack配置方案是每个入口页面分离出单独的css，单独的业务js代码和公共的js库文件。你可以运行npm run dev或者npm run prod 看看产生的结果。开发阶段可以使用npm run serve-{模块名}来对指定的页面进行开发，开发服务器由webpack-dev-server提供。  
***更多的强大和灵活的配置建议大家阅读webpack指南。***