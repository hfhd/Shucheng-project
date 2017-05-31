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
    $(".searchBox-xs .search-input").focus(function(){
        $(".hot-search").stop().show();
    });
    $(".searchBox-xs .search-input") .blur(function () {
        $(".hot-search").stop().hide();
    })
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
$(function () {
    if ((screen.width <=767) ) {
        $(window).scroll(function () {
            var headerTop = $(".navbar-xs").height();
            var searchTop = $("#search-scroll").height();
            if($(window).scrollTop() > headerTop+searchTop ){
                $("#search-scroll").addClass("searchBox2-xs-fixed");
            }else {
                $("#search-scroll").removeClass("searchBox2-xs-fixed");
            }
        })
        $(".containerBox .fixheight").css("height","auto");
    }
})