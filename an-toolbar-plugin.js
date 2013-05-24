(function($) {
    $.fn.anToolbar = function(options) {

        // Function to add button to dropdown
        function addButtonToDropdown(dropdownMenu, button)
        {
            button = button.get(0);
            // Create li element
            li = $('<li><a></a></li>');
            li.children('a').html(button.innerHTML);

            // Move all attributes
            for (i = 0; i < button.attributes.length; i++)
            {
                var a = button.attributes[i];
                li.attr(a.name, a.value);
            }
            // Remove and add classes
            li.removeClass($.fn.anToolbar.defaults.removeClass);
            li.removeClass($.fn.anToolbar.defaults.addClass);

            dropdownMenu.prepend(li);
        }

        return this.each(function() {

            // Initiate default options
            $.fn.anToolbar.defaults = {
                // Adds css class to item when moved into dropdown
                addClass: '',

                // Adds a divider in dropdown for btn-groups
                divider: true,

                // Set HTML of dropdown button
                dropdownHTML: '<i class="icon-chevron-down"></i>',

                // Set position of dropdown
                dropdownPosition: 'right',

                // Decide if buttons should be moved from last or first
                move: 'last',

                // Removes css class to item when moved into dropdown
                removeClass: 'btn'
            };

            // Extend default options
            options = $.extend($.fn.anToolbar.defaults, options);

            // Toolbar element
            var $this = $(this);

            // Calculate items width
            width = 0;
            $.each($(this).children(), function(key,value){
                width += $(value).outerWidth();
            });

            // Check if need to add dropdown
            if ($(this).width() < width){
                dropdown = '<div class="dropdown btn-group"><a class="dropdown-toggle btn" role="button" data-toggle="dropdown" href="#">' +
                    $.fn.anToolbar.defaults.dropdownHTML +
                    '</a><ul class="dropdown-menu" role="menu"></ul></div>';

                // Decide side of dropdown
                if (options.dropdownPosition == 'right'){
                    $(this).append(dropdown);
                } else if (options.dropdownPosition == 'left'){
                    $(this).prepend(dropdown);
                }

            }
            dropdownMenu = $this.children('.dropdown').children('.dropdown-menu');

            // Add items to dropdown until items fit in container
            while ($(this).width() < width){

                // Get tool to be moved
                tool = $($(this).children(":not('.dropdown'):" + options.move));

                // If tool is btn-group, add all btn to dropdown
                if (tool.hasClass('btn-group')){
                    // Add divider if dropdown is not empty and activated
                    if (!dropdownMenu.is(':empty') && $.fn.anToolbar.defaults.divider){
                        dropdownMenu.prepend($('<li class="divider"></li>'));
                    }
                    tool.children().each(function(key, value){
                        addButtonToDropdown(dropdownMenu, $(value));
                    });
                } else if(tool.is('button')){
                    addButtonToDropdown(dropdownMenu, tool);
                }
                tool.remove();

                // Recalculate width
                width = 0;
                $.each($(this).children(), function(key, value){
                    width += $(value).outerWidth();
                });
            }
        });
    }
})(jQuery);
