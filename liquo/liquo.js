/*
    Liquo - Filterable and Responsive Image Gallery
    Version 1.0.0
    Ryan Fitzgerald
    https://RyanFitzgerald.ca/
    ---
    Repo: http://github.com/ryanfitzgerald/liquo
    Issues: http://github.com/ryanfitzgerald/liquo/issues
    Licensed under MIT Open Source
 */

(function($) {

    $.fn.liquo = function(options) {

        // Override defaults, if provided
        var settings = $.extend({
            menu: null
        }, options);

        // Throw error if menu not defined
        if (settings.menu == null) throw "Liquo: You must provide a valid menu selector.";

        // Allow chaining and process each DOM node
        return this.each(function() {

            // Define variables
            var $this = $(this); // Store reference to self
            var $menu = $(settings.menu);
            var $options = $menu.children("a[data-liquo]");
            var last = null;

            // Add liquo classes
            $this.addClass("liquo-gallery");

            // Add active class to "all"
            $menu.children("a[data-liquo=all]").addClass("active");

            // Handle menu functionality
            $($options).click(function(e) {

                // Stop link
                e.preventDefault();

                // Get category
                var category = $(this).data("liquo");

                // Change active classes
                if (!$(this).hasClass("active")) {
                    $menu.find(".active").removeClass("active");
                     $(this).addClass("active");
                }

                // Get category value
                if (category == "all") {
                    $this.find("li").fadeIn(300).removeClass("inactive");
                    last = null;
                } else if (last == null) {
                    $this.find("li").not("[data-liquo="+category+"]").addClass("inactive").hide(300);
                    last = category;
                } else if (category != last) {
                    $this.find("li[data-liquo="+last+"]").addClass("inactive").hide(300, function() {
                        $this.find("li[data-liquo="+category+"]").removeClass("inactive").show(300);
                    });
                    last = category;
                }

            });

        });

    }

})(jQuery);
