//https://www.youtube.com/watch?v=3xaN1tDdkF4&ab_channel=ITDoctor

//https://www.youtube.com/watch?v=aj31kjWTeEg&ab_channel=Front-endScience%D1%96%D0%B7%D0%A1%D0%B5%D1%80%D0%B3%D1%96%D1%94%D0%BC%D0%9F%D1%83%D0%B7%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2%D0%B8%D0%BC

const obj1 = {
    a: 1, b: 2, c: 3, d: {e: 4}
};
const replaced = JSON.stringify (obj1, function replacer(key, value) {
    if (typeof value === 'number') {
        return value + 1;
    }
    return value;
});

console.log ('replaced ', replaced);


console.log('=================================================================== ')
const obj = {
    a: 10,
    b: 20,
};

//stringify - JS ==> JSON
//parse - JSON ==> JS

console.log('JSON: ', JSON.stringify (obj,null,'  ')); // JS ==> JSON
console.log ('Object: ', obj);

const stringJSON = '{"a":10,"b":20, "arr":[1, 2, 3]}';
console.log (JSON.parse (stringJSON)); //  JSON ==> JS

fetch ('https://jsonplaceholder.typicode.com/todos/1')
    .then (response => response.json ())
    .then (json => console.log (json))

console.log ('----------------------');

async function getUser() {
    try {
        const request = await fetch (
            'https://hotels-com-provider.p.rapidapi.com/v1/hotels/photos?hotel_id=363464', {
            headers: {
                'X-RapidAPI-Key': '486b3a3415mshb943767973b16bdp13c10ejsn7f14da63fb91',
                'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
                },
            }
        );
    } catch (error) {
        console.log (error);
    }
}

const btn = document.getElementById('fb');

btn.onclick = getUser;


async function post() {
    try {
        const postData = {
            title: 'It is our first post',
            body: 'Description of our comment',
            userId: 1,
        }

        const request = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',},
            body: JSON.stringify(postData),
            }
        );
    } catch (error) {
        console.log ('Error in post', error)
    }
}

const postBtn = document.getElementById('post');
postBtn.onclick = post;

async function getPostInfo() {
    const request = await fetch('https://jsonplaceholder.typicode.com/posts/100', {
            method: "GET",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }
    );
    console.log ({ request });
}

const postInfoBTN = document.getElementById('postInfo');
postInfoBTN.onclick = getPostInfo;


//оновлення інформації
async function getPostPut() {
    try {
        const getPostPutData = {
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
        }

        const request = await fetch ('https://jsonplaceholder.typicode.com/posts/1', {
            method: "PUT",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify (getPostPutData)
        });

    } catch (error){
        console.log (error);
    }
}

const putButton = document.getElementById('put');
putButton.onclick = getPostPut;

localStorage.setItem("our_key", JSON.stringify({ a: 1 }) );
console.log(JSON.parse(localStorage.getItem("our_key")));












