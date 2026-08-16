# La consola de comandos. Parte II

## ❓ Ubicación y orientación. Directorios y archivos

Tal como hemos visto en la lección anterior, cuando iniciamos sesión, por ejemplo, en un sistema operativo Linux sin entorno gráfico, accedemos a una TTY "real" que nos permite interactuar con el sistema. La duda que primero nos puede aparecer es saber en qué directorio me encuentro. ¿Estoy en "Mis documentos"? ¿En la raíz de la carpeta del usuario? ¿En "Descargas"? Si creo un archivo, ¿en qué carpeta o directorio se guardará?
En Linux, todo se organiza en forma de **directorios** y **archivos**, de manera similar a carpetas y documentos en otros sistemas operativos.

## 📁 ¿Qué es un directorio?

Un directorio es un **contenedor** que puede almacenar:

* Archivos (documentos, imágenes, música, vídeos, programas…)
* Otros directorios (subdirectorios)

A modo de ejemplo, podemos imaginar el sistema de archivos como un árbol:

La raíz del árbol comienza en "/" que es el directorio raíz y a partir de él cuelgan todos los otros directorios:

```bash
/home/usuario/Escritorio
```

## 📍 ¿Dónde estoy? El comando `pwd`

Para saber en qué directorio nos encontramos actualmente, utilizamos el comando `pwd`.

🔹 *pwd* significa *Print Working Directory* (imprimir directorio de trabajo actual).

Al ejecutarlo, la consola mostrará una ruta completa, por ejemplo:

```bash
pwd
```
![PWD](/assets/pwd.png)

En el ejemplo anterior vemos como el comando nos indica que nos encontramos dentro del directorio "/home", el cual, a su vez, contiene el directorio particular del usuario.

## 🛣️ ¿Qué es una ruta?

Una ruta es la dirección que indica dónde se encuentra un archivo o directorio dentro del sistema.

* **Ruta absoluta**: es la ruta completa desde el directorio raíz "/". Por ejemplo, continuando con el ejemplo anterior, una foto de nombre "foto1.jpeg" que estuviera en el directorio "Imágenes" tendría por ruta completa:

```bash
/home/usuario/Imágenes/foto1.jpeg
```
⚠️ Cualquier ruta absoluta comienza siempre por `/`.

* **Ruta relativa**: es una ruta que parte del directorio en el que nos encontramos actualmente.

Si ya nos encontramos en la carpeta del usuario, por ejemplo en "/home/usuario", podemos acceder haciendo uso del comando `cd` (*change directory*) a "Documentos" simplemente escribiendo:

```bash
cd Documentos
```

## 🏠 Diferencia entre `/` y `~`

* `/` Hace referencia al **directorio raíz en nuestro sistema operativo**. Es el inicio de todo el sistema de archivos donde todos los subdirectorios cuelgan de él. ⚠️ No es el directorio personal de ningún usuario.
Por ejemplo, en el directorio raíz podríamos encontrar una organización similar a la siguiente:

```text
/
├── home
├── etc
├── bin
└── var
```
* `~` Hace referencia al **directorio personal del usuario**. Es un atajo al directorio *home* del usuario actual. Hay que tener en cuenta que este cambia según el usuario que haya iniciado la sesión.
Por ejemplo, el directorio personal en un equipo Linux actual puede tener una organización similar a la siguiente:

```text
~
├── Descargas
├── Documentos
├── Escritorio
├── Imágenes
├── Música
├── Plantillas
├── Público
├── Vídeos
```


## 📂 ¿Qué hay aquí? El comando `ls`

Para listar el contenido de un directorio usamos `ls` con sus opciones y argumentos (si es necesario):

```bash
ls
```

Esto mostrará los archivos y subdirectorios del directorio actual.

### Opciones comunes del comando `ls`

1. `ls -l` (opción *long*) muestra:
    1. Permisos
    1. Número de enlaces (*hard links*)
    1. Propietario
    1. Grupo
    1. Tamaño
    1. Fecha de modificación

![Ejemplo listado directorio personal](/assets/ls_l_ejemplo.png)

```text
drwxr-xr-x  2  mnebot  mnebot  12288  jul 23 21:28  Descargas
││────────│ │    │        │       │        │            │
││        │ │    │        │       │        │            └── Nombre
││        │ │    │        │       │        └──────────── Fecha modificación
││        │ │    │        │       └───────────────────── Tamaño
││        │ │    │        └───────────────────────────── Grupo
││        │ │    └────────────────────────────────────── Propietario
││        │ └─────────────────────────────────────────── Nº de enlaces
│└────────┴───────────────────────────────────────────── Permisos
└─────────────────────────────────────────────────────── Tipo (d = directorio)
```

2. `ls -lh` combina la opción *long* (`-l`) con la opción `-h` (*human-readable*). De esta forma, muestra el listado detallado utilizando tamaños fáciles de leer para las personas, expresados en KB, MB, GB...

## 🔐 Permisos básicos de archivos y directorios

Cada archivo y directorio tiene permisos que indican quién puede hacer qué con ellos.

Al ejecutar `ls -l` veremos algo parecido a:

```bash
drwxr-xr-- 2 usuario usuario 4096 jun 10  Documentos
```

🔍 Interpretación básica de permisos de un archivo o directorio:

- El primer carácter indica el tipo:
    - d → directorio
    - \- → archivo

![Directorio vs Archivo](/assets/directorio_vs_archivo.png)

- A continuación aparecen tres bloques de permisos separados mediante un guion:
    - El primer bloque hace referencia a qué puede hacer el **Usuario** (propietario)
    - El segundo bloque hace referencia a qué puede hacer el **Grupo**
    - El tercer bloque hace referencia a qué pueden hacer **Otros usuarios** con acceso al archivo o directorio

- Cada bloque puede contener las siguientes letras que representan una función específica:
    - r → lectura (*read*)
    - w → escritura (*write*)
    - x → ejecución (*execute*). En el caso de los directorios, permite acceder y entrar en ellos.

## 💡 Ejemplo: Analizar permisos de un archivo

Acabo de crear un archivo con extensión **.txt** en el **Escritorio** de mi usuario. Haciendo un `ls -l` recibo la siguiente información a través de la shell:

```bash
-rw-r--r-- 1 mnebot mnebot    11 jul 24 16:47  prueba.txt
```
- \- → Indica que se trata de un archivo, no de un directorio.
- El primer bloque de permisos `rw-` indica que:
    - El propietario puede leerlo y modificarlo pero no ejecutarlo (por ejemplo, si fuese un script, no se podría ejecutar hasta concederle permisos de ejecución).
- El segundo bloque de permisos `r--` indica que:
    - Los usuarios que pertenecen al grupo `mnebot` solo tienen permisos de lectura sobre el archivo.
- El tercer bloque de permisos `r--` indica que:
    - El resto de usuarios del sistema pueden leer el archivo, pero no modificarlo ni ejecutarlo (en caso de ser un script o un programa).

## 💡 Ejemplo: Analizar permisos de un directorio

Veamos un segundo ejemplo práctico. Creamos un directorio de nombre **prueba** en el **Escritorio** de nuestro usuario. Haciendo un `ls -l` recibimos la siguiente información:

```bash
drwxr-xr-x 2 mnebot mnebot 4096 jul 24 16:47  pruebas
```

- `d` → Indica que se trata de un directorio (no de un archivo regular).
- El primer bloque de permisos `rwx` indica que:
    - El usuario propietario puede listar el contenido del directorio (*read*), crear o eliminar archivos dentro de él (*write*) y acceder al directorio (*execute*).
- El segundo bloque de permisos `r-x` indica que:
    - Los usuarios que pertenecen al grupo `mnebot` pueden listar el contenido del directorio y acceder a él, pero no pueden crear, modificar ni eliminar archivos dentro del mismo.
- El tercer bloque de permisos `r-x` indica que:
    - El resto de usuarios del sistema pueden listar el contenido del directorio y acceder a él, pero no pueden crear, modificar ni eliminar archivos dentro del mismo.

### 🔎 Interpretación de permisos en archivos vs directorios

|Permiso|Archivo|Directorio|
|:------|:------|:---------|
| r |Ver contenido |Listar archivos (`ls`) |
| w |Modificar archivo | Crear/eliminar archivos dentro |
| x |Ejecutar programa | Entrar al directorio (`cd`) |

## 📋 Resumen de comandos

| Comando | Para qué sirve | Ejemplo |
|:--------|:---------------|:--------|
| `pwd` | Muestra la ruta completa del directorio actual en el que nos encontramos | `pwd` |
| `cd` | Cambia al directorio indicado | `cd Documentos` |
| `ls` | Lista el contenido de un directorio | `ls` |
| `ls -l` | Muestra información detallada del contenido de un directorio (permisos, propietario, tamaño, fecha...) | `ls -l` |
| `ls -lh` | Muestra el listado detallado utilizando tamaños más fáciles de leer | `ls -lh` |