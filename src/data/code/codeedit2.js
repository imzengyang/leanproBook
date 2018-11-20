module.exports={
    "title": "NPM包",
    "content": [
        {
            "type": "Text",
            "content": "一个Cucumber.js脚本也是一个Node.js脚本。大多数Node.js项目都有NPM包的依赖关系。例如，当您进行网络自动化测试时，您可能需要使用\"selenium-webdriver\"和\"chromedriver\"两个软件包来自动化Chrome浏览器。当您从“Web”项目模板创建新项目时，这些包的信息已经配置在package.json中了。"
        },
        {
            "type": "Text",
            "content": "CukeTest内置了Node.js功能，这意味着你可以在不安装Node.js的情况下运行Cucumber.js脚本。即使你没有在你的机器上安装Node.js，你也可以在CukeTest中运行你的节点脚本，这也使得CukeTest也成为开发Node.js脚本的工具。"
        },
        {
            "type":"H2",
            "content":"包管理器 (Package Configure)"
        },
        {
            "type": "Text",
            "content": "请注意CukeTest有两个发布类型，一个是从Windows应用商店下载的应用。一个桌面版，它是从官网cuketest.com下载的msi安装包安装的。这两种版本的功能略有不同："
        },
        {
            "type": "Text",
            "content": "桌面版CukeTest包管理器对话框有两个选项卡，一个用于编辑npm包列表，一个用于下载npm包。"
        },
        {
            "type": "Text",
            "content": "应用商店版对发布应用有限制，例如应用商店的软件不允许直接下载第三方的包。所以应用商店版CukeTest无下载包的功能，您需要通过Node.js的npm包管理工具下载依赖包。"
        },
        {
            "type": "Text",
            "content": "对于应用商店版，你可以通过npm命令行安装你需要的包，只要你本机装了node.js。例如：如果package.json已经配置好了所有的包，运行\"npm install\"就会安装所有package.json中配置的包。"
        },
        {
            "type": "Text",
            "content": "“添加/删除”这个标签页可以用来方便地编辑package.json的依赖包列表。在这个标签页上，你可以搜索npm包并将其添加到package.json的依赖包列表中。"
        },
        {
            "type": "Text",
            "content": "首先打开这个标签，在右边\"选定的软件包\"下面会显示在package.json中已经存在的依赖包。"
        },
        {
            "type": "Text",
            "content": "在搜索框中输入部分关键字，系统将通过网络搜索与此关键字匹配的npm包，并按照npm包的流行度排序。选中某个npm包，它将被添加到右边的包列表中。请注意，您需要连接到互联网才能使用此搜索功能。"
        },
        {
            "type": "Text",
            "content": "您也可以点击右侧列表中某个依赖包边上的“X”标记，这将从列表中删除这个包。"
        },
        {
            "type": "Text",
            "content": ""
        },
        {
            "type": "Text",
            "content": "添加或修改完所有需要的依赖包之后，点击“保存”按钮会将修改更新到package.json中。同时保存更改后，系统将提示您下载依赖包。"
        },
        {
            "type": "Text",
            "content": "注意：新添加的npm包自动配置用最新的版本，如果您对某个包的版本有特殊要求，请在包列表保存后，手动编辑package.json, 设定需要的版本。"
        },
        {
            "type": "Text",
            "content": "“软件包管理器”对话框中的“下载”标签也用于下载npm软件包。项目创建完成后，需要先下载依赖的npm包，然后才能运行测试脚本。在CukeTest中，下载包很方便。只需点击\"下载\"按钮启动软件包下载。"
        },
        {
            "type": "Text",
            "content": "如果您熟悉node.js开发，那么这个概念对您来说是熟悉的，这就等同于在控制台窗口中运行\"npm install\"命令。"
        },
        {
            "type": "Text",
            "content": "普通的包CukeTest可以直接安装。少数npm包需要node.js才能成功安装，例如chromedriver。因此，您仍然需要在您的机器上安装node.js以便成功下载并安装它们。 CukeTest目前以32位版本发布，因此推荐安装32位node.js，可以与CukeTest更好的工作。"
        },
        {
            type:"H2",
            content:"更新软件包"
        },
        {
            "type": "Text",
            "content": "有些浏览器会经常更新，例如Chrome和Firefox，还需要更新的WebDriver才能使用它们。"
        },
        {
            "type": "Text",
            "content": "例如，在您的测试脚本中总是使用最新的chromedriver是一个好的实践。这可以通过更新相应的npm包到最新版本来完成。要做到这一点，你只需要重新做包下载，通过点击\"下载\"按钮即可。 CukeTest会为您下载最新版本的软件包并更新package.json。"
        },
        {
            "type": "Text",
            "content": "例如，当一个web项目被创建时，你在package.json中有以下内容："
        },
        {
            "type": "Text",
            "content": "下载完成后，版本将更新为\"^3.5.0\" (或者更高). 并且将3.5.0包下载到node_modules文件夹。"
        },
        {
            "type": "Text",
            "content": "有时候，为了避免在较新的版本中出现问题，你可能想使用一个特定的版本，你可以编写版本为“3.4.0”，版本不含“^”，这样npm只会下载完全相同的版本，即使有更新的版本存在。"
        },
        {
            "type": "Text",
            "content": "这与npm是一致的，更多信息请参考NPM 文档"
        },
        {
            "type":"Text",
            content:"智能提示和自动完成"
        },
        {
            "type": "Text",
            "content": "CukeTest具有代码自动完成功能，这使编辑测试脚本非常方便。您不必记住您正在使用的函数或对象的许多细节，而智能感知将提醒您有关对象的方法签名和属性。"
        },
        {
            "type": "Text",
            "content": ""
        },
        {
            "type": "Text",
            "content": "这里是关于这个功能的一些解释："
        },
        {
            "type": "Text",
            "content": "CukeTest编辑器支持node.js和Cucumber.js的智能提示。"
        },
        {
            "type": "Text",
            "content": "对于在项目模板中预先配置的库，在下载软件包后也可以使用智能感。例如，在创建“Web”项目并下载npm包后，您将拥有“selenium-webdriver”的智能感。如果你有这样的语句："
        },
        {
            "type": "Text",
            "content": "在下一行中，当你使用变量“driver”并输入“.”时，你会被提示所有这个库导出的方法和属性。这是通过使用从DefinitelyTyped 项目派生的“@types”包实现的。在package.json中，以下软件包用于智能感知："
        }
    ]
}