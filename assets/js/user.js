let username = document.querySelector('.user_name')
let email = document.querySelector('.user_email')

let user = JSON.parse(window.localStorage.getItem('userInfo'))


function innerHtml() {
    if (user.username && user.email) {
        username.innerHTML = user.username
        email.innerHTML = user.email
    } else if (user === null) {
        username.innerHTML = 'Not name'
        email.innerHTML = 'Not email'
    }
}

innerHtml()