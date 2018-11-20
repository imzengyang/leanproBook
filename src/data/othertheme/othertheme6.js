module.exports = {
    "title": "设置",
    "content": [
        {
            "type": "Text",
            "content": "“设置”对话框用于配置适用于机器上所有CukeTest项目的全局设置。"
        },
        {
            "type": "Text",
            "content": "这些设置分为两组：“常规”和“代码生成”。"
        },
        {
            type: "H2",
            content: "“常规”设置"
        },
        {
            "type": "Text",
            "content": "下图显示了常规设置界面："
        },
        {
            type: "H3",
            content: "1. Cucumber版本"
        },
        {
            "type": "Text",
            "content": "CukeTest支持两种不同版本的Cucumber.js引擎:1.3x和4.0。这两种不同的Cucumber脚本有着不同的格式，你可以选择熟悉的格式开发脚本。如果你之前不了解Cucumber，可以选择4.0，这也是缺省的设置。"
        },
        {
            "type": "Text",
            "content": "请注意这两种格式的设定会影响："
        },
        {
            type: "Text",
            content: "新建项目时的代码"
        },
        {
            type: "Text",
            content: "通过点击步骤上代码生成按钮生成的步骤定义代码"
        },
        {
            "type": "Text",
            "content": "可以在CukeTest右下角的状态条看到您正在使用哪个版本Cucumber的信息。如果你修改了这个设置，需要重启CukeTest使这个设置生效。"
        },
        {
            type: "H3",
            content: "2. 语言"
        },
        {
            "type": "Text",
            "content": "语言设置会影响两个方面："
        },
        {
            "type": "Text",
            "content": "1.显示界面，例如当你设置成中文，所有的界面语言会是中文，如果设置成英文，界面会用英文显示。如果设置成其它语言，而这些语言的翻译没有完成，界面仍旧用缺省的语言即英文来显示。"
        },
        {
            "type": "Text",
            "content": "2.剧本文件中使用的一组关键字。例如在英文中，Step关键词可以是 “Given”，“When”，“Then”，“And”，“But”，“*”等，法文gherkin文档中的关键词是`Etant donné que `, `Quand `, `Alors `, `Et que `, `Mais que `等。在所有语言中，字符“*”可以用作一个步骤开始的关键字。"
        },

        {
            "type": "Text",
            "content": ""
        },
        {
            "type": "H3",
            content: "3. HTML报告样式"
        },
        {
            "type": "Text",
            "content": "对于生成的html报告，有3个报告主题可供选择:"
        },
        {
            "type": "Text",
            "content": "Bootstrap"
        },
        {
            "type": "Text",
            "content": "Foundation"
        },
        {
            "type": "Text",
            "content": "Simple 缺省的设置是Bootstrap，这个主题有着最丰富的报表界面。有关更多信息，请参阅报告"
        },
        {
            "type":"H3",
            content:"4. 截图保存位置"
        },
        {
            "type": "Text",
            "content": "运行的屏幕截图是嵌入在报告文件中，还是单独保存，报告文件引用（仅对html报表生效）。"
        },
        {
            "type":"H2",
            content:"“代码生成”设置"
        },
        {
            "type": "Text",
            "content": "下图是代码生成的配置界面："
        },
        {
            type:"H3",
            content:"1. 生成注释"
        },
        {
            "type": "Text",
            "content": "当CukeTest从步骤文本生成步骤定义代码时是否生成注释。默认情况下它是打开的，如果你不想要默认的注释，你可以把它关掉。"
        },
        {
            type:"H3",
            content:"2. 功能样式"
        },
        {
            "type": "Text",
            "content": "CukeTest将为Feature文件中的每个步骤生成一个函数调用。该功能可以有3种方式："
        },
        {
            type:"Text",
            content:"简单方式：没有回调参数"
        },
        {
            type:"Text",
            content:"回调方式：有回调参数，意味着你需要显式调用回调函数告诉Cucumber该函数完成执行"
        },
        {
            type:"Text",
            content:"异步方式：使用JavaScript的async/await语法。请参阅相应的文档以了解如何使用async/await关键字。"
        },
        {
            type:"H3",
            content:"3. 匹配的表达格式"
        },
        {
            "type": "Text",
            "content": "Cucumber通常使用正则表达式来匹配一个步骤定义函数。在Cucumber 4.0中，支持另一种格式“Cucumber Expression”，其具有较好的可读性。您可以选择您感觉舒适的表情格式。"
        }
    ]
}