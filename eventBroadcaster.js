(function($) {
  "use strict";
  $.fn.broadcastEvent = function( eventObj ){
    var trigger = function(){
      if (this.dispatchEvent) {
        this.dispatchEvent(eventObj);
      }
      $(this).children().each(trigger);
    };
    this.each(trigger);
    return this;
  };

}(jQuery));