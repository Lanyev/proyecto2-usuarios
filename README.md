# **PROYECTO CRUD DE USUARIOS**

Este es un proyecto de ejemplo de una aplicación CRUD (Create, Read, Update, Delete) de usuarios. Utiliza las librerías de Express y Nodemon en el servidor y permite recibir diferentes verbos HTTP a diferentes rutas.

## Instrucciones

Creación y despliegue del servidor
Descarga el código fuente del proyecto desde el siguiente repositorio: https://github.com/SheykoWk/proyecto2-usuarios

Instala las dependencias necesarias para ejecutar el proyecto:

`npm install`
Inicia el servidor con el siguiente comando:

`npm start`
Punto opcional: Modelo MVC
En base al modelo MVC, puedes crear los siguientes 3 archivos ejemplo para manejar la lógica de los usuarios:

## Endpoints

La aplicación soporta los siguientes endpoints:

**GET /users**
Al hacer esta petición, se retornarán todos los usuarios almacenados en la base de datos ficticia.

**POST /users**
Al hacer esta petición, se manejará la información enviada por el cliente y se creará un nuevo usuario en la base de datos ficticia.

**GET /users/:id**
Al hacer esta petición, se retornará el usuario con el ID específico que se recibe desde los parámetros.

Estructura de datos de los usuarios
Los objetos de los usuarios almacenados en la base de datos ficticia tienen la siguiente estructura:

_{
"id": 1,
"firstName": "Sahid",
"lastName": "Kick",
"email": "sahid.kick@academlo.com",
"password": "root",
"age": 22
}_

## Despliegue

El código fuente de este proyecto está disponible en este repositorio de GitHub y ha sido publicado en Class-Center para su revisión.
