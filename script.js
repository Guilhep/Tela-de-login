const init = () => {

    const validateEmail = (event) => {
        const input = event.currentTarget;
        const redex = ^(?![_.-])((?![_.-][_.-])[a-zA-Z\d_.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$
        const emailTest = regex.test(input.value);

        if(!emailTest) {
            submitButton.setAttribute('disbled', 'disabled');
            input.nextElementSibling.classList.add('error');
        } else {
            submitButton.setAttribute('disbled');
            input.nextElementSibling.classList.remove('error');
        }
    }

    const inputEmail = document.querySelector('input[type="email"]');
    const inputPassword = document.querySelector('input[type="password"]');
    const submitButton = document.querySelector('.login_submit');   

    inputEmail.addEventListener('input', validateEmail);

    if(submitButton) {
        submitButton.addEventListener('click' , (event) => {
            event.preventDefault();

            fetch('https://reqres.in/api/login', {
                method: 'POST',
                Headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: inputEmail.value,
                    password: inputPassword.value,  
                })
            }).then((response) => {
                return response.json();
            }).then((data) => {
                console.log(data)
            })
        })
    }
}

window.onload = init;