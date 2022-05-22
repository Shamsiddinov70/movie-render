
var elWrapper = elFind('.el-wrapp');


function render(array) {
    for (var i = 0; i < array.length; i++) {

        var link = array[i].trailer.split("=");

        var tag = `
        <div class="card mb-4" style="width: 18rem;">
                <div>
                <iframe width="100%" height="220" src="https://www.youtube.com/embed/${link[1]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
                </div>
                <div class="card-body">
                    <h5 class="text-truncate card-title">${array[i].title}</h5>
                    <p style="display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical; overflow: hidden;" class="card-text">${array[i].summary}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Year: ${array[i].year}</li>
                    <li class="text-truncate list-group-item">Category: ${array[i].categories}</li>
                    <li class="list-group-item fa fa-star checked text-warning">Rating: ${array[i].imdbRating}</li>
                    <li class="list-group-item">Runtime: ${array[i].runtime}</li>
                    <li class="list-group-item">Language: ${array[i].language}</li>
                </ul>
                <div class="card-body">
                    <a href="${array[i].smallPoster}" target="_blank" class="text-decoration-none card-link">Small poster</a>
                    <a href="${array[i].bigPoster}" target="_blank" class="text-decoration-none card-link">Big poster</a>
                </div>
            </div>`;


        var card = document.createElement("div");
        card.innerHTML = tag;
        elWrapper.appendChild(card);
    }
}

render(movies)
