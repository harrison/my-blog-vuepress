(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{276:function(t,r,a){"use strict";a.r(r);var s=a(0),e=Object(s.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"brower"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#brower"}},[t._v("#")]),t._v(" Brower")]),t._v(" "),a("h3",{attrs:{id:"源码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源码"}},[t._v("#")]),t._v(" 源码")]),t._v(" "),a("p",[t._v("https://github.com/bower/bower")]),t._v(" "),a("h2",{attrs:{id:"git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" Git")]),t._v(" "),a("h3",{attrs:{id:"了解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#了解"}},[t._v("#")]),t._v(" 了解")]),t._v(" "),a("h4",{attrs:{id:"github的fork"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github的fork"}},[t._v("#")]),t._v(" github的fork")]),t._v(" "),a("p",[t._v("拷贝源目标git仓库到自己Git仓库")]),t._v(" "),a("h3",{attrs:{id:"基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础"}},[t._v("#")]),t._v(" 基础")]),t._v(" "),a("h4",{attrs:{id:"git-add-a-和-git-add-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-add-a-和-git-add-的区别"}},[t._v("#")]),t._v(" git add -A 和 git add . 的区别")]),t._v(" "),a("p",[t._v("https://blog.csdn.net/caseywei/article/details/90945295")]),t._v(" "),a("h4",{attrs:{id:"更换git账户的密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更换git账户的密码"}},[t._v("#")]),t._v(" 更换git账户的密码")]),t._v(" "),a("ul",[a("li",[t._v("没用做法："),a("br"),t._v("\n让系统重新弹框给用户重新填写用户名和密码，进行提交")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git config --system --unset credential.helper  \n")])])]),a("p",[t._v("window系统（有用）"),a("br"),t._v("\nhttps://my.oschina.net/Jackcrj/blog/2991933"),a("br"),t._v("\n注：修改sourcetree,是无用的。")]),t._v(" "),a("h4",{attrs:{id:"回滚到某个版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回滚到某个版本"}},[t._v("#")]),t._v(" 回滚到某个版本")]),t._v(" "),a("ul",[a("li",[t._v("前提条件：已远程提交"),a("br"),t._v("\n操作：重置到当前分支"),a("br"),t._v("\n结论：虽然可以回到之前的版本，但一更新就又回到未重置前的状态。"),a("span",{staticStyle:{color:"red"}},[t._v("（无用功）")])]),t._v(" "),a("li",[t._v("前提条件：已远程提交"),a("br"),t._v("\n操作：回滚提交"),a("br"),t._v("\n结论：回滚的是要回滚当前版本提交的内容，不能达到目的"),a("br"),t._v("\n参考："),a("br"),t._v("\nhttps://www.cnblogs.com/hopeway-shaon/p/5740280.html")]),t._v(" "),a("li",[t._v("命令回滚："),a("br"),t._v("\ngit reflog"),a("br"),t._v("\ngit reset --hard commit_id"),a("br"),t._v("\ngit push origin HEAD --force"),a("br"),t._v("\n前提条件："),a("br"),t._v("\n当远端设置了分支保护，则首先要将其取消，再强推；"),a("br"),t._v("\n备注："),a("br"),t._v("\nHEAD就代表当前"),a("br"),t._v("\n强推之后，之前的版本被覆盖了，无法再查看到。"),a("br"),t._v("\n参考："),a("br"),t._v("\nhttps://jacheng.top/2017/02/16/Git-%E4%BB%A3%E7%A0%81%E5%9B%9E%E6%BB%9A/")])]),t._v(" "),a("h4",{attrs:{id:"修改远程仓库地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改远程仓库地址"}},[t._v("#")]),t._v(" 修改远程仓库地址")]),t._v(" "),a("ul",[a("li",[t._v("例："),a("br"),t._v("\n远程仓库迁移，本地提交地址需要更新"),a("br"),t._v("\n操作：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git remote set-url origin [url]  \n")])])]),a("p",[t._v("参考："),a("br"),t._v("\nhttps://ddnode.com/2015/04/14/git-modify-remote-responsity-url.html")]),t._v(" "),a("h4",{attrs:{id:"git命名规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git命名规则"}},[t._v("#")]),t._v(" git命名规则")]),t._v(" "),a("p",[t._v("Project 名称 全部小写 ，并且以横杠（-）作为连字符。"),a("br"),t._v("\n命名规则："),a("br"),t._v("\n[产品名称]-[项目类型]-(自定义名称)-[日期]"),a("br"),t._v("\nhttp://res.nie.netease.com/comm/doc/tutorial/git-naming.html")]),t._v(" "),a("h3",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),a("h4",{attrs:{id:"gitbook在window下，liveload失败的解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitbook在window下，liveload失败的解决方案"}},[t._v("#")]),t._v(" gitbook在window下，liveload失败的解决方案")]),t._v(" "),a("p",[t._v("修改，gitbook serve就崩了的解决："),a("br"),t._v("\ngitbook serve执行后，删除_book"),a("br"),t._v("\nhttps://cloud.tencent.com/developer/article/1426724"),a("br"),t._v("\n复制粘贴，gitbook serve就崩了的解决："),a("br"),t._v("\n修改以下文件："),a("br"),t._v("\nC:\\Users\\tobeyang.gitbook\\versions\\3.2.2\\lib\\output\\website\\copyPluginAssets.js"),a("br"),t._v("\n文件中的 112 行"),a("br"),t._v("\n将 confirm: true 改为 confirm: false"),a("br"),t._v("\n参考："),a("br"),t._v("\nhttps://www.cnblogs.com/wenhui92/p/9482629.html")]),t._v(" "),a("h2",{attrs:{id:"grunt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grunt"}},[t._v("#")]),t._v(" Grunt")]),t._v(" "),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("p",[t._v("npm install -g grunt-cli"),a("br"),t._v("\nnpm install grunt --save-dev"),a("br"),t._v("\n参考："),a("br"),t._v("\nhttps://www.gruntjs.net/getting-started")]),t._v(" "),a("h3",{attrs:{id:"基础-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础-2"}},[t._v("#")]),t._v(" 基础")]),t._v(" "),a("h3",{attrs:{id:"自定义任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义任务"}},[t._v("#")]),t._v(" 自定义任务")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("grunt.registerTask(taskName, [description,] taskFunction) \n")])])]),a("h3",{attrs:{id:"grunt实现livereload"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grunt实现livereload"}},[t._v("#")]),t._v(" grunt实现livereload")]),t._v(" "),a("p",[t._v("https://github.com/LakesCode/learnJavascript/wiki/Grunt%E6%8F%92%E4%BB%B6%E4%B9%8BLiveReload-%E5%AE%9E%E7%8E%B0%E9%A1%B5%E9%9D%A2%E8%87%AA%E5%8A%A8%E5%88%B7%E6%96%B0%EF%BC%8C%E6%89%80%E8%A7%81%E5%8D%B3%E6%89%80%E5%BE%97%E7%BC%96%E8%BE%91")]),t._v(" "),a("h3",{attrs:{id:"插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[t._v("#")]),t._v(" 插件")]),t._v(" "),a("h4",{attrs:{id:"实现gitbook的livereload之必需插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现gitbook的livereload之必需插件"}},[t._v("#")]),t._v(" 实现gitbook的livereload之必需插件")]),t._v(" "),a("p",[t._v("npm install grunt-contrib-watch --save-dev\nnpm install grunt-open --save-dev\nnpm install grunt-http-server --save-dev\nnpm install grunt-shell --save-dev")]),t._v(" "),a("h4",{attrs:{id:"grunt-http-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grunt-http-server"}},[t._v("#")]),t._v(" grunt-http-server")]),t._v(" "),a("p",[t._v("https://www.npmjs.com/package/grunt-http-server")]),t._v(" "),a("h3",{attrs:{id:"案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案例"}},[t._v("#")]),t._v(" 案例")]),t._v(" "),a("p",[t._v("https://www.gruntjs.net/sample-gruntfile")])])}),[],!1,null,null,null);r.default=e.exports}}]);