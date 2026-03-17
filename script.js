$(document).ready(function(){

let resultsPerPage = 10;
let currentQuery = "";

$("#searchBtn").click(function(){

currentQuery = $("#searchBox").val();

loadBooks(0);

});

function loadBooks(startIndex){

let url = "https://www.googleapis.com/books/v1/volumes?q="
+ currentQuery +
"&startIndex=" + startIndex +
"&maxResults=" + resultsPerPage;

$.getJSON(url, function(data){

$("#results").empty();

$.each(data.items, function(i, book){

let title = book.volumeInfo.title;

let id = book.id;

let img = "";

if(book.volumeInfo.imageLinks){
img = book.volumeInfo.imageLinks.thumbnail;
}

$("#results").append(

"<div class='book'>" +
"<img src='"+img+"'>" +
"<h3><a href='details.html?id="+id+"'>" + title + "</a></h3>" +
"</div>"

);

});

createPagination();

});

}

function createPagination(){

$("#pagination").empty();

for(let i=0;i<6;i++){

let start = i * resultsPerPage;

$("#pagination").append(

"<button class='pageBtn' data-start='"+start+"'>"+
(i+1)+"</button>"

);

}

}

$(document).on("click",".pageBtn",function(){

let start = $(this).data("start");

loadBooks(start);

});

});
