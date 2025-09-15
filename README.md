# Juego del Amigo Secreto

Este es un proyecto sencillo en **JavaScript, HTML y CSS** que permite organizar un **sorteo de "Amigo Secreto"** de manera digital.  
La aplicación es interactiva, fácil de usar y con validaciones para evitar errores comunes al ingresar los nombres.

---

## Funcionalidades

- ✅ **Agregar amigos** a la lista.
- ✅ **Validaciones al ingresar un nombre**:
  - No se permiten campos vacíos.
  - Solo acepta letras (A-Z), acentos y espacios.
  - No se permiten duplicados.
- ✅ **Sorteo aleatorio** de un amigo secreto usando `Math.random()`.
- ✅ **Reinicio del juego** para limpiar la lista y empezar de nuevo.
- ✅ **Interfaz dinámica** que muestra los nombres en una lista `<ul>`.

---

##  Capturas de pantalla

### Pantalla principal
(assets/captura1.png)

### Lista de amigos agregados
(assets/captura2.png)

### Sorteo realizado
(assets/captura3.png)

## Estructura del proyecto

```bash
.
├── index.html      # Página principal con la estructura del juego
├── style.css       # Estilos (botones, lista, etc.)
├── app.js          # Lógica en JavaScript
└── assets/         # Carpeta opcional para imágenes o videos
