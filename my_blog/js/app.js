$(function() {

    let header = $("header"),
        bgH = $("#bg").innerHeight();
        scrollOffset = $(window).scrollTop();

    /*fixed header*/
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });


    function checkScroll(scrollOffset) {
        if(scrollOffset >= bgH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

     /*smooth scroll*/
     $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;
        
        $("#nav").removeClass("active");  /*закрывает меню*/

        $("#nav_toggle").removeClass("active");/*сворачивает крестик*/

        $("html, body").animate({
            scrollTop: blockOffset
        },500);
    });

    /*menu nav toggle*/
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active"); /*при нажатии на крестик закрывает меню*/
    });
});