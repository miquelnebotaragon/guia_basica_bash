# La consola de comandos. Parte III

## 🚶 Me muevo entre directorios. El comando `cd`

En la lección anterior hemos visto cómo orientarnos dentro del sistema de archivos utilizando comandos como `pwd` y `ls`. Mediante ellos, hemos podido responder a preguntas tales como:

* ¿Dónde estoy? → `pwd` (*print working directory*)
* ¿Qué archivos y directorios hay en mi ubicación actual? → `ls` (*list*)

En el presente módulo y para seguir avanzando de manera lógica, llega el momento de **aprender a desplazarnos por los diferentes directorios** del sistema.

Para ello utilizaremos el comando `cd`, del inglés **change directory** (*cambiar directorio*) el cual permite desplazarnos entre directorios y cambiar nuestra ubicación actual dentro del sistema de archivos.

```bash
cd
```

## 📂 Cambiar a un directorio

La forma básica de utilizar `cd` es:

```bash
# Cambiar nuestra ubicación a un directorio concreto
cd ruta_del_nuevo_directorio
```

Ejemplo:

```bash
cd Documentos
```

La shell cambiará nuestra ubicación actual al directorio `Documentos`.

Podemos comprobar dónde nos encontramos utilizando:

```bash
pwd
```
![Uso del comando cd](/assets/cd_ejemplo.png)

### 🛣️ Rutas absolutas y relativas con `cd`

En la lección anterior ya vimos qué son las rutas absolutas y relativas. Ahora veremos cómo se utilizan con el comando `cd`, ya que serán la forma habitual de indicar a qué directorio queremos desplazarnos.

Cuando utilizamos comandos como `cd`, podemos indicar el directorio de destino de dos formas diferentes:

* **Ruta absoluta**: especifica la ubicación completa de un archivo o directorio, comenzando siempre desde el directorio raíz (`/`).
* **Ruta relativa**: especifica la ubicación tomando como referencia el directorio en el que nos encontramos actualmente.

### 💡 Ejemplo con ruta absoluta

```bash
# Ejemplo de ruta absoluta
cd /home/usuario/Descargas
```

Con este comando accederemos al directorio `Descargas`, independientemente del directorio en el que nos encontremos en ese momento.

### 💡 Ejemplo con ruta relativa

```bash
# Ejemplo de ruta relativa
cd Descargas
```

Este comando solo funcionará si el directorio `Descargas` existe dentro del directorio en el que nos encontramos actualmente.

Por ejemplo, si al ejecutar:

```bash
pwd
```

obtenemos:

```text
/home/usuario
```

La shell interpretará que `Descargas` se encuentra dentro de nuestro directorio actual, por lo que el comando anterior nos llevará a:

```text
/home/usuario/Descargas
```

En cambio, si nuestra ubicación actual fuera distinta, por ejemplo:

```text
/etc
```

el comando:

```bash
cd Descargas
```

intentaría acceder al directorio:

```text
/etc/Descargas
```

Como dicho directorio normalmente no existe (a no ser que lo hayamos creado nosotros de manera intencionada), se nos mostrará un mensaje indicando que no existe.

![cd no existe directorio](/assets/cd_no_existe_directorio.png)

## 🏠 Volver al directorio personal

Para volver al directorio personal del usuario utilizamos nuevamente `cd` seguido del símbolo virgulilla `~`:

```bash
# Cambiar al directorio personal (forma 1)
cd ~
```

El símbolo `~` representa el directorio personal del usuario actual.

También podemos utilizar:

```bash
# Cambiar al directorio personal (forma 2)
cd
```

Sin argumentos, `cd` vuelve directamente al directorio personal.

![cd cambiar a directorio personal](/assets/cd_cambiar_a_directorio_personal.png)

## ⬆️ Subir un nivel en el árbol de directorios

Los dos puntos `..` representan el directorio padre (inmediatamente anterior al actual).

Ejemplo:

```bash
# Subir al directorio "padre". ⚠️ Debemos dejar un espacio entre `cd` y los puntos.
cd ..
```

Si estamos en:

```text
/home/usuario/Documentos
```

pasaremos a:

```text
/home/usuario
```

## 📍 El directorio actual: `.`

El punto individual representa el directorio actual.

Ejemplo:

```bash
ls .
```

equivale a:

```bash
ls
```

## 🔙 Volver al directorio anterior

Bash permite regresar rápidamente a la última ubicación escribiendo `cd -`:

```bash
# Volver al directorio anterior
cd -
```

Por ejemplo, si nos hemos desplazado desde `Documentos` a `Descargas`, utilizando `-` como argumento especial del comando `cd` volveremos inmediatamente a `Documentos`.

```bash
cd Documentos
cd Descargas
cd -
```
![Volver al directorio anterior con cd -](/assets/cd_volver_directorio_anterior.png)


## 📋 Resumen de comandos

| Comando | Para qué sirve | Ejemplo |
|:--------|:---------------|:--------|
| `cd carpeta` | Entra en un directorio concreto | `cd Descargas` |
| `cd /ruta/completa` | Accede mediante una ruta absoluta | `cd /home/usuario/Descargas` |
| `cd ~` | Va al directorio personal del usuario | `cd ~` |
| `cd` | Vuelve al directorio personal | `cd` |
| `cd ..` | Sube al directorio padre | `cd ..` |
| `cd .` | Hace referencia al directorio actual | `cd .` |
| `cd -` | Vuelve al directorio anterior | `cd -` |