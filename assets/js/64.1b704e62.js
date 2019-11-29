(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{296:function(t,s,i){"use strict";i.r(s);var a=i(0),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h2",{attrs:{id:"基础"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#基础"}},[t._v("#")]),t._v(" 基础")]),t._v(" "),i("h3",{attrs:{id:"git-push-set-upstream"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-push-set-upstream"}},[t._v("#")]),t._v(" git push --set-upstream")]),t._v(" "),i("p",[t._v("git push --set-upstream origin master（省略形式为：git push -u origin master）将本地的master分支推送到origin主机（--set-upstream选项会指定一个默认主机），同时指定该主机为默认主机。\n好处：后面使用git push，不加任何参数。")]),t._v(" "),i("h3",{attrs:{id:"git日志"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git日志"}},[t._v("#")]),t._v(" git日志")]),t._v(" "),i("p",[t._v('git log\ngit log的落地方法：\ngit log >log/update.log\nhttps://jingyan.baidu.com/article/4b52d702c3e68afc5d774b7e.html\ngit log输出表格\nrm -rf log/update.csv && git log --date=iso --pretty=format:\'"%h","%an","%ad","%s"\' >> log/update.csv\ngit log --date=iso --pretty=format:\'"%h","%an","%ad","%s"\' >> log/update.xlsx\nhttps://blog.csdn.net/ianly123/article/details/82348723\ngit log格式化文档（--pretty=format:）\nhttps://blog.csdn.net/zheyiw/article/details/88996473\n注意：输出表格的文件格式只能csv')]),t._v(" "),i("h3",{attrs:{id:"创建分支"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#创建分支"}},[t._v("#")]),t._v(" 创建分支")]),t._v(" "),i("p",[t._v("git checkout -b feature/xxxx")]),t._v(" "),i("h2",{attrs:{id:"案例"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#案例"}},[t._v("#")]),t._v(" 案例")]),t._v(" "),i("h3",{attrs:{id:"github打造api网站"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#github打造api网站"}},[t._v("#")]),t._v(" github打造API网站")]),t._v(" "),i("p",[t._v("组件："),i("br"),t._v("\ndocsify"),i("br"),t._v("\n源码仓库：\nhttps://github.com/docsifyjs/docsify\napi中文文档：\nhttps://docsify.js.org/#/zh-cn/")]),t._v(" "),i("h2",{attrs:{id:"使用"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),i("h3",{attrs:{id:"常见场景命令"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#常见场景命令"}},[t._v("#")]),t._v(" 常见场景命令")]),t._v(" "),i("p",[t._v("Command line instructions\nYou can also upload existing files from your computer using the instructions below.")]),t._v(" "),i("p",[t._v('Git global setup\ngit config --global user.name "Administrator"\ngit config --global user.email "admin@example.com"')]),t._v(" "),i("p",[t._v('Create a new repository\ngit clone http://localhost:10080/root/my-diary.git\ncd my-diary\ntouch README.md\ngit add README.md\ngit commit -m "add README"\ngit push -u origin master')]),t._v(" "),i("p",[t._v('Push an existing folder\ncd existing_folder\ngit init\ngit remote add origin http://localhost:10080/root/my-diary.git\ngit add .\ngit commit -m "Initial commit"\ngit push -u origin master')]),t._v(" "),i("p",[t._v("Push an existing Git repository\ncd existing_repo\ngit remote rename origin old-origin\ngit remote add origin http://localhost:10080/root/my-diary.git\ngit push -u origin --all\ngit push -u origin --tags")]),t._v(" "),i("h2",{attrs:{id:"问题"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),i("h3",{attrs:{id:"sec7120-cors-原点“ms-appx-web-microsoft-microsoftedge”无法支持“ms-appx-web-assets-fonts-browsermdl-ttf-browser-mdl2-assets”的-cross-origin-font-资源"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#sec7120-cors-原点“ms-appx-web-microsoft-microsoftedge”无法支持“ms-appx-web-assets-fonts-browsermdl-ttf-browser-mdl2-assets”的-cross-origin-font-资源"}},[t._v("#")]),t._v(" SEC7120: [CORS] 原点“ms-appx-web://microsoft.microsoftedge”无法支持“ms-appx-web:///assets/Fonts/BrowserMDL.ttf#Browser MDL2 Assets”的 cross-origin font 资源")]),t._v(" "),i("p",[t._v("https://www.cnblogs.com/20180609miss/p/10276198.html")]),t._v(" "),i("h3",{attrs:{id:"git-log输出文件，中文乱码"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-log输出文件，中文乱码"}},[t._v("#")]),t._v(" git log输出文件，中文乱码")]),t._v(" "),i("ul",[i("li",[t._v("原因\ngit log输出日志格式，默认为gbk")]),t._v(" "),i("li",[t._v("解决：\ngit log输出日志格式，设置为utf-8")])]),t._v(" "),i("div",{staticClass:"language-shell extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git config --global i18n.commitencoding utf-8\ngit config --global i18n.logoutputencoding utf-8\nexport LESSCHARSET=utf-8\n")])])]),i("p",[t._v("https://blog.csdn.net/qq_27258799/article/details/78977764")])])}),[],!1,null,null,null);s.default=r.exports}}]);