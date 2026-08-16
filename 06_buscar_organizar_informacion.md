# La consola de comandos. Parte VI

## 🔎 Buscar y organizar información en archivos de texto

En el módulo anterior hemos aprendido a **visualizar el contenido de los archivos de texto** utilizando comandos como `cat`, `less`, `head` y `tail`.

Sin embargo, cuando un archivo contiene muchas líneas, normalmente no necesitaremos leerlo completo. En muchas ocasiones querremos responder a preguntas más concretas:

* ¿En qué líneas aparece una palabra determinada?
* ¿Cuántas líneas contiene un archivo?
* ¿Cuántas palabras hemos escrito?
* ¿Cómo podemos ordenar una lista alfabética o numéricamente?
* ¿Hay elementos repetidos?

En este módulo aprenderemos a utilizar cuatro comandos que nos permitirán **localizar, contar, ordenar y resumir información** dentro de archivos de texto:

* `grep`: busca líneas que contienen un texto o patrón.
* `wc`: cuenta líneas, palabras y caracteres.
* `sort`: ordena las líneas de un archivo.
* `uniq`: identifica o elimina líneas repetidas consecutivas.

Estos comandos no modifican el archivo original. El resultado de su ejecución se muestra en pantalla.


## 🔍 Buscar texto. El comando `grep`

El comando `grep` permite **buscar un texto dentro de uno o varios archivos**. Como resultado, muestra en pantalla las líneas completas en las que ha encontrado alguna coincidencia.

Su estructura básica es:

```bash
grep "texto_a_buscar" archivo
```

Por ejemplo, imaginemos que disponemos de un archivo llamado `alumnos.csv` y queremos saber si la alumna "Eva" se encuentra en el archivo. Analizaremos entonces el contenido del mismo usando el siguiente comando:

```bash
grep "Eva" Descargas/alumnos.csv
```
![Ejemplo comando grep](/assets/grep_ejemplo.png)

`grep` no muestra únicamente la palabra buscada, sino **toda la línea en la que aparece**.

⚠️ Cabe recordar que Linux distingue entre mayúsculas y minúsculas (es *case sensitive*). Por tanto, `eva`, `Eva` y `EVA` se consideran textos diferentes.

### 🔡 Ignorar mayúsculas y minúsculas con `grep -i`

La opción `-i` procede del inglés *ignore case* y permite realizar una búsqueda sin distinguir entre letras mayúsculas y minúsculas.

```bash
grep -i "eva" Descargas/alumnos.csv
```

Este comando encontrará coincidencias como `eva`, `EVA` o `Eva`.

### 🔢 Mostrar el número de línea con `grep -n`

La opción `-n`, al igual que en otros comandos vistos con anterioridad, muestra el número de cada línea en la que se ha encontrado una coincidencia.

```bash
grep -n "@ejemplo.com" Descargas/alumnos.csv
```
![Ejemplo de numeración en el comando grep teniendo en cuenta coincidencias](/assets/grep_ejemplo_numeros_coincidencia.png)

Esta opción resulta especialmente útil cuando necesitamos localizar rápidamente una información dentro de un archivo largo.

### 🚫 Mostrar las líneas que no coinciden con `grep -v`

La opción `-v` invierte la búsqueda. En lugar de mostrar las líneas que contienen el texto indicado, muestra las que **no lo contienen**. En el ejemplo siguiente podemos ver cómo encontrar aquellos alumnos/as que tengan un dominio diferente a "ejemplo.com" en su dirección de correo electrónico.

➕ Hemos añadido además la opción `-n` para disponer también de los números de línea.

```bash
grep -nv "@ejemplo.com" Descargas/alumnos.csv
```
![Ejemplo grep -v](/assets/grep_v_ejemplo.png)


### 🔢 Contar las líneas coincidentes con `grep -c`

La opción `-c` (*count*) permite contar cuántas líneas contienen el texto buscado.

```bash
grep -c "@ejemplo.es" Descargas/alumnos.csv
```

Siguiendo el ejemplo anterior y sabiendo que son solo 3 los alumnos/as que disponen de ese dominio, el resultado sería:

```text
3
```

⚠️ Atención: `grep -c` cuenta **líneas con coincidencias**, no el número total de veces que aparece una palabra. Si una misma palabra aparece varias veces en una línea, esa línea se cuenta una sola vez.

### 🧩 Buscar una palabra completa con `grep -w`

La opción `-w` permite buscar una palabra completa y evita coincidencias dentro de palabras más largas.

Imaginemos un archivo llamado `materias.txt`:

```text
arte
artesanía
artes escénicas
```

El comando:

```bash
grep "arte" Documentos/materias.txt
```

podría mostrar las tres líneas porque la secuencia **arte** forma parte de todas las palabras.

En cambio:

```bash
grep -w "arte" Documentos/materias.txt
```

mostrará únicamente la línea que contiene la palabra completa:

![Opción -w en el comando grep](/assets/grep_palabras_contenido_similar.png)


### ➕ Combinar opciones de `grep`

Como hemos visto con otros comandos, algunas opciones se pueden combinar.

Por ejemplo:

```bash
grep -in "garcía" Descargas/alumnos.csv
```

En este caso:

* `-i` ignora las diferencias entre mayúsculas y minúsculas.
* `-n` muestra el número de línea.

También podríamos escribir las opciones por separado:

```bash
grep -i -n "garcía" Descargas/alumnos.csv
```

### 📂 Buscar en varios archivos

`grep` también puede buscar un mismo texto en varios archivos a la vez.

```bash
grep "Aprobado" Descargas/alumnos_grupo_A.txt Descargas/alumnos_grupo_B.txt
```

Cuando se consultan varios archivos, `grep` indica delante de cada coincidencia el nombre del archivo en el que la ha encontrado.

![Buscar con grep en diversos archivos](/assets/grep_buscar_varios_archivos.png)


## 🔢 Contar líneas, palabras y caracteres. El comando `wc`

El comando `wc` procede de *word count* y permite contar distintos elementos de un archivo de texto.

Su forma básica es:

```bash
wc archivo
```

Por ejemplo:

```bash
wc alumnado.txt
```

Podríamos obtener un resultado como este:

```text
5 20 101 alumnado.txt
```

Los valores indican, en este orden:

1. Número de líneas.
2. Número de palabras.
3. Número de bytes.
4. Nombre del archivo analizado.

Si estamos empezando a trabajar con Bash, normalmente será más claro solicitar únicamente el dato que necesitamos mediante una opción concreta.

### 📏 Contar líneas con `wc -l`

La opción `-l` cuenta el número de líneas de un archivo.

```bash
wc -l alumnado.txt
```

Resultado:

```text
5 alumnado.txt
```

Este comando puede ser útil, por ejemplo, para saber cuántos registros contiene un listado cuando cada persona ocupa una línea.

⚠️ Si el archivo contiene una cabecera, esta también se contará como una línea.


### 📝 Contar palabras con `wc -w`

La opción `-w` cuenta el número de palabras.

```bash
wc -w alumnado.txt
```

### 🔤 Contar caracteres con `wc -m`

La opción `-m` cuenta el número de caracteres del archivo.

```bash
wc -m alumnado.txt
```

### 📚 Analizar varios archivos

También podemos utilizar `wc` con varios archivos:

```bash
wc -l grupo1.txt grupo2.txt
```

El comando mostrará el número de líneas de cada archivo y, al final, el total.

```text
12 grupo1.txt
15 grupo2.txt
27 total
```

## 🔤 Ordenar líneas. El comando `sort`

El comando `sort` ordena las líneas de un archivo de texto. Por defecto, realiza una ordenación alfabética ascendente.

Imaginemos que el archivo `materias.txt` contiene:

```text
Música
Biología
Historia
Arte
Matemáticas
```

Si ejecutamos:

```bash
sort materias.txt
```

Obtendremos:

```text
Arte
Biología
Historia
Matemáticas
Música
```

⚠️ `sort` muestra el resultado ordenado en pantalla, pero **no modifica el archivo original**.

### 🔽 Ordenar en sentido inverso con `sort -r`

La opción `-r` (*reverse*) permite invertir la ordenación.

```bash
sort -r materias.txt
```

Resultado:

```text
Música
Matemáticas
Historia
Biología
Arte
```

### 🔢 Ordenar números con `sort -n`

Por defecto, `sort` interpreta el contenido como texto. Esto puede producir resultados inesperados cuando trabajamos con números.

Por ejemplo, si el archivo `notas.txt` contiene:

```text
10
7
2
9
```

Al ejecutar:

```bash
sort notas.txt
```

podríamos obtener:

```text
10
2
7
9
```

Esto ocurre porque se está realizando una ordenación alfabética: el número `10` comienza por `1` y aparece antes que los números que comienzan por `2`, `7` o `9`.

Para ordenar numéricamente utilizamos la opción `-n`:

```bash
sort -n notas.txt
```

Resultado:

```text
2
7
9
10
```

### 🔢 Ordenar números de mayor a menor

Podemos combinar `-n` y `-r`:

```bash
sort -nr notas.txt
```

Resultado:

```text
10
9
7
2
```

### 🔡 Ignorar mayúsculas y minúsculas con `sort -f`

La opción `-f` permite ordenar sin distinguir entre mayúsculas y minúsculas.

```bash
sort -f nombres.txt
```

Esta opción resulta útil cuando un listado contiene nombres escritos de manera poco homogénea.


## 🧹 Detectar y eliminar líneas repetidas. El comando `uniq`

El comando `uniq` permite comparar líneas consecutivas e identificar o eliminar las que están repetidas.

Imaginemos un archivo llamado `grupos.txt` con este contenido:

```text
1A
1A
1B
2A
2A
2A
```

Al ejecutar:

```bash
uniq grupos.txt
```

obtendremos:

```text
1A
1B
2A
```

El resultado muestra una sola vez cada grupo de líneas repetidas consecutivas.

### ⚠️ Las líneas repetidas deben estar juntas

Este aspecto es fundamental. `uniq` solo detecta repeticiones cuando las líneas iguales aparecen una detrás de la otra.

Por ejemplo, si el archivo contiene:

```text
1A
2A
1A
1B
```

El comando:

```bash
uniq grupos.txt
```

mostrará las cuatro líneas, porque los dos valores `1A` no son consecutivos.

Por este motivo, antes de utilizar `uniq` suele ser necesario ordenar el contenido con `sort`.

En este módulo realizaremos ambos pasos por separado para comprender claramente qué hace cada comando:

```bash
# 1. Mostrar el listado ordenado
sort grupos.txt
```

Una vez que dispongamos de una copia ordenada del archivo, podremos analizarla con:

```bash
# 2. Eliminar las repeticiones consecutivas
uniq grupos_ordenados.txt
```

En el módulo siguiente aprenderemos a conectar directamente ambos comandos mediante una tubería, evitando el archivo intermedio.

### 🔢 Contar las repeticiones con `uniq -c`

La opción `-c` añade delante de cada línea el número de veces que aparece consecutivamente.

```bash
uniq -c grupos_ordenados.txt
```

Resultado:

```text
      2 1A
      1 1B
      3 2A
```

### ♻️ Mostrar únicamente las líneas repetidas con `uniq -d`

La opción `-d` (*duplicate*) muestra solo las líneas que aparecen repetidas.

```bash
uniq -d grupos_ordenados.txt
```

Resultado:

```text
1A
2A
```

### 1️⃣ Mostrar únicamente las líneas no repetidas con `uniq -u`

La opción `-u` muestra las líneas que aparecen una sola vez.

```bash
uniq -u grupos_ordenados.txt
```

En el ejemplo anterior, el resultado sería:

```text
1B
```

## 💡 Ejemplo: Consultar un listado de alumnado

Imaginemos que disponemos de un archivo llamado `alumnado.txt`:

```text
Ana García - 1A
Carlos López - 1B
Marta Sánchez - 1A
Pablo Torres - 2A
Laura García - 1B
```

Podemos realizar las siguientes consultas:

```bash
# Buscar el alumnado del grupo 1A
grep "1A" alumnado.txt

# Mostrar el número de línea de las personas apellidadas García
grep -n "García" alumnado.txt

# Contar cuántas líneas contiene el archivo
wc -l alumnado.txt

# Ordenar alfabéticamente el listado
sort alumnado.txt

# Mostrar el listado en orden alfabético inverso
sort -r alumnado.txt
```

## 💡 Ejemplo: Analizar un registro de incidencias

Supongamos que el archivo `incidencias.txt` contiene:

```text
INFO Inicio de sesión correcto
AVISO Contraseña próxima a caducar
ERROR No se puede conectar con el servidor
INFO Archivo guardado correctamente
ERROR No se puede abrir el documento
```

Podríamos analizarlo así:

```bash
# Mostrar las líneas que contienen errores
grep "ERROR" incidencias.txt

# Mostrar los errores junto con su número de línea
grep -n "ERROR" incidencias.txt

# Contar cuántas líneas contienen errores
grep -c "ERROR" incidencias.txt

# Mostrar las líneas que no contienen errores
grep -v "ERROR" incidencias.txt

# Contar el número total de líneas del registro
wc -l incidencias.txt
```

## 💡 Ejemplo: Revisar una lista de respuestas

Imaginemos que hemos recogido en el archivo `respuestas.txt` una opción por línea:

```text
Moodle
Classroom
Moodle
Teams
Moodle
Classroom
```

En primer lugar, podemos mostrar las respuestas ordenadas:

```bash
sort respuestas.txt
```

El resultado sería:

```text
Classroom
Classroom
Moodle
Moodle
Moodle
Teams
```

Si guardamos previamente este resultado en un archivo llamado `respuestas_ordenadas.txt`, podremos contar las repeticiones:

```bash
uniq -c respuestas_ordenadas.txt
```

Resultado:

```text
      2 Classroom
      3 Moodle
      1 Teams
```

De esta manera podemos obtener un resumen básico de las respuestas sin necesidad de abrir una hoja de cálculo.


## 📋 Resumen de comandos

| Comando | Para qué sirve | Ejemplo |
|:--------|:---------------|:--------|
| `grep "texto" archivo` | Muestra las líneas que contienen un texto | `grep "ERROR" registro.log` |
| `grep -i` | Ignora mayúsculas y minúsculas | `grep -i "moodle" respuestas.txt` |
| `grep -n` | Muestra el número de línea | `grep -n "Pendiente" tareas.txt` |
| `grep -v` | Muestra las líneas que no coinciden | `grep -v "Completado" tareas.txt` |
| `grep -c` | Cuenta las líneas que contienen coincidencias | `grep -c "ERROR" registro.log` |
| `grep -w` | Busca una palabra completa | `grep -w "arte" materias.txt` |
| `wc` | Cuenta líneas, palabras y bytes | `wc archivo.txt` |
| `wc -l` | Cuenta líneas | `wc -l alumnado.txt` |
| `wc -w` | Cuenta palabras | `wc -w informe.txt` |
| `wc -m` | Cuenta caracteres | `wc -m informe.txt` |
| `sort` | Ordena las líneas alfabéticamente | `sort nombres.txt` |
| `sort -r` | Ordena en sentido inverso | `sort -r nombres.txt` |
| `sort -n` | Ordena valores numéricamente | `sort -n notas.txt` |
| `sort -nr` | Ordena números de mayor a menor | `sort -nr notas.txt` |
| `sort -f` | Ordena ignorando mayúsculas y minúsculas | `sort -f nombres.txt` |
| `uniq` | Elimina líneas repetidas consecutivas de la salida | `uniq grupos_ordenados.txt` |
| `uniq -c` | Cuenta repeticiones consecutivas | `uniq -c grupos_ordenados.txt` |
| `uniq -d` | Muestra únicamente las líneas repetidas | `uniq -d grupos_ordenados.txt` |
| `uniq -u` | Muestra únicamente las líneas no repetidas | `uniq -u grupos_ordenados.txt` |