$(function () {
    if (screen.width >= 1400) {

        $("img.logo").addClass("animated fadeInDown");
        $("div.dream").addClass("animated fadeInLeft");
        $("img.traveling").addClass("animated fadeInRight");

        $(window).scroll(function () {
            $('#future .section-title').each(function () {
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow + 650) {
                    $(this).addClass("animated fadeInUp");
                    $("div.advantage-free-time, div.advantage-traveling, div.advantage-value")
                        .addClass("animated fadeInUp");
                }
            });

        });

        $(window).scroll(function () {
            $('#order-form .section-title').each(function () {
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow + 650) {
                    $(this).addClass("animated fadeInUp");
                    $("form.form").addClass("animated fadeIn");
                }
            });
        });

    }
})

