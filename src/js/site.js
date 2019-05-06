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
  $('success-contact-form').removeClass('d-none');
});
