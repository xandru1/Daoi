"use strict";


jQuery(document).ready(function ($) {


    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    //    $('#navbar-collapse').find('a[href*=#]:not([href=#])').click(function () {
    //        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    //            var target = $(this.hash);
    //            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //            if (target.length) {
    //                $('html,body').animate({
    //                    scrollTop: (target.offset().top - 40)
    //                }, 1000);
    //                if ($('.navbar-toggle').css('display') != 'none') {
    //                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
    //                }
    //                return false;
    //            }
    //        }
    //    });





    /*---------------------------------------------*
     * Menu Section
     ---------------------------------------------*/

    $('.cd-menu-trigger').on('click', function (event) {
        event.preventDefault();
        $('.home-main-content').addClass('move-out');
        $('#main-nav').addClass('is-visible');
        $('.cd-shadow-layer').addClass('is-visible');
    });
    //close menu
    $('.cd-close-menu').on('click', function (event) {
        event.preventDefault();
        $('.home-main-content').removeClass('move-out');
        $('#main-nav').removeClass('is-visible');
        $('.cd-shadow-layer').removeClass('is-visible');
    });

    //clipped image - blur effect
    set_clip_property();
    $(window).on('resize', function () {
        set_clip_property();
    });

    function set_clip_property() {
        var $header_height = $('.cd-header').height(),
            $window_height = $(window).height(),
            $header_top = $window_height - $header_height,
            $window_width = $(window).width();
        $('.cd-blurred-bg').css('clip', 'rect(' + $header_top + 'px, ' + $window_width + 'px, ' + $window_height + 'px, 0px)');
    }
    $('#main-nav a[href^="#"]').on('click', function (event) {
        event.preventDefault();
        var target = $(this.hash);
        $('.home-main-content').removeClass('move-out');
        $('#main-nav').removeClass('is-visible');
        $('.cd-shadow-layer').removeClass('is-visible');
        $('body,html').animate(
            { 'scrollTop': target.offset().top },
            900
        );
    });








    //fancybox
    $(".youtube-media").on("click", function (e) {
        var jWindow = $(window).width();
        if (jWindow <= 410) {
            return;
        }
        $.fancybox({
            href: this.href,
            padding: 4,
            type: "iframe",
            'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
        });
        return false;
    });

    /*---------------------------------------------*
     * STICKY scroll
     ---------------------------------------------*/

    $.localScroll();



    /*---------------------------------------------*
     * WOW
     ---------------------------------------------*/

    var wow = new WOW({
        mobile: false // trigger animations on mobile devices (default is true)
    });
    wow.init();




    /* ---------------------------------------------------------------------
     Carousel
     ---------------------------------------------------------------------= */

    //    $('.main_home_slider').owlCarousel({
    //        responsiveClass: true,
    //        autoplay: false,
    //        items: 1,
    //        loop: true,
    //        dots: true,
    //        nav: false,
    //        navText: [
    //            "<i class='lnr lnr-chevron-left'></i>",
    //            "<i class='lnr lnr-chevron-right'></i>"
    //        ],
    //        autoplayHoverPause: true

    //    });



    // $('.main_choose_content').owlCarousel({
    //     responsiveClass: true,
    //     autoplay: false,
    //     items: 1,
    //     loop: true,
    //     dots: false,
    //     nav: true,
    //     navText: [
    //         "<i class='fa fa-chevron-left'></i>",
    //         "<i class='fa fa-chevron-right'></i>"
    //     ],
    //     autoplayHoverPause: true

    // });




    // main-menu-scroll
    //
    //    jQuery(window).scroll(function () {
    //        var top = jQuery(document).scrollTop();
    //        var height = 300;
    //        //alert(batas);
    //
    //        if (top > height) {
    //            jQuery('.navbar-fixed-top').addClass('menu-scroll');
    //        } else {
    //            jQuery('.navbar-fixed-top').removeClass('menu-scroll');
    //        }
    //    });

    // scroll Up


    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });
    $('.scrollup').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });



    //    $('#menu').slicknav();

    $('#mixcontent').mixItUp({
        animation: {
            animateResizeContainer: false,
            effects: 'fade rotateX(-45deg) translateY(-10%)'
        }
    });


    //    $('.dropdown-menu').click(function (e) {
    //        e.stopPropagation();
    //    });


    //End
});




$(document).on("scroll", function () {
    if ($(document).scrollTop() > 120) {
        $("nav").addClass("small");
    } else {
        $("nav").removeClass("small");
    }
});

$(document).on('click', '.navbar-collapse.in', function (e) {
    if ($(e.target).is('a')) {
        $(this).collapse('hide');
    }
});








function TransMod() {
    this.translate = function (lang, token) {
        return library[lang][token];
    }

    var library = new Array();

    library["ro"] = new Array();
    library["ro"]["translatable.title"] = "Translator";
    library["ro"]["translatable.subtitlu"] = "Super-eroul tău în promovarea online. Începe prin a ne cunoaște - continuă prin a fi cunoscut.";
    library["ro"]["translatable.intro"] = "Compania Daoi-Source a luat naștere în 2019, are la bază o echipă tânără și ambițioasă.Dezvoltarea companiei, cât și avansarea în carieră se numără printre prioritățile noastre. Ne asumăm responsabilitatea de a aduce pe piață doar produse de calitate ce vor satisface cerințele clientului și se vor raporta la standardele noastre..";
    library["ro"]["translatable.desprenoi"] = "Echipa noastră se ocupă cu crearea website-urilor, aplicațiilor mobile și promovare în mediul online pe rețele sociale și nu doar. Lucrăm cu cele mai noi tehnologii din domeniile respective. Metoda de lucru CI/CD(integrare constantă/livrare constantă) ne ajută să îndeplinim toate cerințele clienților, chiar și cele care apar în timpul dezvoltării proiectelor.";
    library["ro"]["translatable.dece"] = "Noi te ajutăm cu selectarea design-ului, cu idei de promovare în mediul online pe platformele de socializare și nu doar. De asemenea echipa lucrează cu unelte de promovare web din ultima generație fapt ce aduce mai multe beneficii pentru website-urile create.";
    library["ro"]["translatable.mesaj"] = "Trimete-ne un mesaj, iar noi te vom ține la curent cu promoțiile și modificările Daoi-Source.";
    library["ro"]["translatable.introtitle"] = "Introducere";
    library["ro"]["translatable.contactus"] = "Contactează-ne";
    library["ro"]["translatable.aboutus"] = "Despre noi";
    library["ro"]["translatable.hereHelp"] = "Suntem aici să ajutăm.";
    library["ro"]["translatable.deceDaoi"] = "De ce Daoi-Source";
    library["ro"]["translatable.mobileapps"] = "Aplicații mobile";
    library["ro"]["translatable.mobileappssub"] = "Crearea aplicațiilor mobile atât pentru platformele Android cât și iOS.";
    library["ro"]["translatable.promovareonline"] = "Promovare online";
    library["ro"]["translatable.promovareonlinesub"] = "Setarea anunțurilor google adwords. Promovare pe rețelele de socializare.";
    library["ro"]["translatable.webdesign"] = "Web design";
    library["ro"]["translatable.webdesignsub"] = "Design profesional/personalizat în funcție de necesități, design logo, carte de vizită.";
    library["ro"]["translatable.crearesite"] = "Creare site";
    library["ro"]["translatable.crearesitesub"] = "Crearea aplicației web, plasarea în mediul online a afacerii dvs.";
    library["ro"]["translatable.optseo"] = "Optimizare SEO";
    library["ro"]["translatable.optseosub"] = "Servicii de optimizare SEO pentru sporirea traficului pe website.";
    library["ro"]["translatable.support24"] = "Suport 24/24";
    library["ro"]["translatable.support24sub"] = "Oferim support pentru a oferi răspunsuri.";
    library["ro"]["translatable.getTemplate"] = "Obține un template";
    library["ro"]["translatable.beInTouch"] = "Fii la curent";
    library["ro"]["translatable.beInTouchsub"] = "Trimete-ne un mesaj, iar noi te vom ține la curent cu promoțiile și modificările Daoi-Source.";
    library["ro"]["translatable.ourLocation"] = "Locația Noastră";

    library["ro"]["translatable.list-1"] = "Introducere";
    library["ro"]["translatable.list-2"] = "Echipa";
    library["ro"]["translatable.list-3"] = "De ce Daoi-Source";
    library["ro"]["translatable.list-4"] = "Contacte";
    library["ro"]["translatable.list-5"] = "Limba";

    library["ru"] = new Array();
    library["ru"]["translatable.title"] = "Übersetzer";
    library["ru"]["translatable.intro"] = "Даои родился в 2019 году в молодой и амбициозной команде. Среди наших приоритетов - развитие компании и карьерный рост. Мы несем ответственность за вывод на рынок только качественной продукции, которая будет соответствовать требованиям клиентов и будет соответствовать нашим стандартам.";
    library["ru"]["translatable.subtitlu"] = "Ваш супер герой в онлайн-продвижении. Это начинается с того, что мы знаем нас - это продолжает быть известным.";
    library["ru"]["translatable.desprenoi"] = "Наша команда занимается созданием сайтов, мобильных приложений и продвижением в онлайн-среде в социальных сетях и не только. Мы работаем с новейшими технологиями в соответствующих областях. Метод работы CI / CD (Constant Integration / Constant Delivery) помогает нам удовлетворить все требования клиентов, даже те, которые возникают в ходе разработки проекта.";
    library["ru"]["translatable.dece"] = "Мы поможем вам с выбором дизайна, с идеями для продвижения в Интернете в социальных сетях, а не только. Команда также работает с инструментами веб-продвижения последнего поколения, которые приносят больше пользы созданным веб-сайтам.";
    library["ru"]["translatable.mesaj"] = "Отправьте нам сообщение, и мы будем держать вас в курсе акций и изменений Daoi-Source.";
    library["ru"]["translatable.introtitle"] = "Старт";
    library["ru"]["translatable.contactus"] = "контакт";
    library["ru"]["translatable.aboutus"] = "про нас";
    library["ru"]["translatable.hereHelp"] = "мы здесь";
    library["ru"]["translatable.deceDaoi"] = "Пачиму Daoi-Source";
    library["ru"]["translatable.mobileapps"] = "rusa";
    library["ru"]["translatable.mobileappssub"] = "rusa";
    library["ru"]["translatable.promovareonline"] = "rusa";
    library["ru"]["translatable.promovareonlinesub"] = "rusa";
    library["ru"]["translatable.webdesign"] = "rusa";
    library["ru"]["translatable.webdesignsub"] = "rusa";
    library["ru"]["translatable.crearesite"] = "rusa";
    library["ru"]["translatable.crearesitesub"] = "rusa";
    library["ru"]["translatable.optseo"] = "rusa";
    library["ru"]["translatable.optseosub"] = "rusa";
    library["ru"]["translatable.support24"] = "rusa";
    library["ru"]["translatable.support24sub"] = "rusa";
    library["ru"]["translatable.getTemplate"] = "rusa";
    library["ru"]["translatable.beInTouch"] = "rusa";
    library["ru"]["translatable.beInTouchsub"] = "rusa";
    library["ru"]["translatable.ourLocation"] = "rusa";

    library["ru"]["translatable.list-1"] = "введение";
    library["ru"]["translatable.list-2"] = "команда";
    library["ru"]["translatable.list-3"] = "Почему Даои";
    library["ru"]["translatable.list-4"] = "контакты";
    library["ru"]["translatable.list-5"] = "язык";

    library["en"] = new Array();
    library["en"]["translatable.title"] = "Daoi-Source";
    library["en"]["translatable.subtitlu"] = "Your Super-Hero in online promotion. Start by knowing us, continue by being known.";
    library["en"]["translatable.intro"] = "Daoi-Source Source was born in 2019 and its grounds are a young and ambitious team. Our company’s development, as well as advancing through the career, are counted as our basic priorities. We take responsibility to bring in only high-quality products on the market, fulfilling the requirements of our customers and keeping up with our standards.";
    library["en"]["translatable.desprenoi"] = "Our team is busy with creating websites, developing fancy mobile apps and online promoting on social media and much more. We use the newest technologies in the field. Constant Integration/Constant Delivery Method helps us to deliver any requests our customers ask for, even those appearing during the advanced stages of the project.";
    library["en"]["translatable.dece"] = "We help you with choosing the design, ideas for online promoting on internet platforms and not only. Our team uses the latest available tools, which brings more benefits for the new websites.";
    library["en"]["translatable.mesaj"] = "Send us a message, we’ll be more than happy to keep you up-to-date with Daoi-Source changes and offers.";
    library["en"]["translatable.introtitle"] = "Introduction";
    library["en"]["translatable.contactus"] = "Contact us";
    library["en"]["translatable.aboutus"] = "About us";
    library["en"]["translatable.hereHelp"] = "We are here to help";
    library["en"]["translatable.deceDaoi"] = "Why Daoi-Source";
    library["en"]["translatable.mobileapps"] = "Mobile apps";
    library["en"]["translatable.mobileappssub"] = "Building Android and iOS platform-compatible mobile apps.";
    library["en"]["translatable.promovareonline"] = "Online Promotion";
    library["en"]["translatable.promovareonlinesub"] = "Google Adwords advertising. Promotion on Social Media.";
    library["en"]["translatable.webdesign"] = "Web design";
    library["en"]["translatable.webdesignsub"] = "Professional and customized design based on necessities, logo and business card design.";
    library["en"]["translatable.crearesite"] = "Website Build";
    library["en"]["translatable.crearesitesub"] = "Creating the web app, placing your business online.";
    library["en"]["translatable.optseo"] = "SEO (Search Engine Optimization)";
    library["en"]["translatable.optseosub"] = "SEO services for enhancing on-site traffic.";
    library["en"]["translatable.support24"] = "Support 24/7";
    library["en"]["translatable.support24sub"] = "You have questions, we have the right answers.";
    library["en"]["translatable.getTemplate"] = "Get a template";
    library["en"]["translatable.beInTouch"] = "Be in touch";
    library["en"]["translatable.beInTouchsub"] = "Send us a message, we’ll be more than happy to keep you up-to-date with Daoi-Source changes and offers.";
    library["en"]["translatable.ourLocation"] = "Our Location";

    library["en"]["translatable.list-1"] = "Introduction";
    library["en"]["translatable.list-2"] = "Team";
    library["en"]["translatable.list-3"] = "Why Daoi-Source";
    library["en"]["translatable.list-4"] = "Contacts"
    library["en"]["translatable.list-5"] = "Language"

}

(function () {

    function InitStaticText(lang) {
        var langModule = new TransMod();

        $("#title").html(langModule.translate(lang, $("#title").attr("data-token")));
        $("#subtitlu").html(langModule.translate(lang, $("#subtitlu").attr("data-token")));
        $("#intro").html(langModule.translate(lang, $("#intro").attr("data-token")));
        $("#desprenoi").html(langModule.translate(lang, $("#desprenoi").attr("data-token")));
        $("#dece").html(langModule.translate(lang, $("#dece").attr("data-token")));
        $("#mesaj").html(langModule.translate(lang, $("#mesaj").attr("data-token")));
        $("#introtitle").html(langModule.translate(lang, $("#introtitle").attr("data-token")));
        $("#contactus").html(langModule.translate(lang, $("#contactus").attr("data-token")));
        $("#aboutus").html(langModule.translate(lang, $("#aboutus").attr("data-token")));
        $("#hereHelp").html(langModule.translate(lang, $("#hereHelp").attr("data-token")));
        $("#deceDaoi").html(langModule.translate(lang, $("#deceDaoi").attr("data-token")));
        $("#mobileapps").html(langModule.translate(lang, $("#mobileapps").attr("data-token")));
        $("#mobileappssub").html(langModule.translate(lang, $("#mobileappssub").attr("data-token")));
        $("#promovareonline").html(langModule.translate(lang, $("#promovareonline").attr("data-token")));
        $("#promovareonlinesub").html(langModule.translate(lang, $("#promovareonlinesub").attr("data-token")));
        $("#webdesign").html(langModule.translate(lang, $("#webdesign").attr("data-token")));
        $("#webdesignsub").html(langModule.translate(lang, $("#webdesignsub").attr("data-token")));
        $("#crearesite").html(langModule.translate(lang, $("#crearesite").attr("data-token")));
        $("#crearesitesub").html(langModule.translate(lang, $("#crearesitesub").attr("data-token")));
        $("#optseo").html(langModule.translate(lang, $("#optseo").attr("data-token")));
        $("#optseosub").html(langModule.translate(lang, $("#optseosub").attr("data-token")));
        $("#support24").html(langModule.translate(lang, $("#support24").attr("data-token")));
        $("#support24sub").html(langModule.translate(lang, $("#support24sub").attr("data-token")));
        $("#getTemplate").html(langModule.translate(lang, $("#getTemplate").attr("data-token")));
        $("#beInTouch").html(langModule.translate(lang, $("#beInTouch").attr("data-token")));
        $("#beInTouchsub").html(langModule.translate(lang, $("#beInTouchsub").attr("data-token")));

        $("#first-item").html(langModule.translate(lang, $("#first-item").attr("data-token")));
        $("#second-item").html(langModule.translate(lang, $("#second-item").attr("data-token")));
        $("#third-item").html(langModule.translate(lang, $("#third-item").attr("data-token")));
        $("#fourth-item").html(langModule.translate(lang, $("#fourth-item").attr("data-token")));
        $("#fiveth-item").html(langModule.translate(lang, $("#fiveth-item").attr("data-token")));
    }

    InitStaticText("en");
    $("#en").click(function () {
        InitStaticText("en");
    });
    $("#ru").click(function () {
        InitStaticText("ru");
    });
    $("#ro").click(function () {
        InitStaticText("ro");
    });

})();








// Agency Theme JavaScript

(function ($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery); // End of use strict
