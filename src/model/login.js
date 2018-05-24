//登录模块
//点击登录，跳转到登录页面
//define:定义模块，三个参数分别为——模块名、模块依赖、模块的实现
define(["jquery"],function(){ 
    function Login(){
       
    }
    Login.prototype = {
        constructor:Login,
        init(selector){
            //登录按钮用的是span按钮
            //获取元素，判断元素是否存在,给元素绑定事件
            this.txt = $(selector);
            if(!this.txt) return;
            // console.log(this.txt.html());

            this.txt.on("click",$.proxy(this.jump,this))     
        },
        jump(){
            location.href = "login.html";
        }
    }
    return new Login();
});