$(document).ready(function() {

    const API_KEY = "AIzaSyC2vuDX-mAgbXuAiPymRrYXFjwembU3Wws"; // Replace with your Google Books API key
    let currentQuery = "";

    $("#searchBtn").click(function() {
        currentQuery = $("#searchBox").val().trim();
        if (!currentQuery) { alert("Enter a search term"); return; }
        loadBooks(0);
    });

    $("#pageSelect").change(function() {
        let startIndex = $(this).val();
        loadBooks(startIndex);
    });

    function loadBooks(startIndex) {
        $("#searchBtn").prop("disabled", true);
        let url = "https://www.googleapis.com/books/v1/volumes?q=" +
                  encodeURIComponent(currentQuery) +
                  "&startIndex=" + startIndex +
                  "&maxResults=10" +
                  "&key=" + API_KEY;

        $.getJSON(url, function(data) {
            $("#results").empty();
            if (!data.items) { 
                $("#results").append("<p>No results found</p>"); 
                $("#searchBtn").prop("disabled", false); 
                return; 
            }

            $.each(data.items, function(i, book) {
                let title = book.volumeInfo.title;
                let id = book.id;
                let img = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "";

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
