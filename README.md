Todo App

Esta es una aplicación de lista de tareas (Todo App) construida con React que permite a los usuarios gestionar una lista de tareas. Utiliza Redux para el manejo del estado y se integra con PayPal para realizar compras.

Características

Crear tareas: Los usuarios pueden agregar nuevas tareas ingresando un título y una descripción en el formulario de creación de tareas.
Ver lista de tareas: La aplicación muestra una lista de tareas que incluye el título y la descripción de cada tarea.

Comprar tareas: Cada tarea en la lista incluye un botón "Comprar". Al hacer clic en este botón, se activa la integración con PayPal para realizar la compra de la tarea.

Integración con PayPal: Se utiliza la API de PayPal y el componente PayPalButton de la librería react-paypal-button-v2 para procesar los pagos. Al hacer clic en el botón "Comprar", se abre una ventana emergente de PayPal para completar el proceso de pago.

Almacenamiento en localStorage: Se utiliza el hook useEffect() para almacenar el array de tareas en el localStorage del navegador. Esto permite que los datos de las tareas persistan incluso después de cerrar la aplicación.
Recuperación de datos del localStorage: Al iniciar la aplicación o al actualizar la lista de tareas, se recupera el array de tareas almacenado en el localStorage para mostrar las tareas existentes.
Indicador de carga: Mientras se recuperan los datos del localStorage, se muestra un mensaje de "Cargando" para indicar al usuario que la aplicación está obteniendo los datos.

Requisitos
Node.js
npm o yarn

Instalación
Clona este repositorio en tu máquina local.
Navega al directorio raíz del proyecto.
Instala las dependencias utilizando el comando npm install o yarn install.

Uso
Crear una nueva tarea:

Ingresa un título y una descripción en el formulario de creación de tareas.
Haz clic en el botón "Nueva Tarea" para agregar la nueva tarea a la lista.

Ver la lista de tareas:

Observa la lista de tareas en la pantalla principal de la aplicación.
Cada tarea muestra su título y descripción.
Comprar una tarea:

En la lista de tareas, encuentra la tarea que deseas comprar.
Haz clic en el botón "Comprar" asociado a la tarea.
Se abrirá una ventana emergente de PayPal para procesar el pago de la tarea.
Almacenamiento y recuperación de datos:

Los datos de las tareas se almacenan automáticamente en el localStorage del navegador.
Al abrir la aplicación, se recuperan los datos del localStorage y se muestran en la lista de tareas.
Contribución

Contribución
Si deseas contribuir a este proyecto, puedes enviar un pull request. Agradecemos cualquier mejora o corrección de errores que puedas proporcionar.

Licencia
Este proyecto fue desarrollado para una prueba tecnica de react y fue desarrollado por (mariacabriles29)
