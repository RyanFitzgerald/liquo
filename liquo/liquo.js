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

            // Add liquo class to ul
            $this.addClass("liquo-gallery");

            // Add active class provided category if exists, otherwise add to "all"
            if (settings.start != "all" && $menu.children("a[data-liquo="+settings.start+"]").length > 0) {

                // Set active class on navigation
                $menu.children("a[data-liquo="+settings.start+"]").addClass("liquo-active");

                // Hide everything except active elements
                $this.find("li").not("[data-liquo="+settings.start+"]").addClass("inactive").hide(300);

                // Set last to starting category
                last = settings.start;

            } else {

                // Add active to all
                $menu.children("a[data-liquo=all]").addClass("liquo-active");

            }

            // Randomize if set to true
            if (settings.random) {

                // Loop through each li element and sort randomly
                $this.children("li").sort(function(a,b) {

                    return (Math.round(Math.random())-0.5);

                }).detach().appendTo($this);

            }

            // Handle menu click functionality
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

                // If category is set to all, show all elements, otherwise, show only given category
                if (category == "all") {

                    // Show all elements
                    $this.find("li").show(300).removeClass("inactive");

                    // Set last to null
                    last = null;

                } else if ($this.find("li[data-liquo="+category+"]").length > 0) {

                    // If first category clicked
                    if (last == null) {

                        // Hide everything except current category
                        $this.find("li").not("[data-liquo="+category+"]").addClass("inactive").hide(300);

                    } else if (category != last) {

                        // Hide last category elements
                        $this.find("li[data-liquo="+last+"]").addClass("inactive").fadeOut(300, function() {

                            // Show new category elements
                            $this.find("li[data-liquo="+category+"]").removeClass("inactive").stop().show(300);

                        });
                    }

                    // Update last with current category
                    last = category;

                }

            });

        });

    }

})(jQuery);
