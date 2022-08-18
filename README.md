# Aplicación Challengue app

## Índice de contenido

- [Requisitos: Tecnologías / IDES / Sistemas Operativos](#requisitos-tecnologías-ides-sistemas-operativos)
- [Estructura de carpetas del proyecto](#estructura-de-carpetas-del-proyecto)
- [Despliegue de proyecto](#despliegue-de-proyecto)
- [End points de prueba](#end-point-de-pruebas)
- [Autores del proyecto](#autores-del-proyecto)


## Requisitos: Tecnologías / IDES / Sistemas Operativos

- Node JS (versión v14.15.4)
- npm (versión 6.14.10)
- Visual Studio Code (versión: 1.45.1)
- Sistema operativo en MacBook o Mac: macOS Big Sur 11.6.1
- Navegador web (chrome, firefox ,etc)
- React [Create React App](https://github.com/facebook/create-react-app).

## Estructura de carpetas del proyecto

- challengue_backend

    - **__mocks__** (Simuladores que ayudan a ejecutar pruebas unitarias)
    - **__test__** (Carpeta que contiene las pruebas unitarias)
    - **api** (Conntiene las clases de conexión a los servicios)
    - **assets** (Contiene los recursos utilizados dentro de la aplicación )
    - **componentes** (Contiene los componentes utilizados dentro de la aplicación)
    - **navigation** (Carpeta que contiene las configuraciones del proyecto)
    - **screens** (Contiene las pantallas de la aplicación)
    - **strings** (Contiene los valores de los textos contenido en la app)
    - **styles** (Contiene los estilos de la aplicación)
    - **utils** (Contiene todas aquellas herramientas que son requeridas dentro de la aplicacion)
    - **index.js** (Archivo inicial  de la aplicación)

## Despliegue de proyecto

- Se deberán seguir los siguientes paso para poder ejecuatar el proyecto.
  - 1.- Ejecutar `npm install`  a nivel root del proyecto para instalar los componentes requeridos.
  - 2.- Ejecutar `npm run start`  a nivel root del proyecto para ejecutar el proyecto .
  - 3.- Copiar la siguiente url en un navegador [http://localhost:3000](http://localhost:3000) en caso de que no se abra
  
## Ejecución de pruebas unitarias

- Para ejecutar las pruebas se debera ejecutar el siguiente comando .
  - `npm run test` para obtener el menu de opciones de pruebas.
  - `npm run test a` para ejecutar todas las pruebas unitarias.
  - `npm run test u` En caso de que falle alguna prueba de snaps.

  
## Autores del proyecto

- Beatriz Herández Hernández - Desarrollador Front end
