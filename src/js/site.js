$('.modal .modal-body:nth-child(2)').hide();
$('#success').hide();

$('[download]').on('click', function() {
  $('.modal').modal('hide');
});

$('.modal form').submit(function(e) {
  e.preventDefault();
  var $form = $(this);
  $.post(
    window.location,
    $form.serialize()
  ).then();
  $('.modal .modal-body:nth-child(1)').hide();
  $('.modal .modal-body:nth-child(2)').show();
});

$('#contact-form').submit(function(e) {
  e.preventDefault();
  var $form = $(this);
  $.post(
    window.location,
    $form.serialize()
  ).then();
  $form.addClass('d-none');
  $('#success-contact-form').removeClass('d-none');
});

(function() {
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
