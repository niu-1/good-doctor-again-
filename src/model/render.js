define(["jquery"],function(){
    // 每日推荐
    function Recommend(url,selector){
    //参数传在Recommend中
    this.url = url;
    this.main = $(selector);
    this.init();
    }
    Recommend.prototype = {
        constructor:Recommend,
        init(){
            //加载功能,this.loading之后得到一个deferred对象，为什么？
            this.loading()
            .then(function(res){
                this.render(res);   
            }.bind(this));
        },
        loading(){
            var opt = {
                url:this.url
            }
            return $.ajax(opt);
        },
        render(res){
            var html = "";
            res.forEach(function(item){
                // console.log(item);
                html += `<li>
                <a target="_blank" href="${item.href}" title="${item.title}">
                <img src="${item.img_link}" alt="${item.alt}">
                </a>
            </li>`
            }.bind(this));
           return this.main.html(html);
        }
    } 
    new Recommend("http://localhost:81/good-doctor/data/day_recommend.json","#wrap");
    //贴心药师
    function Iminate(url,selector){
        this.url = url;
        this.main = $(selector);
        this.init();
    }
    Iminate.prototype={
        constructor:Iminate,
        init(){
            this.loading()
            .then(function(res){
                this.render(res);
            }.bind(this));
        },
        loading(){
            var opt = {
                url:this.url
            }
            return $.ajax(opt);
        },
        render(res){
            // console.log(res);
            var html = "";
            res.forEach(function(item){
                // console.log(item);
                html+=`<li>
                <a onclick="Showconsultation(1)">
                    <img src="${item.link}">
                </a>
                <p class="in_name">${item.title}</p>
                <p>
                    <span>${item.content}</span>
                </p>
                <p onclick="Showconsultation(1)">
                    <img src="${item.seek}">
                </p>
            </li>`
            }.bind(this));
            return this.main.html(html);
        }
    }
    new Iminate("http://localhost:81/good-doctor/data/intimate_doctor.json","#tiexin");
    //1F商品渲染
    function floorFirst(url,selector){
        this.url = url;
        this.main = $(selector);
        this.init();
    }
    floorFirst.prototype = {
        constructor:floorFirst,
        init(){
        this.loading()
        .then(function(res){
            this.render(res);
        }.bind(this));    
        },
        loading(){
            var opt = {
                url:this.url
            }
            return $.ajax(opt);
        },
        render(res){
            // console.log(res);
            var html = "";
            res.forEach(function(item){
                html += `<li>
                <div class="des">${item.des}</div>
                <div class="name">${item.title}</div>
                <div class="price">
                    <em>￥</em>
                    ${item.price}
                </div>
                <div class="imgHeight">
                        <a target="_blank" href="${item.href}" title="${item.title}">
                            <img src="${item.picture}" alt="${item.title}">
                        </a>
                    </div>
            </li>`
            }.bind(this));
        return this.main.html(html);
        }
    }
    new floorFirst("http://localhost:81/good-doctor/data/1F.json",".wrap");
    // 2F商品渲染
    // function floorSecond(url,selector){
    //     this.url = url;
    //     this.main = $(selector);
    //     this.init();
    // }
    // floorSecond.prototype = {
    //     init(){
    //         //调用函数，加载页面，然后渲染
    //         this.loading()
    //         .then(function(){
    //             return render(res);
    //         }.bind(this));
    //     },
    //     loading(){
    //         var opt = {
    //             url:this.url
    //         }
    //         return $.ajax(opt);
    //         // this.main.html = html;
    //     },
    //     render(res){
    //         var html = "";
    //         res.forEach(function(item){
    //             html += `<li>
    //             <div class="des">${item.des}</div>
    //             <div class="name">${item.title}</div>
    //             <div class="price">
    //                 <em>￥</em>
    //                 ${item.price}
    //             </div>
    //             <div class="imgHeight">
    //                 <a target="_blank" href="/product-7555.html" title="${item.title}">
    //                     <img src="${item.picture}" alt="${item.title}">
    //                 </a>
    //             </div></li>`
    //         }.bind(this));
    //         return this.main.html(html);
    //     }
    // }
    // new floorSecond("http://localhost:81/good-doctor/2F.json",".wrap");
    // 列表页
    function List(url,selector){
        this.url = url;
        this.main = $(selector);
        this.init();
    }
    List.prototype = {
        constructor:List,
        init(){
        this.loading()
        .then(function(res){
            this.render(res);
            // console.log(res);
        }.bind(this));    
        },
        loading(){
            var opt = {
                url:this.url
            }
            return $.ajax(opt);
        },
        render(res){
            // console.log(res);
            var html = "";
            res.forEach(function(item){
                // console.log(item);
                html += `
                <li data-pharmacyid="25" data-productid="${item.productid}">
                    <div class="icon-more"></div>
                    <a target="_blank" href="${item.href}">
                        <div class="imgHeight">
                            <img src="${item.src}" alt="">
                        </div>
                    </a>
                    <a target="_blank" href="${item.href}">
                        <div class="name" title="${item.title}">${item.title}</div>
                    </a>
                    <div class="black" title=""></div>
                    <div class="des">${item.des}</div>
                    <div class="price">
                        <span class="now_price">${item.now_price}</span>
                        <span class="old_price">${item.old_price}</span>
                    </div>
                    <div class="btn_car">加入购物车</div>
                </li>`
            }.bind(this));
        return this.main.html(html);
        }
    }
    new List("http://localhost:81/good-doctor/data/list.json",".wrap");
});

