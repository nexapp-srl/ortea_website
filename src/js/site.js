$('.modal .modal-body:nth-child(2)').hide();
$('#success').hide();

$('[download]').on('click', function() {
  $('.modal').modal('hide');
});

$('.modal form').submit(function(e) {
  e.preventDefault();
  var $form = $(this);
  $.post(
    'https://forms.hubspot.com/uploads/form/v2/',
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
  $form.addClass('hidden');
  $('success-contact-form').removeClass('hidden');
});
