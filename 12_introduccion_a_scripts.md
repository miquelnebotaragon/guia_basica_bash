# La consola de comandos. Parte XII

## 📜 Introducción a scripts con Bash

A lo largo de estos módulos de aprendizaje y formación, hemos aprendido a ejecutar comandos uno a uno. Sin embargo, en muchas ocasiones necesitaremos **ejecutar la misma secuencia de comandos repetidamente** para automatizar tareas en el sistema. Para ello existen los **scripts**, que son archivos de texto que contienen una serie de comandos que Bash ejecuta de forma secuencial.

Un script es, explicado de manera muy básica, una **automatización**. En lugar de escribir los mismos comandos cada vez, los guardamos en un archivo y lo ejecutamos cuando los necesitamos.

## 📄 Crear un script

Un script es un **archivo de texto plano que contiene comandos** y tiene como extensión `.sh`. Para crear uno, utilizamos cualquier editor de texto, como `nano`.

### Estructura básica

```bash
#!/bin/bash
# Este es un comentario
echo "Este es mi primer script."
```

Donde:
- `#!/bin/bash`: es la **línea shebang**. Indica al sistema que debe usar `bash` para interpretar el archivo.
- `#`: las líneas que comienzan con `#` son **comentarios** y no se ejecutan (el sistema las omite y sirven para documentar nuestro script).
- `echo "Este es mi primer script."`: es el comando que se ejecutará.

### 💡 Ejemplo: Crear un primer script

```bash
nano saludar.sh
```

Contenido:

```bash
#!/bin/bash
echo "Bienvenido/a a la guía de Bash"
echo "Fecha actual: $(date)"
echo "Usuario: $(whoami)"
```
Donde:
- `echo`: muestra o imprime en pantalla texto.
- `$(date)`: ejecuta el comando `date` (fecha y hora) y muestra su resultado en pantalla.
- `$(whoami)`: ejecuta el comando `whoami` (nombre del usuario/a) y muestra su resultado en pantalla.

---

## ▶️ Ejecutar un script

Para ejecutar un script, primero debemos darle **permisos de ejecución**:

```bash
chmod +x saludar.sh
```

Después, lo ejecutamos indicando la ruta:

```bash
./saludar.sh
```

El prefijo `./` indica que el script se encuentra en el directorio actual.

Resultado:

```text
Bienvenido/a a la guía de Bash
Fecha actual: mar 09 10:30:15 CET 2026
Usuario: profesor
```

### Ejecutar sin permisos de ejecución

También podemos ejecutar un script sin darle permisos previos llamando directamente a `bash`:

```bash
bash saludar.sh
```

---

## 📝 Variables

Las variables permiten almacenar valores para usarlos posteriormente en el script.

### Definir una variable

```bash
nombre="Ana"
```

⚠️ No debe haber espacios entre el nombre de la variable, el signo `=` y el valor.

### Usar una variable

Para acceder al valor de una variable, se precede con el símbolo `$`:

```bash
nombre="Ana"
echo "Hola, $nombre"
```

Resultado:

```text
Hola, Ana
```

### 💡 Ejemplo: variables con información del sistema

```bash
#!/bin/bash
usuario=$(whoami)
fecha=$(date +%Y-%m-%d)
directorio=$(pwd)

echo "Usuario: $usuario"
echo "Fecha: $fecha"
echo "Directorio: $directorio"
```

### Variables especiales

| Variable | Contenido |
|:---------|:----------|
| `$0` | Nombre del script |
| `$1, $2, $3...` | Argumentos pasados al script |
| `$#` | Número de argumentos |
| `$?` | Código de salida del último comando |

### 💡 Ejemplo: usar argumentos

```bash
#!/bin/bash
echo "El script se llama: $0"
echo "Primer argumento: $1"
echo "Segundo argumento: $2"
echo "Número total de argumentos: $#"
```

Si ejecutamos:

```bash
./mi_script.sh hola mundo
```

Resultado:

```text
El script se llama: ./mi_script.sh
Primer argumento: hola
Segundo argumento: mundo
Número total de argumentos: 2
```

---

## 📋 Lectura de datos con `read`

El comando `read` permite solicitar datos al usuario durante la ejecución del script.

```bash
#!/bin/bash
echo "¿Cómo te llamas?"
read nombre
echo "Hola, $nombre"
```

### 💡 Ejemplo: pedir datos y mostrar un resumen

```bash
#!/bin/bash
echo "Introduce tu nombre:"
read nombre
echo "Introduce tu etapa educativa (Primaria/Secundaria/FP):"
read etapa
echo ""
echo "=== RESUMEN ==="
echo "Nombre: $nombre"
echo "Etapa: $etapa"
echo "Fecha: $(date +%Y-%m-%d)"
```

---

## 🔀 Condicionales: `if`

Los condicionales permiten ejecutar diferentes acciones según se cumpla o no una condición.

### Sintaxis básica

```bash
if [ condición ]; then
    # Código si la condición se cumple
else
    # Código si la condición no se cumple
fi
```

### Operadores de comparación

| Operador | Significado |
|:---------|:------------|
| `-eq` | Igual (números) |
| `-ne` | Distinto (números) |
| `-gt` | Mayor que (números) |
| `-lt` | Menor que (números) |
| `-ge` | Mayor o igual (números) |
| `-le` | Menor o igual (números) |
| `=` | Igual (texto) |
| `!=` | Distinto (texto) |
| `-z` | Cadena vacía |
| `-n` | Cadena no vacía |

### 💡 Ejemplo: comprobar si un archivo existe

```bash
#!/bin/bash
if [ -f "datos.txt" ]; then
    echo "El archivo existe"
else
    echo "El archivo no existe"
fi
```

### 💡 Ejemplo: comprobar una nota

```bash
#!/bin/bash
echo "Introduce la nota del alumno:"
read nota

if [ $nota -ge 5 ]; then
    echo "Aprobado"
else
    echo "Suspendido"
fi
```

### Condicionales con `elif`

```bash
#!/bin/bash
echo "Introduce la nota:"
read nota

if [ $nota -ge 9 ]; then
    echo "Sobresaliente"
elif [ $nota -ge 7 ]; then
    echo "Notable"
elif [ $nota -ge 5 ]; then
    echo "Aprobado"
else
    echo "Suspendido"
fi
```

---

## 🔁 Bucles: `for`

Los bucles `for` permiten repetir una acción para cada elemento de una lista.

### Sintaxis básica

```bash
for variable in lista; do
    # Código a repetir
done
```

### 💡 Ejemplo: listar archivos de un directorio

```bash
#!/bin/bash
for archivo in Documentos/*.txt; do
    echo "Archivo: $archivo"
done
```

### 💡 Ejemplo: contar del 1 al 5

```bash
#!/bin/bash
for i in 1 2 3 4 5; do
    echo "Número: $i"
done
```

### 💡 Ejemplo: procesar un listado de nombres

```bash
#!/bin/bash
for nombre in Ana Bernat Carla David Elena; do
    echo "Hola, $nombre"
done
```

### 💡 Ejemplo: procesar archivos de un directorio

```bash
#!/bin/bash
echo "Listado de archivos .txt en el directorio actual:"
for archivo in *.txt; do
    echo "- $archivo"
done
```

---

## 📦 Ejemplo integrador: script para docentes

Vamos a crear un script que automatice una tarea habitual: generar un informe de notas.

```bash
nano informe_notas.sh
```

Contenido:

```bash
#!/bin/bash
# Script: informe_notas.sh
# Descripción: Genera un informe básico de notas de un grupo

echo "========================================="
echo "   INFORME DE NOTAS - GENERADO POR BASH"
echo "   Fecha: $(date +%Y-%m-%d)"
echo "========================================="
echo ""

# Archivo de notas
archivo="notas_grupo.csv"

# Comprobar si el archivo existe
if [ ! -f "$archivo" ]; then
    echo "ERROR: No se encuentra el archivo $archivo"
    exit 1
fi

# Mostrar el contenido
echo "--- Contenido del archivo ---"
cat "$archivo"
echo ""

# Contar el número de alumnos
total=$(wc -l < "$archivo")
echo "Total de alumnos: $total"

# Contar aprobados (buscando notas >= 5)
aprobados=$(grep -cE ";[5-9]$|;10$" "$archivo")
suspendidos=$(grep -cE ";[1-4]$" "$archivo")

echo "Aprobados: $aprobados"
echo "Suspensos: $suspendidos"
echo ""
echo "========================================="
echo "   FIN DEL INFORME"
echo "========================================="
```

### Usar el script

```bash
# Dar permisos de ejecución
chmod +x informe_notas.sh

# Crear un archivo de ejemplo
echo "Ana;8" > notas_grupo.csv
echo "Bernat;4" >> notas_grupo.csv
echo "Carla;9" >> notas_grupo.csv
echo "David;5" >> notas_grupo.csv
echo "Elena;3" >> notas_grupo.csv

# Ejecutar el script
./informe_notas.sh
```

Resultado:

```text
=========================================
   INFORME DE NOTAS - GENERADO POR BASH
   Fecha: 2026-03-09
=========================================

--- Contenido del archivo ---
Ana;8
Bernat;4
Carla;9
David;5
Elena;3

Total de alumnos: 5
Aprobados: 3
Suspensos: 2

=========================================
   FIN DEL INFORME
=========================================
```

---

## 💡 Ejemplo práctico: script de bienvenida

```bash
nano bienvenida.sh
```

Contenido:

```bash
#!/bin/bash
# Script de bienvenida personalizado

hora=$(date +%H)
usuario=$(whoami)

if [ $hora -lt 12 ]; then
    turno="Buenos días"
elif [ $hora -lt 20 ]; then
    turno="Buenas tardes"
else
    turno="Buenas noches"
fi

echo "$turno, $usuario"
echo "Hoy es $(date +%A, %d de %B de %Y)"
echo ""
# $(df -h ~ | tail -1 | awk '{print $4}') muestra el espacio libre de tu directorio personal.
# Aquí se combinan tuberías con awk, una herramienta de procesamiento de columnas
# que no se explica en detalle en este curso; se incluye como ejemplo de uso real.
echo "Dispones de $(df -h ~ | tail -1 | awk '{print $4}') de espacio libre en tu directorio personal"
```

```bash
chmod +x bienvenida.sh
./bienvenida.sh
```

---

## 💡 Ejemplo práctico: script para hacer copias de seguridad

```bash
nano backup.sh
```

Contenido:

```bash
#!/bin/bash
# Script de copia de seguridad simple

# Definir origen y destino
origen=~/Documentos
destino=~/Backups
fecha=$(date +%Y%m%d)
archivo="backup_${fecha}.tar.gz"

# Crear directorio de backups si no existe
mkdir -p "$destino"

# Crear la copia de seguridad
echo "Iniciando copia de seguridad..."
tar -czf "$destino/$archivo" "$origen"

# Verificar si se creó correctamente
if [ $? -eq 0 ]; then
    echo "Copia de seguridad creada: $destino/$archivo"
    echo "Tamaño: $(du -h "$destino/$archivo" | cut -f1)"
else
    echo "ERROR: No se pudo crear la copia de seguridad"
fi
```

```bash
chmod +x backup.sh
./backup.sh
```

---

## ⚠️ Consejos para escribir scripts

1. **Añade siempre el shebang** (`#!/bin/bash`) en la primera línea.
2. **Usa comentarios** para explicar qué hace cada parte del script.
3. **Prueba los comandos individualmente** antes de incluirlos en el script.
4. **Da permisos de ejecución** con `chmod +x` antes de ejecutar.
5. **Valida la entrada** del usuario cuando el script pida datos.
6. **Muestra mensajes claros** para que el usuario sepa qué está haciendo el script.

---

## 🧪 Práctica guiada

### 1. Crear un script de saludo

```bash
nano saludo.sh
```

Contenido:

```bash
#!/bin/bash
echo "Hola, $USER"
echo "Estás en el directorio: $(pwd)"
echo "Hoy es: $(date)"
```

```bash
chmod +x saludo.sh
./saludo.sh
```

### 2. Crear un script con argumentos

```bash
nano argumentos.sh
```

Contenido:

```bash
#!/bin/bash
echo "Script: $0"
echo "Argumento 1: $1"
echo "Argumento 2: $2"
echo "Total de argumentos: $#"
```

```bash
chmod +x argumentos.sh
./argumentos.sh hola mundo
```

### 3. Crear un script con condicional

```bash
nano comprobar_archivo.sh
```

Contenido:

```bash
#!/bin/bash
if [ -f "$1" ]; then
    echo "El archivo $1 existe"
    echo "Tamaño: $(du -h "$1" | cut -f1)"
else
    echo "El archivo $1 no existe"
fi
```

```bash
chmod +x comprobar_archivo.sh
./comprobar_archivo.sh /etc/hostname
./comprobar_archivo.sh archivo_inexistente.txt
```

### 4. Crear un script con bucle

```bash
nano listar_txt.sh
```

Contenido:

```bash
#!/bin/bash
echo "Archivos .txt en el directorio actual:"
for archivo in *.txt; do
    if [ -f "$archivo" ]; then
        echo "  - $archivo ($(wc -l < "$archivo") líneas)"
    fi
done
```

```bash
chmod +x listar_txt.sh
./listar_txt.sh
```

---

## ✍️ Actividad para entregar

### 1. Script de presentación personal

Crea un script llamado `presentacion.sh` que:

1. Muestre un saludo personalizado con el nombre del usuario.
2. Muestre la fecha y hora actual.
3. Muestre el directorio de trabajo actual.
4. Muestre cuántos archivos `.txt` hay en el directorio actual.

### 2. Script de análisis de notas

Crea un script llamado `analisis_notas.sh` que:

1. Pida al usuario el nombre de un archivo CSV de notas.
2. Compruebe si el archivo existe.
3. Si existe, muestre:
   - El contenido del archivo.
   - El número total de registros.
   - El número de aprobados (nota >= 5).
   - El número de suspensos (nota < 5).
4. Si no existe, muestre un mensaje de error.

Para las pruebas, crea un archivo `test_notas.csv` con:

```text
Ana;8
Bernat;4
Carla;9
David;5
Elena;3
Ferran;7
```

### 3. Script de copia de seguridad

Crea un script llamado `backup_simple.sh` que:

1. Cree un directorio `~/Backups` si no existe.
2. Pida al usuario qué directorio quiere respaldar.
3. Compruebe si el directorio existe.
4. Cree un archivo comprimido con la fecha en el nombre.
5. Muestre un mensaje con el nombre del archivo creado y su tamaño.

### 4. Entrega

Entrega un único documento en formato PDF que incluye:

* El código fuente de cada script.
* Capturas de pantalla de la ejecución de cada script.
* Una explicación breve (2-3 líneas) de qué hace cada script.
* Una reflexión sobre qué tareas de tu trabajo como docente podrías automatizar con scripts.

⚠️ En las capturas debe verse tanto la ejecución del script como su resultado.

---

## ✅ Criterios de realización

La actividad se considerará correctamente realizada cuando:

* Los scripts tienen la línea shebang (`#!/bin/bash`).
* Los scripts tienen permisos de ejecución.
* Se utilizan variables correctamente.
* Se utilizan condicionales (`if/elif/else`).
* Se utilizan bucles (`for`) donde procede.
* Se utiliza `read` para entrada de datos.
* Los scripts se ejecutan correctamente y producen los resultados esperados.
* La reflexión final propone automatizaciones realistas.

---

## 📋 Resumen de comandos y estructuras

| Elemento | Para qué sirve | Ejemplo |
|:---------|:---------------|:--------|
| `#!/bin/bash` | Indica el intérprete del script | Primera línea del archivo |
| `# comentario` | Línea de comentario (no se ejecuta) | `# Esto es un comentario` |
| `echo "texto"` | Muestra un mensaje por pantalla | `echo "Hola"` |
| `read variable` | Lee datos del teclado | `read nombre` |
| `$variable` | Accede al valor de una variable | `echo $nombre` |
| `$(comando)` | Ejecuta un comando y usa su resultado | `echo $(date)` |
| `$1, $2...` | Argumentos pasados al script | `echo $1` |
| `if [ cond ]; then` | Condiciona la ejecución | `if [ $x -gt 5 ]; then` |
| `elif [ cond ]; then` | Condición alternativa | `elif [ $x -eq 3 ]; then` |
| `else` | Código si no se cumple la condición | `else` |
| `fi` | Cierra el bloque condicional | `fi` |
| `for var in lista; do` | Bucle para cada elemento | `for f in *.txt; do` |
| `done` | Cierra el bucle | `done` |
| `chmod +x script.sh` | Da permisos de ejecución | `chmod +x mi_script.sh` |
| `./script.sh` | Ejecuta el script | `./mi_script.sh` |