/* var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function reqListener () {
  console.log(this.responseText);
}

var req = new XMLHttpRequest();
req.responseType = 'json';
req.open('GET', '<https://www.affirmations.dev/>', true);
req.onload  = reqListener;
req.send(null);
 */
//réécrire en utilisant fetch


const getQuotes = async () => {
    const response = await fetch('https://www.affirmations.dev/');
    console.log(response);
    if (response.status !== 200) {
        throw new Error('cannot fetch the data');
    }
    const data = await response.json();
    return data;
};

getQuotes()
    .then(data => console.log('resolved', data))
    .catch(err => console.log('error', err.message));