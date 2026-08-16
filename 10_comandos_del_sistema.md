# La consola de comandos. Parte X

## 💻 Comandos del sistema

En los módulos anteriores hemos aprendido a gestionar archivos, directorios, permisos y texto. En este módulo veremos comandos que nos permiten **obtener información sobre el sistema** en el que estamos trabajando y **gestionar los procesos** que se están ejecutando.

Estos comandos resultan especialmente útiles para diagnosticar problemas, comprobar el estado del equipo o gestionar la ejecución de programas.


## 🖥️ Información del sistema. El comando `uname`

El comando `uname` (*Unix name*) muestra información sobre el sistema operativo.

### Mostrar el nombre del sistema

```bash
uname
```

Resultado típico:

```text
Linux
```

### Mostrar toda la información con `uname -a`

La opción `-a` (*all*) muestra toda la información disponible:

```bash
uname -a
```
![Ejemplo uname -a](/assets/uname.png)

### Opciones útiles de `uname`

| Opción | Información que muestra |
|:-------|:------------------------|
| `-s` | Nombre del sistema operativo |
| `-r` | Versión del kernel |
| `-v` | Fecha de compilación del kernel |
| `-m` | Arquitectura del procesador (x86_64, arm64...) |
| `-n` | Nombre del equipo (hostname) |

![Uname, principales opciones](/assets/uname_principales_opciones.png)

## 💾 Espacio en disco. El comando `df`

El comando `df` (*disk free*) muestra el espacio disponible en los sistemas de archivos montados.

### Mostrar el espacio en formato legible

```bash
df -h
```

La opción `-h` (*human-readable*) muestra los tamaños en unidades comprensibles (KB, MB, GB).

Resultado típico:

```text
S.ficheros     Tamaño Usados  Disp Uso% Montado en
/dev/sda1        50G    12G   36G  25% /
tmpfs           3,9G       0  3,9G   0% /dev/shm
/dev/sda2       200G    85G  105G  45% /home
```

### 💡 Ejemplo: Comprobar el espacio de una ruta concreta

```bash
df -h /home/usuario
```

Este comando muestra el sistema de archivos donde se encuentra montado el directorio indicado.

## 📂 Tamaño de directorios. El comando `du`

El comando `du` (*disk usage*) muestra el espacio ocupado por archivos y directorios.

### Mostrar el tamaño de un directorio

Mediante el comando `du -h` veremos el contenido de un directorio y el *peso* de cada uno de sus archivos y directorios.

```bash
du -h Documentos
```

### Mostrar solo el total con `-s`

La opción `-s` (*summary*) muestra únicamente el total del directorio indicado:

```bash
du -sh Documentos
```

![Tamaño de un directorio (resumen)](/assets/tamano_directorio_resumen.png)

### 💡 Ejemplo: Ver los directorios más pesados

Mediante el uso de tuberías podemos ejecutar anidados diversos comandos:

```bash
du -sh */ | sort -rh
```

Este comando:
1. Muestra el tamaño de cada subdirectorio del directorio actual.
2. Ordena el resultado de mayor a menor tamaño.


## 🧠 Memoria del sistema. El comando `free`

El comando `free` muestra el uso de la memoria RAM y del espacio de intercambio (*swap*).

### Mostrar la memoria en formato legible

```bash
free -h
```
![Uso de memoria con el comando free](/assets/uso_memoria_free.png)

## ⚙️ Procesos en ejecución. El comando `ps`

El comando `ps` (*process status*) muestra los procesos que se están ejecutando en el sistema.

### Mostrar los procesos del usuario actual

```bash
ps
```

Resultado típico:

```text
  PID TTY          TIME CMD
 1234 pts/0    00:00:00 bash
 5678 pts/0    00:00:00 ps
```

### Mostrar todos los procesos del sistema

```bash
ps -e
```

### Mostrar información detallada con `ps -ef`

La opción `-f` (*full*) muestra información extendida:

```bash
ps -ef
```

Resultado típico:

```text
UID        PID  PPID  C STIME TTY          TIME CMD
root         1     0  0 mar09 ?        00:00:01 /sbin/init
root         2     0  0 mar09 ?        00:00:00 [kthreadd]
usuario   1234  1100  0 mar09 pts/0    00:00:00 bash
```

| Columna | Significado |
|:--------|:------------|
| `UID` | Usuario propietario del proceso |
| `PID` | Identificador único del proceso |
| `PPID` | PID del proceso padre |
| `STIME` | Hora de inicio |
| `TTY` | Terminal desde el que se ejecuta |
| `CMD` | Comando o programa ejecutado |


## 📊 Monitorización en tiempo real. El comando `top`

El comando `top` muestra los procesos del sistema en tiempo real, actualizándose periódicamente.

```bash
top
```

La pantalla de `top` muestra:

* En la parte superior: información general del sistema (tiempo de actividad, número de usuarios, carga del sistema, uso de memoria).
* En la parte inferior: lista de procesos ordenados por consumo de recursos.

### Controles básicos de `top`

| Tecla | Acción |
|:------|:-------|
| `q` | Salir de `top` |
| `k` | Terminar un proceso (pide el PID) |
| `M` | Ordenar por uso de memoria |
| `P` | Ordenar por uso de CPU |
| `h` | Mostrar ayuda |


## ❌ Terminar un proceso. El comando `kill`

El comando `kill` envía una señal a un proceso, habitualmente para terminarlo.

### Terminar un proceso de forma ordenada

```bash
kill PID
```

Esta señal (`SIGTERM`) permite al proceso cerrarse de forma limpia, guardando datos si es necesario.

### Forzar la terminación de un proceso

```bash
kill -9 PID
```

La señal `SIGKILL` (`-9`) obliga al sistema a terminar el proceso inmediatamente. Se utiliza cuando un proceso no responde a la señal normal.

⚠️ `kill -9` no permite al proceso guardar su estado. Usar solo como último recurso.

### 💡 Ejemplo: Terminar un proceso concreto

```bash
# Buscar el PID de un proceso
ps -ef | grep firefox

# Terminar el proceso (supongamos que el PID es 3456)
kill 3456

# Si no responde, forzar la terminación
kill -9 3456
```

## 📋 Otros comandos útiles del sistema

### Ver el nombre del equipo

```bash
hostname
```

### Ver la fecha y hora del sistema
Una fecha u hora incorrectas en nuestro sistema pueden conllevar funcionamiento errático del equipo. Podemos así comprobar la fecha y hora reales del sistema:

```bash
date
```

### Ver cuánto tiempo lleva encendido el sistema

```bash
uptime
```

### Ver quién está conectado

```bash
who
```


## 📋 Resumen de comandos

| Comando | Para qué sirve | Ejemplo |
|:--------|:---------------|:--------|
| `uname -a` | Muestra toda la información del sistema | `uname -a` |
| `uname -m` | Muestra la arquitectura del procesador | `uname -m` |
| `df -h` | Muestra el espacio en disco en formato legible | `df -h` |
| `du -sh dir` | Muestra el tamaño total de un directorio | `du -sh ~` |
| `free -h` | Muestra el uso de memoria RAM y swap | `free -h` |
| `ps` | Muestra los procesos del usuario actual | `ps` |
| `ps -ef` | Muestra todos los procesos del sistema | `ps -ef` |
| `top` | Monitorización de procesos en tiempo real | `top` |
| `kill PID` | Termina un proceso de forma ordenada | `kill 1234` |
| `kill -9 PID` | Fuerza la terminación de un proceso | `kill -9 1234` |
| `hostname` | Muestra el nombre del equipo | `hostname` |
| `date` | Muestra la fecha y hora del sistema | `date` |
| `uptime` | Muestra el tiempo de actividad del sistema | `uptime` |
| `who` | Muestra los usuarios conectados | `who` |