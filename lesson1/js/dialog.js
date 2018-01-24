//构造函数  模拟一个类？？？ 类有什么作用


//es5
// function Dialog() {
//     this.init()
// }
// Dialog.prototype.init = function() {
//         console.log(444)
//     }
//se6  //class(类)
class Dialog {
    //构造函数
    constructor(title, content) {
            this.title = title || '标题';
            this.content = content || '第一天!!!';
            this.init();
        }
        //实例方法
    init() {
        this.createWdrap();
    }
    addEvent() {
        let span = document.querySelectorAll('.float-right')[0];
        let btn = document.querySelectorAll(".success")[0];
        let that = this;
        // span.addEventListener('click', function() {
        //     that.hide();
        // })
        span.addEventListener('click', (event) => {
            this.hide();
        });
        btn.addEventListener('click', (event) => {
            this.hide()
        })
    }
    show() {

    }
    hide() {
        let oDiv = document.querySelectorAll(".dialog")[0];
        oDiv.style.display = "none";

    }



    createButton(txt, cls) {
            let btn = document.createElement("button");
            btn.innerHTML = txt;
            btn.className = cls;

            return btn;
        }
        //tit
    createTitle() {
            let ol = document.createElement('ol');
            let span = document.createElement('span');
            ol.className = "dialog-title";
            ol.innerHTML = this.title;
            span.className = "float-right mr15";
            span.innerHTML = "X";
            ol.append(span)
            return ol;
        }
        //内容
    createContent() {
        let ul = document.createElement('ul');
        let btnSuccess = this.createButton("确定", "success");
        ul.className = "dialog-contrnt";
        ul.innerHTML = this.content;
        ul.append(btnSuccess)
        return ul;
    }
    createWdrap() {
        let oDiv = document.createElement('div');
        let oTit = this.createTitle();
        let oCon = this.createContent();
        oDiv.append(oTit);
        oDiv.append(oCon);
        oDiv.className = "dialog";
        document.body.append(oDiv);
        this.addEvent();
    }

}

let dialog = new Dialog();









// class Dialog {
//     //构造函数
//     constructor() {
//             //实例属性
//             this.name = "123"
//                 //this.init()
//         }
//         //实例方法
//     init() {
//             // console.log(444)
//             console.log(this.name)
//                 //静态属性只能在类内部使用
//             console.log(this.title)
//         }
//         //静态方法
//     static hello() {
//         console.log('hello w')
//     }
// }
// //静态属性
// Dialog.prototype.title = "this is dia"
//     //静态方法只能被类本身调用
// Dialog.hello();
// //Dialog 是类
// //dialog 实例对象
// //new Dialog ()实例化的过程
// let dialog = new Dialog();
// dialog.init();
// //实例对象下面的属性，叫做实例属性
// console.log(dialog.name)