
$(document).ready(function() {

// overlay-box 上下滑动
$(".innerBox").hover(function() {
	$(this).children(".overlay-box").slideDown('400');
}, function() {
	$(this).children(".overlay-box").slideUp('400');
});

// 绑定页面滚动事件
$(window).bind('scroll',function(){
	var len= $(this).scrollTop();
    var ww=$(window).width();
	if (len>=500){
		$('#returnTop').show();
	}else{
		$('#returnTop').hide();
	}

    if(len>=240 && ww>1024){
        $('.pc-sticky-header').fadeIn('600');
    }else{
        $('.pc-sticky-header').fadeOut('200');
    }
});

// photoGallery 切换按钮样式、图片
function changeGallery(){
    $('.vort li a').click(function() {
        var roomName=($(this).attr('id'));
        $(".vort li a").removeClass('active');
        $(this).addClass('active');
        changeImg(roomName);
    });

    // gallery切换图片
    function changeImg(roomName){
        $('.galleryImg-container .all').css('display','none');
        $('.galleryImg-container .'+roomName).css('display','inline-block');
    }
}

changeGallery();

// mobileHead third level 三级菜单下拉效果
$('.Tdsubmenu .Tdbtn').click(function() {
    $('.dropdown-submenu').css('display','block');
});


/*工具栏*/

function floatToolsFun(){
    // 点击floatTools弹出工具栏
    $('#floatTools').click(function() {
    var leftDistance=parseInt($('#dingzhiBox').css('left'));
    if (leftDistance<0) { 
        $('#dingzhiBox').animate({left:'0px'});
    }else{
        $('#dingzhiBox').animate({left:'-240px'});
    }
    });

    // 点击Fullwidth满屏显示，点击Boxed内容宽度变为90%。
    $('#fullwidth').click(function(){
        $('body').css('padding','0');
    });

    $('#boxed').click(function(){
        $('body').css('padding','0 5%');
    })

    // 点击switch,控制sticky头部显示或隐藏
    $('#switch').click(function() {
        var leftSpace=parseInt($('.slider').css('left'));
        if(leftSpace<=1){
            $('.slider').animate({left: "49px"});
            $('#switch').css('background','#f4f4f4');
            $('.stickyWrap').css('display','none');
        }else{
            $('.slider').animate({left: "1px"});
            $('#switch').css('background','#4bc700');
            $('.stickyWrap').css('display','block');
        }
    });

    //点击图案改变body的背景样式
    $('.bgChange-box div').click(function(){
        var bgStyle=$(this).css('background');
        $('body').css('background',bgStyle);
    })

    //点击色块改为相应的颜色主题样式
    $('.skin-box div').click(function() {
        var colorStyle=$(this).css('background-color');
            localStorage.setItem("colorStyle",colorStyle);
            localStorage.setItem("classNum",$(this).attr('class'));

        // 改变link文件 css 
        $('head link').eq(1).attr('href','css/'+localStorage.getItem('classNum')+'.css');

        // logo颜色转换
        $('.hdleft img').add('.hdLogo img').attr('src','images/'+localStorage.getItem('classNum')+'.png');

        // switch 开关转换当前背景色
        $('#switch').click(function(event) {
            var leftSpace=parseInt($('.slider').css('left'));
            if(leftSpace<=1){
                $('#switch').css('background','#f4f4f4');
            }else{
                $('#switch').css('background',localStorage.getItem('colorStyle'));
            }
        });

    });
    
}

floatToolsFun();

console.log(localStorage.getItem('classNum'));

/*跳转之后的页面自动切换当前主题颜色*/

// 改变link文件 css 
if(localStorage.getItem('classNum')!=null){
    $('head link').eq(1).attr('href','css/'+localStorage.getItem('classNum')+'.css');
}

// logo颜色转换
if(localStorage.getItem('classNum')!=null){
    $('.hdleft img').add('.hdLogo img').attr('src','images/'+localStorage.getItem('classNum')+'.png');
}

// switch 开关转换当前背景色
if(localStorage.getItem('classNum')!=null){
    $('#switch').click(function(event) {
        var leftSpace=parseInt($('.slider').css('left'));
        if(leftSpace<=1){
            $('#switch').css('background','#f4f4f4');
        }else{
            $('#switch').css('background',localStorage.getItem('colorStyle'));
        }
    });
}


// 移动端三级下拉菜单 
$('.dropdown2').find('.dropdown-btn').click(function() {
    $('.dropdown2').addClass('open');
    $('.dropdown-menu2').toggle();
});

$('.dropdown-submenu').find('.thirdBtn').click(function() {
    $('.dropdown-menu3').toggle();
});

$('.dropdown2').click(function() {
    $('.dropdown2').addClass('open');
});

// pc端绑定hover事件下拉子菜单
$('.menuLevel-1').hover(function() {
    $(this).find('.menuLevel-2').css('display','block');
}, function() {
    $(this).find('.menuLevel-2').css('display','none');
});

$('.menuLevel-2 .thirdLevel').hover(function() {
    $(this).find('.menuLevel-3').css('display','block');
}, function() {
    $(this).find('.menuLevel-3').css('display','none');
});

// 点击pc端一级菜单切换字体颜色
$('.menuLevel-1').click(function() {
    $('.menuLevel-1').removeClass('on');
    $(this).addClass('on');
});

});


// 绑定回到顶部按钮的点击事件
$('#returnTop').click(function(){
	$('body').animate({scrollTop:"0"});
})


// 弹出层
function popupDiv(div_id) {
    var div_obj = $("#" + div_id);
    var posLeft = ($(window).width() - div_obj.width()) / 2;
    var posTop = ($(window).height() - div_obj.height()) / 2;
    //添加并显示遮罩层
    $("<div id='mask'></div>").addClass("mask").appendTo("body").fadeIn(200);
    //fadeIn() 方法使用淡入效果来显示被选元素
    div_obj.css({ "top": posTop, "left": posLeft }).fadeIn();

    $('#mask').click(function() {
        hideDiv(div_id);
    });
}

function hideDiv(div_id) {
    $("#mask").remove();
    //fadeOut() 方法使用淡出效果来隐藏被选元素
    $("#" + div_id).fadeOut();
}   
