$('.modal .modal-body:nth-child(2)').hide();
$('#success').hide();

$('[download]').on('click', function () {
  $('.modal').modal('hide');
});

var url = 'https://www.ortea.it/next-email.php';

$('.modal form').submit(function (e) {
  e.preventDefault();
  var $form = $(this);
  $.post(window.location, $form.serialize()).then();

  var formData = new FormData(this);
  formData.append('_page_title', document.title);
  formData.append('_page_url', window.location.href);
  $.ajax({
    type: 'POST',
    url: url,
    data: formData
  });

  $('.modal .modal-body:nth-child(1)').hide();
  $('.modal .modal-body:nth-child(2)').show();
});

$('#contact-form').submit(function (e) {
  e.preventDefault();
  var $form = $(this);
  $.post(window.location, $form.serialize()).then();

  var formData = new FormData(this);
  formData.append('_page_title', document.title);
  formData.append('_page_url', window.location.href);
  $.ajax({
    type: 'POST',
    url: url,
    data: formData
  });

  $form.addClass('d-none');
  $('#success-contact-form').removeClass('d-none');
});

$('#newsletter-form').submit(function (e) {
  e.preventDefault();
  var $form = $(this);
  $.post(window.location, $form.serialize()).then();

  var formData = new FormData(this);
  formData.append('_page_title', document.title);
  formData.append('_page_url', window.location.href);
  $.ajax({
    type: 'POST',
    url: url,
    data: formData
  });

  $form.addClass('d-none');
  $('#success-newsletter-form').removeClass('d-none');
});
