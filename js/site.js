var rootPath = '';
function chuyentrang(url) {
    if (url.length > 0) {
        window.location.href = rootPath + url;

    } else { // trang chu
        document.location.href = '/';
    }
}

// phân trang
$(document).ready(function () {
    if ($('.itemPage').length > 0) {
        $('.pager').show()
    } else {
        $('.pager').hide()
    }
});

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

$(document).ready(function () {
    $('.image-zoom').hover(function () {
        $(this).addClass('transition');

    }, function () {
        $(this).removeClass('transition');
    });
});

$(window).scroll(function (a) {
    if ($(window).width() > 767) {
        if ($(window).scrollTop() > 60) {
            //$("#ve-chung-toi").removeClass("header-bottom");
            $("#ve-chung-toi").addClass("menu-fixtop");
        } else {
            $("#ve-chung-toi").removeClass("menu-fixtop");
           // $("#ve-chung-toi").addClass("header-bottom");
        }
    }

    if ($(window).scrollTop() > 150) {
        $('.fa-angle-up').show()
    } else {
        $('.fa-angle-up').hide();
    }
});


// toast message
toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-bottom-center",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

function showtoastmessage(type, message) {
    if (type == 'success') {
        toastr["success"](message);
        return false;
    }
    if (type == 'info') {
        toastr["info"](message);
        return false;
    }

    if (type == 'warning') {
        toastr["warning"](message);
        return false;
    }
    if (type == 'error') {
        toastr["error"](message);
        return false;
    }
}
$(document).ready(function () {
    new WOW().init();

    // move top
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 200);
        });
    }

    //FAQ
    $('.editBt').hide();
    $('.list_item').click(function () {
        $('.list_item').removeClass('hightlight-faq');
        $('.editBt').hide();
        $(this).find('.editBt').slideToggle();
        $(this).addClass('hightlight-faq');
    });

    $('.page-scroll').click(function () {
        $('.page-scroll').removeClass('active');
        $(this).addClass('active');
    });

})