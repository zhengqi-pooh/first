/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-12-22 16:56:27
 * @version $Id$
 */
$(function(){

    // 播放音乐
    $(".bgm-btn").bind("touchstart",function(e){  
      var dom = document.getElementById('bgm');
      if( dom.paused ){
        dom.play();
        $(".bgm-btn").removeClass("mut");
      }else{
        dom.pause();
        $(".bgm-btn").addClass("mut");
      }
    });

    var myswi=new Swiper(".swiper-container",{
        direction:"vertical",//滑动的方向
        grabCursor:true,//在PC端滑动元素上的鼠标为手型，移动端不用加
        mousewheelControl : true,//鼠标滚轮控制
        keyboardControl: true,   // 键盘控制
        onInit:function(swiper){
            swiperAnimateCache(swiper); //隐藏动画元素 
            swiperAnimate(swiper); //初始化完成开始动画
        },
        pagination: '.swiper-pagination',
        onSlideChangeEnd: function(swiper){ 
           swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        },
        watchSlidesProgress:true,
        onSlideChangeEnd : Swipercallback,
        // onProgress:function(swiper){
        //     console.log(swiper.progress)
    });

    /* 每页背景列表 */
    var bgList = ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/5.jpg"];
    for ( var i in bgList) {
      var img = new Image();
      img.src = bgList[i];
    }

    /* SlideChangeEndCallback */
    function Swipercallback(swiper){
        var act = swiper.activeIndex; 
        setTimeout(function() {
          $(".swiper-container").css("background-image", 'url("' + bgList[act] + '")');
      }, 1200);
        swiperAnimate(swiper);
    }

    // var lastY;
    // $(".s6View").bind("touchmove", function(e) {
    //   if ($(this).scrollTop() <= 0) {
    //     //超出顶部
    //       var currentY = e.originalEvent.touches[0].clientY;
    //       if(currentY > (lastY || 0)){

    //       }else if(currentY < (lastY || 0)){
    //       e.stopPropagation();
    //       }
    //       lastY = currentY;
    //   }else if($(this).scrollTop() >= ($(this).children().height() - $(this).height())){
    //     //超出底部
    //     var currentY = e.originalEvent.touches[0].clientY;
    //       if(currentY > (lastY || 0)){
    //       e.stopPropagation();
    //       }else if(currentY < (lastY || 0)){

    //       }
    //       lastY = currentY;
    //   }else{
    //     //在内容区域滑动
    //     e.stopPropagation();
    //   }
    // });


})
