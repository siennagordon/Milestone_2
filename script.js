$(document).ready(function(){

let currentQuery = "";

$("#searchBtn").click(function(){

currentQuery = $("#searchBox").val().trim();

if(currentQuery === ""){
alert("Please enter a search term");
return;
}

loadBooks(0);

});

$("#pageSelect").change(function(){

let startIndex = $(this).val();

loadBooks(startIndex);

});

function loadBooks(startIndex){

$("#searchBtn").prop("disabled", true);

let url = "https://www.googleapis.com/books/v1/volumes?q="
+ encodeURIComponent(currentQuery)
+ "&startIndex=" + startIndex
+ "&maxResults=10";

$.getJSON(url,function(data){

$("#results").empty();

if(!data.items){
$("#results").append("<p>No results found</p>");
return;
}

$.each(data.items,function(i,book){

let title = book.volumeInfo.title;
let id = book.id;

let img = "";

if(book.volumeInfo.imageLinks){
img = book.volumeInfo.imageLinks.thumbnail;
}

$("#results").append(

"<div class='book'>" +
"<img src='"+img+"'>" +
"<h3><a href='details.html?id="+id+"'>"+title+"</a></h3>" +
"</div>"

);

});

$("#searchBtn").prop("disabled", false);

});

}

});
