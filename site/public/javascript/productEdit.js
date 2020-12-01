window.addEventListener("load", () => {
    console.log('vinculado')
    const form = document.querySelector(".edit");

    const inputImagen = form.querySelector('input[name="images"]');
    const inputModel = form.querySelector('input[name="model"]');
    const selectBrand = form.querySelector('select[name="brand"]');
    const inputDescription = form.querySelector('textarea[name="description"]');
    const selectCategory = form.querySelector('select[name="category"]');
    const inputPrice = form.querySelector('input[name="price"]');
    
    const errores = {};
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

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let error = false;
        let elements = form.querySelectorAll('input');

        for(let i = 0; i < elements.length - 1; i++) {
            if(elements[i].name != 'image' && elements[i].value == ''){
                console.log(elements[i])
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

    inputModel.addEventListener("blur", function () {
        switch (true) {
            case this.value.length === 0:
                errorModel.innerText = "Debes ingresar un modelo";
                this.classList.add("is-invalid");
                break;
            case this.value.length < 2:
                errorModel.innerText = "Debes ingresar al menos 2 caracteres";
                this.classList.add("is-invalid");
                break;
            default:
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                errorModel.innerText = "";
                break;
        }
    });

    selectBrand.addEventListener("blur", function () {
        switch (true) {
            case this.value == "":
                errorBrand.innerText = "Debes seleccionar una categoria";
                this.classList.add("is-invalid");
                break;
            default:
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                errorBrand.innerText = "";
                break;
        }
    });

    inputDescription.addEventListener("blur", function () {
        switch (true) {
            case this.value.length === 0:
                errorDescription.innerText = "Debes ingresar una descripción";
                this.classList.add("is-invalid");
                break;
            case this.value.length < 10:
                errorDescription.innerText = "Debes ingresar al menos 10 caracteres";
                this.classList.add("is-invalid");
                break;
            case this.value.length > 500:
                errorDescription.innerText = "La descripción debe ser menor a 500 caracteres";
                this.classList.add("is-invalid");
                break;
            default:
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                errorDescription.innerText = "";
                break;
        }
    });

    selectCategory.addEventListener("blur", function () {
        switch (true) {
            case this.value == "":
                errorCategory.innerText = "Debes seleccionar una categoria";
                this.classList.add("is-invalid");
                break;
            default:
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                errorCategory.innerText = "";
                break;
        }
    });

    inputPrice.addEventListener("blur", function () {
        switch (true) {
            case this.value.length === 0:
                errorPrice.innerText = "Debes ingresar un precio";
                this.classList.add("is-invalid");
                break;
            default:
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                errorPrice.innerText = "";
                break;
        }
    });

});
