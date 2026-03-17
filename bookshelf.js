$(document).ready(function(){

let query = "lpMqnwEACAAJ or xIS9EAAAQBAJ or VswAEAAAQBAJ";
let url = "https://www.googleapis.com/books/v1/volumes?q=" + query;

$.getJSON(url,function(data){

if(!data.items){
$("#shelf").append("<p>No books found</p>");
return;
}

$.each(data.items,function(i,book){

let title = book.volumeInfo.title;

let id = book.id;

let img = "";

if(book.volumeInfo.imageLinks){
img = book.volumeInfo.imageLinks.thumbnail;
}

$("#shelf").append(

"<div class='book'>" +
"<img src='"+img+"'>" +
"<h3><a href='details.html?id="+id+"'>"+title+"</a></h3>" +
"</div>"

);

});

});

});
