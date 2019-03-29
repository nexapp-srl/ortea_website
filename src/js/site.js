$(".modal .modal-body:nth-child(2)").hide()
$("#success").hide()

$("[download]").on("click", function() {
	$(".modal").modal('hide')
})

$(".modal form").submit(function(e) {
  e.preventDefault();

  var $form = $(this);
  $.post($form.attr("action"), $form.serialize()).then(function() {
    $(".modal .modal-body:nth-child(1)").hide()
    $(".modal .modal-body:nth-child(2)").show()

  });
});

