
let anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', (event) => {
        event.preventDefault();
        let blockId = anchor.getAttribute('href')
        document.getElementById(blockId.slice(1)).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
        window.location.hash = blockId.slice(1) + '!';
    })
}


let modal = document.getElementById("myModal");
let btns = document.querySelectorAll(".btnModalWindow");
let span = document.getElementsByClassName("closeModalWindow")[0];
let autorizedTopText = document.querySelector('#autorizedTopText');
let formButton = document.querySelector('.login100-form-btn');
let signUpBlock = document.querySelector('#linkToRegister');
let inputsLogin = document.querySelectorAll('.input100');
let signUpLink = document.querySelector('.txt2');


signUpLink.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.hash = 'register'
})

for (let btn of btns) {
    btn.onclick = function (e) {
        let btnclass = btn.getAttribute('class').split(' ');
        console.log(btnclass[0])
        if (btnclass[0] === 'login') {
            location.href = '#login';
            history.pushState('#login', 'login', window.location.href)
        }
        else if (btnclass[0] === 'register') {
            location.href = '#register';
            history.pushState('#register', 'register', window.location.href)
        }
        modal.style.display = "block";
        for (let input of inputsLogin) {
            input.value = '';
        }
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

window.onhashchange = function () {
    if (window.location.hash === '#login') {
        modal.style.display = "block";
        autorizedTopText.innerHTML = 'Dzień Dobry!';
        formButton.innerHTML = 'Login';
        signUpBlock.style.display = 'block'

    } else if (window.location.hash === '#register') {
        modal.style.display = "block";
        autorizedTopText.innerHTML = 'Rejestracja';
        formButton.innerHTML = 'Zarejestrować';
        signUpBlock.style.display = 'none'
    }
}



formButton.addEventListener('click', (e) => {
    e.preventDefault()
    modal.style.display = "none";
})