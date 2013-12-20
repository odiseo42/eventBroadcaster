/*!
 * jQuery Event Broadcaster v1.0
 * Simple way to bradcast and emit customEvent
 * objects to all the DOM
 * https://github.com/odiseo42/eventBroadcaster
 *
 * Copyright 2013 Erick Mendoza
 * Released under the MIT license
 */
(function ($, document, undefined) {
  /**
   * @param {Object} any Event object
   * https://developer.mozilla.org/en/docs/Web/API/Event
   */
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

  /**
   * A wrapper for broadcastEvent to easily emit CustomEvent
   * @param {string} eventType A string containing a JavaScript event type,
   * such as click or submit, OR a custom event name.
   * @param {Object} dataObj In case of custom event, this object will be
   * used as 'details' in CustomEvent property
   */
  $.emitCustomEvent = function(eventType, dataObj){
    var globalBroascaster = $('body'),
      emittedEvent;

    if (typeof eventType !== 'string'){
      throw 'First argument must be an event name';
    }

    emittedEvent = new window.CustomEvent(eventType,
      {
        detail: dataObj,
        bubbles: false
      }
    );

    globalBroascaster.broadcastEvent(emittedEvent);
  };


})(jQuery, document);
