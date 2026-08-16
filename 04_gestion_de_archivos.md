# La consola de comandos. Parte IV

## ⛏️ Crear y administrar archivos y directorios

En módulos anteriores hemos aprendido a orientarnos dentro del sistema de archivos y a movernos entre directorios. En consecuencia, estamos en disposición de saber contestar a preguntas como:

* ¿Dónde estoy? → `pwd` (*print working directory*)
* ¿Qué hay aquí? → `ls` (*list*)
* ¿Cómo me muevo? → `cd` (*change directory*)

Llega entonces el momento de aprender a **crear, copiar, mover y eliminar** archivos y directorios. Estas son algunas de las operaciones básicas que realizaremos frecuentemente al trabajar en entornos Linux y otros sistemas de tipo Unix.

## ✏️ Crear archivos. El comando `touch`

El comando `touch` permite crear archivos vacíos de forma rápida y sencilla.

```bash
# Crear un archivo vacío en el directorio actual
touch prueba.txt
```

```bash
# Crear un archivo en una ruta concreta
touch /home/usuario/Escritorio/prueba.txt
```

⚠️ Si el archivo ya existe, `touch` actualizará su fecha de modificación sin cambiar su contenido.

## 📁 Crear directorios. El comando `mkdir`

El comando `mkdir` (del inglés, *make directories*) permite crear nuevos directorios.

```bash
# Crear un directorio en la ubicación actual
mkdir MisCosas
```

```bash
# Crear un directorio en una ruta concreta
mkdir /home/usuario/Documentos/test
```

⚠️ Los sistemas **Linux y otros de tipo Unix** son **sensibles al uso de mayúsculas y minúsculas** (en inglés, *case sensitive*). Esto significa que el sistema distingue entre letras mayúsculas y minúsculas al interpretar los nombres de archivos y directorios. Por ejemplo, `MisCosas`, `miscosas` y `MISCOSAS` se consideran **tres nombres diferentes**. Por este motivo, es importante escribir siempre los nombres exactamente igual a como fueron creados.

⚠️ Uso del **tabulador**. En **Bash**, cuando empezamos a escribir el nombre de un archivo o directorio, podemos pulsar la tecla *Tab* de nuestro teclado para aprovechar el autocompletado. Si en el directorio actual existe algún archivo o directorio cuyo nombre comienza por los caracteres que ya hemos escrito, Bash completará automáticamente el resto del nombre. Si hay varias coincidencias, al pulsar *Tab* dos veces se mostrarán en pantalla todas las opciones disponibles para que podamos elegir la que nos interesa.


### Crear varios directorios a la vez

Podemos crear múltiples directorios en una sola instrucción:

```bash
# Crear varios directorios en el directorio actual
mkdir clase01 clase02 clase03
```
![Crear varios directorios](/assets/mkdir_varios_directorios.png)

### Crear directorios anidados con `-p`

En ocasiones necesitaremos crear una estructura completa de directorios, donde unos estén contenidos dentro de otros.

Por ejemplo, imaginemos que queremos crear la siguiente estructura:

```text
curso
└── linux
    └── bash
        └── 2026
```

Podríamos hacerlo creando cada directorio uno a uno:

```bash
mkdir curso
mkdir curso/linux
mkdir curso/linux/bash
mkdir curso/linux/bash/2026
```

Sin embargo, Bash permite realizar todo el proceso con un único comando utilizando la opción `-p` (*parents*):

```bash
mkdir -p curso/linux/bash/2026
```

Con la opción `-p` creamos todos los directorios que faltan en la ruta indicada. Si alguno de los directorios intermedios ya existe, no produce ningún error y continúa con la creación del resto.

Por ejemplo, si únicamente existe el directorio `curso`, el comando anterior creará automáticamente `linux`, `bash` y `2026`.

⚠️ Sin la opción `-p`, `mkdir` solo crea el último directorio de la ruta. Si alguno de los directorios anteriores no existe, el comando finalizará mostrando un mensaje de error.


## 📋 Copiar archivos y directorios. El comando `cp`

El comando `cp` (*copy*) permite duplicar archivos o directorios.

### 💡 Ejemplo: Copiar un archivo concreto al directorio actual
Si nos fijamos en el ejemplo siguiente, podemos ver que el comando `cp` presenta dos argumentos:
1. El primero hace referencia a la ruta absoluta del archivo a copiar.
1. El segundo, el `.` (punto), hace referencia a la ubicación (directorio) actual.

```bash
# Copiar un archivo al directorio actual
cp /home/usuario/Descargas/informe.pdf .
```

### 💡 Ejemplo: Copiar un archivo del directorio actual a otro directorio
```bash
# Copiar un archivo a otro directorio
cp nota.txt /home/usuario/Documentos/
```

### 💡 Ejemplo: Copiar un archivo con nuevo nombre
Será tan sencillo como añadir un nuevo nombre a la ruta de destino.

```bash
# Copiar un archivo y renombrarlo en el destino
cp nota.txt /home/usuario/Documentos/prueba.txt
```

### Copiar directorios con `-r`

Para copiar directorios debemos usar la opción `-r` (*recursive*), que copia el directorio y todo su contenido.

```bash
# Copiar un directorio y todo su contenido
cp -r MisClases /home/usuario/Documentos/
```

## 🚚 Mover y renombrar archivos. El comando `mv`

El comando `mv` (*move*) nos permite mover archivos y directorios de una ubicación a otra. También se utiliza para renombrar.

```bash
# Mover un archivo a otro directorio
mv nota.txt /home/usuario/Documentos/
```

```bash
# Renombrar un archivo ("mover" con un nuevo nombre)
mv nota.txt apuntes.txt
```

### Mover y renombrar un directorio

```bash
# Mover un directorio a otra ubicación
mv MisClases /home/usuario/Documentos/
```

```bash
# Renombrar un directorio
mv MisClases ClasePractica
```

⚠️ A diferencia de `cp`, el comando `mv` **no conserva el original**. El archivo o directorio desaparece de la ubicación original y aparece en la nueva.


## 🗑️ Eliminar archivos. El comando `rm`

El comando `rm` (*remove*) **elimina archivos**.

```bash
# Eliminar un archivo
rm nota.txt
```
La opción `-i` (*interactive*) nos pedirá confirmación antes de eliminar, lo cual es muy recomendable para evitar borrados accidentales.

```bash
# Eliminar un archivo solicitando confirmación
rm -i nota.txt
```
![Borrar con confirmación](/assets/rm_interactivo.png)

### Eliminar directorios con `-r`

Para **eliminar directorios que tengan contenido**, debemos usar la opción `-r` (*recursive*):

```bash
# Eliminar un directorio y todo su contenido
rm -r MisClases
```

⚠️ **Muy importante.** El comando `rm` no envía los archivos a la papelera. **La eliminación es permanente**. No hay forma de recuperarlos una vez eliminados.

### Eliminar sin errores ni confirmación con `-f`

La opción `-f` (*force*) fuerza la eliminación. Con ella, `rm` no pedirá confirmación y tampoco mostrará mensajes de error si el archivo no existe. Debe usarse con precaución.

```bash
# Eliminar sin preguntar (usar con precaución)
rm -f nota.txt
```

❗ La combinación `-rf` es especialmente peligrosa si se usa sin cuidado. En el ejemplo siguiente borrará el directorio `Documentos` al completo sin pedir confirmación y el contenido será irrecuperable.

```bash
# NO ejecutar si no se está completamente seguro/a
rm -rf /home/usuario/Documentos
```

Al tiempo que peligroso, el comando `rm -rf` es extremadamente útil si queremos, por ejemplo, **borrar por completo el contenido de una carpeta**. Imaginemos que deseamos vaciar la carpeta de Descargas de nuestro usuario. Será tan sencillo como escribir un asterisco `*` después de la ruta del directorio. Dicho símbolo indica que **todo** lo que hay en su interior, será eliminado sin confirmación (el directorio no se borra, mantendremos la carpeta de Descargas):

```bash
# Borrar el contenido de la carpeta Descargas (método 1)
rm -rf Descargas/*
```

## 📂 Eliminar directorios vacíos. El comando `rmdir`

El comando `rmdir` elimina únicamente directorios **vacíos**, lo que lo convierte en una opción más segura que `rm -r`.

```bash
# Eliminar un directorio vacío
rmdir DirectorioVacio
```

Si el directorio contiene archivos, el comando devolverá un error y no eliminará nada. En ese caso deberemos usar `rm -r` tal y como hemos visto en ejemplos anteriores.

![Error rmdir](/assets/rmdir_error_ejemplo.png)

## 💡 Ejemplo: Organizar material de clase

Supongamos que somos docentes y queremos organizar el material para nuestro curso. Seguiríamos el siguiente orden:

```bash
# 1. Verificar dónde nos encontramos
pwd
```

```bash
# 2. Crear la estructura de directorios
mkdir -p Cursos/Python/2026/Practicas
mkdir -p Cursos/Python/2026/Ejercicios
```

```bash
# 3. Verificar que se ha creado la estructura
ls -R Cursos
```

```bash
# 4. Crear archivos de ejemplo dentro de la estructura
touch Cursos/Python/2026/tema01_introduccion.md 
touch Cursos/Python/2026/tema02_variables.md
touch Cursos/Python/2026/Practicas/practica01.txt
touch Cursos/Python/2026/Ejercicios/ejercicio01.txt
```
![Ejemplo organización](/assets/ejemplo_organizacion.png)
```bash
# 5. Copiar un archivo de plantilla a cada práctica
cp plantilla_practica.txt Cursos/Python/2026/Practicas/practica01.txt
```

```bash
# 6. Renombrar un archivo
mv Cursos/Python/2026/tema01_introduccion.md Cursos/Python/2026/01_introduccion.md
```

```bash
# 7. Eliminar un archivo temporal
rm Cursos/Python/2026/Practicas/practica01_borrador.txt
```

```bash
# 8. Verificar la estructura final
ls -R Cursos
```

## 📋 Resumen de comandos

| Comando | Para qué sirve | Ejemplo |
|:--------|:---------------|:--------|
| `touch` | Crea un archivo vacío o actualiza su fecha | `touch nota.txt` |
| `mkdir` | Crea un directorio | `mkdir MisClases` |
| `mkdir -p` | Crea directorios anidados | `mkdir -p A/B/C` |
| `cp` | Copia un archivo | `cp archivo.txt destino/` |
| `cp -r` | Copia un directorio y su contenido | `cp -r MiDirectorio destino/` |
| `mv` | Mueve o renombra archivos y directorios | `mv archivo.txt nuevo.txt` |
| `rm` | Elimina archivos | `rm archivo.txt` |
| `rm -i` | Elimina con confirmación | `rm -i archivo.txt` |
| `rm -r` | Elimina directorios y su contenido | `rm -r MiDirectorio` |
| `rmdir` | Elimina directorios vacíos | `rmdir DirVacio` |