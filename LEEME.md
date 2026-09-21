# Flores amarillas 🌻

Web personal con cuatro pantallas: portada, video, carta y flores.

## Cómo subirlo a GitHub

1. En tu repositorio, entra a **Add file → Upload files**.
2. Arrastra **todo lo que está dentro de esta carpeta** (no la carpeta en sí):
   `index.html`, `flower.html`, `carta.html`, `video.html`, `main.js`,
   `.nojekyll` y las carpetas `css`, `img`, `sound`, `video`.
3. Commit.
4. **Settings → Pages → Deploy from a branch → main → / (root)**.

`index.html` tiene que quedar en la raíz del repo, sin carpeta encima.

## Qué puedes editar tú

| Quiero cambiar | Archivo | Busca |
|---|---|---|
| El saludo de la portada | `index.html` | `EDITA ESTE TEXTO` |
| El texto sobre las flores | `flower.html` | `EDITA ESTE TEXTO` |
| La carta entera | `carta.html` | `EDITA TODA LA CARTA` |
| El video | `video.html` | `DOS FORMAS DE PONER TU VIDEO` |

## El video

Copia tu archivo en `video/mi-video.mp4`. Si es horizontal, en `video.html`
cambia `marco--vertical` por `marco--horizontal`.
GitHub no acepta archivos de más de 100 MB; si pesa mucho, súbelo a YouTube
como "no listado" y usa el bloque `<iframe>` que está comentado.

## La música

En celular los navegadores no dejan que la música arranque sola. Por eso hay
un botón 🎵 abajo a la derecha, y también arranca con el primer toque en la
pantalla.
