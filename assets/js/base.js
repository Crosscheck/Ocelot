(function () {
  var helper, site;

  helper = {
    scrollTo: function(target) {
      var destination, speed, topoffset;

      if ($(target).offset() !== null) {
        topoffset = 70;
        speed = 600;
        destination = $(target).offset().top - topoffset;
        $("html:not(:animated),body:not(:animated)").animate({
          scrollTop: destination
        }, speed, function() {
          return $(document).scrollTop(destination);
        });
      }
      return false;
    }
  };

  site = {
  };

  $(function() {
    return console.log("Document is ready");
  });

  $(window).load(function(e) {
    return console.log("Window is loaded" + e);
  });

})();
