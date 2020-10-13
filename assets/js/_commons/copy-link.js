/*
* Copy current page url to clipboard.
* v2.1
* github
* © 2020 Coding
* MIT License
*/

function copyLink(url) {
  if (!url || 0 === url.length)
  url = window.location.href;
  var $temp = $("<input>");

  $("body").append($temp);
  $temp.val(url).select();
  document.execCommand("copy");
  $temp.remove();

  alert("Link copied successfully!");
}