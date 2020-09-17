$(document).ready(function() {

  $.ajax(
    {
      "url" :"https://flynn.boolean.careers/exercises/api/array/music",
      "method": "GET",
      "success": function (data, status) {
        var results = data.response;
        render(results);
      },
      "error": function (richiesta, stato, errori) {
        alert("E' avvenuto un errore. " + errori);
      }
    }
  );
});

function render(results) {

  var source = $("#album-template").html();
  var template = Handlebars.compile(source);

  for (var i=0; i< results.length; i++) {
    var album = results[i];
    var html = template(album);

    $(".cds-container").append(html);
  }

}
