/// Select the main tag, we will inject the movies there
const $main = $("main")

/// Asynchronous request for data in JSON file (AJAX--> go get me this data!)
$.ajax("./json/data.json")

/// when the data arrives, do stuff
.then((data) => { 
    // loop over the array of movies
    data.forEach((movie, index) => {
        // create new div to display movie info
        const $div = $("<div>")
        // edit the html of the div
        $div.html(`<h2 class="movie-title">${movie.title}</h2>
        <h3 class="movie-release">${movie.release_year}</h3>
        <img src='${movie.image}'/>`)
        // append the div to the main tag
        $main.append($div)
    })
 })
.catch((error) => console.log(error))

