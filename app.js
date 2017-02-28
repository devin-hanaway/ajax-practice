$('document').ready(function(){
  $('button').click(function(){
    getMovie()
  })
})

function getMovie(){
    var url= "http://www.omdbapi.com/?t="
    url += $('input').val()
    $.get(url, function(data){
      console.log(data);
      var title = data.Title
      var poster = data.Poster
      updatePage(title, poster)
    })
  }




  function updatePage(title, poster){
      $("body").append(title)
      console.log(poster);
      $("body").append('<img src="'+ poster +'">')
  }

//callback
