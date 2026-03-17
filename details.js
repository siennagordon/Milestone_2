$(document).ready(function(){

const params = new URLSearchParams(window.location.search);

const bookID = params.get("id");

let url = "https://www.googleapis.com/books/v1/volumes/" + bookID;

$.getJSON(url,function(data){

let book = data.volumeInfo;

let title = book.title || "No title";

let authors = book.authors ? book.authors.join(", ") : "Unknown";

let publisher = book.publisher || "Unknown";

let description = book.description || "No description available";

let img = "";

if(book.imageLinks){
img = book.imageLinks.thumbnail;
}

$("#bookDetails").append(

"<h1>"+title+"</h1>" +
"<img src='"+img+"'>" +
"<p><strong>Authors:</strong> "+authors+"</p>" +
"<p><strong>Publisher:</strong> "+publisher+"</p>" +
"<p>"+description+"</p>"

);

});

});
