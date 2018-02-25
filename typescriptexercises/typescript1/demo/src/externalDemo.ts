import fetch from 'node-fetch';
import { Request } from 'node-fetch';
// Remember you need to actually import fetch
let URL = 'https://jsonplaceholder.typicode.com/users/1';

fetch(URL)
    .then(r => r.json())
    .then(data => {
        console.log(data.name)
    });