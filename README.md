# Entrega-Modulo-3-Tarea-02-Peliculas
## Enlaces.
- Repositorio GitHub: https://github.com/zazmage/Entrega-Modulo-3-Tarea-02-Peliculas
- GitHub Page: https://zazmage.github.io/Entrega-Modulo-3-Tarea-02-Peliculas/
- Google Drive: https://drive.google.com/drive/folders/1mSvV1mL1hqI7_0UdcDjQGng3jlHNoF1-?usp=sharing
## Descripción del proyecto.
Este proyecto se realizó para dar respuesta al reto 2 del programa de entrenamiento de Academia Geek.

## Enunciado.
Reto: Películas
Usted ha sido contratado por la empresa “Películas para ti” para que desarrolle una aplicación web que cuente con los siguientes requerimientos técnicos

Implementar un menú de navegación que cuente con logo, página de inicio y registro En la página de inicio se debe visualizar un slider de imágenes de las películas Debajo del slider se deben cargar la tarjeta de las películas con su respectivo nombre e imagen (esta configuración se debe realizar desde JavaScript).

En la página de Registro, debe de cargar un formulario que contenga los campos mostrados en la imagen. Al momento de hacer clic en el botón “Enviar” esta información debe ser almacenada en el local storage.

Se debe implementar las siguientes funcionalidades en JavaScript.
- condicionales
- arreglos
- forEach o map
- función appendChild
- función createDocumentFragment
- función createElement
- función setAttribute
- función isNaN
- objetos
- localstorage

## Colores.
Para los colores utilizados en la hoja de estilos se utilizó como referencia la paleta de colores de la siguiente página:

https://coolors.co/0b090a-161a1d-660708-a4161a-ba181b-e5383b-b1a7a6-d3d3d3-f5f3f4-ffffff 

De esta página únicamente se utilizaron los colores --rich-black-fogra-39 como color primario y --blood-red como color secundario, luego estos dos colores se cargaron a la herramienta material tool:

https://material.io/resources/color/#!/?view.left=1&view.right=1&primary.color=0b090a&secondary.color=660708&secondary.text.color=ffffff

Esto para definir el color de la letra para cada color de fondo y las variantes brillante y oscura para los colores seleccionados, estos colores se guardaron como variables CSS.
## Datos de las películas.
Para almacenar de forma cómoda la información de cada película se creó un archivo .json que almacenaba cada película como un objeto, cada objeto contenía la información del directorio relativo al proyecto donde se encontraban una imágen para slider y otra para las cartas, además de cadenas de texto con el título de la película en español siempre que fuera posible y una breve sinopsis sacada de la página Filmafinity:
https://www.filmaffinity.com/
Estos datos fueron cargados a la página de forma asíncrona con el uso del objeto xhr instanciado de XMLHttpRequest, la petición se hizo al documento .json almacenado de forma local en los archivos del proyecto.
## Formulario de registro.
La información ingresada en el formulario de registro es almacenada en el localStorage, cada que se envía un nuevo formulario se comprueba el localStorage en búsqueda de registros anteriores y estos se actualizan con el nuevo registro según sea el caso.
Detalles de cada película.
Al hacer clic sea en el slider o en las cartas del index.html se envía la información de esa película en específico al local storage, posteriormente esta es rescatada y utilizada para cargar los elementos del movieinfo.html.
## TODO.
Queda pendiente añadir una buena validación para el formulario de registro además de agregar una buena maquetación de modo que cada elemento esté en su lugar y obedezca a un diseño responsive, también es necesario realizar una revisión para ahorrar código, hacer más eficiente el uso de recursos del sistema y mejorar la estructura de clases CSS, es posible que estos cambios se vean en un futuro, pero de cara a la realización del reto 3 y el corto espacio de tiempo disponible (antes del 1 de septiembre) decidí presentar el proyecto en el estado actual.
## Agradecimientos.
Cuando inicié el programa de entrenamiento de Academia Geek el 16 de agosto de 2021 tenía conceptos muy básicos de la programación web, aunque sí unas muy buenas bases de lógica de programación y Python, además del entrenamiento, estos cursos virtuales me dieron las bases para realizar este proyecto:
- John Mircha - Fundamentos HTML: https://www.youtube.com/watch?v=-oK6zL01fNM&t=21350s
- John Mircha - Fundamentos CSS: https://www.youtube.com/watch?v=K3xmRF8ab1o&t=2488s
- John Mircha - Curso de Javascript: https://www.youtube.com/playlist?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA
- Píldoras informáticas - Curso HTML5: https://www.youtube.com/playlist?list=PLU8oAlHdN5BnX63lyAeV0LzLnpGudgRrK
- Dorina Designs - Curso de CSS completo desde 0: https://www.youtube.com/watch?v=N8V5JhasaSE&t=5270s
- J&G Proyectos Web - Slider manual y automático infinito: https://www.youtube.com/watch?v=WI0aCIEYXvw
- Eloquent JavaScript 3rd edition (2018): https://eloquentjavascript.net/