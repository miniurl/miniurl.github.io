/*
* main.js
* https://github.com/miniurl/miniurl.github.io/blob/main/assets/main.js
* https://miniurl.github.io/assets/main.js
* 
* By xyti, https://github.com/xyti
*
* License : https://github.com/miniurl/miniurl.github.io/blob/main/LICENSE (MIT)
* source  : https://github.com/miniurl/miniurl.github.io
*/
const windowurl = new URL(window.location.href);
if (windowurl.searchParams.get("url") !== "" && windowurl.searchParams.get("url") != null) {
  document.body.outerHTML = '<body><img style="position:absolute;margin:0px auto;float:none;left:0px;right:0px;top:30%;" src="/assets/load.gif"></body>';
  window.history.pushState( {}, '', 'https://miniurl.github.io' );
  location.replace("https://miniurlz.000webhostapp.com/" + windowurl.searchParams.get("url"));
}
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
