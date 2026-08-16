# La consola de comandos. Parte V

## 📄 Trabajo con archivos de texto

En el módulo anterior hemos aprendido a crear, copiar, mover y eliminar archivos y directorios. Llega el momento de **consultar el contenido de esos archivos**.

Veamos ahora cómo utilizar distintos comandos para visualizar archivos de texto, cada uno pensado para una situación diferente.

## 📄 Mostrar el contenido completo. El comando `cat`

El comando `cat` (del inglés *concatenate*) muestra el contenido de uno o varios archivos.

```bash
cat Escritorio/lorem-ipsum.txt
```

![Ejemplo cat](/assets/cat_ejemplo_lorem_ipsum.png)

También podemos mostrar varios archivos seguidos:

```bash
cat Escritorio/lorem-ipsum.txt Escritorio/lorem-ipsum-2.txt
```

![Ejemplo cat 2 archivos](/assets/cat_ejemplo_lorem_ipsum2.png)

⚠️ `cat` resulta muy cómodo para archivos pequeños. Si el archivo contiene cientos de líneas, el contenido pasa demasiado deprisa y es muy difícil hacer un seguimiento real del mismo.

### 🔢 Numerar líneas con la opción `-n`

Una herramienta que puede ayudarnos a identificar mediante números cada una de las líneas del archivo es la opción `-n`. Imaginémonos que tenemos un script (automatización) que nos está arrojando un error en una línea en concreto. Usando esta opción podremos revisarla de manera rápida y directa.

```bash
cat -n Escritorio/copia.sh
```

![Opción -n cat](/assets/cat_enumerar.png)

## 📖 Leer archivos grandes. El comando `less`

Cuando el archivo es muy largo resulta mucho más cómodo utilizar `less`. A diferencia de `cat`, `less` no muestra el archivo de golpe sino que se detiene para que tengamos tiempo a analizar con pausa el archivo. Es un comando realmente útil ya que gracias a él podemos desplazarnos por el contenido del archivo usando:

* Flechas ↑ ↓
* AvPág
* RePág
* Barra espaciadora (avanza una página)
* q (salir)

```bash
less Escritorio/prueba.txt
```
![Ejemplo de uso comando less](/assets/less_ejemplo.png)

## ⬆️ Ver las primeras líneas. El comando `head`

Por defecto, el comando `head` muestra las diez primeras líneas de nuestro archivo. Aun así, tenemos otras opciones y una de las más interesantes es `-n` donde podremos establecer cuántas líneas queremos ver empezando por el principio.

```bash
head Descargas/alumnos.csv
```
![Ejemplo comando head](/assets/head_ejemplo.png)

Para mostrar, por ejemplo las 3 primeras líneas del archivo lo haríamos de la siguiente manera:

```bash
head -n 3 Descargas/alumnos.csv
```

![Mostrar n filas en el comando head](/assets/head_opcion_numero.png)


## ⬇️ Ver las últimas líneas. El comando `tail`
Prácticamente idéntico es el comando `tail`. En este caso, podremos ver el contenido de un fichero empezando por el final del mismo. Es un comando que puede tener mucha utilidad si, por ejemplo, revisamos logs de un servicio y queremos ver qué ha pasado en última instancia.

```bash
tail Descargas/registro.log
```
![Ejemplo tail](/assets/tail_ejemplo.png)

Si quisiéramos mostrar X líneas lo haríamos también haciendo uso de la opción `-n`:

```bash
tail -n 20 Descargas/registro.log
```

## 💡 Ejemplo: Revisar un listado de alumnos

```bash
# Ver todo el archivo
cat alumnos.txt

# Leer cómodamente el archivo usando las flechas del teclado, avance y retroceso de página... Recuerda `q` para salir
less alumnos.txt

# Mostrar únicamente las 5 primeras líneas
head -n 5 alumnos.txt

# Mostrar únicamente las 20 últimas líneas
tail -n 20 alumnos.txt

```

## 📋 Resumen de comandos

| Comando | Para qué sirve | Ejemplo |
|:--------|:---------------|:--------|
| `cat` | Muestra el contenido completo de un archivo | `cat notas.txt` |
| `cat -n` | Muestra el contenido numerando las líneas | `cat -n notas.txt` |
| `less` | Permite leer archivos largos cómodamente | `less manual.txt` |
| `head` | Muestra las primeras líneas | `head alumnos.txt` |
| `head -n` | Muestra un número concreto de líneas iniciales | `head -n 5 alumnos.txt` |
| `tail` | Muestra las últimas líneas | `tail registro.log` |
| `tail -n` | Muestra un número concreto de líneas finales | `tail -n 20 registro.log` |