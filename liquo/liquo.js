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

            // Add liquo classes
            $this.addClass("liquo-gallery");

            // Handle menu functionality
            $($options).click(function(e) {

                // Stop link
                e.preventDefault();

                // Get category
                var category = $(this).data("liquo");

                // Get category value
                if (category == "all") {
                    alert("All");
                } else {
                    alert(category);
                }

            });

        });

    }

})(jQuery);
