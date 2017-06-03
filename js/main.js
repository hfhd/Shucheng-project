/**
 * Created by Administrator on 2017/5/30.
 */
$(function () {
    if ((screen.width <=767) ) {
        $(".searchBox").addClass("searchBox-xs");
        $(".searchBox").removeClass("searchBoxwrap");
        $(".newsBox").addClass("import-news-xs");
        $(".picList-box2 .pageBox").removeClass("pull-right");
    }else{
        $(".searchBox").removeClass("searchBox-xs");
        $(".searchBox").addClass("searchBoxwrap");
        $(".newsBox").removeClass("import-news-xs");
        $(".picList-box2 .pageBox").addClass("pull-right");
    };
    /*通知*/
    $(".import-news li span").click(function () {
        $(this).parents("li").stop().hide();
    })
})
$(function () {
    $(".navToggle-title .list-l").click(function () {
        $num = $(this).index();
        $(this).addClass("cur").siblings().removeClass("cur");
        $(".navToggle-con .item").eq($num).stop().show().siblings().stop().hide();
    })
})
//排序方式
// $(function () {
//     var selected = $('.selectToggle-title>option:selected');
//     console.log("8888");
//     selected.val(function(){
//         $index = $(this).index();
//         return true;
//     })
//     console.log($index);
//     $(".selectToggle-con .item").eq($index).stop().show().siblings().stop().hide();
//     $(".selectToggle-title").change(function(){
//         $num = $(this).children('option:selected').index();
//         $(".selectToggle-con .item").eq($num).stop().show().siblings().stop().hide();
//     });
// })
$(function () {
    /*超小屏*/
    if ((screen.width <=767) ) {
        /*搜索滚动*/
        $(window).scroll(function () {
            var headerTop = $(".navbar-xs").height();
            var searchTop = $("#search-scroll").height();
            if($(window).scrollTop() > headerTop+searchTop ){
                $("#search-scroll").addClass("searchBox2-xs-fixed");
            }else {
                $("#search-scroll").removeClass("searchBox2-xs-fixed");
            }
        })
        /*首页 新闻和消息页面高度*/
        $(".containerBox .fixheight").css("height","auto");
        /*精品列表 申请按钮*/
    }
    /*sm <800*/
    if ((screen.width <=991 && screen.width>=768 ) ) {
        $(".detail-main-box .spcs-hide ").stop().show();
        $(".detail-main-box .spcs-show ").stop().hide();
    }
})
//返回顶部
$(function () {
    $(window).scroll(function () {
        if($(window).scrollTop() > 100){
            $(".backTop-box").fadeIn(1000);
        }else {
            $(".backTop-box").fadeOut(1000);
        }
    });
    $(".backTop-box").click(function () {
        var speed = 200;
        $("body,html").animate({
                scrollTop:0
            },
            speed
        );
    })
})
