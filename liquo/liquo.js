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
            menu: null,
            theme: null,
            start: "all",
            random: false
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

            // Add liquo classe
            $this.addClass("liquo-gallery");

            // Add theme if provided
            if (settings.theme != null) $this.addClass(theme);

            // Add active class to "all" if no default provided
            if (settings.start != "all" && $menu.children("a[data-liquo="+settings.start+"]").length > 0) {

                $menu.children("a[data-liquo="+settings.start+"]").addClass("liquo-active");

                $this.find("li").not("[data-liquo="+settings.start+"]").addClass("inactive").hide(300);

                last = settings.start;

            } else {

                $menu.children("a[data-liquo=all]").addClass("liquo-active");

            }

            // Randomize if true
            if (settings.random) {

                $this.children("li").sort(function(a,b) {

                    return (Math.round(Math.random())-0.5);

                }).detach().appendTo($this);

            }

            // Handle menu functionality
            $($options).click(function(e) {

                // Stop link functionality
                e.preventDefault();

                // Get category
                var category = $(this).data("liquo");

                // Change active classes
                if (!$(this).hasClass("liquo-active")) {

                    // Remove currently active link
                    $menu.find(".liquo-active").removeClass("liquo-active");

                    // Add new active link
                    $(this).addClass("liquo-active");
                }

                // Get category value
                if (category == "all") {

                    $this.find("li").show(300).removeClass("inactive");

                    last = null;

                } else if ($this.find("li[data-liquo="+category+"]").length > 0) {

                    if (last == null) {

                        $this.find("li").not("[data-liquo="+category+"]").addClass("inactive").hide(300);

                    } else if (category != last) {

                        $this.find("li[data-liquo="+last+"]").addClass("inactive").hide(300, function() {

                            $this.find("li[data-liquo="+category+"]").removeClass("inactive").show(300);

                        });
                    }

                    last = category;

                }



            });

        });

    }

})(jQuery);
