/*
* main.js
* https://github.com/miniurl/miniurl.github.io/blob/main/assets/main.js
* https://miniurl.github.io/assets/main.js
* 
* By Nimityx, https://github.com/Nimityx
*
* License : https://github.com/miniurl/miniurl.github.io/blob/main/LICENSE (MIT)
* source  : https://github.com/miniurl/miniurl.github.io
*/
$(document).ready(function(){
  $("#btn").click(function(e){
      e.preventDefault();
      let query = $("#query").val();
      let url = "https://miniurlid.000webhostapp.com/api/get-url?alias=" + query;
      if(query !== ""){ 
        $.ajax({
          url: url,
          method: "GET",
          success: function(data){
            if (data.slice(0,6) == "<br />"){
              $("#unshortened").html("No alias found");
              $("#unshortened").attr("href",location.href);
            } else {
              $("#unshortened").html(data);
              $("#unshortened").attr("href",data);
            }
          },
          error: function(){
            $("#unshortened").html("Error - please check your browser or internet settings");
            $("#unshortened").attr("href",location.href);
          }
        });
      } else {
          $("#unshortened").html("This cannot be empty");
          $("#unshortened").attr("href",location.href);
      }
  })
});
