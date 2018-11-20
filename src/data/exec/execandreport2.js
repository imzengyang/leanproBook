module.exports =
    {
        "title": "配置文件编辑",
        "content": [
            {
                "type": "Text",
                "content": "配置文件是如何运行Cucumber项目的预配置设置。一个项目可以有多个预设的运行配置文件。在配置文件配置对话框中，您可以设置："
            },
            {
                "type": "Text",
                "content": "下面是配置编辑的界面："
            },
            {
                "type": "Text",
                "content": ""
            },
            {
                "type": "Text",
                "content": "要配置配置文件，请单击“运行”=>“编辑运行配置文件…”菜单，或单击工具栏上的相应按钮（“运行项目”按钮旁边的向下箭头）。"
            },
            {
                "type": "Text",
                "content": "配置文件保存为项目下的“config / cucumber.yml”文件。"
            },
            {
                "type": "Text",
                "content": "以下是每一项的详细解释："
            },
            {
                "type": "Text",
                "content": ""
            },
            {
                "type": "Text",
                "content": "有三种报告格式可供选择："
            },
            {
                "type": "Text",
                "content": "如果报表格式为“html”，还有另一个设置影响报表的布局，即“报表主题”，这是个全局设置，对所有项目起作用。CukeTest有3个报表主题。更多信息请参考 报告主题"
            },
            {
                "type": "Text",
                "content": "\"simple\"格式的报告将仍然保存为html文件。 \"simple\"报告的内容与使用缺省参数从命令行运行Cucumber.js具有相同的内容和着色。"
            },
            {
                "type": "Text",
                "content": "默认设置是“相同的文件名”，这也是不用任何配置文件时的缺省设置。使用相同的报告文件名称，这意味着新生成的报告将覆盖先前生成的报告。报告文件可以在当前脚本文件夹的“reports”子文件夹中找到。例如，如果您的项目名称是“shopping”，则报告将为“shoppingreport.html”或“shoppingreport.json”。"
            },
            {
                "type": "Text",
                "content": "如果将此设置配置为\"每次新的文件名\"，则每次都会生成新的文件名。名称格式为“[项目名]_ [日期]report.[编号] ”。例如，“shopping2017-07-15_report1.html”。"
            },
            {
                "type": "Text",
                "content": "如果使用相对路径，则会在项目文件夹[project_folder] / reports / [Out Dir]中生成报告。或者，如果您将“Out Dir”设置为绝对路径，报告将直接在该文件夹内生成。"
            },
            {
                "type": "Text",
                "content": "这个设置适用于使用“Web”模板创建的脚本。它自动设置BROWSER环境变量。在Web模板的web_driver.js中，脚本从这个环境变量中读取浏览器信息："
            },
            {
                "type": "Text",
                "content": "用户可以在脚本执行过程中录制视频，只要用户打开录制视频开关即可。 同时，如果有多个屏幕，用户可以选择录制其中的一个屏幕。 视频将被录制为*.webm格式，可以直接在Chrome或FireFox浏览器，或其他媒体播放器中播放。"
            },
            {
                "type": "Text",
                "content": "你也可以通过单击CukeTest项目中的*.webm文件来重放这个视频，CukeTest将打开一个新窗口并回放视频文件。"
            },
            {
                "type": "Text",
                "content": "配置文件编辑对话框中还有一些其他界面元素："
            },
            {
                "type": "Text",
                "content": ""
            },
            {
                "type": "Text",
                "content": "命令行的详细内容请参见命令行界面"
            }
        ]
    }
