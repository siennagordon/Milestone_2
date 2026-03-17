$(document).ready(function() {
    const API_KEY = "AIzaSyC2vuDX-mAgbXuAiPymRrYXFjwembU3Wws";
    const params = new URLSearchParams(window.location.search);
    const bookID = params.get("id");
    if(!bookID) { $("#bookDetails").append("<p>No book ID provided.</p>"); return; }

    let url = "https://www.googleapis.com/books/v1/volumes/" + bookID + "?key=" + API_KEY;

    $.getJSON(url, function(data) {
        let book = data.volumeInfo;
        let title = book.title || "No title";
        let authors = book.authors ? book.authors.join(", ") : "Unknown";
        let publisher = book.publisher || "Unknown";
        let description = book.description || "No description available";
        let img = book.imageLinks ? book.imageLinks.thumbnail : "";
        let price = data.saleInfo && data.saleInfo.listPrice ? data.saleInfo.listPrice.amount + " " + data.saleInfo.listPrice.currencyCode : "Not available";

        $("#bookDetails").append(
            "<h1>"+title+"</h1>" +
            "<img src='"+img+"'>" +
            "<p><strong>Authors:</strong> "+authors+"</p>" +
            "<p><strong>Publisher:</strong> "+publisher+"</p>" +
            "<p><strong>Price:</strong> "+price+"</p>" +
            "<p>"+description+"</p>"
        );
    });
});
