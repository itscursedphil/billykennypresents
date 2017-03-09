(function() {
  'use strict';

  $(document).ready(function(){
    var winHeight = $('#poem p:last-child').outerHeight();
    $("#poem-container").css({
      height: winHeight + 'px'
    });
    $("#poem-container").typed({
        stringsElement: $('#poem-source'),
        loop: true,
        showCursor: false,
        typeSpeed: 20,
        startDelay: 0,
        backDelay: 200
    });

    var response = $('#request-response');
    response.hide();

    $('#request form').on('submit', function(e){
      e.preventDefault();

      response.slideUp().text('');

      var email = $('#request-email').val().toString();
      var city = $('#request-city').val().toString();

      if(!email.length){
        response.text('Please enter a valid email address').slideDown();
        return;
      }

      if(!city.length){
        response.text('Please enter your city').slideDown();
        return;
      }

      $.ajax('//billykennymusic.us15.list-manage.com/subscribe/post-json?u=10c40b173ef744bc6d5fe9c9e&amp;id=6bb39a870a&c=?', {
        method: 'GET',
        dataType: 'jsonp',
        data: {
          EMAIL: email,
          REQ_CITY: city
        },
        success: function(data){
          $('#request form')[0].reset();
          response.text('Yay, see you soon! :)').slideDown();
        },
        error: function(err){
          response.text('There was an error submitting the form :(').slideDown();
        }
      });
    })
  })

}());
