// Javascript offers two built in ways to send http requests
//1. XML Http Request
//2. Fetch API (we're going to use this)

//importing named export
import { fetchCatsFn } from "./fetchCats.js";

//importing default export
import anotherFn from "./fetchCats.js";


let apiKey, apiKeyLoaded = false; 
fetch('./apiKey.json').then((res) => res.json()).then((data) => {
    apiKey = data.TheCatAPI
    apiKeyLoaded = true;
})

function getCats() {
    //This if block will ensure that the api key has been loaded before we send the http request
    if(apiKeyLoaded) {
        const numCats = document.getElementById('img-num').value;
        const breed = document.getElementById('breed').value;
        const form = document.getElementById('cat-api-form');
        console.log(form.breed)
        const url = breed ? `https://api.thecatapi.com/v1/images/search?limit=${numCats}&breed_ids=${breed}` : `https://api.thecatapi.com/v1/images/search?limit=${numCats}`;
        fetch(url, {
            headers: {
                'x-api-key': apiKey
            },
        }).then((res) => res.json()).then((data) => {
            let val
            for(let i = 0; i < data.length; i++) {
                console.log(data)
                const div = document.createElement('div');
                div.id = data[i].id;
                const imgTag = document.createElement('img');
                imgTag.src = data[i].url;
                imgTag.width = 200
    
                const upVoteBtn = document.createElement('button');
                upVoteBtn.innerText = '^'
                upVoteBtn.onclick = (e) => {
                    // const imgId = e.target.parentElement.id; //this gets us the div with the id
                    // //we got the image id we needed
                    // //now we just need to send the post request with the img id, value 
                    // fetch('https://api.thecatapi.com/v1/votes', {
                    //     method: "POST",
                    //     headers: {
                    //         'x-api-key': apiKey,
                    //         'content-type': 'application/json'
                    //     },
                    //     body: JSON.stringify({
                    //         "image_id": imgId,
                    //         "value": 1
                    //     })
                    
                    //});

                    val = 1
                    vote(e, val)

                    //use this function to convert JSON string back into js object
                    // JSON.parse();
                }
                const downVoteBtn = document.createElement('button');
                downVoteBtn.innerText = 'v'
                downVoteBtn.onclick = (e) => {
                    // const imgId = e.target.parentElement.id; //this gets us the div with the id
                    // //we got the image id we needed
                    // //now we just need to send the post request with the img id, value 
                    // fetch('https://api.thecatapi.com/v1/votes', {
                    //     method: "POST",
                    //     headers: {
                    //         'x-api-key': apiKey,
                    //         'content-type': 'application/json'
                    //     },
                    //     body: JSON.stringify({
                    //         "image_id": imgId,
                    //         "value": -1
                    //     })
                    // });

                    val = -1
                    vote(e, val)
                }
                div.appendChild(imgTag)
                div.appendChild(upVoteBtn)
                div.appendChild(downVoteBtn)
    
                document.getElementById('the-cat-api').appendChild(div);
            }
    
            //another way to perform an action to each element in an array using forEach function
            // data.forEach((datum) => {
            //     const imgTag = document.createElement('img');
            //     imgTag.src = datum.url;
            //     imgTag.width = 200
            //     document.getElementById('the-cat-api').appendChild(imgTag);
            // })
    
            // let booleanFlag = true;
            // while(booleanFlag) {
            //     //execute stuff
            //     //when you're good with this loop,
            //     booleanFlag = false;
            //     //using flags is common technique when you're waiting for something to be complete, ie waiting for the data to come back and spinning the spinner. 
            // }
    
            // //two more types of for loops, for in, and for of
            // //useful if you're iterating through objects
            // /**
            //  * {
            //  *   a: 1,
            //  *   b: 2,
            //  *   c: 3,
            //  *   d: 4
            //  * }
            //  * 
            //  */
    
            // //will give you the indices of the array or the keys of the object
            // for(let i in data) {
            //     console.log(i) //i'll get a, b, c, d
            //     data[i] //will get me 1, 2, 3, 4
            // }
    
            // //use with arrays to get each element instead of the index, equivalent to calling [].forEach()
            // //does not work with object literals (aka {})
            // for(let i of data) {
    
            // }
        })

    }
    function vote(e, val) {
        const imgId = e.target.parentElement.id; //this gets us the div with the id
        //we got the image id we needed
        //now we just need to send the post request with the img id, value 
        fetch('https://api.thecatapi.com/v1/votes', {
            method: "POST",
            headers: {
                'x-api-key': apiKey,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                "image_id": imgId,
                "value": val
            })
        })
    }
}