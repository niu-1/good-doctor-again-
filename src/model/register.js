define(["jquery"],function(){
    function Register(){

    }
    Register.prototype = {
        constructor:Register,
        init(selector){
            this.txt = $(selector);
            // console.log(this.txt.html());
            
            if(!this.txt) return;
            this.txt.on("click",$.proxy(this.jump,this));
        },
        jump(){
            location.href = "register.html";
        } 
    }
    return new Register();
})