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

Modulo 1: Pagina de Inicio de Sesión
Ubicada en ela carpeta /login, esta pagina mostrara un formulario de 2 campos de email y contraseña respectivamente. Contiene 2 botoenes que permiten la idea a la página de registro y el que validará los datos ingresados con Firebase.

  Pagina HTML: Esta contiene el diño de la pagina o lo que se muestra, la llamada de las funciones para los botones, asi como los controladores de ngModel que se apliquen a los componente.
  Archivo login.page.ts tendra tods las funciones necesarias y elementos que se compartiran entre otros modulos y archivos.
    Funiciones principales:
    - 
    - 
    - 
    -

Modulo 2: Pagina de Registro
Ubicada en ela carpeta /register, esta pagina mostrara un formulario de 2 campos de email y contraseña respectivamente. Contiene 1 botón que permiten registrarse o guardar la infromacion y un enlace que lleva a la oagina del login.

  Pagina HTML: Esta contiene el diño de la pagina o lo que se muestra, la llamada de las funciones para los botones, asi como los controladores de ngModel que se apliquen a los componente.
  Archivo register.page.ts tendra tods las funciones necesarias y elementos que se compartiran entre otros modulos y archivos.
    Funiciones principales:
    - 
    - 
    - 
    -

Modulo 3: Chat
Ubicada en ela carpeta /home, esta pagina mostrara una barra de título, una caja de texto para ingresar el mensaje y el botón que envía el mensaje encriptado y otro que hace un logout o salida de la sesion.

  Pagina HTML: Esta contiene el diño de la pagina o lo que se muestra, la llamada de las funciones para los botones, asi como los controladores de ngModel que se apliquen a los componente.
  Archivo home.page.ts tendra tods las funciones necesarias y elementos que se compartiran entre otros modulos y archivos.
    Funiciones principales:
    - 
    - 
    - 
    -
Modulo 4: Servicios
Ubicada en ela carpeta /services, esta pagina reaizara las conexiones y el envio de datos, gestion de claves y los metodo principales que llevan a el sistema ca conectarse con firebase.
  Archivo firebase.services.ts tendra tods las funciones necesarias para la conexion con firebase.
    Funiciones principales:
    - 
    - 
    - 
    -

modulo 5: Rutas
Ubicada en ela carpeta /app, esta pagina almacena las rutras principales del sistema, la ruta con la que arranca el sistema.
  Archivo app.routes.ts tendra los necesario para la las llamasdas de las paginas al sistema..
    Funiciones principales:
    - 
    
Modulo 6: Conexion aa Firebase
Ubicada en ela carpeta /environment, esta pagina almacena los permisos y credenciales para relizar la conexion con firebase.
  Archivo firebase.services.ts tendra tods las funciones necesarias para la conexion con firebase.
    Funiciones principales:
    -


# Librerías
Las librerias usadas son:
  - Firebase
  - @angular/fire
  - Crypto JS

# Errores
Los errores cometidos o generados ocurren al dfinalizar todo el proceso de codificacion, el primero surge porque no esta configurado la variable de entorno de Android SDK, y no existen porque la computadores ddonde se desarollo el proceso no cuenta con los recursos necesarios para usar Android Studio.
  El error dice:
  > cordova.cmd build android
  Checking Java JDK and Android SDK versions
  ANDROID_SDK_ROOT=undefined (recommended setting)
  ANDROID_HOME=undefined (DEPRECATED)
  Failed to find 'ANDROID_SDK_ROOT' environment variable. Try setting it manually.
  Failed to find 'android' command in your 'PATH'. Try update your 'PATH' to include path to valid SDK directory.
  [ERROR] An error occurred while running subprocess cordova.

        cordova.cmd build android exited with exit code 1.

        Re-running this command with the --verbose flag may provide more information.


Por otra parte al no poder instalas Android Studio no se podra completar o generar le APK completo y probarlo desde un Smartphone y de sistema operativo andrord.
