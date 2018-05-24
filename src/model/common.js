define(["login","register","jquery"],function(result,re){
    $.ajax({
        url:"header.html",
        type:"get"
    }).then(function(res){
        // console.log($("#headWrap"));
        $("#headWrap").html($(res)[13]);
        // console.log($(".n-name"))
        result.init(".n-name");
        // console.log(res);
    })  
    $.ajax({
        url:"footer.html",
        type:"get"
    }).then(function(res){
        // console.log($(res)[13]);
        $("#footerWrap").html($(res)[15]);
        // console.log($(res));
        
        re.init(".font_red");
        // console.log($(".font_red"));
    }) 
})
