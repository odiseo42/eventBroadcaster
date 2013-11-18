(function($) {
  $.fn.broadcast = function( event ){
    var trigger = function(){
      var elm = $(this);
      elm.each(function(index, el){
        el.dispatchEvent(event);
      })
      elm.children().each(trigger);
    };
    this.each(trigger);
    return this;
  };

}(jQuery));