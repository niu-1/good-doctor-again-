define(["jquery","render"], function($,render) {
    // console.log(render);
    // render.init(".day_recommend");
    login.init(".n-name");
    register.init(".font_red");

    //往主页面加载头
    $.ajax({
        url:"header.html",
        type:"get"
    }).then(function(res){
        // console.log($(res)[13]);
        $("#headWrap").html($(res)[13]);
        // console.log(res);
    })  
    $.ajax({
        url:"footer.html",
        type:"get"
    }).then(function(res){
        // console.log($(res)[13]);
        $("#footerWrap").html($(res)[15]);
        // console.log($(res));
    })  
});
