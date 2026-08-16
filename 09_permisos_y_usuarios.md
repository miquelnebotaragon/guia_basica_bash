# La consola de comandos. Parte IX

## 🔐 Permisos y usuarios

En el módulo 02 ya vimos de forma básica cómo interpretar los permisos que muestra `ls -l`. En este módulo profundizaremos en ellos y aprenderemos a **modificar permisos y propietarios** de archivos y directorios.

Cada archivo y directorio en Linux dispone de tres tipos de permisos y tres conjuntos de usuarios que pueden tenerlos asignados.

## 👥 ¿Quién puede acceder a un archivo?

Los permisos se organizan en tres bloques, tal como ya hemos visto:

| Bloque | Se refiere a | Descripción |
|:-------|:-------------|:------------|
| Usuario | Propietario | La persona que creó el archivo o directorio |
| Grupo | Grupo | Un conjunto de usuarios que comparten permisos |
| Otros | Otros usuarios | Cualquier otro usuario del sistema |

Cuando ejecutamos `ls -l`, vemos estos bloques representados así:

```bash
-rwxr-xr-- 1 mnebot profesores 4096 mar  9 10:00 notas.txt
 │││ ││ ││
 │││ ││ └───── Otros: r-- (lectura)
 │││ └──────── Grupo: r-x (lectura y ejecución)
 └──────────── Usuario: rwx (lectura, escritura y ejecución)
```

## 📖 ¿Qué significan r, w y x?

Recordamos aquí los conceptos introducidos en el módulo 02:

| Permiso | En archivos | En directorios |
|:--------|:------------|:---------------|
| `r` (*read*) | Ver el contenido del archivo | Listar los archivos del directorio (`ls`) |
| `w` (*write*) | Modificar el archivo | Crear, eliminar o renombrar archivos dentro del directorio |
| `x` (*execute*) | Ejecutar el archivo como programa | Entrar en el directorio (`cd`) |

⚠️ En los directorios, el permiso `x` es fundamental. Sin él, no podemos acceder al directorio ni consultar sus archivos, aunque tengamos permiso de lectura `r`. De igual modo, para crear o eliminar archivos dentro de un directorio necesitamos disponer **a la vez** de `w` y de `x` sobre ese directorio.

## 🔢 Permisos en formato numérico

Cada permiso tiene un valor numérico:

| Permiso | Valor |
|:--------|:------|
| `r` | 4 |
| `w` | 2 |
| `x` | 1 |
| `-` | 0 |

Los tres bloques se suman para formar un número de tres dígitos:

| Combinación | Cálculo | Significado |
|:------------|:--------|:------------|
| `rwx` | 4+2+1 = 7 | Lectura, escritura y ejecución |
| `r-x` | 4+0+1 = 5 | Lectura y ejecución |
| `rw-` | 4+2+0 = 6 | Lectura y escritura |
| `r--` | 4+0+0 = 4 | Solo lectura |
| `---` | 0+0+0 = 0 | Sin permisos |

### 💡 Ejemplo: Descomposición de permisos en números

```bash
# Al comenzar por guion, sabemos que se trata de un archivo y no de un directorio.
-rwxr-xr--
```

Se descompone en:

| Bloque | Permisos | Valor |
|:-------|:---------|:------|
| Usuario | `rwx` | 7 |
| Grupo | `r-x` | 5 |
| Otros | `r--` | 4 |

El valor numérico completo sería: **754**. A continuación veremos para qué sirve conocer el valor numérico en cuanto a permisos de un archivo o directorio.


## 🔧 Cambiar permisos. El comando `chmod`

El comando `chmod` (*change mode*) permite modificar los permisos de archivos y directorios. Existen dos maneras de cambiar los permisos: el **modo numérico** (mediante números) y el **modo simbólico** (mediante letras).

### Sintaxis

```bash
chmod [opciones] archivo
```

### Modo numérico (octal)

Utiliza los valores numéricos para establecer permisos de forma directa:

```bash
chmod 755 script.sh
```

Este comando establece:
- Usuario: `rwx` (7), es decir, el propietario tendrá permiso de lectura, escritura y ejecución.
- Grupo: `r-x` (5), es decir, los miembros del grupo podrán leerlo y ejecutarlo.
- Otros: `r-x` (5), es decir, el resto de usuarios podrá también leerlo y ejecutarlo.

### 💡 Ejemplos con modo numérico

```bash
# Solo el propietario puede leer y escribir
chmod 600 archivo_privado.txt

# Todos pueden leer, solo el propietario puede escribir
chmod 644 documento_publico.txt

# El propietario tiene control total (leer, escribir y ejecutar), grupo y otros lectura y ejecución
chmod 755 mi_script.sh

```

### Permisos comunes y su uso habitual

| Valor | Permisos | Uso típico |
|:------|:---------|:-----------|
| `755` | `rwxr-xr-x` | Scripts ejecutables, directorios compartidos |
| `644` | `rw-r--r--` | Archivos de lectura pública |
| `700` | `rwx------` | Directorios privados del usuario |
| `600` | `rw-------` | Archivos privados (claves SSH, contraseñas) |
| `777` | `rwxrwxrwx` | ⚠️ Acceso total para todos (usar con mucha precaución) |

### Modo simbólico

El modo simbólico permite añadir, quitar o asignar permisos concretos sin tener que recalcular el número octal. Se compone de tres partes:

| ¿A quién? | Operador | ¿Qué permiso? |
|:----------|:---------|:--------------|
| `u` (usuario) / `g` (grupo) / `o` (otros) / `a` (todos) | `+` añade, `-` quita, `=` asigna exactamente | `r` / `w` / `x` |

```bash
# Añade permiso de ejecución al propietario
chmod u+x script.sh

# Quita permiso de escritura a "otros"
chmod o-w notas.txt

# Asigna al grupo únicamente lectura y ejecución
chmod g=rx script.sh
```

### Modificar permisos de un directorio y su contenido con `-R`

Para aplicar los permisos de forma recursiva a un directorio y todo lo que contiene:

```bash
chmod -R 755 mi_directorio
```

⚠️ En `chmod` (y también en `chown` y `chgrp`) la opción recursiva es **`-R` en mayúscula**. A diferencia de `rm` o `cp`, que aceptan `-r` minúscula, en estos comandos la minúscula no funciona.


## 👤 Cambiar el propietario. El comando `chown`

El comando `chown` (*change owner*) permite cambiar el propietario y/o el grupo de un archivo o directorio.

### Cambiar el propietario

```bash
chown usuario archivo
```

### 💡 Ejemplo: Cambio de propietario de un archivo

```bash
# Cambiar el propietario del archivo a "ana"
chown ana notas.txt
```

### Cambiar el propietario y el grupo

```bash
chown usuario:grupo archivo
```

### 💡 Ejemplo: Cambio de propietario y de grupo

```bash
# Cambiar propietario a "ana" y grupo a "profesorado"
chown ana:profesorado notas.txt
```

### Cambiar el grupo únicamente con `chgrp`

Si solo necesitamos cambiar el grupo, podemos usar `chgrp`:

```bash
chgrp profesorado notas.txt
```

### Cambiar propietario de forma recursiva con `-R`

Para aplicar el cambio a un directorio y todo su contenido:

```bash
chown -R ana:profesorado mi_directorio
```

## 👥 Grupos de usuarios

En Linux, los usuarios pueden pertenecer a **grupos**. Los grupos permiten gestionar permisos de forma colectiva, sin necesidad de asignarlos uno por uno a cada usuario.

### Consultar los grupos del usuario actual

```bash
groups
```
![Grupos del usuario actual](/assets/groups.png)

### Consultar los grupos de un usuario concreto

```bash
groups nombre_usuario
```

## 📋 Resumen de comandos

| Comando | Para qué sirve | Ejemplo |
|:--------|:---------------|:--------|
| `chmod 755 archivo` | Cambia permisos en modo numérico | `chmod 755 script.sh` |
| `chmod u+x archivo` | Añade ejecución al propietario | `chmod u+x script.sh` |
| `chmod o-w archivo` | Quita escritura a otros | `chmod o-w notas.txt` |
| `chmod -R 755 dir` | Cambia permisos recursivamente | `chmod -R 755 mi_directorio` |
| `chown usuario archivo` | Cambia el propietario | `chown ana notas.txt` |
| `chown usuario:grupo archivo` | Cambia propietario y grupo | `chown ana:profesorado notas.txt` |
| `chgrp grupo archivo` | Cambia solo el grupo | `chgrp profesorado notas.txt` |
| `groups` | Muestra los grupos del usuario | `groups` |