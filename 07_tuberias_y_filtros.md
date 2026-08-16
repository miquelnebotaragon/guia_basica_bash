# La consola de comandos. Parte VII

## 🔗 Tuberías y filtros

En el módulo anterior hemos aprendido a buscar información con `grep`, contar con `wc`, ordenar con `sort` y eliminar duplicados con `uniq`. Sin embargo, hasta ahora hemos utilizado estos comandos de forma independiente y separada.

¿Qué ocurre si queremos **encadenar varias operaciones**? Por ejemplo: buscar una palabra, ordenar el resultado y contar cuántas líneas aparecen. Hacerlo paso a paso sería un proceso largo y engorroso.

La **tubería** (*pipe*) es el mecanismo que permite conectar la salida de un comando con la entrada de otro, formando una cadena de procesamiento.

## 🚰 La tubería: el operador `|`

El carácter `|` (*pipe* o tubería) envía la **salida estándar (STDOUT)** de un comando a la **entrada estándar (STDIN)** del siguiente.

Su estructura básica es:

```bash
comando1 | comando2 | comando3
```

Cada comando recibe como entrada lo que el anterior ha producido como salida.

### 💡 Ejemplo: Buscar y contar

Imaginemos que queremos saber cuántas líneas contienen la palabra "ERROR" en un archivo de registro:

```bash
grep "ERROR" registros.log | wc -l
```
![Ejemplo de tubería con grep & wc](/assets/pipe_ejemplo_1.png)

Sin tuberías, necesitaríamos dos pasos para conseguir el mismo resultado:

```bash
# Paso 1: guardar el resultado intermedio
grep "ERROR" registros.log > resultado_temporal.txt

# Paso 2: contar las líneas del archivo temporal
wc -l resultado_temporal.txt
```

Con la tubería, todo se resuelve en una sola línea.

### 💡 Ejemplo: Buscar, ordenar y eliminar duplicados

Supongamos que tenemos un listado de materias y queremos obtener una lista ordenada sin repeticiones:

```bash
sort materias.txt | uniq
```
![Ejemplo de tubería con sort & uniq](/assets/tuberia_sort_uniq.png)

### 💡 Ejemplo: Buscar y mostrar las primeras líneas

```bash
grep "1A" alumnado.csv | head -n 3
```
Este comando busca todas las líneas que contienen "1A" y muestra únicamente las tres primeras.

![Ejemplo de tubería con grep & head](/assets/tuberia_grep_head.png)


### 💡 Ejemplo: Encadenar varias tuberías

Podemos encadenar tantos comandos como necesitemos:

```bash
grep "Completado" participacion.txt | sort | uniq -c
```

Veamos qué conseguimos con el comando anterior:
1. `grep`: Busca las líneas que contienen "Completado".
2. `sort`: Ordena el resultado alfabéticamente.
3. `uniq -c`: Cuenta las repeticiones consecutivas.


![Ejemplo encadenar varias tuberías](/assets/pipe_encadenar_tuberias.png)


## ✂️ Extraer columnas. El comando `cut`

El comando `cut` permite **extraer una parte específica de cada línea**, ya sea por posición de carácter o por un delimitador que podamos establecer.

### Cortar por delimitador con `cut -d`

Imaginemos un archivo `notas.csv` con el siguiente contenido:

```text
Ana;7;Aprobado
Bernat;4;Suspendido
Carla;9;Sobresaliente
David;5;Aprobado
```

Para extraer únicamente los nombres (primera columna), indicamos que el delimitador es el punto y coma:

```bash
cut -d ";" -f 1 notas.csv
```

Resultado:

```text
Ana
Bernat
Carla
David
```

Donde:
- `-d ";"` establece el delimitador.
- `-f 1` selecciona el primer campo, `-f 2` el segundo...

Si por el contrario, quisiéramos extraer las notas usaríamos el comando siguiente:

```bash
cut -d ";" -f 3 notas.csv
```
![Ejemplo cut](/assets/cut_ejemplo.png)

### Seleccionar varios campos

Podemos seleccionar varios campos separándolos por comas:

```bash
cut -d ";" -f 1,3 notas.csv
```

![Seleccionar campos diversos con cut](/assets/cut_seleccionar_campos.png)

### Seleccionar un rango de campos

En esta ocasión, usando un guion podremos indicar un rango de campos determinado.

```bash
cut -d ";" -f 1-2 notas.csv
```

Resultado:

```text
Ana;7
Bernat;4
Carla;9
David;5
```

## 📤 Enviar salida a pantalla y archivo. El comando `tee`

El comando `tee` permite **redirigir la salida de un comando a un archivo** y, al mismo tiempo, **mostrarla por pantalla**.

Su nombre proviene de la forma en que una tubería de fontanería (*T-pipe*) divide el flujo en dos direcciones.

![T-pipe](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/T-Stuecke_4052.jpg/960px-T-Stuecke_4052.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail)

*[T-Stuecke 4052.jpg](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/T-Stuecke_4052.jpg/960px-T-Stuecke_4052.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail) - Torsten Bätge, 2007. Wikimedia Commons. Licencia: CC BY-SA 3.0*

```bash
comando | tee archivo.txt
```

### 💡 Ejemplo: Guardar y visualizar

```bash
grep "ERROR" registro.log | tee errores.txt
```

Este comando muestra por pantalla las líneas que contienen "ERROR" y, además, las guarda en el archivo `errores.txt`.

### Añadir al final del archivo con `tee -a`

Por defecto, `tee` sobrescribe el archivo existente. Para añadir al final sin borrar su contenido:

```bash
grep "AVISO" registro.log | tee -a errores.txt
```

### 💡 Ejemplo: Filtrar y guardar un resumen

```bash
sort materias.txt | uniq | sort | tee resumen_materias.txt
```

Este comando:
1. Ordena las materias.
2. Elimina duplicados.
3. Ordena alfabéticamente.
4. Muestra el resultado por pantalla y lo guarda en `resumen_materias.txt`.

![Tee, filtrar y mostrar en pantalla](/assets/tee_filtrar_guardar_resumen.png)

![Tee, filtrar y guardar resumen](/assets/tee_filtrar_guardar_resumen2.png)


## 🔗 Combinar `cut` con tuberías

La verdadera potencia de `cut` aparece al combinarlo con otros comandos mediante tuberías.

### 💡 Ejemplo: Obtener una lista de nombres únicos

Imaginemos un archivo `asistencia.csv` con registros de entrada a un evento:

```text
Ana;09:00;Entrada
Bernat;09:02;Entrada
Ana;09:15;Salida
Carla;09:20;Entrada
Bernat;09:30;Salida
```

Para obtener una lista de personas únicas que han entrado al evento:

```bash
cut -d ";" -f 1 asistencia.csv | sort | uniq
```

Resultado:

```text
Ana
Bernat
Carla
```

### 💡 Ejemplo: Contar cuántas veces ha fichado cada persona

```bash
cut -d ";" -f 1 asistencia.csv | sort | uniq -c | sort -rn
```

Resultado:

```text
      2 Ana
      2 Bernat
      1 Carla
```

## 📋 Resumen de comandos

| Comando | Para qué sirve | Ejemplo |
|:--------|:---------------|:--------|
| `\|` | Encadena la salida de un comando con la entrada del siguiente | `grep "ERROR" log \| wc -l` |
| `cut -d ";" -f N` | Extrae el campo N usando ";" como delimitador | `cut -d ";" -f 1 datos.csv` |
| `cut -d ";" -f 1,3` | Extrae los campos 1 y 3 | `cut -d ";" -f 1,3 datos.csv` |
| `cut -c 1-5` | Extrae los caracteres de la posición 1 a la 5 | `cut -c 1-5 archivo.txt` |
| `tee` | Muestra la salida por pantalla y la guarda en un archivo | `grep "ERROR" log \| tee errores.txt` |
| `tee -a` | Igual que `tee` pero añade al final del archivo | `grep "AVISO" log \| tee -a errores.txt` |