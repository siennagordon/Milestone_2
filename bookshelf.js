$(document).ready(function() {

    const API_KEY = "AIzaSyC2vuDX-mAgbXuAiPymRrYXFjwembU3Wws";
    // Replace these with Volume IDs from your public bookshelf
    const bookIDs = [
        "xIS9EAAAQBAJ",
        "VswAEAAAQBAJ",
        "lpMqnwEACAAJ"
    ];
    

    bookIDs.forEach(function(id) {

        let url = "https://www.googleapis.com/books/v1/volumes/" + id + "?key=" + API_KEY;

        $.getJSON(url, function(data) {

            let title = data.volumeInfo.title || "No title";
            let img = data.volumeInfo.imageLinks ? data.volumeInfo.imageLinks.thumbnail : "";

            $("#shelf").append(
                "<div class='book'>" +
                "<img src='"+img+"'>" +
                "<h3><a href='details.html?id="+id+"'>"+title+"</a></h3>" +
                "</div>"
            );

        }).fail(function() {
            console.log("Error loading book ID:", id);
        });

    });

});
