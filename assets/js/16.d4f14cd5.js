(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{239:function(a,t,s){a.exports=s.p+"assets/img/shell-autoExecShell.88ff4d15.png"},317:function(a,t,s){"use strict";s.r(t);var e=s(0),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"基础"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础"}},[a._v("#")]),a._v(" 基础")]),a._v(" "),e("h3",{attrs:{id:"shell传参"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shell传参"}},[a._v("#")]),a._v(" shell传参")]),a._v(" "),e("p",[a._v('"$1"，直接拿第一个参数.'),e("br"),a._v("\n【重要】注：$0,不是第一个参数！而是指：当前脚本的文件名。"),e("br"),a._v("\n如：sh ./git.sh，则$0为./git.sh。"),e("br"),a._v("\nhttps://zhidao.baidu.com/question/714636440747136725.html"),e("br"),a._v("\nhttps://www.runoob.com/linux/linux-shell-passing-arguments.html"),e("br"),a._v("\n传参赋值"),e("br"),a._v("\nhttps://segmentfault.com/a/1190000019840727?utm_source=tag-newest")]),a._v(" "),e("h3",{attrs:{id:"判断"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#判断"}},[a._v("#")]),a._v(" 判断")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("if [ command ];then  \n   符合该条件执行的语句  \nelif [ command ];then  \n   符合该条件执行的语句  \nelse  \n   符合该条件执行的语句  \nfi  \n")])])]),e("p",[a._v("https://blog.csdn.net/zhan570556752/article/details/80399154")]),a._v(" "),e("ul",[e("li",[a._v("且\n-a\nhttps://blog.csdn.net/u010164190/article/details/78973383")]),a._v(" "),e("li",[a._v("-eq\n数字间的判断")]),a._v(" "),e("li",[a._v("==\n字符串间的判断")])]),a._v(" "),e("h3",{attrs:{id:"动态变量名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#动态变量名"}},[a._v("#")]),a._v(" 动态变量名")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("let index+=1\nval=$(eval echo '$'${index})\necho $val\n")])])]),e("p",[a._v("https://blog.csdn.net/agave7/article/details/94429646")]),a._v(" "),e("h3",{attrs:{id:"let"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#let"}},[a._v("#")]),a._v(" let")]),a._v(" "),e("p",[a._v("let,是 BASH 中用于计算的工具\n注：\n用于执行一个或多个表达式，变量计算中不需要加上 $ 来表示变量。\n运算符间不能有空格，如果表达式中包含了空格或其他特殊字符，则必须引起来。")]),a._v(" "),e("h3",{attrs:{id:"测试过shell命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试过shell命令"}},[a._v("#")]),a._v(" 测试过shell命令")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# 测试\n# let index+=1\n# echo \"$index\"\n# symbol=$i\n# echo $symbol\n# echo $i\n# let index+=1\n# val=$(eval echo '$'${index})\n# echo $val\n")])])]),e("h3",{attrs:{id:"运算符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运算符"}},[a._v("#")]),a._v(" 运算符")]),a._v(" "),e("p",[a._v("https://www.cnblogs.com/good-study/p/11112919.html")]),a._v(" "),e("h3",{attrs:{id:"赋权给所有人"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#赋权给所有人"}},[a._v("#")]),a._v(" 赋权给所有人")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("chmod -R 777 /home/user\n")])])]),e("h2",{attrs:{id:"node环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node环境"}},[a._v("#")]),a._v(" node环境")]),a._v(" "),e("h3",{attrs:{id:"node中执行shell命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node中执行shell命令"}},[a._v("#")]),a._v(" node中执行shell命令")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("//使用插件child_process  \n\nvar process = require('child_process');  \n\n//清空指定文件夹下文件  \nprocess.exec('rm -fr '+copyUrl+'*',function(err){  \n  console.log(err) //当成功是error是null  \n})  \n\n//复制指定文件夹下文件到另一个文件下  \nprocess.exec('cp  -r  复制指定文件夹路径（绝对文件夹路径）      粘贴指定文件夹路径（绝对地址）’,function(err){  \n     console.log(err) //当成功是error是null  \n})  \n")])])]),e("p",[a._v("https://www.jianshu.com/p/a48ac64aa3a7")]),a._v(" "),e("h2",{attrs:{id:"window环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#window环境"}},[a._v("#")]),a._v(" window环境")]),a._v(" "),e("h3",{attrs:{id:"给这个目录赋予所有人可读可写可执行权限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#给这个目录赋予所有人可读可写可执行权限"}},[a._v("#")]),a._v(" 给这个目录赋予所有人可读可写可执行权限")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("chmod  -R 777 /var/www  \n")])])]),e("p",[a._v("这行命令就是给“/var/www”这个目录赋予所有人可读可写可执行权限，4+2+1=7。")]),a._v(" "),e("p",[a._v("对应的："),e("br"),a._v("\n5=4 + 1,表示拥有可读可执行权限，但是没有写权限"),e("br"),a._v("\n0 代表没有任何权限")]),a._v(" "),e("p",[a._v("-rw——- (600) 只有所有者才有读和写的权限"),e("br"),a._v("\n-rw-r–r– (644) 只有所有者才有读和写的权限，组群和其他人只有读的权限"),e("br"),a._v("\n-rwx—— (700) 只有所有者才有读，写，执行的权限"),e("br"),a._v("\n-rwxr-xr-x (755) 只有所有者才有读，写，执行的权限，组群和其他人只有读和执行的权限"),e("br"),a._v("\n-rwx–x–x (711) 只有所有者才有读，写，执行的权限，组群和其他人只有执行的权限"),e("br"),a._v("\n-rw-rw-rw- (666) 每个人都有读写的权限")]),a._v(" "),e("h3",{attrs:{id:"把当前目录权限授予yangtao（用户）："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#把当前目录权限授予yangtao（用户）："}},[a._v("#")]),a._v(" 把当前目录权限授予yangtao（用户）：")]),a._v(" "),e("p",[a._v("chown -R yangtao *")]),a._v(" "),e("h3",{attrs:{id:"开放所有权限："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开放所有权限："}},[a._v("#")]),a._v(" 开放所有权限：")]),a._v(" "),e("p",[a._v("chmod -R 777 *"),e("br"),a._v("\nhttps://blog.csdn.net/u011808596/article/details/79242271")]),a._v(" "),e("h2",{attrs:{id:"linux环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux环境"}},[a._v("#")]),a._v(" linux环境")]),a._v(" "),e("h3",{attrs:{id:"自动执行脚本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自动执行脚本"}},[a._v("#")]),a._v(" 自动执行脚本")]),a._v(" "),e("p",[e("img",{attrs:{src:s(239),alt:"Image Text"}}),e("br"),a._v("\n【重要】"),e("br"),a._v("\nhttps://www.jb51.net/article/101569.htm")])])}),[],!1,null,null,null);t.default=r.exports}}]);