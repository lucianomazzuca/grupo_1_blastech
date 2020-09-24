# BLASTECH

## Primer Sprint (17/8)
![alt text](https://github.com/lucianomazzuca/grupo_1_blastech/blob/master/site/public/images/logo.png "Logo BLASTECH")

##  Integrantes
* **Lizarraga Franco**
* **Mazzuca Luciano**
* **Ramallo Santiago**


## Descripción del Sitio
El sitio estará enfocado en la venta de componentes, periféricos e insumos de computadoras.

Buscamos atraer a un público de diversas necesidades, esto incluye tanto a las personas que necesiten computadoras para uso básico, como aquellos individuos que requieran componentes de alto rendimiento para actividades tales como el gaming, edición, renderización y demás.


## Sitios Referentes

- [Hardgamers](https://www.hardgamers.com.ar/)
- [Maximus](https://www.maximus.com.ar/)
- [Mercadolibre](https://www.mercadolibre.com.ar/)
- [Hardcorecomputacion](https://hardcorecomputacion.com.ar/)
- [Frávega](https://www.fravega.com/)

Para la creación de nuestros wireframes reunimos diversos sitios dedicados a la venta de productos, no necesariamente enfocados a la venta de hardware, para recolectar ciertos fragmentos de diseño que sean agradables a la vista y brinden una buena experiencia de usuario.


## Wireframes
- [Home](https://github.com/lucianomazzuca/grupo_1_anonymouspc/blob/a9da90b0fdbe820df05522f39f8132b61174a4ff/wireframes/home.png)
- [Detalle de Producto](https://github.com/lucianomazzuca/grupo_1_anonymouspc/blob/a9da90b0fdbe820df05522f39f8132b61174a4ff/wireframes/detalleProducto.png)
- [Carrito de Compras](https://github.com/lucianomazzuca/grupo_1_anonymouspc/blob/a9da90b0fdbe820df05522f39f8132b61174a4ff/wireframes/carrito.png)
- [Formulario de Registro](https://github.com/lucianomazzuca/grupo_1_anonymouspc/blob/a9da90b0fdbe820df05522f39f8132b61174a4ff/wireframes/register.png)
- [Formulario de Carga de Producto](https://github.com/lucianomazzuca/grupo_1_anonymouspc/blob/a9da90b0fdbe820df05522f39f8132b61174a4ff/wireframes/Carga%20de%20producto.png)




## :pushpin: Segundo Sprint (06/09)

### :clipboard: [Tablero de Trabajo](https://trello.com/b/VTdL0zEm/grupo1blastech)

### :mag_right: Retrospectiva: [retro.md](https://github.com/lucianomazzuca/grupo_1_blastech/blob/master/RETRO.md)

### :page_facing_up: Páginas (views)
- HOME: index.ejs
- DETALLE PRODUCTO: detail.ejs        
- CARRITO DE COMPRAS: cart.ejs      
- CARGA DE PRODUCTOS: cargaDeProducto.ejs         
- REGISTRO DE USUARIOS: registro.ejs    
- LOGIN DE USUARIOS: login.ejs 







## :pushpin: Tercer Sprint (24/07)

### :mag_right: Retrospectiva: [retro.md](https://github.com/lucianomazzuca/grupo_1_blastech/blob/master/RETRO.md)

### :clipboard: [Tablero de Trabajo](https://trello.com/b/VTdL0zEm/grupo1blastech)

### :briefcase: Archivos [productsDataBase.json](https://github.com/lucianomazzuca/grupo_1_blastech/blob/master/site/data/productsDataBase.json) y [users.json](https://github.com/lucianomazzuca/grupo_1_blastech/blob/master/site/data/users.json)

### :fire: Aplicación Node + Express + EJS
- Home
- Listado de productos                          /products
- Detalle del producto                          /products/detail/:id
- Formulario de carga y edición de productos    /products/cargar/productos   &   /products/editlist
- Formulario de registro y login                /users/registro y /users/login

### :scroll: Funcionalidad de listado, detalle, alta, modificación y baja de productos.

- /products :arrow_right: (GET) muestra una lista de todos los productos. Se puede acceder desde la categoría "española" en el home o desde el header "nuestras delicias" y luego "ver todos".
- /products/detail/:id :arrow_right: (GET) muestra el detalle de un producto. Se puede acceder clickeando en cada uno de los productos de los listados.
- /productos/create :arrow_right: (GET) muestra el formulario de carga de productos. Se puede acceder al mismo en el menú "ADMINISTRACIÓN" , "Añadir producto".
- /productos :arrow_right: (POST) Método que guarda los datos luego de haber cargado los mismos a través del formulario.
- /productos/:id/edit :arrow_right: (GET) muestra el formulario de edición de producto. Se accede al mismo desde el botón editar producto en opciones de Admin.
- /productos/:id :arrow_right: (PUT) método que actualiza la base de datos. 
- /productos/:id :arrow_right: (DELETE) método que se ocupa de borrar un registro en particular. Se utiliza desde el listado de productos con el boton eliminar 