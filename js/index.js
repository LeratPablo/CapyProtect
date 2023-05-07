$(document).ready(function() {
    var windowHeight = $(window).height();
    var isAnimatingFromRight = true;

    function animateElements() {
        var scrollPosition = $(window).scrollTop();

        $(".info").each(function() {
            var offsetTop = $(this).offset().top;

            if (scrollPosition + windowHeight >= offsetTop) {
                $(this).addClass("animated")
                .addClass(isAnimatingFromRight ? "animate-from-right" : "animate-from-left");

                isAnimatingFromRight = !isAnimatingFromRight;
            }
        });
    }

    $(window).on("load scroll", animateElements);
});
