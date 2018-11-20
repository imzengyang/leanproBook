module.exports={
    "title": "简单的测试项目",
    "content": [
        {
            "type": "Text",
            "content": "本章的操作要实现的目标："
        },
        {
            "type": "Text",
            "content": "下面是操作步骤。"
        },
        {
            "type": "Text",
            "content": "点击工具条上【新建项目】按钮，弹出创建项目对话框。"
        },
        {
            "type": "Text",
            "content": "其中【项目名】中输入“BasicTest“，【项目模板】选择【Basic】，【项目路径】选择桌面，点击【确定】： CukeTest将为你创建一个新的项目。"
        },
        {
            "type": "Text",
            "content": "上一节创建项目完成后，会默认打开的feature1.feature文件。 选择【可视】按钮 ，可以在可视化界面中进行修改。默认feature文件的可视化界面如下： 为添加剧本的名称和描述，操作以下步骤："
        },
        {
            "type": "Text",
            "content": "此时，我们的feature文件内容应该为："
        },
        {
            "type": "Text",
            "content": ""
        },
        {
            "type": "Text",
            "content": "通过以下步骤填充一个场景："
        },
        {
            "type": "Text",
            "content": "最后操作完成的界面应该是这样的："
        },
        {
            "type": "Text",
            "content": ""
        },
        {
            "type": "Text",
            "content": "以上操作是我们在【可视】界面中完成的。点击【文本】 按钮，feature1.feature的文件内容应该为："
        },
        {
            "type": "Text",
            "content": "或者我们也可以在【文本】界面中编辑feature文件再切换到【可视】界面中也可以有同样的效果。"
        },
        {
            "type": "Text",
            "content": "这里同样可以选择在【可视】界面或【文本】界面中进行操作。为描述方便，我们会描述 【可视】界面中的步骤。【文本】界面的操作类似于其它的文本编辑。"
        },
        {
            "type": "Text",
            "content": "验证：最终，场景大纲的内容应该为： 或者【文本】界面直接输入如下内容："
        },
        {
            "type": "Text",
            "content": "我们有了feature文件，其中定义场景和场景中的步骤，现在我们可以直接生成自动化代码样例。"
        },
        {
            "type": "Text",
            "content": "操作以下步骤生成自动化代码："
        },
        {
            "type": "Text",
            "content": "打开stepdefinitions/definitions1.js文件 ，回到feature文件中的【可视】界面。点击每个操作步骤的后面的灰色按钮（如下图）可以自动在stepdefinitions/definitions1.js文件中生成对应的自动化代码样例 下面是步骤定义代码生成后的界面："
        },
        {
            "type": "Text",
            "content": "重复步骤1，以同样的方式为这个场景中其余的未实现的步骤生成类似的框架代码。"
        },
        {
            "type": "Text",
            "content": "在support目录下新建文件“env.js”，填入如下内容："
        },
        {
            "type": "Text",
            "content": "修改step_definitions/definitions1.js文件， 实现刚才根据操作步骤中生成的代码样例，最终的代码如下："
        },
        {
            "type": "Text",
            "content": "CukeTest提供的有项目语法验证功能，编写完代码后，验证代码无误后运行项目。"
        },
        {
            "type": "Text",
            "content": "当有很多场景的时候，我们有时只需要运行其中的个别场景，我们可以给不同的场景或剧本添加标签，然后运行的时候可通过标签过滤想要运行的场景。下面步骤提示用户如何通过标签过滤运行某些场景。"
        },
        {
            "type": "Text",
            "content": "在feature文件【场景大纲】的顶部双击添加标签：。 添加新标签名称为“math” 移开鼠标，自动转换为 。"
        },
        {
            "type": "Text",
            "content": "工具条上【运行项目】边点击向下箭头，然后选【编辑运行配置】： 这会打开运行配置对话框。通过点击菜单【运行】->【编辑运行配置文件】也可以做到。"
        },
        {
            "type": "Text",
            "content": "在配置窗口，点击【新建配置文件】创建一个新配置，在【过滤器标签】中填写“@math” 点击【确定】，会关闭对话框并保存配置。"
        },
        {
            "type": "Text",
            "content": "点击下拉箭头，选中 【配置1】，如下图所示，即会执行这个运行配置。 从测试报告中可以看到，只有带有“math”标签的场景运行了，达到了过滤的效果。"
        }
    ]
}