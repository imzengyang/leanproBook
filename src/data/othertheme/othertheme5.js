module.exports = {
    "title": "新建项目",
    "content": [
        {
            "type": "Text",
            "content": "目前有3个项目模板可以在创建新项目时进行选择："
        },
        {
            type:"Text",
            content:"Basic：基本的Cucumber.js项目"
        },
        {
            type:"Text",
            content:"Web：使用selenium-webdrive的Web测试项目"
        },
        {
            type:"Text",
            content:"API：API测试项目"
        },
        {
            "type": "Text",
            "content": "所有这3个模板都包含package.json文件，您可以根据需要添加依赖的npm包。"
        },
        {
            "type": "Text",
            "content": ""
        },
        {
            "type": "Text",
            "content": "基本模板没有任何预先配置的依赖包。"
        },
        {
            "type": "Text",
            "content": "\"Web\" 模板配置了“selenium-webdriver”，以及不同浏览器的驱动程序：“chromedriver”，“iedriver”，“geckodriver”。 使用这些依赖包，脚本可以分别自动化Chrome，IE和FireFox。如果你只需要自动化部分浏览器，可以将不需要的依赖包删除，具体操作请参见NPM包。"
        },
        {
            "type": "Text",
            "content": "API模板配置了“got”包，这是一个流行的包，用于运行RESTful API测试。"
        },
        {
            "type": "Text",
            "content": "在创建“Web”或“API”项目之后，您需要先下载npm依赖包，然后才能正常运行项目，如果你不需要模板中预设的依赖包，可以通过包管理器或编辑package.json文件删除不需要的依赖包配置。欲了解更多信息，请参阅 NPM包。"
        }
    ]
}