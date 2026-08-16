# 🧾 Hoja de referencia de comandos (Data Sheet)

> Guía de iniciación a la consola de comandos de Linux para docentes.
> Esta hoja reúne, en una sola página, **todos los comandos y atajos** vistos en los 12 módulos.
> Está pensada para imprimir o tener a mano mientras se practica.

Convenciones:
- `comando` → palabra literal que escribes.
- `[archivo]`, `[ruta]`, `[dir]` → sustituye por tu archivo, ruta o directorio.
- `|` → tubería: conecta la salida de un comando con la entrada del siguiente.
- Las opciones pueden combinarse: `ls -lh` = `ls -l` + `ls -h`.

---

## 1. La consola, la shell y las redirecciones (Módulo 01)

| Comando / Operador | Para qué sirve | Ejemplo |
|:-------------------|:---------------|:--------|
| `echo` | Muestra un texto o el valor de una variable | `echo $SHELL` |
| `ls` | Lista el contenido de un directorio | `ls /home/usuario/Descargas` |
| `man` | Abre el manual de un comando | `man cat` |
| `cat` | Muestra el contenido de un archivo | `cat archivo.txt` |
| `grep` | Busca un texto dentro de un archivo o de una entrada | `grep eth0 < interfaces.txt` |
| `>` | Redirige STDOUT a un archivo (sobrescribe) | `ls ~ > listado.txt` |
| `>>` | Añade STDOUT al final de un archivo | `ls ~ >> listado.txt` |
| `2>` | Redirige STDERR a un archivo | `ls foto.png 2> error.txt` |
| `&>` | Redirige STDOUT y STDERR al mismo archivo | `ls ~ &> todo.txt` |
| `<` | Usa un archivo como STDIN | `grep eth0 < interfaces.txt` |
| `/dev/null` | "Papelera" donde descartar salidas | `ls foto.png 2> /dev/null` |

---

## 2. Orientarse en el sistema (Módulo 02)

| Comando | Para qué sirve | Ejemplo |
|:--------|:---------------|:--------|
| `pwd` | Muestra la ruta del directorio actual | `pwd` |
| `cd` | Cambia de directorio | `cd Documentos` |
| `ls` | Lista el contenido del directorio actual | `ls` |
| `ls -l` | Listado **largo** (permisos, propietario, tamaño, fecha) | `ls -l` |
| `ls -lh` | Listado largo con tamaños legibles (KB, MB, GB) | `ls -lh` |
| `ls -a` | Incluye archivos ocultos | `ls -a` |

---

## 3. Moverse entre directorios (Módulo 03)

| Comando | Para qué sirve | Ejemplo |
|:--------|:---------------|:--------|
| `cd carpeta` | Entra en un directorio (ruta relativa) | `cd Descargas` |
| `cd /ruta/completa` | Va a una ruta absoluta | `cd /home/usuario/Descargas` |
| `cd ~` | Va al directorio personal del usuario | `cd ~` |
| `cd` | (sin argumentos) vuelve al directorio personal | `cd` |
| `cd ..` | Sube un nivel (directorio padre) | `cd ..` |
| `cd .` | Hace referencia al directorio actual | `cd .` |
| `cd -` | Vuelve al directorio anterior | `cd -` |

---

## 4. Gestionar archivos y directorios (Módulo 04)

| Comando | Para qué sirve | Ejemplo |
|:--------|:---------------|:--------|
| `touch` | Crea un archivo vacío o actualiza su fecha | `touch nota.txt` |
| `mkdir` | Crea un directorio | `mkdir MisClases` |
| `mkdir -p` | Crea directorios anidados de golpe | `mkdir -p curso/linux/bash` |
| `cp` | Copia un archivo | `cp nota.txt destino/` |
| `cp -r` | Copia un directorio y todo su contenido | `cp -r Carpeta destino/` |
| `mv` | Mueve o renombra archivos y directorios | `mv nota.txt apuntes.txt` |
| `rm` | Elimina archivos | `rm nota.txt` |
| `rm -i` | Elimina con confirmación | `rm -i nota.txt` |
| `rm -r` | Elimina un directorio y su contenido | `rm -r Carpeta` |
| `rm -f` | Fuerza la eliminación (no pide confirmación) | `rm -f nota.txt` |
| `rm -rf` | Elimina directorios forzadamente (¡cuidado!) | `rm -rf Descargas/*` |
| `rmdir` | Elimina solo directorios vacíos | `rmdir DirVacio` |

---

## 5. Ver archivos de texto (Módulo 05)

| Comando | Para qué sirve | Ejemplo |
|:--------|:---------------|:--------|
| `cat` | Muestra todo el contenido de un archivo | `cat notas.txt` |
| `cat -n` | Muestra el contenido numerando las líneas | `cat -n notas.txt` |
| `less` | Lee archivos largos de forma paginada (salir con `q`) | `less manual.txt` |
| `head` | Muestra las primeras 10 líneas | `head alumnos.txt` |
| `head -n N` | Muestra las primeras N líneas | `head -n 5 alumnos.txt` |
| `tail` | Muestra las últimas 10 líneas | `tail registro.log` |
| `tail -n N` | Muestra las últimas N líneas | `tail -n 20 registro.log` |

---

## 6. Buscar y organizar información (Módulo 06)

| Comando | Para qué sirve | Ejemplo |
|:--------|:---------------|:--------|
| `grep "texto" archivo` | Muestra las líneas que contienen un texto | `grep "ERROR" log` |
| `grep -i` | Busca sin distinguir mayúsculas/minúsculas | `grep -i "moodle" r.txt` |
| `grep -n` | Muestra el número de línea de cada coincidencia | `grep -n "García" alu.txt` |
| `grep -v` | Muestra las líneas que NO coinciden | `grep -v "Completado" t.txt` |
| `grep -c` | Cuenta las líneas con coincidencias | `grep -c "ERROR" log` |
| `grep -w` | Busca una palabra completa | `grep -w "arte" mat.txt` |
| `wc` | Cuenta líneas, palabras y bytes | `wc archivo.txt` |
| `wc -l` | Cuenta líneas | `wc -l alumnado.txt` |
| `wc -w` | Cuenta palabras | `wc -w informe.txt` |
| `wc -m` | Cuenta caracteres | `wc -m informe.txt` |
| `sort` | Ordena las líneas alfabéticamente | `sort nombres.txt` |
| `sort -r` | Ordena en orden inverso | `sort -r nombres.txt` |
| `sort -n` | Ordena numéricamente | `sort -n notas.txt` |
| `sort -nr` | Ordena números de mayor a menor | `sort -nr notas.txt` |
| `sort -f` | Ordena sin distinguir mayúsculas/minúsculas | `sort -f nombres.txt` |
| `uniq` | Elimina líneas repetidas consecutivas | `uniq grupos_ord.txt` |
| `uniq -c` | Cuenta las repeticiones consecutivas | `uniq -c grupos_ord.txt` |
| `uniq -d` | Muestra solo las líneas repetidas | `uniq -d grupos_ord.txt` |
| `uniq -u` | Muestra solo las líneas no repetidas | `uniq -u grupos_ord.txt` |

---

## 7. Tuberías y filtros (Módulo 07)

| Comando / Operador | Para qué sirve | Ejemplo |
|:-------------------|:---------------|:--------|
| `\|` (tubería) | Encadena la salida de un comando con la entrada del siguiente | `grep "ERROR" log \| wc -l` |
| `cut -d ";" -f N` | Extrae el campo N usando `;` como delimitador | `cut -d ";" -f 1 datos.csv` |
| `cut -d ";" -f 1,3` | Extrae los campos 1 y 3 | `cut -d ";" -f 1,3 datos.csv` |
| `cut -d ";" -f 1-3` | Extrae un rango de campos (del 1 al 3) | `cut -d ";" -f 1-3 datos.csv` |
| `cut -c 1-5` | Extrae los caracteres de la posición 1 a la 5 | `cut -c 1-5 archivo.txt` |
| `tee` | Muestra la salida por pantalla y la guarda en un archivo | `grep "ERROR" log \| tee errores.txt` |
| `tee -a` | Igual que `tee`, pero añade al final del archivo | `grep "AVISO" log \| tee -a errores.txt` |

---

## 8. Editor `nano` — atajos de teclado (Módulo 08)

| Atajo | Para qué sirve |
|:------|:---------------|
| `nano archivo` | Abre (o crea) un archivo en nano |
| `Ctrl + O` | Guardar el archivo |
| `Ctrl + X` | Salir de nano |
| `Ctrl + W` | Buscar texto |
| `Ctrl + \` | Buscar y reemplazar |
| `Ctrl + K` | Cortar la línea o la selección |
| `Alt + 6` | Copiar la línea o la selección |
| `Ctrl + U` | Pegar lo cortado o copiado |
| `Alt + A` | Iniciar selección (marcar texto) |
| `Alt + U` | Deshacer |
| `Alt + E` | Rehacer |
| `Ctrl + G` | Ayuda |

> ⚠️ `Ctrl + Z` **NO** deshace: suspende el programa. Para deshacer usa `Alt + U`.

---

## 9. Permisos y usuarios (Módulo 09)

| Comando | Para qué sirve | Ejemplo |
|:--------|:---------------|:--------|
| `chmod 755 archivo` | Cambia permisos en modo numérico (octal) | `chmod 755 script.sh` |
| `chmod u+x archivo` | Añade ejecución al propietario (modo simbólico) | `chmod u+x script.sh` |
| `chmod o-w archivo` | Quita escritura a otros | `chmod o-w notas.txt` |
| `chmod g=rx archivo` | Asigna al grupo solo lectura y ejecución | `chmod g=rx script.sh` |
| `chmod -R 755 dir` | Cambia permisos recursivamente (¡`-R` mayúscula!) | `chmod -R 755 dir/` |
| `chown usuario archivo` | Cambia el propietario | `chown ana notas.txt` |
| `chown usuario:grupo archivo` | Cambia propietario y grupo | `chown ana:profesorado notas.txt` |
| `chgrp grupo archivo` | Cambia solo el grupo | `chgrp profesorado notas.txt` |
| `groups` | Muestra los grupos del usuario actual | `groups` |

Valores numéricos de permisos: `r=4` `w=2` `x=1`. Se suman por bloque (usuario / grupo / otros).
Ejemplo: `754` = usuario `rwx` (7), grupo `r-x` (5), otros `r--` (4).

---

## 10. Comandos del sistema (Módulo 10)

| Comando | Para qué sirve | Ejemplo |
|:--------|:---------------|:--------|
| `uname -a` | Muestra toda la información del sistema | `uname -a` |
| `uname -m` | Arquitectura del procesador | `uname -m` |
| `uname -r` | Versión del kernel | `uname -r` |
| `df -h` | Espacio en disco en formato legible | `df -h` |
| `du -h dir` | Tamaño de archivos y subdirectorios | `du -h Documentos` |
| `du -sh dir` | Tamaño total (resumen) de un directorio | `du -sh ~` |
| `free -h` | Uso de memoria RAM y swap | `free -h` |
| `ps` | Procesos del usuario actual | `ps` |
| `ps -e` | Todos los procesos del sistema | `ps -e` |
| `ps -ef` | Todos los procesos con detalle | `ps -ef` |
| `top` | Monitor de procesos en tiempo real (salir: `q`) | `top` |
| `kill PID` | Termina un proceso de forma ordenada | `kill 1234` |
| `kill -9 PID` | Fuerza la terminación de un proceso | `kill -9 1234` |
| `hostname` | Nombre del equipo | `hostname` |
| `date` | Fecha y hora del sistema | `date` |
| `uptime` | Tiempo de actividad del sistema | `uptime` |
| `who` | Usuarios conectados | `who` |

---

## 11. Búsqueda de archivos (Módulo 11)

| Comando | Para qué sirve | Ejemplo |
|:--------|:---------------|:--------|
| `find . -name "archivo"` | Busca por nombre (distingue mayúsculas) | `find . -name "notas.txt"` |
| `find . -iname "archivo"` | Busca por nombre sin distinguir mayúsculas | `find . -iname "Notas.txt"` |
| `find . -name "*.txt"` | Busca por extensión (con comodines) | `find . -name "*.pdf"` |
| `find . -type d` | Busca solo directorios | `find . -type d -name "Clase"` |
| `find . -type f` | Busca solo archivos regulares | `find . -type f -name "*.md"` |
| `find . -size +100M` | Busca por tamaño | `find . -size +1G` |
| `find . -mtime -7` | Busca por fecha de modificación (días) | `find . -mtime -1` |
| `find . -perm 755` | Busca por permisos | `find . -perm 755` |
| `find . -exec cmd {} \;` | Ejecuta un comando sobre cada resultado | `find . -name "*.sh" -exec chmod +x {} \;` |
| `locate texto` | Busca en una base de datos pregenerada (rápido) | `locate passwd` |
| `which comando` | Muestra la ruta de un comando | `which python3` |
| `whereis comando` | Muestra ejecutable, manual y fuentes | `whereis ls` |

Comodines para `find`: `*` (varios caracteres), `?` (un carácter).

---

## 12. Introducción a scripts con Bash (Módulo 12)

| Elemento | Para qué sirve | Ejemplo |
|:---------|:---------------|:--------|
| `#!/bin/bash` | Indica el intérprete (shebang, primera línea) | `#!/bin/bash` |
| `# comentario` | Comentario (no se ejecuta) | `# Esto es un comentario` |
| `echo "texto"` | Muestra un mensaje por pantalla | `echo "Hola"` |
| `read variable` | Lee datos del teclado | `read nombre` |
| `variable="valor"` | Define una variable (sin espacios en el `=`) | `nombre="Ana"` |
| `$variable` | Accede al valor de una variable | `echo $nombre` |
| `$(comando)` | Ejecuta un comando y usa su resultado | `echo $(date)` |
| `$0` | Nombre del script | `echo $0` |
| `$1, $2...` | Argumentos pasados al script | `echo $1` |
| `$#` | Número total de argumentos | `echo $#` |
| `$?` | Código de salida del último comando | `if [ $? -eq 0 ]; then ...` |
| `if [ cond ]; then ... fi` | Condicional | `if [ $n -gt 5 ]; then ... fi` |
| `elif [ cond ]; then` | Condición alternativa | `elif [ $n -eq 3 ]; then` |
| `else` | Código si no se cumple la condición | `else` |
| `for var in lista; do ... done` | Bucle para cada elemento de una lista | `for f in *.txt; do ... done` |
| `chmod +x script.sh` | Da permisos de ejecución al script | `chmod +x mi_script.sh` |
| `./script.sh` | Ejecuta el script del directorio actual | `./mi_script.sh` |
| `bash script.sh` | Ejecuta el script sin permisos de ejecución | `bash mi_script.sh` |

Operadores de `if` (números): `-eq` igual · `-ne` distinto · `-gt` mayor · `-lt` menor · `-ge` mayor o igual · `-le` menor o igual.
Operadores de `if` (texto): `=` igual · `!=` distinto · `-z` cadena vacía · `-n` cadena no vacía.
Comprobación de archivos: `[ -f archivo ]` existe y es archivo · `[ -d dir ]` existe y es directorio.

---

## 🧭 Comodines y símbolos especiales

| Símbolo | Significado |
|:--------|:------------|
| `/` | Directorio raíz (inicio de una ruta absoluta) |
| `~` | Directorio personal del usuario |
| `.` | Directorio actual |
| `..` | Directorio padre |
| `*` | Comodín: cualquier secuencia de caracteres |
| `?` | Comodín: un único carácter |
| `|` | Tubería (conecta comandos) |
| `>` `>>` `2>` `&>` `<` | Redirecciones de STDOUT / STDERR / STDIN |

---

## ✅ Mapa rápido de "qué necesito cuando..."

| Quiero... | Uso |
|:----------|:----|
| Saber dónde estoy | `pwd` |
| Ver qué hay aquí | `ls` (o `ls -lh`) |
| Cambiar de carpeta | `cd ruta` |
| Crear un archivo vacío | `touch archivo.txt` |
| Crear una carpeta (o varias anidadas) | `mkdir -p a/b/c` |
| Copiar / mover / borrar | `cp` · `mv` · `rm` |
| Leer un archivo | `cat` (corto) · `less` (largo) |
| Ver el principio / final | `head` · `tail` |
| Buscar texto dentro de archivos | `grep` |
| Contar líneas / palabras / caracteres | `wc -l` · `wc -w` · `wc -m` |
| Ordenar y quitar duplicados | `sort` · `uniq` |
| Encadenar comandos | `comando1 \| comando2` |
| Extraer columnas de un CSV | `cut -d ";" -f N` |
| Guardar la salida y verla a la vez | `tee` |
| Editar un archivo en consola | `nano` |
| Cambiar permisos / dueño | `chmod` · `chown` |
| Ver espacio / memoria / procesos | `df -h` · `free -h` · `ps -ef` · `top` |
| Matar un proceso | `kill PID` (o `kill -9 PID`) |
| Buscar un archivo por nombre | `find . -name "*.txt"` · `locate` |
| Saber dónde está un comando | `which` · `whereis` |
| Automatizar tareas | escribir un script `.sh` con `nano` |

---

*Hoja de referencia generada a partir de la guía «La consola de comandos» (módulos 01–12).*