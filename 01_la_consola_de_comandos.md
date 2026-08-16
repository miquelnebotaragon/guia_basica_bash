# La consola de comandos. Parte I

## ❓ ¿Qué es?

En sistemas Linux (y otros de tipo Unix), el usuario puede interactuar con el sistema operativo mediante una **consola de comandos**. En ella se escriben instrucciones que el sistema interpreta y ejecuta.

Desde un punto de vista técnico, esta interacción se realiza a través de mecanismos como los **TTY** (*Teletypewriter*) y los **pseudoterminales (PTY)**.
* **TTY** real o consola pura: cuando, por ejemplo, instalas Debian sin entorno gráfico, la primera pantalla que nos permite hacer *login* sería una consola TTY *real*.
* **PTY** pseudoterminales o emuladores de terminal: cuando ya estamos en un equipo que dispone de entorno gráfico (KDE, Gnome, XFCE...) y abres una aplicación tipo:
    * Konsole (KDE Plasma)
    * Terminal GNOME
    * Xterm
    * ...

## 🔨 Shell

Continuando una secuencia lógica de eventos, llega el momento ahora de hablar de la Shell.  
**La Shell es un intérprete de órdenes (*command interpreter*).** Recibe los comandos escritos por el usuario, los interpreta y, cuando es necesario, ejecuta los programas correspondientes. Es importante destacar que la Shell no es el sistema operativo de nuestro equipo, sino un programa que actúa como intermediario entre el usuario y el sistema.  
Por ejemplo, si queremos listar el contenido de un directorio utilizaremos el comando `ls`, el cual es un programa externo que la shell ejecuta cuando el usuario lo invoca.

```bash
# Esto listará el contenido de la carpeta de descargas del usuario.
ls /home/usuario/Descargas
```

### Tipos de Shell

En los sistemas Linux existen diferentes programas capaces de interpretar los comandos del usuario. Todos ellos reciben el nombre de Shell, aunque presentan pequeñas diferencias en su funcionamiento, sintaxis y características.

Algunas de las más conocidas son:

**Bash** (*Bourne Again SHell*): es la Shell más utilizada en la mayoría de distribuciones Linux y la que emplearemos durante este curso. Destaca por su equilibrio entre sencillez y potencia, además de ser el estándar en la administración de sistemas.
**sh** (*Bourne Shell*): es la Shell clásica de Unix. Muchas Shell modernas mantienen compatibilidad con ella para facilitar la ejecución de scripts antiguos.
**Zsh** (*Z Shell*): incorpora numerosas mejoras orientadas a la productividad, como autocompletado avanzado, corrección de errores al escribir comandos y una gran capacidad de personalización. Es la Shell predeterminada en versiones recientes de macOS.
**Fish** (*Friendly Interactive SHell*): diseñada para facilitar el trabajo interactivo gracias a una sintaxis sencilla, sugerencias automáticas y una configuración muy amigable para usuarios principiantes.
**Ksh** (*Korn Shell*): muy utilizada históricamente en entornos Unix empresariales y conocida por sus buenas capacidades para *scripting*.

 Aunque existen numerosas Shell, los comandos básicos que aprenderemos durante este curso funcionan de la misma forma en prácticamente todas ellas.

```bash
# Para saber qué Shell estás usando ejecuta:
echo $SHELL

# El comando echo muestra en pantalla el texto que recibe como argumento
# $SHELL es una variable de entorno que almacena información sobre la Shell del usuario.
# Así entonces, $SHELL mostrará en pantalla qué tipo de Shell tenemos en nuestro equipo
```
![Shell usuario](/assets/shell_usuario_bash.png)

## 👌🏼 Estructura de un comando

La mayoría de comandos en Linux siguen una estructura muy similar a la siguiente:

```bash
comando [opciones] [argumentos]
```
Donde:
- **Comando**: es el programa que queremos ejecutar.
- **Opciones**: modifican el comportamiento del comando y suelen ser opcionales.
- **Argumentos**: indican sobre qué elemento queremos que actúe el comando (un archivo concreto, un directorio, un texto...).

```bash
# Muestra el contenido completo de un directorio
ls -a /home/usuario/Descargas
```
En el ejemplo anterior:
|Elemento |Valor                       |Descripción                                |
|:--------|:---------------------------|:------------------------------------------|
|Comando  |`ls`                        |Lista el contenido de un directorio        |
|Opción   |`-a`                        |Incluye también los archivos ocultos       |
|Argumento|`/home/usuario/Descargas`|Directorio cuyo contenido queremos mostrar |

Las **opciones** normalmente disponen de una versión corta (precedida por un guion `-`) y, en muchos casos, de una versión larga (precedida por dos guiones `--`). Haciendo uso del ejemplo anterior, también podríamos ver el contenido completo de un directorio (con sus archivos ocultos) ejecutando la siguiente instrucción:

```bash
ls --all /home/usuario/Descargas
```
Veamos algunos ejemplos más:

```bash
# Muestra el tamaño del archivo "prueba.txt"
ls -s /home/usuario/Escritorio/prueba.txt

# Si combinamos la opción "s" con "h", de "human" obtendremos el tamaño del archivo en Kb, MB, GB...
ls -sh /home/usuario/Escritorio/prueba.txt
```
![Tamaño de un archivo](/assets/tamano_archivo.png)
Cada comando dispone de su propio manual, donde se describen todas sus opciones y ejemplos de uso. Para acceder a él utilizaremos el comando `man` seguido del nombre del comando que queremos consultar.

```bash
man cat
```
![Manual del comando CAT](/assets/cat_man.png)

```bash
cat --version
```
![Versión del comando CAT](/assets/cat_version.png)


## 🙇🏻 ¿De qué manera utiliza el usuario la consola de comandos?

La interacción con el sistema a través de la consola puede realizarse de distintas formas:

* Mediante un **terminal físico** o local, es decir, un dispositivo conectado directamente al sistema (pantalla y teclado).
* Mediante un **terminal virtual**, como ocurre al conectarse a otro equipo o servidor remoto usando **SSH** u otros protocolos de acceso remoto.

## 📝 Canales básicos de comunicación con el sistema

Los programas que se ejecutan en la consola utilizan tres canales estándar de comunicación, conocidos como **flujos estándar**:

1. **STDIN (Standard Input)**:  
   Canal de entrada estándar. Por él entran los datos que recibe un programa, ya sea desde el teclado, desde un archivo o desde la salida de otro comando.

2. **STDOUT (Standard Output)**:  
   Canal de salida estándar. Por él se envían los resultados normales de la ejecución de un programa, que habitualmente se muestran en la pantalla.

3. **STDERR (Standard Error)**:  
   Canal de salida de error estándar. Se utiliza para mostrar mensajes de error o advertencias, y está separado de la salida estándar para poder gestionarlos de forma independiente.

🔢 Cada uno de ellos tiene un número representativo:
| Flujo | Número |
|:-----:|:------:|
|STDIN  |0       |
|STDOUT |1       |
|STDERR |2       |

## 📄 Guía rápida de redirecciones en Bash

### Redirigir salida a un archivo

1. Guarda el resultado de un comando en un archivo (⚠️ cuidado, si el archivo existe, lo sobrescribe).

```bash
cat mi_archivo.txt > salida.txt
```
2. Teniendo en cuenta el esquema de números representativos anterior, otra forma equivalente de escribir lo mismo sería:

```bash
cat mi_archivo.txt 1> salida.txt
```
3. Para añadir el contenido al final del archivo si este ya existe (esta opción no borrará el contenido del archivo, añadirá en el mismo la nueva información):

```bash
cat mi_archivo.txt >> salida.txt
```
### Redirigir errores

4. Guardar el mensaje de error, por ejemplo, si un archivo no existe:

```bash
ls ~/Escritorio/foto_inexistente.jpeg 2> error.txt
```
### Salida y errores juntos

5. Combina STDOUT y STDERR en un mismo archivo:

```bash
ls ~ &> salida_y_errores.txt
```
Si deseamos descartar la salida STDOUT o STDERR podemos enviar la información a /dev/null. Esta ruta eliminará la información de salida.

```bash
ls ~/Escritorio/foto_inexistente.png 2> /dev/null
```

## 💡 Ejemplo: Listar las carpetas del directorio home y copiarlas en un archivo

```bash
ls ~ > /home/usuario/Escritorio/directorio.txt
```
![STDOUT a archivo](/assets/stdout_archivo.png)
Siguiendo el esquema de números representativos anterior, otra manera de escribir lo mismo sería:

```bash
ls ~ 1> /home/usuario/Escritorio/directorio.txt
```

## 💡 Ejemplo: Listar un archivo inexistente y copiar el mensaje de error a archivo

```bash
ls archivo_que_no_existe.png
```
Al no encontrar el archivo en el directorio especificado, la consola muestra un mensaje de error (STDERR) indicando que no se puede acceder porque no existe el fichero.

![STDERR](/assets/stderr.png)
En el siguiente ejemplo le indicamos a la consola que queremos guardar la salida en un archivo en particular.

```bash
ls archivo_que_no_existe.png > salida.txt
```
Lo que ocurrirá es que la consola seguirá mostrando el error indicando que no existe el archivo pero el documento *salida.txt* aparecerá vacío. ¿Por qué pasa esto? Porque al no encontrar archivo, la salida está vacía.
Si lo que queremos es guardar el mensaje de error deberemos hacerlo de la siguiente manera:
```bash
ls archivo_que_no_existe.png 2> salida.txt
```

![STDERR a archivo](/assets/stderr2.png)

## 💡 Ejemplo: Buscar un texto en un archivo

```bash
grep eth0 < interfaces.txt
```
* `<`: El símbolo *menor que* indica que vamos a usar el archivo *interfaces.txt* como fuente de información de entrada (STDIN).
* `grep`: El comando *grep* buscará en el archivo la palabra que intentamos encontrar, *eth0*.

![STDIN y STDOUT](/assets/stdin_stdout.png)

## 📋 Resumen de comandos

| Comando | Para qué sirve | Ejemplo |
|:--------|:---------------|:--------|
| `echo` | Muestra un texto o el contenido de una variable en pantalla | `echo $SHELL` |
| `ls` | Lista el contenido de un directorio | `ls /home/usuario/Descargas` |
| `man` | Muestra el manual de ayuda de un comando | `man cat` |
| `cat` | Muestra el contenido de un archivo | `cat archivo.txt` |
| `grep` | Busca un texto concreto dentro de un archivo o entrada de datos | `grep eth0 < interfaces.txt` |

## 🖼️ Resumen en formato gráfico

![Terminal vs Shell vs Bash](/assets/terminal_shell_bash.png)
Descarga desde aquí: [Consola vs Terminal vs Shell vs Bash](/assets/terminal_shell_bash.png)