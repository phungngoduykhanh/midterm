// hàm chuyển động header
$(document).ready(function(){  
    $(".wrapper").click(function(){
        $(this).parent().children('.navbar-wrapper-links').slideToggle();
    });
});
$(document).ready(function(){  
    $(".header-sub").click(function(){
        $(this).parent().children('.sub-menu').slideToggle();
    });
});
$(document).ready(function(){  
    $(".header-sub1").click(function(){
        $(this).parent().children('.sub-menu1').slideToggle();
    });
});

 // hàm header
 $(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()){    
            $('header').addClass('sticky');
        }else{
            $('header').removeClass('sticky');
        }
    })
});
// hàm nút cuộn trang lên
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()){
            $('#backtop').fadeIn();
        }else{
            $('#backtop').fadeOut();
        }
    })
});
$('#backtop').click(function(){
    $('html, body').animate({scrollTop:0}, 100);
});

// hàm footer
$(document).ready(function(){  
    $(".header-kn").click(function(){
        $(this).parent().children('.icon-info').slideToggle();
    });
});

$(document).ready(function(){  
    $(".header-cs").click(function(){
        $(this).parent().children('.menu-footer').slideToggle();
    });
});

const nav = document.querySelector('.icon-footer-1')
const hideBtn = document.querySelector('.header-cs')
hideBtn.addEventListener('click', () => {
    nav.classList.toggle('icon-footer-2');
})




