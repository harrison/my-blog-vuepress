(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{299:function(s,t,a){"use strict";a.r(t);var r=a(0),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型"}},[s._v("#")]),s._v(" 类型")]),s._v(" "),a("p",[a("a",{attrs:{href:"#ubuntu"}},[s._v("UBUNTU")]),a("br"),s._v(" "),a("a",{attrs:{href:"#centos"}},[s._v("CENTOS")])]),s._v(" "),a("h2",{attrs:{id:"ubuntu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu"}},[s._v("#")]),s._v(" UBUNTU")]),s._v(" "),a("h3",{attrs:{id:"基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础"}},[s._v("#")]),s._v(" 基础")]),s._v(" "),a("h4",{attrs:{id:"下载命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载命令"}},[s._v("#")]),s._v(" 下载命令")]),s._v(" "),a("p",[s._v("apt-get ....")]),s._v(" "),a("h5",{attrs:{id:"启动ssh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动ssh"}},[s._v("#")]),s._v(" 启动ssh")]),s._v(" "),a("p",[s._v("生成ssh key"),a("br"),s._v("\nroot@f031e62c7661:/var/run/sshd### ssh-keygen -t rsa"),a("br"),s._v("\nGenerating public/private rsa key pair."),a("br"),s._v("\nEnter file in which to save the key (/root/.ssh/id_rsa):"),a("br"),s._v("\nCreated directory '/root/.ssh'."),a("br"),s._v("\nEnter passphrase (empty for no passphrase):"),a("br"),s._v("\nEnter same passphrase again:"),a("br"),s._v("\nYour identification has been saved in /root/.ssh/id_rsa."),a("br"),s._v("\nYour public key has been saved in /root/.ssh/id_rsa.pub."),a("br"),s._v("\nThe key fingerprint is:"),a("br"),s._v("\nSHA256:YsGovhoCRsWf+JECJKkt8TrEYKi7HyRXIIukj6r2zoA root@f031e62c7661"),a("br"),s._v("\nThe key's randomart image is:"),a("br"),s._v("\n+---[RSA 2048]----+"),a("br"),s._v("\n|=+o.             |"),a("br"),s._v("\n|X=.o o           |"),a("br"),s._v("\n|X=. = =          |"),a("br"),s._v("\n|==o= = .         |"),a("br"),s._v("\n|=== o + S        |"),a("br"),s._v("\n|O=   o .         |"),a("br"),s._v("\n|E+o              |"),a("br"),s._v("\n|+ooo             |"),a("br"),s._v("\n|+o=+             |"),a("br"),s._v("\n+----[SHA256]-----+"),a("br"),s._v("\n注意："),a("br"),s._v("\n[fsmythe@example.com ~]$ /usr/bin/ssh-keygen -t dsa"),a("br"),s._v("\nGenerating public/private dsa key pair."),a("br"),s._v("\nEnter file in which to save the key (/home/fsmythe/.ssh/id_dsa):"),a("br"),s._v("\nEnter passphrase (empty for no passphrase): ****** (Enter 'mypassword')"),a("br"),s._v("\nEnter same passphrase again: ****** (Enter 'mypassword')"),a("br"),s._v("\nYour identification has been saved in /home/fsmythe/.ssh/id_dsa."),a("br"),s._v("\nYour public key has been saved in /home/fsmythe/.ssh/id_dsa.pub."),a("br"),s._v("\nThe key fingerprint is:"),a("br"),s._v("\n33:af:35💿58:9c:11:91:0f:4a:0c:3a:d8:1f:0e:e6 fsmythe@example.com")]),s._v(" "),a("h4",{attrs:{id:"修改sshd-config允许root登陆"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改sshd-config允许root登陆"}},[s._v("#")]),s._v(" 修改sshd-config允许root登陆")]),s._v(" "),a("p",[s._v("sed -i 's+PermitRootLogin prohibit-password+PermitRootLogin yes' /etc/ssh/sshd-config"),a("br"),s._v("\nhttps://www.vediotalk.com/archives/606")]),s._v(" "),a("h4",{attrs:{id:"ubuntu无脑操作直接开放root快速操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu无脑操作直接开放root快速操作"}},[s._v("#")]),s._v(" ubuntu无脑操作直接开放root快速操作")]),s._v(" "),a("p",[s._v("sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/g' /etc/ssh/sshd_config"),a("br"),s._v("\nsed -i 's/PermitRootLogin prohibit-password/PermitRootLogin yes/g' /etc/ssh/sshd_config"),a("br"),s._v("\nservice ssh restart")]),s._v(" "),a("h4",{attrs:{id:"进入ubuntu命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进入ubuntu命令"}},[s._v("#")]),s._v(" 进入ubuntu命令")]),s._v(" "),a("p",[s._v("docker exec -it  f031e62c7661 /bin/bash")]),s._v(" "),a("h4",{attrs:{id:"启动sshd命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动sshd命令"}},[s._v("#")]),s._v(" 启动sshd命令")]),s._v(" "),a("p",[s._v("/usr/sbin/sshd -D &"),a("br"),s._v("\n或"),a("br"),s._v("\nservice ssh start")]),s._v(" "),a("h4",{attrs:{id:"linux-ssh连接本机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-ssh连接本机"}},[s._v("#")]),s._v(" linux ssh连接本机")]),s._v(" "),a("p",[s._v("查看sshd启动状态："),a("br"),s._v("\nservice ssh status"),a("br"),s._v("\n否时，sshd启动命令"),a("br"),s._v("\nservice ssh start"),a("br"),s._v("\nssh连接"),a("br"),s._v("\nssh root@127.0.0.1 -p 22")]),s._v(" "),a("h4",{attrs:{id:"宿主机连接linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#宿主机连接linux"}},[s._v("#")]),s._v(" 宿主机连接linux")]),s._v(" "),a("p",[s._v("ssh root@172.17.179.49 -p 10022"),a("br"),s._v("\nssh root@172.17.0.2 -p 10022"),a("br"),s._v("\nssh root@127.0.0.1 -p 10022")]),s._v(" "),a("h4",{attrs:{id:"ubuntu安装ssh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu安装ssh"}},[s._v("#")]),s._v(" ubuntu安装ssh")]),s._v(" "),a("p",[s._v("https://www.cnblogs.com/jie-fang/p/7928406.html"),a("br"),s._v("\n重要"),a("br"),s._v("\nhttps://www.cnblogs.com/gavin-guo/p/11461577.html"),a("br"),s._v("\nhttps://blog.csdn.net/weixin_33691598/article/details/92134075")]),s._v(" "),a("h4",{attrs:{id:"ubuntu安装防火墙"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu安装防火墙"}},[s._v("#")]),s._v(" ubuntu安装防火墙")]),s._v(" "),a("p",[s._v("https://www.cnblogs.com/xwgcxk/p/10820518.html")]),s._v(" "),a("h3",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[s._v("#")]),s._v(" 问题")]),s._v(" "),a("h4",{attrs:{id:"docker的ubuntu镜像无ifconfig和ping-netstat命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker的ubuntu镜像无ifconfig和ping-netstat命令"}},[s._v("#")]),s._v(" docker的ubuntu镜像无ifconfig和ping netstat命令")]),s._v(" "),a("p",[s._v("apt-get update"),a("br"),s._v("\napt-get install net-tools"),a("br"),s._v("\napt-get install iputils-ping"),a("br"),s._v("\n参考："),a("br"),s._v("\nhttps://www.cnblogs.com/jifeng/p/9397304.html")]),s._v(" "),a("h4",{attrs:{id:"docker-apt-get-update一直报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-apt-get-update一直报错"}},[s._v("#")]),s._v(" docker apt-get update一直报错")]),s._v(" "),a("p",[s._v("https://blog.csdn.net/qq_29422251/article/details/78488647")]),s._v(" "),a("h4",{attrs:{id:"ssh免密登录-permission-deny-publickey-password"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssh免密登录-permission-deny-publickey-password"}},[s._v("#")]),s._v(" ssh免密登录-permission deny(publickey,password)")]),s._v(" "),a("ol",[a("li",[s._v("id_rsa.pub复制到authorized_keys(新文件)")]),s._v(" "),a("li",[s._v("chmod -R 600 /root/.ssh")])]),s._v(" "),a("h4",{attrs:{id:"解决ubuntu的ssh自动断线问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决ubuntu的ssh自动断线问题"}},[s._v("#")]),s._v(" 解决Ubuntu的SSH自动断线问题")]),s._v(" "),a("p",[s._v("https://www.jianshu.com/p/f8d9f28b830e"),a("br"),s._v("\nhttps://www.cnblogs.com/daxin/p/5603837.html"),a("br"),s._v("\nhttps://blog.csdn.net/qq_21405949/article/details/52539686")]),s._v(" "),a("h4",{attrs:{id:"ubuntu下-sshd-unrecognized-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu下-sshd-unrecognized-service"}},[s._v("#")]),s._v(' Ubuntu下"sshd:unrecognized service"')]),s._v(" "),a("p",[s._v("https://blog.csdn.net/u013015629/article/details/70045809")]),s._v(" "),a("h4",{attrs:{id:"iptables-v1-6-1-can-t-initialize-iptables-table-filter-permission-denied-you-must-be-root"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iptables-v1-6-1-can-t-initialize-iptables-table-filter-permission-denied-you-must-be-root"}},[s._v("#")]),s._v(" iptables v1.6.1: can't initialize iptables table `filter': Permission denied (you must be root)")]),s._v(" "),a("p",[s._v("docker run -ti --privileged ubuntu:latest"),a("br"),s._v("\ndocker run -ti --privileged zen_wozniak"),a("br"),s._v("\n参考："),a("br"),s._v("\nhttps://blog.csdn.net/Magic_Ninja/article/details/88432140")]),s._v(" "),a("h4",{attrs:{id:"ssh-exchange-identification-read-connection-reset-by-peer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssh-exchange-identification-read-connection-reset-by-peer"}},[s._v("#")]),s._v(" ssh_exchange_identification:read connection reset by peer")]),s._v(" "),a("p",[s._v("https://www.cnblogs.com/taoquns/p/9590960.html")]),s._v(" "),a("h2",{attrs:{id:"centos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos"}},[s._v("#")]),s._v(" CENTOS")]),s._v(" "),a("h3",{attrs:{id:"基础-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础-2"}},[s._v("#")]),s._v(" 基础")]),s._v(" "),a("h4",{attrs:{id:"实时监控日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实时监控日志"}},[s._v("#")]),s._v(" 实时监控日志")]),s._v(" "),a("p",[s._v("tail -f laravel.log"),a("br"),s._v("\n该条命令会输入laravel.log的变化，实现时时监控的目的")]),s._v(" "),a("h3",{attrs:{id:"问题-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题-2"}},[s._v("#")]),s._v(" 问题")]),s._v(" "),a("h4",{attrs:{id:"bash-lsof-command-not-found"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bash-lsof-command-not-found"}},[s._v("#")]),s._v(" -bash: lsof: command not found")]),s._v(" "),a("p",[s._v("解决："),a("br"),s._v("\nyum install lsof"),a("br"),s._v("\n参考："),a("br"),s._v("\nhttps://blog.csdn.net/cryhelyxx/article/details/43228423")]),s._v(" "),a("h4",{attrs:{id:"bash-netstat-command-not-found"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bash-netstat-command-not-found"}},[s._v("#")]),s._v(" -bash: netstat: command not found")]),s._v(" "),a("p",[s._v("yum install net-tools"),a("br"),s._v("\n参考："),a("br"),s._v("\nhttps://blog.csdn.net/slovyz/article/details/50386240")])])}),[],!1,null,null,null);t.default=e.exports}}]);