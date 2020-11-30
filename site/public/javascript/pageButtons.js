let btnContainer = document.querySelector('#button-container');

//Data
const currentPage = Number(btnContainer.dataset.currentpage);
const searchQuery = btnContainer.dataset.search;
const rows = Number(btnContainer.dataset.rows);
const limit = Number(btnContainer.dataset.limit);
const totalPages = Math.ceil(rows/limit);

console.log(searchQuery)

function displayButtons() {
    btnContainer.innerHTML = '';

    //Setear los botones que iran en los extemos
    let maxLeft = currentPage - 2;
    let maxRight = currentPage + 2;

    if(maxLeft < 1) {
        maxLeft = 1;
        maxRight = limit;
    }

    if(maxRight > totalPages) {
        maxRight = totalPages;
        maxLeft = totalPages - limit;

        if(maxLeft < 1) {
            maxLeft = 1;
        }
    }

    //Agregar los botones al container
    if(searchQuery == "") {
        for(let page = maxLeft; page <= maxRight; page++) {
            if(page == currentPage) {
                btnContainer.innerHTML += `<li class="page-item active"><a class="page-link" href="${page}">${page}</a></li>`;
            } else {
                btnContainer.innerHTML += `<li class="page-item"><a class="page-link" href="${page}">${page}</a></li>`;
            }
        }
    } else {
        for(let page = maxLeft; page <= maxRight; page++) {
            if(page == currentPage) {
                btnContainer.innerHTML += `<li class="page-item active"><a class="page-link" href="${page}?term=${searchQuery}">${page}</a></li>`;
            } else {
                btnContainer.innerHTML += `<li class="page-item"><a class="page-link" href="${page}?term=${searchQuery}">${page}</a></li>`;
            }
        }
    }


    //Agregar botones de anterior y siguiente dependiendo de la pagina actual
    if(currentPage != 1) {
        btnContainer.innerHTML = `<li class="page-item" ><a class="page-link" href="#" aria-label="Previous"> <span aria-hidden="false">&laquo;</span> <span class="sr-only">Previous</span></a></li>` + btnContainer.innerHTML
    }

    if(currentPage != totalPages) {
        btnContainer.innerHTML += `<li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
            </a>
        </li>` 
    }

}

displayButtons()