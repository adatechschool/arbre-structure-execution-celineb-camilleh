/* var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function get(url, success, error) {
    var req = new XMLHttpRequest();

    req.onreadystatechange = function() {
        if (req.readyState === 4) {
            if (req.status === 200) {
                success(req.responseText);
            } else {
                error(req);
            }
        }
    }
    req.open('GET', url, true);
    req.send();
}

function getCat() {
    get('<https://api.thecatapi.com/v1/images/search?format=json>', 
    function(response) {
        var cat = JSON.parse(response);
        console.log(cat[0]['url']);
    },
    function (error) {
        console.error(error);
    })
}

getCat(); */

// rewrite with async await

const getCat = async () => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?format=json');
    console.log(response);
    if (response.status !== 200) {
        throw new Error('cannot fetch the data');
    }
    const data = await response.json();
    return data;
};

getCat()
    .then(data => console.log('resolved', data[0].url))
    .catch(err => console.log('error', err.message))