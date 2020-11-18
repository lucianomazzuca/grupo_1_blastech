window.addEventListener("load", () => {

    const form = document.querySelector(".edit");

    const inputModel = form.querySelector('input[name="model"]');
    const selectBrand = form.querySelector('select[name="brand_id"]');
    const inputImage = form.querySelector('input[name="images"]');
    const inputDescription = form.querySelector('textarea[name="description"]');
    const inputFeatures = form.querySelector('textarea[name="features"]');
    const selectCategory = form.querySelector('select[name="id_categoria"]');
    const inputPrice = form.querySelector('input[name="price"]');
    const inputDiscount = form.querySelector('input[name="discount"]');
    
    
    

    


    let errors = {};
    let regExExtensions = /(.jpg|.jpeg|.png|.gif)$/i;


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

    inputDiscount.addEventListener("blur", function () {
        switch (true) {
            case this.value.length === 0:
                errorDiscount.innerText = "Debes ingresar un numero";
                this.classList.add("is-invalid");
                break;
            default:
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                errorDiscount.innerText = "";
                break;
        }
    });

    inputImage.addEventListener("blur", function () {
        switch (true) {
            case !regExExtensions.exec(this.value):
                errors.foto =
                    "Solo imagenes con extension jpg, jpeg, png, o gif";
                errorImage.innerHTML = errors.foto;
                this.classList.add("is-invalid");
                this.value = "";
                break;
            default:
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                errorImage.innerHTML = "";
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

    inputFeatures.addEventListener("blur", function () {
        switch (true) {
            case this.value.length === 0:
                errorFeatures.innerText = "Debes ingresar las especificaciones";
                this.classList.add("is-invalid");
                break;
            case this.value.length < 10:
                errorFeatures.innerText = "Debes ingresar al menos 10 caracteres";
                this.classList.add("is-invalid");
                break;
            case this.value.length > 500:
                errorFeatures.innerText = "La descripción debe ser menor a 500 caracteres";
                this.classList.add("is-invalid");
                break;
            default:
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                errorFeatures.innerText = "";
                break;
        }
    });
});
