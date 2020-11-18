window.addEventListener('load',function(){
    console.log('holis');

    const form = document.querySelector(".formulario");

    const inputEmail = form.querySelector('input[name="email"]');
    const inputPass = form.querySelector('input[name="password"]');

    const errores = {};
    const regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
    const regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let error = false;
        let elements = form.elements;

        for(let i = 0; i < elements.length - 1; i++) {
            if(elements[i].value == ''){
                elements[i].classList.add('is-invalid');
                error = true;
            }
        }
        if(!error){
            form.submit();
        } else {
            errorSubmit.innerText = 'Los campos señalados son obligatorios'
        }
        
    });

    inputEmail.addEventListener('blur',function(){

        switch (true) {
            case this.value.length === 0:
                errorEmail.innerHTML = "El campo email es obligatorio";
                this.classList.add('is-invalid')
                break;
            case !regExEmail.test(this.value) :
                errorEmail.innerHTML = "Debes escribir un email válido"
                this.classList.add('is-invalid')
                break
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorEmail.innerHTML = ""
                break;
        }

    })

    inputPass.addEventListener('blur',function(){

        switch (true) {
            case this.value.length === 0:
                errorPass.innerHTML = "La contraseña es obligatorio";
                this.classList.add('is-invalid')
                break;
            case !regExPass.test(this.value) :
                errorPass.innerHTML = "La contraseña debe tener entre 6 y 12 caracteres, una mayúscula una minúscula y un número"
                this.classList.add('is-invalid')
                break
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorPass.innerHTML = ""
                break;
        }

    })

})