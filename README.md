# PWA-2024

## Descripción de la aplicación

  La aplicación desarrollada funciona como anotador de tareas por hacer. Por lo tanto, permite al usuario agregar nuevas tareas, marcar tareas como completadas y eliminarlas.

  Habrá un contador que muestra el número total de tareas y de tareas completadas, así como también a medida que el usuario agregue tareas, éstas se mostrarán en una lista.

## Explicacion de archivos principales
 
`Index.js`:
  Es el punto de partida donde React comienza a construir la aplicación y la muestra en el navegador web. Su trabajo principal es renderizar el componente principal de la aplicación en el DOM mediante el metodo `.render()`. De esa manera, es un archivo el cual no contiene mucho código. 

`App.js`:
  Este archivo contiene el componente principal de la aplicación. Definimos la estructura y comportamiento de la misma. Podemos importar componentes para utilizar.También se pueden definir los métodos que se utilizaran en la aplicacion.

`Index.css`:
  Este archivo es donde se define todos los estilos de la aplicación. contiene codigo CSS, podrá ser utilizado en toda la aplicación.

`Package.json`:
  Es un archivo de configuración de `npm` (Node Package Manager). Se utiliza para administrar las dependencias del proyecto, el nombre, las versiones utilizadas, los scripts. En este caso utilizamos la libreria de React, tambien puede tener otro tipo de informacion importante para la aplicaciion como autores o licencias.


## Cursada 2024

- Universidad Nacional del Comahue
- Facultad de Informatica (FAI)
- Tecnicatura Universitaria en Desarrollo Web
- Programación Web Avanzada (PWA)

## Alumnos - Grupo 1

- **Acosta Demian Aaron**

  - Legajo FAI - 2592
  - Mail Personal: demian.acosta@est.fi.uncoma.edu.ar
  - Usuario GitHub: acostaDemianAaron

- **Alcaraz Julian Jorge**

  - Legajo FAI - 4261
  - Mail Personal: julian.alcaraz@est.fi.uncoma.edu.ar
  - Usuario GitHub: Julian-Alcaraz

- **Agüero Mendez Guillermo Andres**

  - Legajo FAI - 3844
  - Mail Personal: guillermo.aguero@est.fi.uncoma.edu.ar
  - Usuario GitHub: guillermoagueronqn

## Instrucciones para la instalación y uso de la aplicación

 **1.** En caso de no tener instalado Node.js, se deberá hacerlo desde el siguiente link: https://nodejs.org/en/download , en el cual
se debe elegir el sistema operativo y luego seguir el proceso de instalación.

 **2.** Luego de haber instalado Node.js se deben escribir los comandos `node -v` y `npm -v` para saber si fue instalado correctamente. Lo que
se muestra en consola son las versiones instaladas. En caso de que no se muestren las versiones, quiere decir que todavía no se han
instalado correctamente.

![Paso 2](https://i.postimg.cc/Wb6KvDMz/paso2.png)

 **3.** Copiar la url del repositorio de GitHub.

![Paso 3](https://i.postimg.cc/N0VC4RwJ/paso3.png)

 **4.** Abrir en el editor de código usado la carpeta donde se querrá guardar el proyecto.

![Paso 4](https://i.postimg.cc/Jzp2s9YW/paso4.png)

 **5.** En la terminal, clonar el proyecto usando la url. Esto se realiza con el comando `git clone url`

![Paso 5](https://i.postimg.cc/Qd8zxXbb/paso5.png)

 **6.** Luego se deberá posicionar en la carpeta del proyecto clonado con el comando `cd PWA-2024` (en este caso ya que se llama así el proyecto). Una vez dentro de la carpeta, se ejecutará el comando `npm install`, el cual sirve para instalar todas las dependencias del proyecto.

![Paso 6](https://i.postimg.cc/JhtdZPSH/paso6.png)

 **7.** Por último, para iniciar el proyecto ejecutamos el comando `npm start`, con el cual se podrá empezar a utilizar el programa.