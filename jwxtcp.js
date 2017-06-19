var obj = document.getElementById('iframeautoheight').contentWindow

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