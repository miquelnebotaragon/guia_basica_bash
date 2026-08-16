# La consola de comandos. Parte XI

## 🔎 Búsqueda de archivos en el sistema

En módulos anteriores hemos visto cómo buscar **contenido dentro de archivos** con el comando `grep`. En este módulo veremos cómo buscar los **archivos y directorios** en sí mismos dentro del sistema de archivos.

## 📂 Buscar archivos por nombre y criterios. El comando `find`

El comando `find` es la herramienta más potente para buscar archivos y directorios en el sistema.

### Sintaxis básica

```bash
find ruta criterio valor
```

Donde:
- **ruta**: el directorio desde donde empezar la búsqueda.
- **criterio**: qué estamos buscando (nombre, tipo, tamaño, fecha...).
- **valor**: el valor del criterio.

### Buscar por nombre con `-name`

```bash
find . -name "registros.log"
```
![Ejemplo comando find](/assets/find_ejemplo1.png)

Este comando busca en el directorio actual (`.`) un archivo que se llame exactamente `registros.log`.

⚠️ Hay que tener en cuenta que la búsqueda con `-name` distingue entre mayúsculas y minúsculas.

### Buscar sin importar mayúsculas con `-iname`
En `find`, el criterio `-iname` sirve para buscar archivos o directorios por nombre sin distinguir entre mayúsculas y minúsculas (*case-insensitive*).

```bash
find . -iname "Registros.log"
```

Continuando con el ejemplo anterior, vemos que usando este nuevo criterio el archivo se encuentra aunque escribamos *Registros.log* (con mayúscula). El archivo real se llama *registros.log*, pero `-iname` no distingue mayúsculas y minúsculas, por lo que la búsqueda tiene éxito.

### Usar comodines en la búsqueda

Podemos usar comodines como `*` y `?` en el nombre:

```bash
# Buscar todos los archivos .txt en el directorio actual. Para ello usamos el comodín asterisco "*"
find . -name "*.txt"

# Buscar archivos que empiecen por "nota"
find . -name "nota*"

# Buscar archivos con extensión de 3 caracteres. Para cada carácter de la extensión añadiremos un símbolo de interrogación "?"
find . -name "*.???"
```

### Buscar por tipo con `-type`

Podemos filtrar por tipo de elemento:

| Valor | Tipo |
|:------|:-----|
| `f` | Archivo regular |
| `d` | Directorio |
| `l` | Enlace simbólico |

### 💡 Ejemplos: Búsqueda de directorios y archivos regulares

```bash
# Buscar solo directorios llamados "Ejercicios"
find . -type d -name "Ejercicios"

# Buscar solo archivos con extensión .md
find . -type f -name "*.md"
```

### Buscar por tamaño con `-size`

```bash
# Archivos mayores de 100MB
find . -size +100M

# Archivos menores de 1GB
find . -size -1G
```

| Símbolo | Significado |
|:--------|:------------|
| `+` | Mayor que |
| `-` | Menor que |
| (sin símbolo) | Exactamente |

Unidades disponibles: `c` (bytes), `k` (kilobytes), `M` (megabytes), `G` (gigabytes).

### Buscar por fecha de modificación con `-mtime`

```bash
# Archivos modificados hace más de 30 días
find . -mtime +30

# Archivos modificados en los últimos 7 días
find . -mtime -7

# Archivos modificados exactamente hace 1 día
find . -mtime 1
```

### Buscar por permisos con `-perm`

```bash
# Archivos con permisos exactos 755
find . -perm 755

# Archivos que tengan permiso de escritura para otros
find . -perm -o+w
```

### Ejecutar un comando sobre los resultados obtenidos con `-exec`

La opción `-exec` permite ejecutar un comando sobre cada archivo encontrado:

```bash
find . -name "*.tmp" -exec rm {} \;
```

Este comando busca todos los archivos `.tmp` del directorio actual y los elimina. `{}` son marcadores de posición que `find` sustituye por cada elemento encontrado, y `\;` indica el fin del comando.

### 💡 Ejemplo: Buscar y eliminar archivos antiguos

```bash
# Eliminar archivos .log con más de 30 días
find /var/log -name "*.log" -mtime +30 -exec rm {} \;
```

### Combinar criterios

Podemos combinar varios criterios en una misma búsqueda:

```bash
# Archivos .txt modificados en los últimos 7 días
find . -name "*.txt" -mtime -7

# Directorios vacíos
find . -type d -empty

# Archivos mayores de 10MB que no sean .mp4
find . -type f -size +10M ! -name "*.mp4"
```

⚠️ El operador `!` niega el criterio siguiente.


## 🧭 Localizar archivos rápidamente. El comando `locate`

`find` es muy potente, pero busca recorriendo el sistema de archivos, lo que puede ser lento. El comando `locate` realiza la búsqueda sobre una **base de datos pregenerada** del sistema, por lo que es mucho más rápido, a cambio de no reflejar los archivos creados o modificados desde la última actualización de dicha base de datos.

```bash
# Buscar todas las rutas que contienen "passwd"
locate passwd
```

Para actualizar la base de datos (tarea que normalmente realiza el sistema de forma periódica) se utiliza el comando `updatedb`, que requiere permisos de administrador:

```bash
sudo updatedb
```

⚠️ `locate` puede no estar instalado por defecto en todas las distribuciones. En Debian/Ubuntu se encuentra en el paquete `plocate` (o `mlocate`); en Arch, en `plocate`.


## 🔍 Localizar comandos. `which` y `whereis`

### Buscar la ubicación de un comando con `which`

El comando `which` muestra la ruta completa de un comando:

```bash
which ls
```

Resultado típico:

```text
/usr/bin/ls
```

Esto nos indica que el programa `ls` se encuentra en `/usr/bin/ls`.

### 💡 Ejemplo: Buscar la ubicación real de bash

```bash
which bash
```

Resultado:

```text
/usr/bin/bash
```

### Buscar la ubicación y archivos relacionados con `whereis`

El comando `whereis` muestra no solo la ubicación del ejecutable, sino también la de su manual y los archivos fuente (si existen):

```bash
whereis ls
```

Resultado típico:

```text
ls: /usr/bin/ls /usr/share/man/man1/ls.1.gz
```

### Diferencias entre `which` y `whereis`

| Característica | `which` | `whereis` |
|:---------------|:--------|:----------|
| Muestra ejecutable | Sí | Sí |
| Muestra manual | No | Sí |
| Muestra fuentes | No | Sí |
| Usa PATH | Sí | No |


## 📋 Resumen de comandos

| Comando | Para qué sirve | Ejemplo |
|:--------|:---------------|:--------|
| `find . -name "archivo"` | Busca por nombre desde el directorio actual | `find . -name "notas.txt"` |
| `find . -name "*.txt"` | Busca archivos por extensión | `find . -name "*.pdf"` |
| `find . -type d` | Busca solo directorios | `find . -type d -name "Clase"` |
| `find . -size +100M` | Busca archivos por tamaño | `find . -size +1G` |
| `find . -mtime -7` | Busca por fecha de modificación | `find . -mtime -1` |
| `find . -exec cmd {} \;` | Ejecuta un comando sobre los resultados | `find . -name "*.sh" -exec chmod +x {} \;` |
| `locate texto` | Busca rutas en una base de datos pregenerada | `locate passwd` |
| `which comando` | Muestra la ruta de un comando | `which python3` |
| `whereis comando` | Muestra ejecutable, manual y fuentes | `whereis ls` |