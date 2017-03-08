(function() {
  'use strict';

  $(document).ready(function(){
    var height = $('#poem p:last-child').outerHeight();
    $("#poem-container").css({
      height: height + 'px'
    });
    $("#poem-container").typed({
        stringsElement: $('#poem-source'),
        loop: true,
        showCursor: false,
        typeSpeed: 20,
        startDelay: 0,
        backDelay: 200
    });
  })

}());
