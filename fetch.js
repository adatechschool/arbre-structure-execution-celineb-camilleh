/* fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
console.log('resolved', response);
return response.json(); // promise
}).then(data => {
    console.log(data);
}).catch(err => {
console.log('error', err);
}); */

//await

const getTodos = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts/');

    if (response.status !== 200) {
        throw new Error('cannot fetch the data');
    }
    const data = await response.json();
    return data;
};

getTodos()
    .then(data => console.log('resolved', data))
    .catch(err => console.log('error', err.message));
  