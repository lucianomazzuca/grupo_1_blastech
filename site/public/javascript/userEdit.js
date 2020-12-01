window.addEventListener('load',function(){
    const form = document.querySelector(".prueba");

    const inputImagen = form.querySelector('input[name="avatar"]');
    const inputFecha = form.querySelector('input[name="date"]');
    const inputProvincia = form.querySelector('input[name="province"]');
    const inputCiudad = form.querySelector('input[name="city"]');
    const inputDirreccion = form.querySelector('input[name="adress"]');

    const errores = {};
    const regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
    const regExExtensions = /(.jpg|.jpeg|.png|.gif)$/i;

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

   

    inputProvincia.addEventListener('blur',function(){
        switch (true) {
            case this.value.length === 0:
                errorProvincia.innerHTML = "La provincia es obligatorio";
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length <=3:
                errorProvincia.innerHTML = "Tenés que poner al menos tres letras"
                this.classList.add('is-invalid')
                break
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorProvincia.innerHTML = ""
                break;
        }
    })

    inputCiudad.addEventListener('blur',function(){
        switch (true) {
            case this.value.length === 0:
                errorCiudad.innerHTML = "La Ciudad es obligatorio";
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length <=3:
                errorCiudad.innerHTML = "Tenés que poner al menos tres letras"
                this.classList.add('is-invalid')
                break
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorCiudad.innerHTML = ""
                break;
        }
    })

    inputDirreccion.addEventListener('blur',function(){
        switch (true) {
            case this.value.length === 0:
                errorDirreccion.innerHTML = "La Dirreccion es obligatorio";
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length <=3:
                errorDirreccion.innerHTML = "Tenés que poner al menos tres letras"
                this.classList.add('is-invalid')
                break
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorDirreccion.innerHTML = ""
                break;
        }
    })

    })