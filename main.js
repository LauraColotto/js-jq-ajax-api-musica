$(document).ready(function() {



// Faccio la chiamata all'AJAX


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

// Faccio in modo che al cambio della select mostri solo i generi selezionati

  $("#selected").change(function(){
    var genreSelected = $(this).val();

    if(genreSelected == "" ) {
      $(".cd").show();
    } else {
      $(".cd").hide();
      $(".cd[data-genere ='"+genreSelected+"']").show();
    }
  });


});

// Inizializzo la funzione di render
function render(results) {

  var source = $("#album-template").html();
  var template = Handlebars.compile(source);

  for (var i=0; i< results.length; i++) {
    var album = results[i];

    var genereAlbum = album.genre.toLowerCase();

    var html = template(album);
    $(".cds-container").append(html);
  };

}
