-- Categorias 
insert into categories (id, category_name) values (1, 'Motherboard');
insert into categories (id, category_name) values (2, 'Placa de video');
insert into categories (id, category_name) values (3, 'Monitor');
insert into categories (id, category_name) values (4, 'Procesador');
insert into categories (id, category_name) values (6, 'Fuente');
insert into categories (id, category_name) values (7, 'Disco rigido');
insert into categories (id, category_name) values (8, 'Gabinete');
insert into categories (id, category_name) values (9, 'Teclado');

-- Brands
insert into brands (id, brand_name) values (1, 'Asus');
insert into brands (id, brand_name) values (2, 'Asrock');
insert into brands (id, brand_name) values (3, 'Nvidia');
insert into brands (id, brand_name) values (4, 'Dell');
insert into brands (id, brand_name) values (5, 'Samsung');
insert into brands (id, brand_name) values (6, 'Intel');
insert into brands (id, brand_name) values (7, 'AMD');
insert into brands (id, brand_name) values (8, 'Coolermaster');
insert into brands (id, brand_name) values (9, 'Sentey');
insert into brands (id, brand_name) values (10, 'Wetern Digital');
insert into brands (id, brand_name) values (11, 'Razer');

-- Products
insert into products (id, category_id, brand_id, model, price, discount, images, description, features, status, created_at, updated_at) values (1, 1, 2, 'M2AVM', 47200.00, 0, 'asus-m2avm.jpg', 'Gran Motherboard, ideal para armar una computadora microATX destinada al diseño y juegos con un tamaño reducido.Gran cantidad de puertos, calidad asus y detalles de placa premium. Placa de tamaño pequeño. Ideal para Gabinetes reducidos y con buena conectividad, incluye una conexión M2 para discos SSD de alta velocidad. Es una placa de gran calidad para gaming.', '', 'visited', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
insert into products (id, category_id, brand_id, model, price, discount, images, description, features, status, created_at, updated_at) values (2, 1, 2, 'M3LM', 10300.00, 0, 'asus-m3lm.jpg', 'Socket AMD AM4. Procesadores: AMD Ryzen™ 3ra. Generación / AMD Ryzen™ 2da. Generación / Ryzen™ con Radeon™ Vega Graphics Ryzen™ 1ra. Generación. Chipset: AMD B450. Memoria: 4 x DIMM, Máx. 64 GB, DDR4 3200 (OC) / 3000 (OC) / 2800 (OC) / 2666 / 2400 / 2133 MHz. Memoria sin búfer. Arquitectura Dual Channel.', '', 'visited', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Users admin
insert into users (id, first_name, last_name, email, password, category, image, adress, city, province, date, created_at, updated_at) values (1, 'Luciano', 'Mazzuca', 'luciano@blastech.com', '$2b$10$oV86jBgMBkEZ6YpQPDZzuushIufiw6pKQGmOO1aZICZfFvKUrpe9e', 'admin', 'avatar-luciano.jpg', null, null, null, null, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


