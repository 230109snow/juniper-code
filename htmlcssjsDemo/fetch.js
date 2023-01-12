// Javascript offers two built in ways to send http requests
//1. XML Http Request
//2. Fetch API (we're going to use this)
function fetchCats() {
    const inputVal = document.getElementById('status-code').value;

    document.getElementById('status-code-img').src = `https://http.cat/${inputVal}.jpg`
}

let apiKey; 
fetch('./apiKey.json').then((res) => res.json()).then((data) => {
    apiKey = data.TheCatAPI
})

function getCats() {
    const numCats = document.getElementById('img-num').value;
    const breed = document.getElementById('breed').value
    fetch(`https://api.thecatapi.com/v1/images/search?limit=${numCats}&breed_id=${breed}`, {
        headers: {
            'x-api-key': apiKey
        },
    }).then((res) => res.json()).then((data) => {
    
        for(let i = 0; i < data.length; i++) {
            const imgTag = document.createElement('img');
            imgTag.src = data[i].url;
            imgTag.width = 200
            document.getElementById('the-cat-api').appendChild(imgTag);
        }
    })
}