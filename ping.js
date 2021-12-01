
const getTime = async () => {
    const response = await fetch('https://type.fit/api/quotes');
    console.log(response);
    if (response.status !== 200) {
        throw new Error('cannot fetch the data');
    }
    var loadTime = window.performance;
    return loadTime;
};

getTime()
    .then(loadTime => console.log('LoadTime : ', loadTime))
    .catch(err => console.log('error', err.message))