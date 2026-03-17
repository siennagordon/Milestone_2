$(document).ready(function() {

    const API_KEY = "AIzaSyC2vuDX-mAgbXuAiPymRrYXFjwembU3Wws";
    // Replace these with Volume IDs from your public bookshelf
    const query = "id:xIS9EAAAQBAJ OR id:VswAEAAAQBAJ OR id:lpMqnwEACAAJ";

    const url = "https://www.googleapis.com/books/v1/volumes?q=" + query + "&key=" + API_KEY;

    $.getJSON(url, function(data) {
        if (!data.items) { $("#shelf").append("<p>No books found</p>"); return; }

        $.each(data.items, function(i, book) {
            let title = book.volumeInfo.title;
            let id = book.id;
            let img = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "";

            $("#shelf").append(
                "<div class='book'>" +
                "<img src='"+img+"'>" +
                "<h3><a href='details.html?id="+id+"'>"+title+"</a></h3>" +
                "</div>"
            );
        });
    });

});
