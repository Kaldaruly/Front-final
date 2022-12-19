let inputUser = document.getElementById('name')
let inputEmail = document.getElementById('email')
let inputPassword = document.getElementById('password')
let submitBtn = document.querySelector('.btn');


submitBtn.addEventListener('click', async(e) => {
    e.preventDefault()

    await fetch('http://localhost:8080/api/register', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
           username: inputUser.value,
           email: inputEmail.value,
           password: inputPassword.value
        })
    }).then(res => {
        if (res.status) {
            window.location.href = '/login.html'

            window.localStorage.setItem('userInfo', JSON.stringify({
                username: inputUser.value,
                email: inputEmail.value,
                password: inputPassword.value
            }))
        }

        console.log(res)
    })
})
