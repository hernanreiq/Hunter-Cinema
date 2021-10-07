# Hunter-Cinema
Prueba técnica. 
___
## Detalles
* Buscador con filtros para actores y películas. 
* CRUD para actores y películas. 
* Saneamiento de datos para evitar redundancias. 
___
## Secciones del Index
### **Últimas actualizaciones**
Se motrará la información de los últimos 4 actores añadidos o editados.
### **Buscador de actores / Resultados de la búsqueda**
Permite realizar búsquedas por sexo de los actores guardados en la base de datos.
### **Buscador de películas / Resultados de la búsqueda**
Permite realizar búsquedas por género de las películas guardados en la base de datos.
___
## Secciones del CRUD para actores
### **Crear actores**
* No permite crear actores con nombres duplicados, es decir, dos actores no pueden llamarse exactamente igual.
* Hace un saneamiento con los campos, verificando que este contenga letras, por lo que si el campo se deja en blanco o es llenado con espacios, no se podrá crear el actor.
* Permite subir una foto del actor en el formulario.
### **Buscar un actor**
* Para poder ver, eliminar o actualizar un actor es necesario buscarlo en el CRUD (**Aplica para el buscador de películas**).
* Las búsquedas solamente se hacen por nombre y sexo (**Aplica para el buscador de películas**).
* Las búsquedas se hacen a medida que se va escribiendo, por lo que si el actor posee alguna de las secuencias de letras presionadas entonces aparecerá en los resultados (**Aplica para el buscador de películas**).
* Si no se elige ningún filtro, se harán búsquedas generales de todos los actores, aunque sólo mostrará resultados de los últimos 4 que coincidan con la búsqueda (**Aplica para el buscador de películas**).
* Si luego de hacer la búsqueda se cambia el filtro, entonces la búsqueda se actualizará y mostrará las que conincidan con el nuevo filtro (**Aplica para el buscador de películas**).
* **CRUD:** cuando se realiza una búsqueda, se muestra el nombre del actor y las opciones de "Eliminar" (Rojo - Bote de basura), "Actualizar" (Azul - Lapíz) o "Ver" (Verde - Ojo), representados con iconos (**Aplica para el buscador de películas**).
![Searched](./web-concept/searched.jpg "Resultados de la búsqueda en el CRUD")
* **INDEX:** cuando se realiza una búsqueda, se muestra una foto del actor, su nombre y la opción de ver los detalles (**Aplica para el buscador de películas**).
![Searched Index](./web-concept/searched-index.jpg "Resultados de la búsqueda en el INDEX")
### **Ver un actor**
* **CRUD e INDEX** Muestra en una ventana emergente (Pop Up) los detalles del actor, incluido las películas en las que este ha trabajado.
![View details](./web-concept/view-details.jpg "Detalles del actor")
### **Actualizar un actor**
* Al cambiar el nombre del actor, este se actualiza en todas las películas en las que ha trabajado. 
* El actualizador permite cambiar datos específicos, por lo que no es necesario actualizar todos los datos (**Aplica para el actualizador de películas**).
![Update Actor](./web-concept/updater.jpg "Actualizar un actor")
* Si no se ha elegido la opción de editar algún dato, no te permite enviar el formulario (**Aplica para el actualizador de películas**).
### **Eliminar un actor**
* Borra la foto y la información perteneciente al actor.
* Borra el nombre del actor en todas las películas en donde esté registrado.
![Delete Actor](./web-concept/delete-actor.jpg "Borrar actores")
___
## Secciones del CRUD para películas
### **Crear películas**
* Se hace un saneamiento para que los campos no sean enviados vacíos. 
* Los actores deben ser agregados separados por coma y un espacio ", ".
* Si el nombre de actor se repite, no se toma en cuenta en las insignias que se van creando dinámicamente.
![Create Film](./web-concept/create-film.jpg "Creación de películas")
### **Buscar películas**
* Muchas de las características explicadas con el buscador de actores se aplican al buscador de películas.
* Los géneros que se muestran en los filtros son los existentes de las películas registradas, es decir, si solamente hay una película de género acción, entonces solamente aparecerá ese filtro.
### **Ver detalles de una película**
* **CRUD e INDEX** Muestra en una ventana emergente (Pop Up) los detalles de la película, incluido los actores que trabajaron en ella.
![View Film](./web-concept/view-film.jpg "Ver detalles de las películas")
### **Actualizar una película**
* Muchas de las características explicadas en el actualizador de actores se aplican al actualizador de películas.
* Al cambiar el nombre de la película, esta se actualiza en todos los actores que trabajaron en ella. 
### **Eliminar una película**
* Borra la foto y la información perteneciente a la película.
* La película deja de aparecer en la información de los actores que trabajaban en ella.
___
## Composición web del Index (Hecho por mi)
![Web concept](./web-concept/web-concept.png "Composición web")
___
## Creador: Hernan Demorizi Ureña
### [Portafolio de proyectos y habilidades](https://hernanreiq.github.io/portafolio/)