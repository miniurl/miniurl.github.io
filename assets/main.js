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
  $("#create").submit(function(e){
      e.preventDefault();
      let query = $("#createquery").val();
      let url = "https://miniurlid.000webhostapp.com/app/fileproxy?url=" + encodeURIComponent("https://is.gd/create.php?format=simple&logstats=1&url=" + encodeURIComponent(query));
      if(query !== ""){ 
        $.ajax({
          url: url,
          method: "GET",
          success: function(data){
            if (data.slice(0,6) == "Error:"){
              $("#createsuccess").css("display", "none");
              $("#shortened").html("Error shortening URL");
              $("#shortened").attr("href",location.href);
            } else {
              $("#createsuccess").css("display", "block");
              $("#shortened").html(data);
              $("#shortened").attr("href",data);
            }
          },
          error: function(){
            $("#createsuccess").css("display", "none");
            $("#shortened").html("Error - please check your browser or internet settings");
            $("#shortened").attr("href",location.href);
          }
        });
      } else {
          $("#createsuccess").css("display", "none");
          $("#shortened").html("Form cannot be empty");
          $("#shortened").attr("href",location.href);
      }
  })
  $("#retrieve").submit(function(e){
      e.preventDefault();
      let query = $("#retrievequery").val();
      let url = "https://miniurlid.000webhostapp.com/api/get-url?alias=" + query;
      if(query !== ""){ 
        $.ajax({
          url: url,
          method: "GET",
          success: function(data){
            if (data.slice(0,6) == "<br />"){
              $("#retrievesuccess").css("display", "none");
              $("#unshortened").html("No alias found");
              $("#unshortened").attr("href",location.href);
            } else {
              $("#retrievesuccess").css("display", "block");
              $("#unshortened").html(data);
              $("#unshortened").attr("href",data);
            }
          },
          error: function(){
            $("#retrievesuccess").css("display", "none");
            $("#unshortened").html("Error - please check your browser or internet settings");
            $("#unshortened").attr("href",location.href);
          }
        });
      } else {
          $("#retrievesuccess").css("display", "none");
          $("#unshortened").html("Form cannot be empty");
          $("#unshortened").attr("href",location.href);
      }
  })
});
