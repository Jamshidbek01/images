const api = `https://api.unsplash.com/search/photos?client_id=jwhmPCsGlrOBjJBQBi903aMNJjSZHyYYuTolCeq-nCI&page=1&query=uzbekistan`
const request = new XMLHttpRequest()
request.addEventListener('readystatechange', () => {
    if (request.readyState != 4) {
        console.log('Loading...');
        document.querySelector('.overflow').classList.add('active')
        document.querySelector('.lds-roller').classList.add('active')
    } else if (request.status == 200 && request.readyState == 4) {
        unsplash(JSON.parse(request.responseText).results);
        document.querySelector('.overflow').classList.remove('active')
        document.querySelector('.lds-roller').classList.remove('active')
    } else {
        console.log('Error');
    }
})
function unsplash(data) {
    let result = document.querySelector('.images')
    result.innerHTML = ''
    data.forEach((item) => {
        console.log(item);
        result.innerHTML += `
            <div class="item">
            <span><img src="${item.urls.regular}"></span>
            <div class="about">
            <div>
            <p class="username">${item.user.first_name} ${item.user.last_name}</p>
            <p class="likes">${item.likes} likes</p>
            </div>
            <a href="${item.user.portfolio_url}"><img src="${item.user.profile_image.large}"></a>
            </div>
            </div>
            `
    });
}
request.open('GET', api)
request.send()
let btn = document.querySelector('button')
btn.addEventListener('click', (e) => {
    e.preventDefault()
    let input = document.querySelector('input').value
    const api = `https://api.unsplash.com/search/photos?client_id=jwhmPCsGlrOBjJBQBi903aMNJjSZHyYYuTolCeq-nCI&page=1&query=${input}`
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', () => {
        if (request.readyState != 4) {
            console.log('Loading...');
            document.querySelector('.overflow').classList.add('active')
            document.querySelector('.lds-roller').classList.add('active')
        } else if (request.status == 200 && request.readyState == 4) {
            unsplash(JSON.parse(request.responseText).results);
            document.querySelector('.overflow').classList.remove('active')
            document.querySelector('.lds-roller').classList.remove('active')
        } else {
            console.log('Error');
        }
    })
    function unsplash(data) {
        let result = document.querySelector('.images')
        result.innerHTML = ''
        data.forEach((item) => {
            console.log(item);
            result.innerHTML += `
            <div class="item">
            <span><img src="${item.urls.regular}"></span>
            <div class="about">
            <div>
            <p class="username">${item.user.first_name} ${item.user.last_name}</p>
            <p class="likes">${item.likes} likes</p>
            </div>
            <a href="${item.user.portfolio_url}"><img src="${item.user.profile_image.large}"></a>
            </div>
            </div>
            `
        });
    }
    request.open('GET', api)
    request.send()
})