$(document).ready(function () {
    let articles = [];
    function NYTSearch() {
        // change attr when i am give the actual name
        console.log("test")
        let articleSearch = $("#text1").val().trim();
        let startYear = $("#text2").val().trim();
        let endYear = $("#text3").val().trim();
        let totalArticles = $("#inputGroupSelect01").val();
        let queryURL = "https://api.nytimes.com/svc/serach/v2/articlesearch.json?q=" + articleSearch + "&begin_date=" + startYear + "&end_date=" + endYear + "&page=" + totalArticles + "&api-key=B3ua1UVH4D5XK9obXwYgxhgIGsCC6nu0";
        console.log(queryURL)
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
        })
    };
    $("#search").on("click", NYTSearch)
 });
 
 