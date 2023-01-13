//named export
export function fetchCatsFn() {
    const inputVal = document.getElementById('status-code').value;
    console.log('fetching cats')
    document.getElementById('status-code-img').src = `https://http.cat/${inputVal}.jpg`
}

//default export
export default function anotherFn() {

}