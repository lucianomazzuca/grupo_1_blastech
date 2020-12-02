window.addEventListener('load',function(){
    console.log('vinculado')
    const form = document.querySelector(".prueba");

    const inputImagen = form.querySelector('input[name="avatar"]');
    const inputNombre = form.querySelector('input[name="first_name"]');
    const inputApellido = form.querySelector('input[name="last_name"]');
    const inputFecha = form.querySelector('input[name="date"]');
    const inputProvincia = form.querySelector('input[name="province"]');
    const inputCiudad = form.querySelector('input[name="city"]');
    const inputDirreccion = form.querySelector('input[name="adress"]');

    const errores = {};
    const regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
    const regExExtensions = /(.jpg|.jpeg|.png|.gif)$/i;

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let error = false;
        let elements = form.querySelectorAll('input');

        if(inputNombre.value == '') {
            inputNombre.classList.add('is-invalid');
            error = true;
        } else if (inputApellido.value == ''){
            inputApellido.classList.add('is-invalid');
            error = true;
        }

        if(!error){
            form.submit();
        } else {
            errorSubmit.innerText = 'Los campos señalados son obligatorios'
        }
        
    });

    inputImagen.addEventListener('change',function(e){
        switch (true) {
            case !regExExtensions.exec(this.value) :
                errores.foto = "Solo imagenes con extension jpg, jpeg, png, o gif"
                errorFoto.innerHTML = errores.foto;
                this.classList.add('is-invalid')
                this.value = '';
                vistaPrevia.src = "";
            break
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorFoto.innerHTML = "";
                
                let reader = new FileReader();
               
                reader.readAsDataURL(e.target.files[0]);
                
                reader.onload = function(){
                vistaPrevia.src = reader.result;
                };
        }
    })

    inputNombre.addEventListener('blur',function(){
        switch (true) {
            case this.value.length === 0:
                errorNombre.innerHTML = "El nombre es obligatorio";
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length < 3:
                errorNombre.innerHTML = "Tenés que ingresar al menos tres letras"
                this.classList.add('is-invalid')
                break
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorNombre.innerHTML = ""
                break;
        }

    })

    inputApellido.addEventListener('blur',function(){
        switch (true) {
            case this.value.length === 0:
                errorApellido.innerHTML = "El apellido es obligatorio";
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length <=3:
                errorApellido.innerHTML = "Tenés que ingresar al menos tres letras"
                this.classList.add('is-invalid')
                break
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorApellido.innerHTML = ""
                break;
        }

    })

    // inputProvincia.addEventListener('blur',function(){
    //     switch (true) {
    //         case this.value.length === 0:
    //             errorProvincia.innerHTML = "La provincia es obligatorio";
    //             this.classList.add('is-invalid')
    //             break;
    //         case this.value.trim().length <=3:
    //             errorProvincia.innerHTML = "Tenés que poner al menos tres letras"
    //             this.classList.add('is-invalid')
    //             break
    //         default:
    //             this.classList.remove('is-invalid')
    //             this.classList.add('is-valid')
    //             errorProvincia.innerHTML = ""
    //             break;
    //     }
    // })

    // inputCiudad.addEventListener('blur',function(){
    //     switch (true) {
    //         case this.value.length === 0:
    //             errorCiudad.innerHTML = "La Ciudad es obligatorio";
    //             this.classList.add('is-invalid')
    //             break;
    //         case this.value.trim().length <=3:
    //             errorCiudad.innerHTML = "Tenés que poner al menos tres letras"
    //             this.classList.add('is-invalid')
    //             break
    //         default:
    //             this.classList.remove('is-invalid')
    //             this.classList.add('is-valid')
    //             errorCiudad.innerHTML = ""
    //             break;
    //     }
    // })

    // inputDirreccion.addEventListener('blur',function(){
    //     switch (true) {
    //         case this.value.length === 0:
    //             errorDirreccion.innerHTML = "La Dirreccion es obligatorio";
    //             this.classList.add('is-invalid')
    //             break;
    //         case this.value.trim().length <=3:
    //             errorDirreccion.innerHTML = "Tenés que poner al menos tres letras"
    //             this.classList.add('is-invalid')
    //             break
    //         default:
    //             this.classList.remove('is-invalid')
    //             this.classList.add('is-valid')
    //             errorDirreccion.innerHTML = ""
    //             break;
    //     }
    // })

    })