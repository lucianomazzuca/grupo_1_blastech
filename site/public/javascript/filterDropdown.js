//Menu desplegable de filtros
const btnFilter = document.querySelector('#btn-filtro');
const menuFilter = document.querySelector('.filtro-categorias');

btnFilter.addEventListener('click', openMenuFilter);

function openMenuFilter() {
    menuFilter.classList.toggle('active');
}