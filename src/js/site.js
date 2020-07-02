$('.modal .modal-body:nth-child(2)').hide();
$('#success').hide();

$('[download]').on('click', function () {
  $('.modal').modal('hide');
});

$('.modal form').submit(function (e) {
  e.preventDefault();
  var $form = $(this);
  $.post(
    window.location,
    $form.serialize()
  ).then();
  $('.modal .modal-body:nth-child(1)').hide();
  $('.modal .modal-body:nth-child(2)').show();
});

$('#contact-form').submit(function (e) {
  e.preventDefault();
  var $form = $(this);
  $.post(
    window.location,
    $form.serialize()
  ).then();
  $form.addClass('d-none');
  $('#success-contact-form').removeClass('d-none');
});

(function () {
  var form = document.querySelector('form#mc-embedded-subscribe-form');
  if (typeof form !== 'undefined') {
    var email = form.querySelector('input[type="email"]');
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      if (email.value.trim() !== '') {
        this.submit();
      } else {
        email.focus();
      }
    });
  }
}());


(function ($) {
  $("a[href*=\\#]:not([href=\\#])").click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

      var target = $(this.hash),
        headerHeight = $(".navbar").height() + 5; // Get fixed header height

      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - headerHeight
        }, 500);
        return false;
      }
    }
  });
})(jQuery);