#Grupo 2 - Comision 23308#

Descripcion:
    - El proyecto se trata de un CRUD que tiene algunas variantes con las versiones tradicionales.

Al iniciar la APP, desde la Landing Page se lee desde Firebase una coleccion de personajes de Rick and Morty. En caso que la colección este vacía, se buscan los datos en la API: https://rickandmortyapi.com/api/character desde donde se obtiene la primera tanda de 20 personajes. Estos datos son mapeados y subidos a una nueva coleccion de Firebase, sobre la cual se va a trabajar para poder Editar y Eliminar.

Si la colección tenia documentos o bien se llenó a partir de lo que se trae desde la API, se renderizan las tarjetas con los nombres de los personajes. Adicionalmente, se agrega una NavBar en la parte superior desde donde se puede regresar al Home presionando sobre el Icono/Nombre de la App, se puede obtener el nombre de los integrantes del Grupo a partir del Boton de Informacion del margen derecho. Tambien se aplicó un ícono personalizado a la pestaña de la página.

Haciendo click en cada tarjeta se puede acceder a los datos completos del personaje para poder editarlo o eliminarlo. Estos datos se despliegan en otra url.

Adicionalmente, en la pagina principal se agrega un buscador que, a partir del criterio ingresado, recorre la coleccion buscando ese texto en el Nombre del Personaje (no es case sensitive para mejorar los resultados). Se valida que el cuadro contenga información al momento de presionar el ícono de busqueda. En caso de encontrar resultados, estos son presentados con el mismo formato en una nueva url, indicando la cantidad de coincidencias para el criterio ingresado.

La APP contiene: JS, React, Bootstrap, Font Awesome, Sweet Alert, Firebase.

Integrantes: Tobias Marcelo Romero Gómez - Diego Alejandro Erazo - Roberto Rossa - Nelly Maria Anampa Delgado - Candela Rivero - Evelyn Eduards - Pablo Blanco

URL de Github: https://github.com/blanray/Integrador_REACT_G2.git
URL de Netlify: https://nimble-gaufre-255314.netlify.app/



React Project

This project was bootstrapped with:

    Create React App.
    ReactJS
    Firebase
    Bootstrap

Available Scripts

In the project directory, you can run:
npm start

Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.
npm run build

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

