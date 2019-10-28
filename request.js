const hostname = 'localhost';
const util = require('util');
const port = 8080;

const count = parseInt(process.argv[2], 10);
const type = process.argv[3];

const urls = [];
for (let i = 0; i < count; i++) {
    urls.push(`http://${hostname}:${port}/${i + 1}`)
}

function get(url) {
    const request = util.promisify(require('request'));
    return request(url)
}

if (type === 'parallel') {
    Promise.all(urls.map(url => get(url)))
        .then(requests => {
            requests.forEach(request => console.log('parallel ' + request.body))
        })
        .catch(console.error)
} else if (type === 'sequential') {
    urls.reduce((promise, url) => {
        return promise
            .then(() => get(url))
            .then(request => console.log(`sequential ` + request.body))
            .catch(console.error)
    }, Promise.resolve())
}