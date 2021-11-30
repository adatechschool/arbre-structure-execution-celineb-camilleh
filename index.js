const getTodos = (callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        callback(undefined, data);
    } else if (request.readyState === 4) {
        callback("couldn\'t fetch the data", undefined);
    }
    });

    request.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    request.send();
}

getTodos((err, data) => {
    console.log("callback fired");
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
})

