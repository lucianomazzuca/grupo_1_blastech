-- Categorias 
insert into categories (id, category_name) values (1, 'Motherboard');
insert into categories (id, category_name) values (2, 'Placa de video');
insert into categories (id, category_name) values (3, 'Monitor');
insert into categories (id, category_name) values (4, 'Procesador');
insert into categories (id, category_name) values (5, 'Fuente');
insert into categories (id, category_name) values (6, 'Disco rigido');
insert into categories (id, category_name) values (7, 'Gabinete');
insert into categories (id, category_name) values (8, 'Teclado');

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
insert into products (category_id, brand_id, model, price, discount, images, description, features, status, created_at, updated_at) values (1, 1, 'M2AVM', 47200.00, 0, 'asus-m2avm.jpg', 'Gran Motherboard, ideal para armar una computadora microATX destinada al diseño y juegos con un tamaño reducido.Gran cantidad de puertos, calidad asus y detalles de placa premium. Placa de tamaño pequeño. Ideal para Gabinetes reducidos y con buena conectividad, incluye una conexión M2 para discos SSD de alta velocidad. Es una placa de gran calidad para gaming.', 'CPU
AMD AM4 Socket for AMD Ryzen™ 5000 Series/ 4000 G-Series/ 3000 Series Desktop Processors *
* Refer to www.asus.com for CPU support list
Chipset
AMD B550
Memory
AMD Ryzen™ 5000 Series/ 3000 Series Desktop Processors
4 x DIMM, Max. 128GB, DDR4 4600(O.C)/4400(O.C)/4266(O.C.)/4133(O.C.)/4000(O.C.)/3866(O.C.)/3733(O.C.)/3600(O.C.)/3466(O.C.)/3333(O.C.)/3200/3000/2800/2666/2400/2133 MHz Un-buffered Memory *
AMD Ryzen™ 4000 G-Series Desktop Processors
4 x DIMM, Max. 128GB, DDR4 4800(O.C.)/4600(O.C)/4466(O.C.)/4400(O.C)/4266(O.C.)/4133(O.C.)/4000(O.C.)/3866(O.C.)/3733(O.C.)/3600(O.C.)/3466(O.C.)/3333(O.C.)/3200/3000/2800/2666/2400/2133 MHz Un-buffered Memory *
Dual Channel Memory Architecture
ECC Memory (ECC mode) support varies by CPU.
* Refer to www.asus.com for the Memory QVL (Qualified Vendors Lists).
Graphic
1  x DisplayPort 1.2
1  x HDMI 2.1(4K@60HZ)
*Graphics specifications may vary between CPU types.', 'destacado', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
insert into products (category_id, brand_id, model, price, discount, images, description, features, status, created_at, updated_at) values (1, 1, 'M3LM', 10300.00, 0, 'asus-m3lm.jpg', 'Socket AMD AM4. Procesadores: AMD Ryzen™ 3ra. Generación / AMD Ryzen™ 2da. Generación / Ryzen™ con Radeon™ Vega Graphics Ryzen™ 1ra. Generación. Chipset: AMD B450. Memoria: 4 x DIMM, Máx. 64 GB, DDR4 3200 (OC) / 3000 (OC) / 2800 (OC) / 2666 / 2400 / 2133 MHz. Memoria sin búfer. Arquitectura Dual Channel.', 'CPU
Support for 9th and 8th Generation Intel® Core™ i9 processors/Intel® Core™ i7 processors/Intel® Core™ i5 processors/Intel® Core™ i3 processors/Intel® Pentium® processors/Intel® Celeron® processors in the LGA1151 package
L3 cache varies with CPU
(Please refer «CPU Support List» for more information.)

Chipset
Intel® H310 Express Chipset
Memory
2 x DDR4 DIMM sockets supporting up to 32 GB of system memory
Dual channel memory architecture
Support for DDR4 2666/2400/2133 MHz memory modules
Support for ECC Un-buffered DIMM 1Rx8/2Rx8 memory modules (operate in non-ECC mode)
Support for non-ECC Un-buffered DIMM 1Rx8/2Rx8/1Rx16 memory modules
Support for Extreme Memory Profile (XMP) memory modules
* To support 2666 MHz or XMP memory, you must install a 9th or 8th Generation Intel® Core™ i9/i7/i5 processor.
(Please refer «Memory Support List» for more information.)

Onboard Graphics
Integrated Graphics Processor-Intel® HD Graphics support:
1 x D-Sub port, supporting a maximum resolution of 1920×1200@60 Hz
1 x HDMI port, supporting a maximum resolution of 4096×2160@30 Hz
* Support for HDMI 1.4 version and HDCP 2.2.
Maximum shared memory of 1 GB

Audio
Realtek® ALC887 codec
High Definition Audio
2/4/5.1/7.1-channel
* To configure 7.1-channel audio, you have to use an HD front panel audio module and enable the multi-channel audio feature through the audio driver.
LAN
Realtek® GbE LAN chip (10/100/1000 Mbit)', 'destacado', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
insert into products (category_id, brand_id, model, price, discount, images, description, features, status, created_at, updated_at) values (1, 1, 'ASS32', 25000.00, 0, 'asus-ass32.jpg', 'CPU AMD AMD Socket AM4 Ryzen ™ de 2ª Generación / Ryzen ™ Radeon ™ con Vega Gráficos / Ryzen ™ primera generación / 7 generación de la serie A / Athlon X4 procesadores Soporta CPU de hasta 8 núcleos Consulte www.asus.com para la lista de soporte de CPU', 'Procesador
Support for 9th and 8th Generation Intel® Core™ i9 processors/Intel® Core™ i7 processors/Intel® Core™ i5 processors/ Intel® Core™ i3 processors/Intel® Pentium® processors/Intel® Celeron® processors in the LGA1151 package
L3 cache varies with CPU
(Please refer «CPU Support List» for more information.)

Chipset
Intel® B365 Express Chipset
Memoria
4 x DDR4 DIMM sockets supporting up to 64 GB of system memory
Dual channel memory architecture
Support for DDR4 2666/2400/2133 MHz memory modules
Support for ECC Un-buffered DIMM 1Rx8/2Rx8 memory modules (operate in non-ECC mode)
Support for non-ECC Un-buffered DIMM 1Rx8/2Rx8/1Rx16 memory modules
Support for Extreme Memory Profile (XMP) memory modules
* To support 2666 MHz or XMP memory, you must install a 9th and 8th Generation Intel® Core™ i9/i7/i5 processor.
(Please refer «Memory Support List» for more information.)

Gráficos Integrados
Integrated Graphics Processor-Intel® HD Graphics support:
1 x D-Sub port, supporting a maximum resolution of 1920×1200@60 Hz
1 x DVI-D port, supporting a maximum resolution of 1920×1200@60 Hz
* The DVI-D port does not support D-Sub connection by adapter.
1 x HDMI port, supporting a maximum resolution of 4096×2160@30 Hz
* Support for HDMI 1.4 version and HDCP 2.2.
Support for up to 3 displays at the same time
Maximum shared memory of 1 GB
Actual support may vary by CPU

Audio
Realtek® ALC887 codec
High Definition Audio
2/4/5.1/7.1-channel
* To configure 7.1-channel audio, you have to use an HD front panel audio module and enable the multi-channel audio feature through the audio driver.
Support for S/PDIF Out
LAN
Realtek® GbE LAN chip (10/100/1000 Mbit)
Puertos de Expansión
1 x PCI Express x16 slot, running at x16
* For optimum performance, if only one PCI Express graphics card is to be installed, be sure to install it in the PCIEX16 slot.
1 x PCI Express x4 slot
1 x PCI Express x1 slot
(All of the PCI Express slots conform to PCI Express 3.0 standard.)', 'destacado', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
insert into products (category_id, brand_id, model, price, discount, images, description, features, status, created_at, updated_at) values (1, 2, 'ERIC2020', 35000.00, 0, 'asrock-eric2020.jpg', 'Las placas base de la serie FM2+ de ASrock están basadas en el chipset A88X de AMD, incluyen Socket FM2+ para APU y están diseñadas para obtener el máximo rendimiento de las nuevas APU Kaveri de AMD.', 'CPU
– Supports 7th and 6th Generation Intel® Core™ i7 / i5 / i3 / Pentium® / Celeron® Processors (Socket 1151)
– Supports Intel® Turbo Boost 2.0 Technology
Chipset
– Intel® B150
– Supports Intel® Small Business Advantage 4.0
Memory
– Dual Channel DDR4 Memory Technology
– 2 x DDR4 DIMM Slots
– Supports DDR4 2133 non-ECC, un-buffered memory
– Supports ECC UDIMM memory modules (operate in non-ECC mode)
– Max. capacity of system memory: 32GB*
– Supports Intel® Extreme Memory Profile (XMP) 2.0
*Due to the operating system limitation, the actual memory size may be less than 4GB for the reservation for system usage under Windows® 32-bit OS. For Windows® 64-bit OS with 64-bit CPU, there is no such limitation.
BIOS
– 128Mb AMI UEFI Legal BIOS with multilingual GUI support
– ACPI 5.0 Compliant wake up events
– SMBIOS 2.7 Support
– CPU, GT_CPU, DRAM, VPPM, PCH 1.0V, VCCIO, VCCPLL, VCCSA Voltage Multi-adjustment
Graphics
– Supports Intel® HD Graphics Built-in Visuals : Intel® Quick Sync Video with AVC, MVC (S3D) and MPEG-2 Full HW Encode1, Intel® InTru™ 3D, Intel® Clear Video HD Technology, Intel® Insider™, Intel® HD Graphics 510/530
– Pixel Shader 5.0, DirectX 12
– Max. shared memory 1024MB*
– Three graphics output options: D-Sub, DVI-D and HDMI
– Supports Triple Monitor
– Supports HDMI with max. resolution up to 4K x 2K (4096×2160) @ 24Hz / (3840×2160) @ 30Hz
– Supports DVI-D with max. resolution up to 1920×1200 @ 60Hz
– Supports D-Sub with max. resolution up to 1920×1200 @ 60Hz
– Supports Auto Lip Sync, Deep Color (12bpc), xvYCC and HBR (High Bit Rate Audio) with HDMI Port (Compliant HDMI monitor is required)
– Supports Accelerated Media Codecs: HEVC, VP8, VP9
– Supports HDCP with DVI-D and HDMI Ports
– Supports Full HD 1080p Blu-ray (BD) playback with DVI-D and HDMI Ports
*The size of maximum shared memory may vary from different operating systems.

**Intel® HD Graphics Built-in Visuals and the VGA outputs can be supported only with processors which are GPU integrated.

***Due to chipset limitation, the Blu-ray playback of Intel® HD Graphics is only supported under Windows® 8 / 8 64-bit / 7 / 7 64-bit.

****Intel® InTru™ 3D is only supported under Windows® 8 / 8 64-bit / 7 / 7 64-bit.', 'destacado', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
insert into products (category_id, brand_id, model, price, discount, images, description, features, status, created_at, updated_at) values (2, 3, 'GT332', 35000.00, 0, 'nvidia-gt332.jpg', 'Nvidia es el fabricante líder de placas de video, su calidad asegura una experiencia positiva en el desarrollo del motor gráfico de tu computadora. Además, sus procesadores usan tecnología de punta para que puedas disfrutar de un producto veloz y duradero.', 'Performance
NVIDIA RTX 2060
1920 CUDA Cores
1755 MHz Boost Clock
210.6GT/s Texture Fill Rate
Memory
6144 MB, 192 bit GDDR6
14000 MHz (effective)
336 GB/s Memory Bandwidth
Cooling
Dual-Fan
Interface
PCIe 3.0
DVI-D, HDMI, DisplayPort
Dimensions
Height: 4.38 in – 111.15 mm
Length: 7.96in – 202.1mm
Width: Dual Slot
Operating System Support
Windows 10 64bit
Windows 7 64bit
Requirements
Minimum of a 500 Watt power supply.
One available 8-pin PCIe power dongle
Total Power Draw : 160 Watts', 'in-sale', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
insert into products (category_id, brand_id, model, price, discount, images, description, features, status, created_at, updated_at) values (2, 3, 'GT440', 28500.00, 0, 'nvidia-gt440.jpg', 'En el menor tiempo posible con una velocidad de memoria de 1600 MHz los datos del procesador central se van a traducir en información comprensible en tan solo un abrir y cerrar de ojos. Tu placa de video trabajará con rapidez para maximizar el tiempo real.', 'Rendimiento
NVIDIA GTX 1650
896 CUDA Cores
1710 MHz Boost Clock
94.1GT/s Texture Fill Rate
Memoria
4096 MB, 128 bit GDDR6
12000 MHz (effective)
192 GB/s Memory Bandwidth
Refrigeración
Dual-Fan
LED:
Interfaz
PCIe 3.0 16x
DisplayPort, DisplayPort, HDMI
Resolución y Actualizar
Max Monitors Supported: 3

240 Hz Max Refresh Rate
Max Analog :
Max Digital : 7680×4320
Dimensiones
Height: 4.38in – 111.15mm
Length: 7.96in – 202.1mm
Width: Dual Slot
Soporte de Sistema Operativo
Windows 10 64bit
Windows 7 64bit
Requerimientos
Minimum of a 300 Watt power supply.
An available 6-pin PCIe power connector
Total Power Draw : 75 Watts', 'in-sale', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
insert into products (category_id, brand_id, model, price, discount, images, description, features, status, created_at, updated_at) values (2, 4, 'GT456', 20000.00, 0, 'dell-gt456.jpg', 'Disfrutá de todas las cualidades que el monitor Dell P2018H tiene para ofrecerte. Percibí las imágenes de una manera completamente diferente y complementa cualquier espacio ya sea en tu casa u oficina.', 'Graphics Processing GeForce® GTX 1650 SUPER™
Core Clock 1740 MHz (Reference Card: 1725 MHz)
CUDA® Cores 1280
Memory Clock 12000 MHz
Memory Size 4 GB
Memory Type GDDR6
Memory Bus 128 bit
Memory Bandwidth (GB/sec) 192 GB/s
Card Bus PCI-E 3.0 x 16
Digital max resolution 7680×4320@60Hz
Multi-view 3
Card size L=172 W=122 H=40 mm
PCB Form ATX
DirectX 12
OpenGL 4.6
Recommended PSU 350W
Power Connectors 6 Pin*1
Output
DisplayPort 1.4 *1
HDMI 2.0b *1
DVI-D *1
Accessories
1. Quick guide
2. Driver CD', 'in-sale', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
insert into products (category_id, brand_id, model, price, discount, images, description, features, status, created_at, updated_at) values (3, 5, 'DEL32', 10300.00, 0, 'samsung-del32.jpg', 'Un monitor a tu medida con tu pantalla LED no solo ahorrás energía, ya que su consumo es bajo, sino que vas a ver colores más nítidos y definidos en tus películas o series favoritas.', 'Pantalla
Panel Size: Wide Screen 23.8″(60.5cm) 16:9
Panel Type : IPS
True Resolution : 1920×1080
Display Viewing Area(HxV) : 527.04 x 296.46 mm
Display Surface : Non-glare
Pixel Pitch : 0.2745 mm
Brightness(Max) : 250 cd/㎡
Contrast Ratio (Max) : 1000:1
ASUS Smart Contrast Ratio (ASCR) : 100000000:1
Viewing Angle (CR≧10) : 178°(H)/178°(V)
Response Time : 5ms (Gray to Gray)
Display Colors : 16.7M (real 8 bit)
Flicker free : Yes
Refresh Rate(max) : 75Hz
Caracteristicas de video
Trace Free Technology : Yes
SPLENDID Video Preset Modes : 8 Modes (sRGB Mode/Scenery Mode/Theater Mode/Standard Mode/Night View Mode/Game Mode/Reading Mode/Darkroom Mode)
Skin-Tone Selection : 3 Modes
Color Temperature Selection : 4 Modes
QuickFit (modes) : Yes (Alignment Grid/Paper/Photo Modes)
GamePlus(modes) : Yes (Crosshair/Timer/FPS Counter/Display Alignment)
Low Blue Light : Yes
HDCP support : Yes
VividPixel : Yes
FreeSync™ technology supported
Adaptive-Sync supported :Yes', 'visited', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
insert into products (category_id, brand_id, model, price, discount, images, description, features, status, created_at, updated_at) values (3, 5, 'SM40', 25000.00, 0, 'samsung-sm40.jpg', 'Un monitor a tu medida con tu pantalla LED no solo ahorrás energía, ya que su consumo es bajo, sino que vas a ver colores más nítidos y definidos en tus películas o series favoritas.', 'Display
Panel Size: Wide Screen 23.8″(60.5cm) 16:9
Color Saturation : 72% NTSC
Panel Type : IPS
True Resolution : 1920×1080
Display Viewing Area(HxV) : 527.04 x 296.46 mm
Display Surface : Non-glare
Pixel Pitch : 0.2745 mm
Brightness : 250 cd/㎡ (Typical)
Contrast Ratio : 1000 :1 (Typical)
ASUS Smart Contrast Ratio (ASCR) : 100000000:1
Viewing Angle (CR≧10) : 178°(H)/178°(V)
Response Time : 1ms MPRT , 4ms (Gray to Gray)
Display Colors : 16.7M
Flicker free : Yes
Refresh Rate(max) : 144Hz
Video Feature
Trace Free Technology : Yes
SPLENDID Video Preset Modes : 8 Modes (sRGB Mode/Scenery Mode/Theater Mode/Standard Mode/Night View Mode/Game Mode/Reading Mode/Darkroom Mode)
Skin-Tone Selection : 3 Modes
Color Temperature Selection : 4 Modes
QuickFit (modes) : Yes (Alignment Grid/Paper/Photo Modes)
GamePlus(modes) : Yes (Crosshair/Timer/FPS Counter/Display Alignment)
Low Blue Light : Yes
HDCP support : Yes
FreeSync™ technology supported
Adaptive-Sync supported :Yes
Extreme Low Motion Blur
Shadow Boost
Audio Features
Stereo Speakers : 2W x 2 Stereo RMS
I/O Ports
Signal Input : HDMI, D-Sub, DisplayPort
PC Audio Input : 3.5mm Mini-Jack
Signal Frequency
Analog Signal Frequency : 30 ~84 KHz (H) /48 ~75 Hz(V)
Digital Signal Frequency : 30 ~180 KHz (H) /48 ~144 Hz(V)
Power Consumption
Power On (Typical): < 16W*
Power Saving Mode : < 0.5W
Power Off Mode : < 0.5W
Voltage : 100-240V, 50 / 60Hz', 'visited', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
insert into products (category_id, brand_id, model, price, discount, images, description, features, status, created_at, updated_at) values (4, 6, 'I6LK2', 26000.00, 0, 'intel-i5lk2.jpg', 'Productividad y entretenimiento, todo disponible en computadoras de escritorio. La superioridad tecnológica de Intel es un beneficio para todo tipo de profesionales. Asegura el mejor rendimiento de las aplicaciones, de la transferencia de datos y la conexión con otros elementos tecnológicos.', 'Esencial
Conjunto de productos Procesadores Intel® Core™ i5 de 10ma Generación
Nombre de código Productos anteriormente Comet Lake
Segmento vertical Desktop
Número de procesador i5-10600K
Estado Launched
Fecha de lanzamiento Q2’20
Litografía 14 nm
Condiciones de uso PC/Client/Tablet
Especificaciones sobre rendimiento
Cantidad de núcleos 6
Cantidad de subprocesos 12
Frecuencia básica del procesador 4,10 GHz
Frecuencia turbo máxima 4,80 GHz
Caché 12 MB Intel® Smart Cache
Velocidad del bus 8 GT/s
TDP 125 W
Frecuencia de descenso de TDP configurable 3.80 GHz
Descenso de TDP configurable 95 W
Especificaciones de memoria
Tamaño de memoria máximo (depende del tipo de memoria) 128 GB
Tipos de memoria DDR4-2666
Cantidad máxima de canales de memoria 2
Máximo de ancho de banda de memoria 41.6 GB/s
Compatible con memoria ECC ‡No
Gráficos de procesador
Gráficos del procesador ‡Gráficos UHD Intel® 630
Frecuencia de base de gráficos 350 MHz
Frecuencia dinámica máxima de gráficos 1.20 GHz
Memoria máxima de video de gráficos 64 GB
Compatibilidad con 4K Yes, at 60Hz
Resolución máxima (HDMI 1.4)  4096×2160@30Hz
Resolución máxima (DP) 4096×2304@60Hz
Resolución máxima (eDP – panel plano integrado) 4096×2304@60Hz
Compatibilidad con DirectX* 12
Compatibilidad con OpenGL* 4.5
Intel® Quick Sync Video Sí
Tecnología Intel® InTru™ 3D Sí
Tecnología Intel® Clear Video HD Sí
tecnología Intel® de video nítido Sí
Cantidad de pantallas admitidas ‡3
ID de dispositivo 0x9BC5', 'in-sale', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
insert into products (category_id, brand_id, model, price, discount, images, description, features, status, created_at, updated_at) values (4, 6, 'I711', 32000.00, 0, 'intel-i711.jpg', 'Núcleos: el corazón del procesador dentro de este producto vas a encontrar los núcleos, que son los encargados de ejecutar las instrucciones y actividades que le asignás a tu dispositivo. Estos están en relación directa con dos elemetos: los hilos y el modelo, por lo que a la hora de elegir un procesador es importante que valores los tres en su conjunto.', 'Essentials
Product Collection 10th Generation Intel® Core™ i7 Processors
Code Name Products formerly Comet Lake
Vertical Segment Desktop
Processor Number i7-10700K
Status Launched
Launch Date Q2’20
Lithography 14 nm
Use Conditions PC/Client/Tablet
Performance Specifications
# of Cores 8
# of Threads 16
Processor Base Frequency 3.80 GHz
Max Turbo Frequency 5.10 GHz
Cache16 MB Intel® Smart Cache
Bus Speed 8 GT/s
Intel® Turbo Boost Max Technology 3.0 Frequency  5.10 GHz
Intel® Turbo Boost Technology 2.0 Frequency 5.00 GHz
TDP 125 W
Configurable TDP-down Frequency 3.50 GHz
Configurable TDP-down 95 W
Memory Specifications
Max Memory Size (dependent on memory type) 128 GB
Memory Types DDR4-2933
Max # of Memory Channels 2
Max Memory Bandwidth 45.8 GB/s
Processor Graphics
Processor Graphics ‡Intel® UHD Graphics 630
Graphics Base Frequency350 MHz
Graphics Max Dynamic Frequency1.20 GHz
Graphics Video Max Memory64 GB
4K SupportYes, at 60Hz
Max Resolution (HDMI 1.4) 4096×2160@30Hz
Max Resolution (DP) 4096×2304@60Hz
Max Resolution (eDP – Integrated Flat Panel) 4096×2304@60Hz
DirectX* Support 12
OpenGL* Support 4.5
Intel® Quick Sync Video Yes
Intel® InTru™ 3D Technology Yes
Intel® Clear Video HD Technology Yes
Intel® Clear Video Technology Yes
# of Displays Supported  3
Device ID0x9BC5', '', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
insert into products (category_id, brand_id, model, price, discount, images, description, features, status, created_at, updated_at) values (4, 7, 'I7-I', 34000.00, 0, 'amd-19-i.jpg', 'Clave en el rendimiento de computadoras de escritorio, ya no tenés que pensar en cómo distribuir el tiempo y acciones: ahora todas las tareas en simultáneo son posibles. AMD cuenta con un catálogo de productos que se adaptan a los requerimientos de todo tipo de usuarios: juegos en línea, edición a gran escala, contenido en múltiples plataformas y más.', 'Essentials
Product Collection 10th Generation Intel® Core™ i7 Processors
Code Name Products formerly Comet Lake
Vertical Segment Desktop
Processor Number i7-10700K
Status Launched
Launch Date Q2’20
Lithography 14 nm
Use Conditions PC/Client/Tablet
Performance Specifications
# of Cores 8
# of Threads 16
Processor Base Frequency 3.80 GHz
Max Turbo Frequency 5.10 GHz
Cache16 MB Intel® Smart Cache
Bus Speed 8 GT/s
Intel® Turbo Boost Max Technology 3.0 Frequency  5.10 GHz
Intel® Turbo Boost Technology 2.0 Frequency 5.00 GHz
TDP 125 W
Configurable TDP-down Frequency 3.50 GHz
Configurable TDP-down 95 W
Memory Specifications
Max Memory Size (dependent on memory type) 128 GB
Memory Types DDR4-2933
Max # of Memory Channels 2
Max Memory Bandwidth 45.8 GB/s
Processor Graphics
Processor Graphics ‡Intel® UHD Graphics 630
Graphics Base Frequency350 MHz
Graphics Max Dynamic Frequency1.20 GHz
Graphics Video Max Memory64 GB
4K SupportYes, at 60Hz
Max Resolution (HDMI 1.4) 4096×2160@30Hz
Max Resolution (DP) 4096×2304@60Hz
Max Resolution (eDP – Integrated Flat Panel) 4096×2304@60Hz
DirectX* Support 12
OpenGL* Support 4.5
Intel® Quick Sync Video Yes
Intel® InTru™ 3D Technology Yes
Intel® Clear Video HD Technology Yes
Intel® Clear Video Technology Yes
# of Displays Supported  3
Device ID0x9BC5', '', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
insert into products (category_id, brand_id, model, price, discount, images, description, features, status, created_at, updated_at) values (5, 8, 'GTX600', 28000.00, 0, 'coolermaster-gtx600.jpg', 'The Elite 460 RS-460-PSAR-I3 from Cooler Master pushes out 460W of power to handle your system thirst for juice. It is compliant with the newest Intel ATX 12V v2.31 specifications so it is a great choice for both replacements and new builds.', 'THERMALTAKE
FUENTE THERMALTAKE TR2 600W

– Capacidad de salida 600W
– Cable 24P flexeado
– Ventilador de 120mm Low Noise
– Norma ATX 12V V2.3
– Conector PCI-E 6+2

ESPECIFICACIONES

– Tipo ATX Form Factor 12V V2.3
– Dimensiones 150 x 86 x 140 mm
– Voltaje de entrada 115 Vac / 230 Vac
– Input Frequency Range 47 ~ 63 Hz
– Hold Up Time 16msec
– MTBF >100,000 hrs
– Protection OVP / OCP / OPP / SCP
– Output Capacity 600 Watts
– Operation Temperature 0~50°C (Nominal Input Voltage)
– Regulatory UL/CUL/FCC
– Fan 120mm fan
– Connector
M/B 20+4Pin x 1
CPU 4+4Pin x 1
PCI-E 6+2Pin x 1
PCI-E 6Pin x 1
Peripheral 4Pin x 4
SATA x 6
Floppy 4Pin x 1', '', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
insert into products (category_id, brand_id, model, price, discount, images, description, features, status, created_at, updated_at) values (5, 8, 'FT200', 17000.00, 0, 'coolermaster-ft200.jpg', 'ATX12V V2.31 COMPATIBLE Compatible with the ATX12V v2.31 standard, the Cooler Master Elite 460 RS-460-PSAR-I3 power supply provides maximum power stability to drive the latest Intel and AMD processors as well as other system components', 'Adjustable Single/Multi 12V Rail Yes
ATX Connector 1
ATX12V Version v2.4
Continuous output rated temperature C 50°C
Continuous power W 850 Watts
Fan bearing technology Fluid Dynamic Bearing
Fan size mm 140mm
MTBF hours 100,000 hours
Multi-GPU ready YES
Power 850 Watts
80 PLUS Efficiency Platinum
PSU Form Factor ATX
iCUE Compatibility Yes
Zero RPM Mode Yes
Cable Type Low-Profile, All Black

C-Link Ready Yes
Dimensions 150mm x 86mm x 180mm
EPS12V Connector 2
EPS12V Version v2.92
Floppy Connector 2
Intel C6C7 sleep state compatible Yes
Modular Fully
PCIe Connector 6
Plug Type EU
SATA Connector 12
PATA Connector 12
Modern Standby Compatible No', '', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Users admin
insert into users (first_name, last_name, email, password, category, image, adress, city, province, date, created_at, updated_at) values ('Luciano', 'Mazzuca', 'luciano@blastech.com', '$2b$10$oV86jBgMBkEZ6YpQPDZzuushIufiw6pKQGmOO1aZICZfFvKUrpe9e', 'admin', 'avatar-luciano.jpg', null, null, null, null, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
insert into users (first_name, last_name, email, password, category, image, adress, city, province, date, created_at, updated_at) values ('Esteban', 'Quito', 'esteban@quito.com', '$2b$10$oV86jBgMBkEZ6YpQPDZzuushIufiw6pKQGmOO1aZICZfFvKUrpe9e', 'user', 'default.png', null, null, null, null, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);



