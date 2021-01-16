# Examen_DAM_Chat_Firebase

# Consiste en crear una App Móvil que permita a una usuario chatear o enviar mensajes y pueda iniciar sesión.

El video explicativo de funcionamiento se encuentra en la siguinete direccion: https://youtu.be/1qXN4OtPpNI

El sistema que se describe a continuacion tiene las siguientes especificaciones:
  - Usa Ionic y Angular
  - Cordova
  - Firebase
  - Encriptacion de datos
  - Inicio de sesión y registro

# Módulos y funciones principales
Los modulos que se describen a continuacion estan dentro de la carperta /src/app/..

- Modulo 1: Pagina de Inicio de Sesión
Ubicada en ela carpeta /login, esta pagina mostrara un formulario de 2 campos de email y contraseña respectivamente. Contiene 2 botoenes que permiten la idea a la página de registro y el que validará los datos ingresados con Firebase.

  Pagina HTML: Esta contiene el diño de la pagina o lo que se muestra, la llamada de las funciones para los botones, asi como los controladores de ngModel que se apliquen a los componente.
  Archivo login.page.ts tendra tods las funciones necesarias y elementos que se compartiran entre otros modulos y archivos.
    Funiciones principales:
    - ngOnInit(): Las validadicones principales que se cumolen en el formulario al usar FormGroup y se validaría los datos que se ingresan
    - async singIn (): se usa un async para poder controlar los errorres iniciales, despues creamos una función que controle o muestre en a pantalla que se pudo iniciar sesion o no. La función loading() es la que hara un spinner. despues se llama el servicio que es necesario para poder conectarnos a firebase y tomar los valores ingresados. Si la funcion se cumple o hay una respuesta vamos a deterner el spiner y avanzar a la página del chat, si no se cumple o hay un error se muestra un alert o caja de texto que no se pudo iniciar sesion. 
    - getEmail(): vamos a obtener el dato del email con el que se inicio la sesion. 
    - goToRegisterPage(): nos redireccionara a la pagina de registro.

- Modulo 2: Pagina de Registro
Ubicada en ela carpeta /register, esta pagina mostrara un formulario de 2 campos de email y contraseña respectivamente. Contiene 1 botón que permiten registrarse o guardar la infromacion y un enlace que lleva a la oagina del login.

  Pagina HTML: Esta contiene el diseño de la pagina o lo que se muestra, la llamada de las funciones para los botones, asi como los controladores de ngModel que se apliquen a los componente.
  Archivo register.page.ts tendra tods las funciones necesarias y elementos que se compartiran entre otros modulos y archivos.
    Funiciones principales:
    - validation_messages: son los mesajes que se muestran si uno de los campos que consta en el formulao no se cumplen. 
    - ngOnInit(): Las validadicones principales que se cumolen en el formulario al usar FormGroup y se validaría los datos que se ingresan, por ejemplo para la funion o el ingreso del email se utiliza un Patern o patron de caracteres donde debe contar un arroba y un punto de dominio del correo y para le password/Contraeña una longitud minuma de 5.
    - tryregistry(): llamanos al metodo signUp() que esta alojado en el servicio, este tomara los valores del formulario y los evalua, si son correctos y tenemos un response o respuesta vamos a mostrar un mensaje de que se "Creo la cuenta e iniciemos sesion", caso contrario un error.
    -goToLoginPage(): nos retorna a la pagina de login unsando los navgadores de control y donde existe el metodo que nos retorna a la pagina de donde venimos.

- Modulo 3: Chat
Ubicada en ela carpeta /home, esta pagina mostrara una barra de título, una caja de texto para ingresar el mensaje y el botón que envía el mensaje encriptado y otro que hace un logout o salida de la sesion.
  Pagina HTML: Esta contiene el diseño de la pagina o lo que se muestra los botones y el especio para el chat, la llamada de las funciones para enviar el mensaje tambien se muestra que se hace una mapeo de los datos que vienen a partir del servicio y se muestren como chat, asi como los controladores de ngModel que se apliquen a los componente.
  Archivo home.page.ts tendra tods las funciones necesarias y elementos que se compartiran entre otros modulos y archivos.
    Funiciones principales:
    - ngOnInit(): traemos todos los datos de los mensajes que estan en la colleccion de firebasem,,pero primero debemos pasar por el servicoo que se configuro el metodo de getChatMessages(), guardalos en una variable que es un vector y se puedan mapearlos.
    - sendMessage(): metodo que enviara los mensajes a la colletion que esta en firebase, antes de enviar los datos respectivos, los encriptamos usando CryptoJS y el metodo de encriptacion AES. Lo que modificara la variable y esta se almacenara en la misma. despues llamos al servicio que tiene el metodo addChatMessage(), donde enviamos el mensaje que encriptado y depues de eso borramos el campo.
    - signOut(): Llama el metodo del servicio que cierra la sesion y en consiguinete unsando el NavigationControl vamos a regresar a la pagina del login. 

- Modulo 4: Servicios
Ubicada en ela carpeta /services, esta pagina reaizara las conexiones y el envio de datos, gestion de claves y los metodo principales que llevan a el sistema a conectarse con firebase.
  Archivo firebase.services.ts tendra todas las funciones necesarias para la conexion con firebase (envio y recepcion de datos).
    Funiciones principales:
    - constructor(): llamo los metodos privados de FireAuth y Firestore, los cesarios tanto para el acceso a las colleciones que se tiene como los datos del usuario y los mesajes correspodientes. 
    - signUp(): es un metodo async que recibe los parametros email y password los que se envian mediante el AngularFireAuth y el metodo de crear usuario usando email y contraseña "createUserWithEmailAndPassword", a continuacion se extraen los datos del AngularFireAuth y usando AngularFirestore, los vamos a guardar en la collecion users, y tendran un campo especifico que es el uid o ID de usuario, y tambien tomara el correo y estos los guardaran en la collecion "users".
    - signIn(): recibe los parametros email y password y se evaluan con el metodo que tiene AngularFireAuth "signInWithEmailAndPassword" y se retorna un valor que permite el acceso.
    - signout(): nos devuelve una promesa que y esta viene a partir de usar el metodo que tiene AngularFireAuth "signOut" y se cerrara la sesión.
    - addChatMessage(msg): recibe un parametro que es el mensaje que viene desde el home.page.ts y que también se encuentra encriptado, y vamos a llamar/crear a una colección 'messages' usando AnfularFirestore donde iran los siguientes parametros. El mensaje encriptado, el uid obtenido del usuario que esta logeado y otra muy importante que es el timestamp o fecha/hora de creacion del mensaje, que nos servira para ordenarlos de el mas antiguo al mas nuevo.
    - getChatMessages(): Se obtiene la coleccion de los usuarios que esten registrados, a partir de la funcion privada getUsers(), esto se almacenara en un vector, pero tambien se deben mapear dentro de la collecion messages los mensajes que le corresponden a cada uno de los usuarios, la collecion sera ordenada por la fecha o el campo createdAt que fue diseñado al inicio con los timestamp al enviar el mensaje y guardan en un vector messages.
    Al obtener el vector messages, lo vamos a recorrer para traer los datos necesarios que se van a enviar en ese metodo. Usa 3 datos, el primero donde se desencripta el mensaje que llega y se lo asigna a la misma variable. se obtiene tambien correo de quien escribio el mensaje usando el metodo privado getUserForMsg() que busca en la colleccion del users el correo al que pertenece el uid, y finalmente vamos a comprobar que el uid del usuario es correcto al que hay en la collecion y si es distinto pues se asigna a otra coleccion para diferenciar los mesajes de distintos usuarios .
    - private getUsers(): aqui obenemos la colleccion de usarios que estan registrados y obtener los mesajes que tiene cada uno de los usuarios.
    - private getUserForMsg(): Aqui obtenemos a partir de una busqueda el email de cada uno de los usarios a los que pertenece dicho mensaje para mostrarlo en pantalla. 

- Modulo 5: Rutas
Ubicada en ela carpeta /app, esta pagina almacena las rutras principales del sistema, la ruta con la que arranca el sistema.
  Archivo app.routes.ts tendra los necesario para la las llamasdas de las paginas al sistema..
    Funiciones principales:
    - Lo principal es que se modifcan porque exiten 3 componentes o paginas que seriviran para el sistema, se define donde iniciara la aplicacion que es login y donde tambien constan el path o ruta de cada pagina que consta en el proyecto
    
- Modulo 6: Conexion aa Firebase
Ubicada en ela carpeta /environment, esta pagina almacena los permisos y credenciales para relizar la conexion con firebase.
  Archivo firebase.services.ts tendra tods las funciones necesarias para la conexion con firebase.

# Librerías
Las librerias usadas son:
  - Firebase
  - @angular/fire
  - CryptoJS

# Errores
Los errores cometidos o generados ocurren al dfinalizar todo el proceso de codificacion, el primero surge porque no esta configurado la variable de entorno de Android SDK, y no existen porque la computadores ddonde se desarollo el proceso no cuenta con los recursos necesarios para usar Android Studio.
  El error dice:
  > cordova.cmd build android
  > Checking Java JDK and Android SDK versions
  > ANDROID_SDK_ROOT=undefined (recommended setting)
  > ANDROID_HOME=undefined (DEPRECATED)
  > Failed to find 'ANDROID_SDK_ROOT' environment variable. Try setting it manually.
  > Failed to find 'android' command in your 'PATH'. Try update your 'PATH' to include path to valid SDK directory.
  > [ERROR] An error occurred while running subprocess cordova.

        cordova.cmd build android exited with exit code 1.

        Re-running this command with the --verbose flag may provide more information.


Por otra parte al no poder instalas Android Studio no se podra completar o generar le APK completo y probarlo desde un Smartphone y de sistema operativo android.
