# 📘 Guía básica de Bash
[![Website](https://img.shields.io/badge/Web-miquelnebot.eu-blue?logo=Moodle&logoColor=white)](https://miquelnebot.eu)
[![License](https://img.shields.io/badge/Licencia-CC_BY--SA_4.0-green?logo=CreativeCommons&logoColor=white)](LICENSE)
[![Linux](https://img.shields.io/badge/Linux-Comandos-blue?logo=Linux&logoColor=white)](https://www.gnu.org/software/bash/)
<img src="./static/guia_basica_bash.png" style="height: 100%; width:100%;"/>

## 📚 Contenidos

1. [Introducción](#introducción)
    1. [¿Qué es Bash?](#-qué-es-bash)
    1. [¿Para qué sirve?](#-para-qué-sirve)
    1. [Cómo acceder a la consola](#-cómo-acceder-a-la-consola)
1. [La consola de comandos](#-la-consola-de-comandos)
    1. [Estructura de un comando](#1-estructura-de-un-comando)
    1. [Canales de comunicación](#2-canales-de-comunicación)
    1. [Redirecciones](#3-redirecciones)
1. [Orientación en el sistema](#-orientación-en-el-sistema)
    1. [Directorios y archivos](#1-directorios-y-archivos)
    1. [El comando `pwd`](#2-el-comando-pwd)
    1. [Rutas absolutas y relativas](#3-rutas-absolutas-y-relativas)
    1. [Diferencia entre `/` y `~`](#4-diferencia-entre--y-)
1. [Movimiento entre directorios](#-movimiento-entre-directorios)
    1. [El comando `cd`](#1-el-comando-cd)
    1. [Atajos de navegación](#2-atajos-de-navegación)
1. [Gestión de archivos y directorios](#-gestión-de-archivos-y-directorios)
    1. [Crear archivos y directorios](#1-crear-archivos-y-directorios)
    1. [Copiar, mover y eliminar](#2-copiar-mover-y-eliminar)
1. [Trabajo con archivos de texto](#-trabajo-con-archivos-de-texto)
    1. [Visualizar contenido](#1-visualizar-contenido)
    1. [Comandos básicos de texto](#2-comandos-básicos-de-texto)
1. [Buscar y organizar información](#-buscar-y-organizar-información)
    1. [Búsqueda con `grep`](#1-búsqueda-con-grep)
    1. [Ordenar y contar](#2-ordenar-y-contar)
1. [Tuberías y filtros](#-tuberías-y-filtros)
    1. [Conectar comandos](#1-conectar-comandos)
    1. [Filtros útiles](#2-filtros-útiles)
1. [Edición de archivos con `nano`](#-edición-de-archivos-con-nano)
    1. [El editor nano](#1-el-editor-nano)
    1. [Atajos de teclado](#2-atajos-de-teclado)
1. [Permisos y usuarios](#-permisos-y-usuarios)
    1. [Interpretación de permisos](#1-interpretación-de-permisos)
    1. [Modificar permisos](#2-modificar-permisos)
    1. [Propietarios y grupos](#3-propietarios-y-grupos)
1. [Comandos del sistema](#-comandos-del-sistema)
    1. [Información del sistema](#1-información-del-sistema)
    1. [Gestión de procesos](#2-gestión-de-procesos)
1. [Búsqueda de archivos](#-búsqueda-de-archivos)
    1. [El comando `find`](#1-el-comando-find)
    1. [Otros buscadores](#2-otros-buscadores)
1. [Introducción a scripts](#-introducción-a-scripts)
    1. [¿Qué es un script?](#1-qué-es-un-script)
    1. [Crear y ejecutar scripts](#2-crear-y-ejecutar-scripts)
    1. [Variables y condicionales](#3-variables-y-condicionales)
1. [Hoja de referencia de comandos](#-hoja-de-referencia-de-comandos)

## Introducción

### ❓ ¿Qué es Bash?

**Bash** (*Bourne Again SHell*) es un **intérprete de comandos** y lenguaje de programación que se utiliza en sistemas operativos tipo Unix (Linux, macOS, etc.). Es la shell más utilizada en la mayoría de distribuciones Linux y el estándar para la administración de sistemas.

Bash permite al usuario **interactuar con el sistema operativo mediante comandos de texto**, proporcionando una interfaz potente para automatizar tareas, gestionar archivos y configurar al detalle cualquier elemento del sistema.

### 🔗 ¿Para qué sirve?

Bash es fundamental para:

- **Administración de sistemas**: Gestión de archivos, permisos, procesos y configuración.
- **Automatización de tareas**: Creación de scripts para ejecutar secuencias de comandos.
- **Desarrollo de software**: Compilación, control de versiones y despliegue.
- **Análisis de datos**: Procesamiento de texto y archivos de registro.
- **Acceso remoto**: Conexión a servidores mediante SSH.

### 🔗 Cómo acceder a la consola

Para interactuar con Bash necesitas abrir una **terminal** o **consola de comandos**:

- **Linux**: Busca "Terminal" en el menú de aplicaciones o usa el atajo `Ctrl+Alt+T` en muchas distribuciones.
- **macOS**: Abre "Terminal" desde Utilidades.
- **Windows**: Instala WSL (*Windows Subsystem for Linux*).

Una vez abierta la terminal, verás un símbolo del sistema (*prompt*) que indica que Bash está listo para recibir comandos.

## 📌 La consola de comandos

### 1. Estructura de un comando

La mayoría de comandos en Linux siguen una estructura similar a la siguiente:

```bash
comando [opciones] [argumentos]
```

Donde:
- **Comando**: Es el programa que queremos ejecutar.
- **Opciones**: Modifican el comportamiento del comando (suelen empezar por `-` o `--`).
- **Argumentos**: Indican sobre qué elemento queremos que actúe el comando.

**Ejemplo:**

```bash
ls -l /home/usuario/Descargas
```

|Elemento |Valor                       |Descripción                                |
|:--------|:---------------------------|:------------------------------------------|
|Comando  |`ls`                        |Lista el contenido de un directorio        |
|Opción   |`-l`                       |Muestra detalles completos |
|Argumento|`/home/usuario/Descargas`|Directorio cuyo contenido queremos mostrar |

### 2. Canales de comunicación

Los programas en la consola utilizan tres canales estándar:

1. **STDIN (Standard Input)**: Canal de entrada estándar (teclado, archivos, otros comandos).
2. **STDOUT (Standard Output)**: Canal de salida estándar (resultados proporcionados).
3. **STDERR (Standard Error)**: Canal de salida de errores.

| Flujo | Número | Descripción     |
|:-----:|:------:|:----------------|
|STDIN  |0       |Entrada estándar |
|STDOUT |1       |Salida estándar  |
|STDERR |2       |Salida de error  |

### 3. Redirecciones

Podemos redirigir la salida de comandos:

```bash
# Guardar salida en archivo (sobrescribe)
comando > archivo.txt

# Añadir salida al final del archivo
comando >> archivo.txt

# Redirigir errores
comando 2> errores.txt

# Redirigir salida y errores
comando &> todo.txt

# Descartar salida
comando > /dev/null
```

## 🧭 Orientación en el sistema

### 1. Directorios y archivos

En Linux, todo se organiza en **directorios** (carpetas) y **archivos**. El sistema tiene una estructura de árbol que comienza en el directorio raíz `/`.

### 2. El comando `pwd`

Para saber en qué directorio nos encontramos:

```bash
pwd
```
Una posible salida de ejemplo al comando anterior sería:

```text
/home/usuario
```

### 3. Rutas absolutas y relativas

- **Ruta absoluta**: Comienza por `/` y especifica la ubicación completa.
  ```bash
  /home/usuario/Documentos/archivo.txt
  ```

- **Ruta relativa**: Parte des del directorio actual.
  ```bash
  Documentos/archivo.txt
  ```

### 4. Diferencia entre `/` y `~`

- `/`: Directorio raíz del sistema.
- `~`: Directorio personal del usuario actual.

```bash
cd /    # Ir al directorio raíz
cd ~    # Ir al directorio personal
cd      # Sin argumentos, también va al directorio personal
```

## 🚶 Movimiento entre directorios

### 1. El comando `cd`

El comando `cd` (*change directory*) nos permite desplazarnos entre directorios:

```bash
cd Documentos        # Cambiar al directorio Documentos
cd /var/log          # Ir a un directorio específico con ruta absoluta
cd ..                # Subir un nivel
cd -                 # Volver al directorio anterior
```

### 2. Atajos de navegación

| Comando | Descripción |
|:--------|:------------|
| `cd ~` o `cd` | Ir al directorio personal |
| `cd ..` | Subir un nivel |
| `cd -` | Volver al directorio anterior |

## ⛏️ Gestión de archivos y directorios

### 1. Crear archivos y directorios

```bash
# Crear directorio
mkdir mi_carpeta

# Crear directorios anidados
mkdir -p ruta/nueva/carpeta

# Crear archivo vacío
touch archivo.txt

# Crear archivo con contenido
echo "Hola mundo" > archivo.txt
```

### 2. Copiar, mover y eliminar

```bash
# Copiar archivos
cp archivo.txt copia.txt
cp -r carpeta/ copia_carpeta/    # Copiar directorio con contenido

# Mover o renombrar
mv archivo.txt /nueva/ruta/
mv archivo.txt nuevo_nombre.txt

# Eliminar
rm archivo.txt
rm -r carpeta/    # Eliminar directorio con contenido
```

## 📄 Trabajo con archivos de texto

### 1. Visualizar contenido

```bash
# Mostrar todo el contenido
cat archivo.txt

# Mostrar página a página con opciones de navegación
less archivo.txt

# Mostrar primeras líneas
head archivo.txt
head -n 20 archivo.txt    # Primeras 20 líneas

# Mostrar últimas líneas
tail archivo.txt
tail -n 20 archivo.txt    # Últimas 20 líneas
```

### 2. Comandos básicos de texto

```bash
# Contar líneas, palabras y caracteres
wc archivo.txt

# Ordenar contenido
sort archivo.txt

# Eliminar líneas duplicadas
uniq archivo.txt
```

## 🔎 Buscar y organizar información

### 1. Búsqueda con `grep`

```bash
# Buscar texto en un archivo
grep "texto" archivo.txt

# Búsqueda insensible a mayúsculas/minúsculas
grep -i "texto" archivo.txt

# Buscar en todos los archivos de un directorio
grep -r "texto" /directorio/
```

### 2. Ordenar y contar

```bash
# Ordenar alfabéticamente
sort archivo.txt

# Ordenar numéricamente
sort -n archivo.txt

# Contar líneas
wc -l archivo.txt

# Contar ocurrencias
grep -c "texto" archivo.txt
```

## 🔗 Tuberías y filtros

### 1. Conectar comandos

Las tuberías o *pipe* en inglés (`|`), conectan la salida de un comando con la entrada de otro:

```bash
# Mostrar contenido y buscar
cat archivo.txt | grep "texto"

# Contar líneas de un directorio
ls | wc -l

# Ordenar y eliminar duplicados
sort archivo.txt | uniq
```

## ✏️ Edición de archivos con `nano`

### 1. El editor nano

`nano` es un editor de texto sencillo para la consola:

```bash
# Abrir archivo existente o crear uno nuevo
nano archivo.txt
```

### 2. Atajos de teclado

| Atajo | Acción |
|:------|:-------|
| `Ctrl+O` | Guardar archivo |
| `Ctrl+X` | Salir |
| `Ctrl+K` | Cortar línea |
| `Ctrl+U` | Pegar línea |
| `Ctrl+W` | Buscar |
| `Ctrl+G` | Ayuda |

## 🔐 Permisos y usuarios

### 1. Interpretación de permisos

```bash
ls -l archivo.txt
# -rw-r--r-- 1 usuario grupo 1234 jul 24 10:00 archivo.txt
```

| Posición | Significado |
|:---------|:------------|
| Primera columna | Tipo (`d` directorio, `-` archivo) |
| Siguientes 9 caracteres | Permisos (rwx para usuario, grupo, otros) |

### 2. Modificar permisos

```bash
# Cambiar permisos con chmod
chmod 755 archivo.sh    # rwxr-xr-x
chmod +x archivo.sh     # Añadir permiso de ejecución
chmod -w archivo.txt    # Quitar permiso de escritura
```

### 3. Propietarios y grupos

```bash
# Cambiar propietario
chown usuario:grupo archivo.txt

# Cambiar grupo
chgrp grupo archivo.txt
```

## 💻 Comandos del sistema

### 1. Información del sistema

```bash
# Información del kernel
uname -a

# Espacio en disco
df -h

# Uso de memoria
free -h

# Información del sistema
hostnamectl
```

### 2. Gestión de procesos

```bash
# Listar procesos
ps aux

# Buscar proceso
ps aux | grep "nombre"

# Matar proceso
kill PID
kill -9 PID    # Forzar terminación

# Aplicaciones para visualizar procesos en tiempo real
top
btop
htop
```

## 🔎 Búsqueda de archivos

### 1. El comando `find`

```bash
# Buscar por nombre
find /directorio -name "archivo.txt"

# Buscar por tipo
find /directorio -type f    # Solo archivos
find /directorio -type d    # Solo directorios

# Buscar por tamaño
find /directorio -size +100M    # Archivos mayores a 100MB

# Buscar por fecha
find /directorio -mtime -7    # Modificados en los últimos 7 días
```

## 📜 Introducción a scripts

### 1. ¿Qué es un script?

Un script es un archivo de texto que contiene una serie de comandos que Bash ejecuta de forma secuencial. Permiten automatizar tareas repetitivas.

### 2. Crear y ejecutar scripts

```bash
#!/bin/bash
# Mi primer script
echo "Hola, este es mi primer script"
echo "La fecha actual es: $(date)"
```

Para ejecutar:

```bash
# Hacer ejecutable
chmod +x mi_script.sh

# Ejecutar
./mi_script.sh
```

### 3. Variables y condicionales

```bash
#!/bin/bash
# Variables
NOMBRE="Usuario"
EDAD=25

# Condicionales
if [ $EDAD -ge 18 ]; then
    echo "$NOMBRE es mayor de edad"
else
    echo "$NOMBRE es menor de edad"
fi

# Bucle
for i in 1 2 3 4 5; do
    echo "Número: $i"
done
```

## 📋 Hoja de referencia de comandos

| Comando | Descripción | Ejemplo |
|:--------|:------------|:--------|
| `pwd` | Mostrar directorio actual | `pwd` |
| `ls` | Listar contenido | `ls -la` |
| `cd` | Cambiar directorio | `cd Documentos` |
| `mkdir` | Crear directorio | `mkdir nueva_carpeta` |
| `touch` | Crear archivo vacío | `touch archivo.txt` |
| `cp` | Copiar archivos | `cp archivo.txt copia.txt` |
| `mv` | Mover/renombrar | `mv archivo.txt nuevo.txt` |
| `rm` | Eliminar archivos | `rm archivo.txt` |
| `cat` | Mostrar contenido | `cat archivo.txt` |
| `grep` | Buscar texto | `grep "buscar" archivo.txt` |
| `chmod` | Cambiar permisos | `chmod 755 archivo.sh` |
| `chown` | Cambiar propietario | `chown user:group archivo.txt` |
| `find` | Buscar archivos | `find / -name "*.txt"` |
| `ps` | Ver procesos | `ps aux` |
| `kill` | Terminar proceso | `kill PID` |
| `echo` | Mostrar texto | `echo "Hola"` |
| `man` | Manual de comandos | `man ls` |

---

> **Nota**: Esta guía está basada en la documentación original de la formación en Linux para docentes. Para más detalles, consulta los módulos completos en el repositorio.