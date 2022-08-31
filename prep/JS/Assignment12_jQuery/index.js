  $('#b1').click(function(){
      $("p").hide();
  });
  $("#b2").click(function(){
    $("p").show();
});

$('#b3').click(function(){
$.ajax({
    url: "https://jsonplaceholder.typicode.com/todos/12",
    type: "GET",
    success: function(data) {
        console.log(data);
        document.getElementsByTagName("p")[1].innerText = data.title;
    }
})
});