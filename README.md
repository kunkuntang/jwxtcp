# jwxtcp
教务系统测评脚本

### 此代码仅供参考学习，大家不要拿来干坏事啊 >_<

先上效果图

![效果图](https://github.com/kunkuntang/jwxtcp/raw/master/readme.gif)

```
var obj = document.getElementsByTagName('iframe')[0].contentWindow

var table = obj.document.getElementsByTagName('table')

var btn = obj.document.getElementById('Button1')

var tr = table[1].children[0].children

var badNum = Math.ceil(1 + Math.random() * (tr.length - 2))

for (var i = 1; i < tr.length; i++) {
    for (var j = 3; j < tr[1].children.length; j++) {
        if (i === badNum) {
            tr[i].children[j].children[0].value = "4(良好)"
            continue
        }
        tr[i].children[j].children[0].value = "5(优秀)"
    }
}

btn.click()
```

## 使用方法
 
 1. 打开 教务系统
 2. 转到其中一个测评页
 3. 按下改变世界的f12
 4. 转到控制台的console界面
 5. 复制上面文件里的神奇代码
 6. 粘贴到控制台的console区域
 7. 请大力地死命地敲enter回车键
 
好了我相信你们应该懂得如何装X了 =_=

_ _ _

最后的最后，刚刚过完618的我完全穷逼，敲代码不容易，如果觉得这代码对你有用，请施舍点补脑费吧，做小的感激不尽 T_T

![](https://github.com/kunkuntang/jwxtcp/raw/master/payment.jpg)
