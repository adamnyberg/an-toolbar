(function($) {
    $.fn.anToolbar = function() {
        // the plugin functionality goes in here

        return this.each(function() {

            // set items width
            width = 0;
            $.each($(this).find('ul li'), function(key,value){
                value = $(value);
                width += value.outerWidth();
            });

            // check if need to add dropdown
            if ($(this).width() < width){
                $(this).children().append('<li class="dropdown"><a class="dropdown-toggle btn" role="button" data-toggle="dropdown" href="#"><i class="icon-chevron-down"></i></a><ul id="menu3" class="dropdown-menu" role="menu"></ul></li>');
            }
            console.log('width: ', width);
            // add items to dropdown until items fit in container
            while ($(this).width() < width){
            //for (var i = 0; i < 2; i++){
                // get last tool
                tool = $(this).children().children(":not('.dropdown'):last");
                console.log(tool);

                // move tool
                tool.prependTo($(this).find('.dropdown ul'));
                //$(this).find('.dropdown ul').prepend(tool);
                //$(this).children().children(":not('.dropdown'):last").remove();

                // recalculate width
                width = 0;
                $.each($(this).find('ul li'), function(key,value){
                    value = $(value);
                    width += value.outerWidth();
                });
                console.log('width: ', width);
            }
        });
    }
})(jQuery);