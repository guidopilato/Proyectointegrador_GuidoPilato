# Proyecto Integrador Guido Pilato -> Portfolio Web - #YoProgramo

# El Deploy está subido,
Las distintas capas del proyecto integrador se encuentran disponibles en la nube, utilizando Firebase (para Front End Angular).
Podés encontrar la app completa en **[hacer click aquí](https://frontendguidopilato.web.app/ "aquí").***

En este repositorio se encuentra todo lo relacionado al **Frontend** del proyecto, para dirigirse al repositorio del **Backend** **[hacer click aquí](https://github.com/guidopilato/Proyectointegrador_GuidoPilato_BackEnd "aquí").***

## Descripción
- ***Portfolio Web Fullstack*** realizado como Proyecto Final del curso **Argentina Programa - #YoProgramo**.

- Se trata de una **Single Page Application (SPA)** realizada utilizando tecnologías Frontend como ser **HTML, CSS, Angular y Bootstrap**.

## ✅ Manejo de la App
- Utilizando diversas herramientas de Angular como *Binding*, *Routing*, *Interceptors* y *Services*; se implementaron las siguientes funcionalidades. 

1. Podemos ingresar con nuestros datos precargados a través del apartado <b>"Ingreso"</b> en la barra de navegación.
<div align="center">
  <img src="https://github.com/guidopilato/Proyectointegrador_GuidoPilato_FrontEnd/blob/main/Login.png">
</div>
<br>
2. El usuario tiene su propio <b>Portfolio Personal</b> , una vez ingresada a la cuenta, se puede modificar la información contenida en Educación y Experiencia a través de los distintos elementos en la interfaz:
<div align="center">
  <img src="https://github.com/guidopilato/Proyectointegrador_GuidoPilato_FrontEnd/blob/main/Educacion.png">
</div>
<br>
3. Es posible ingresar de manera pública en los botones de las redes sociales que se encuentran en la barra de navegación, 
<div align="center">
  <"https://github.com/guidopilato/Proyectointegrador_GuidoPilato_FrontEnd/blob/main/Redes.png">
</div>
<br>

## ⌨🖱 Instalación
- Si se desea correr la aplicación en un entorno local es necesario tener en cuenta lo siguiente: 

1. Clonar el repositorio utilizando GIT o descargando el archivo ZIP:

    `git clone https://github.com/guidopilato/Proyectointegrador_GuidoPilato_FrontEnd.git`

2. Instalar las dependencias a través de NPM.

    `npm install`

3. Configurar las variables de entornos en src/enviroments/enviroment.ts, donde configuraremos 3 propiedades:

- **baseUrl**: La URL de base para las conexiones con nuestra API REST. EJ:

  `baseUrl: "http://localhost:8080"`
  
- **authApi**: La URL para realizar las autenticaciones en nuestra API REST. EJ: 

  `authApi: "http://localhost:8080/api/auth"`

- **frontUrl**: La URL para redireccionar y realizar distintas operaciones en nuestro Frontend. EJ:

  `frontUrl: "http://localhost:4200/portfolio/"` (incluir el *slash* o *barra diagonal* al final).

4. Compilar y montar el proyecto utilizando el comando `ng serve`

5. **IMPORTANTE:** Debemos tener un servidor con el proyecto *Backend* activo para poder obtener los datos y registrar usuarios, caso contrario, no se renderizarán los componentes de Angular. Para más información ir al **[repositorio backend.](https://github.com/guidopilato/Proyectointegrador_GuidoPilato_FrontEnd "repositorio backend.")**


