module.exports={
    title:"Cucumber.js如何工作",
    content:[
        {type:"Text",content:"自从行为驱动开发的(BDD)从2003年提出依赖，已有多个实现，Cucumber是其中最流行的一个，我们就以Cucumber为例，介绍BDD的工作原理。"},
        {type:"Text",content:"Cucumber是用简单的语言编写的自动化测试工具。因为它们是用简单的语言编写的，所以你团队中的任何人都可以阅读它们。因为任何人都可以阅读它们，所以可以用它们来帮助改善团队之间的沟通，协作和信任。"},
        {type:"H2",content:"Cucumber的历史"},
        {type:"Text",content:"Cucumber是一个基于BDD的测试框架，它能够帮助团队使用业务上的语言对软件系统的行为进行测试。同单元测试相比，Cucumber的测试更多关注的是业务级别的行为，因此非开发人员、业务专家或者客户能够容易的参与，从而保证软件系统的行为切实符合业务需求。"},
        {type:"Text",content:"同时，通过Cucumber的测试，开发人员也能更正确、清晰的理解业务需求，保证开发出来的系统满足客户的期望。由于Cucumber采用几乎近于自然语言的方式描述了软件的行为过程，因此可以直接作为软件的需求文档，也可以直接作为测试或者系统验收的标准文档。 这种方式也淋漓尽致的体现了敏捷的思想：代码即是最有效的文档。        "},
        {type:"Text",content:"Cucumber于2009年出生在Ruby的世界，并在那里成长并成熟。对于Ruby开发者，有些使用Cucumber作为测试工具，但忽略了在当时还显得不太重要的协作目的。他们中的许多人觉得这种额外的一层翻译反倒更麻烦，还需要通过正则表达式匹配步骤文本。为什么直接不用简单的编程语言来代替？"},
        {type:"Text",content:"事实上，用简单的英语写测试本身没有多大意义。如果你关心的是测试，你最好直接使用Ruby，JavaScript或任何你喜欢的编程语言。"},
        {type:"Text",content:"行为驱动的发展就是沟通。改善沟通。在日常人类语言中写下例子（即场景）的目的是为了让事情更清楚，减少歧义，最重要的是鼓励开发人员，测试人员，业务专家和参与项目的任何其他人之间的对话。这让每个人都能就我们正在建设的事情达成一致，什么是正确的事情。"},
        {type:"Text",content:"使用Cucumber自动化这些场景是第二阶段的一个步骤。自动化的场景可以用来反复验证你的应用，例如自动化场景将用作回归测试。所以，Cucumber不光能保证做正确的事，而且能保证将事情做正确。"},
        {type:"Text",content:"现在，Cucumber有很多种语言的实现版本，例如 Java、Ruby、.NET、JavaScript等。"},
        {type:"H2",content:"Cucumber.js"},
        {type:"Text",content:"Cucumber.js是Cucumber的JavaScript实现，可以在Node.js（4及更高版本）和现代 Web浏览器上运行。"},
        {type:"Text",content:"越来越多的人用JavaScript开发它们的应用，不光是Web应用，还包括桌面应用。相比Ruby，Cucumber.js更受到广大开发人员的青睐。你如果是程序员，你是喜欢用同一种编程语言完成所有的开发，还是愿意用一种编程语言(如JavaScript)开发应用，用另一种语言(Ruby)写测试脚本？现在全栈工程师非常受欢迎，JavaScript就是一种全栈开发语言。相应的，Cucumber.js也变得越来越流行。"},
        {type:"Text",content:"随着Cucumber进入JavaScript领域，行为驱动的概念、实践和技术也进入一个崭新的世界。"},
        {type:"Text",content:"当前版本的CukeTest支持以下Cucumber版本:"},
        {type:"Text",content:"Cucumber.js 1.3.x"},
        {type:"Text",content:"Cucumber.js 4.0"},
        {type:"H2",content:"Cucumber.js的安装和使用步骤"},
        {type:"Text",content:"Cucumber.js 只需要在安装好Node.js后，再下载`cucumber`依赖包就可以使用了。"},
        {type:"Text",content:"具体可以根据以下步骤安装:"},
        {type:"Text",content:"1.安装Node.js"},
        {type:"Text",content:"2.创建一个目录，如math"},
        {type:"Text",content:"3.命令行转到`math`的目录下，执行`npm init`，连续按回车，接受缺省值。"},
        {type:"Text",content:"4.命令行继续运行`npm install cucumber chai --save`，来安装Cucumber.js和下面脚本依赖的断言包chai。"},
        {type:"Text",content:"5.在`math`目录下创建`features`目录，在下面创建`simple_math.feature`文件，并输入如下内容："},
        {type:"Image",Uri:require('../../assets/whybdd/sample_feature.png')},
        {type:"Text",content:"6.在features目录下创建`support`目录，并在下面创建world.js和steps.js这两个文件："},
        {type:"Text",content:"world.js"},
        {type:"Image",Uri:require('../../assets/whybdd/worldjs.png')},
        {type:"Text",content:"steps.js"},
        {type:"Image",Uri:require('../../assets/whybdd/stepsjs.png')},
        {type:"Text",content:"7.验证生成的目录是如下结构："},
        {type:"Image",Uri:require('../../assets/whybdd/jiegou.png')},
        {type:"Text",content:"8.命令行回到`math`目录下，运行./node_modules/.bin/cucumber-js"},
        {type:"Text",content:"注意：如果你用CukeTest开发上述的测试脚本，则不需要安装Cucumber.js，因为CukeTest已经内置了Cucumber.js，你只需在CukeTest中打开`math`目录，并按照目录结构创建上面第5步和第6步的文件，就可以在界面中执行了。"},
        


        


    ]
}