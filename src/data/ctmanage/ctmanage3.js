module.exports={
    "title": "创建Web自动化测试项目",
    "content": [
        {
            "type": "Text",
            "content": "本章节目标："
        },
        {
            "type": "Text",
            "content": "请在PC上安装最新版的chrome浏览器。以下为具体操作步骤"
        },
        {
            "type": "Text",
            "content": "我们的项目基于node.js,需要用到一些依赖包。这个Web自动化测试项目中用的第三方依赖包有："
        },
        {
            "type": "Text",
            "content": "这些安装包已经由项目模板配置在package.json中。请按如下两种方法之一下载安装依赖包的："
        },
        {
            "type": "Text",
            "content": "修改feature文件为如下："
        },
        {
            "type": "Text",
            "content": "可视化界面应该为"
        },
        {
            "type": "Text",
            "content": "【文件】-【设置】弹出设置界面，选择【代码生成】-【函数风格】，选择【异步函数】。点击【保存】，见下图： Cucumber支持的函数风格有3种：1. 简单 2. 使用回调 3. 异步函数。为自动生成异步的函数方法，需要在CukeTest中“代码生成”设置中将函数风格为【异步】。"
        },
        {
            "type": "Text",
            "content": "回到feature文件的可视化界面，打开definitions/step_definitions.js文件，点击操作步骤的灰色按钮 。CukeTest会自动根据操作步骤生成自动化测试脚本模板 默认生成的代码模板为尚未实现的函数框架，此时对应的测试用例状态为黄色状态"
        },
        {
            "type": "Text",
            "content": "下面实现自动化代码，更改step_definitions.js文件代码:"
        },
        {
            "type": "Text",
            "content": "配置运行脚本时自动进行屏幕录制："
        }
    ]
}