# La consola de comandos. Parte VIII

## ✏️ Edición de archivos desde la consola. El editor `nano`

En módulos anteriores hemos aprendido cómo crear archivos vacíos con el comando `touch`, visualizar su contenido con `cat`, `less`, `head` y `tail`, y buscar información con `grep`. Sin embargo, aún no hemos visto cómo **editar el contenido** de un archivo directamente desde la consola.

En Linux existen varios editores de texto que funcionan en la línea de comandos. Los más conocidos son:

* **`nano`**: editor sencillo e intuitivo, ideal para principiantes.
* **`vim`**: editor muy potente y configurable, con una curva de aprendizaje más pronunciada.
* **`emacs`**: editor extensible con múltiples funcionalidades.

En este módulo utilizaremos **`nano`** por su sencillez.

## 🚀 Abrir un archivo con `nano`

Para editar el contenido de un archivo con `nano`, escribimos el nombre del comando seguido del archivo que queremos editar:

```bash
nano /home/usuario/Escritorio/prueba.txt
```

Si el archivo existe, `nano` abrirá su contenido para editarlo. Si no existe, creará un archivo nuevo con ese nombre.

La interfaz de `nano` muestra:

* En la parte superior: el nombre del archivo y si ha sido modificado.
* En el centro: el contenido del archivo (o un espacio vacío si es nuevo).
* En la parte inferior: una barra con los atajos de teclado más utilizados.

![Interfaz del editor nano](/assets/nano_editor.png)

## 📝 Editar texto

Una vez dentro de `nano`, podemos escribir y modificar texto con total normalidad, igual que haríamos en cualquier editor de texto:

* Usamos las **flechas del teclado** para desplazarnos por el archivo.
* Escribimos texto directamente con el teclado.
* Utilizamos las teclas **Supr** o **Retroceso** para borrar caracteres.

## 💾 Guardar y salir

Los atajos de `nano` se combinan con la tecla **Ctrl** (representada con el símbolo `^` en la parte inferior de la pantalla). Otros atajos, indicados con `M-`, requieren la tecla **Alt** (también llamada *Meta*).

### Guardar el archivo

Para guardar los cambios, pulsamos:

```
Ctrl + O
```

`nano` nos pedirá confirmación del nombre del archivo. Pulsa **Enter** para aceptar.

### Salir de `nano`

Para salir del editor, pulsamos:

```
Ctrl + X
```

Si hemos hecho cambios y no los hemos guardado, `nano` nos preguntará si queremos guardarlos antes de salir.

### Guardar y salir rápidamente

Podemos guardar y salir en dos pasos:

1. `Ctrl + O` para guardar.
2. `Ctrl + X` para salir.

## 🔍 Buscar texto dentro del archivo

Para buscar una palabra o texto dentro del archivo que estamos editando:

```
Ctrl + W
```

`nano` nos pedirá el texto a buscar. Escribimos la palabra y pulsamos **Enter**. Para buscar la siguiente coincidencia, volvemos a pulsar `Ctrl + W` y luego **Enter** sin escribir nada.

## 🔄 Reemplazar texto

Para buscar y reemplazar texto:

```
Ctrl + \
```

`nano` nos pedirá:
1. El texto a buscar.
2. El texto por el que queremos reemplazarlo.

Después nos preguntará si deseamos confirmar cada reemplazo individualmente o cambiar todos a la vez.

## 📋 Cortar, copiar y pegar líneas

`nano` permite manipular líneas completas de texto. Para trabajar con selecciones se utilizan los atajos con la tecla **Alt**.

### Marcar texto para seleccionarlo

```
Alt + A
```

Activa el modo de selección (marcar). Desplázate con las flechas para seleccionar el texto deseado.

### Cortar la línea seleccionada

```
Ctrl + K
```

Corta la línea actual (o la selección) y la almacena en el portapapeles interno de `nano`.

### Copiar la línea seleccionada

```
Alt + 6
```

Copia la línea actual (o la selección) sin eliminarla del archivo.

### Pegar el texto cortado o copiado

```
Ctrl + U
```

Pega el contenido del portapapeles en la posición actual del cursor.

### 💡 Ejemplo: Mover una línea

1. Colocaremos el cursor sobre la línea que deseamos mover.
2. Pulsa `Ctrl + K` para cortarla.
3. Desplaza el cursor a la nueva ubicación.
4. Pulsa `Ctrl + U` para pegarla.

## ↩️ Deshacer y rehacer cambios

Si cometemos un error, podemos **deshacer** la última acción con:

```
Alt + U
```

Y **rehacer** lo deshecho con:

```
Alt + E
```

⚠️ No utilices `Ctrl + Z` para deshacer: en la consola esa combinación *suspende* el programa (lo deja en segundo plano) y no deshace ningún cambio.

## ⚠️ Consejos útiles

* Antes de guardar, verifica en la parte superior de la pantalla que estás editando el archivo correcto. Una vez guardados los cambios, no podremos volver atrás.
* Si quieres descartar todos los cambios sin guardar, pulsa `Ctrl + X` y responde **N** cuando `nano` pregunte si deseas guardar.
* Para ver la ayuda completa de `nano`, pulsa `Ctrl + G` dentro del editor.


## 📋 Resumen de atajos de teclado

| Atajo | Para qué sirve |
|:------|:---------------|
| `Ctrl + O` | Guardar el archivo |
| `Ctrl + X` | Salir de nano |
| `Ctrl + W` | Buscar texto |
| `Ctrl + \` | Buscar y reemplazar |
| `Ctrl + K` | Cortar línea o selección |
| `Alt + 6` | Copiar línea o selección |
| `Ctrl + U` | Pegar línea |
| `Alt + A` | Iniciar selección (marcar) |
| `Alt + U` | Deshacer |
| `Alt + E` | Rehacer |
| `Ctrl + G` | Ayuda |