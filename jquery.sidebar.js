/*
 *  jQuery sidebar plugin
 *  ---------------------
 *  A very simple sidebar jQuery plugin
 *
 *  Copyright (c) 2013-14 - jillix gmbh
 *
 * */
;(function ($){

    /*
     *  $("[jQuery selector]").sidebar({...});
     * */
    $.fn.sidebar = function(options) {

        // defaults
        var settings = $.extend( {
            speed         : 200,         // animate speed
            side          : 'left'       // side: 'left' or 'right'
        }, options);

        // get 'this' jQuery element
        var self = this;

        /*
         *  Opens the sidebar
         *  $("[jQuery selector]).trigger("open");
         * */
        this.on("open", function () {

            // animate properties
            var properties = {};

            // animate to 0px the `right/left`
            properties[settings.side] = 0;

            // start animation
            self.animate(properties, settings.speed, function () {
                // finally emit something
                self.trigger("opened");
            });
        });


        /*
         *  Closes the sidebar
         *
         *  $("[jQuery selector]).trigger("close");
         * */
        this.on("close", function (callback) {

            // animate properties
            var properties = {};

            properties[settings.side] = - self.outerWidth();

            // start animation
            self.animate(properties, settings.speed, function () {
                // finally emit something
                self.trigger("closed");
            });
        });

        return this;
    };
})(jQuery);
