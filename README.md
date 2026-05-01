# Lago de Manzanares

Portal web para administracion y liquidacion de gastos administrativos del barrio cerrado Lago de Manzanares.

## Estructura

```text
Lagos/
├── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── app.js
│   └── images/
│       ├── brand/
│       ├── gallery/
│       ├── hero/
│       └── notices/
├── WhatsApp Index.html
└── README.md
```

## Archivos principales

- `index.html`: punto de entrada principal para GitHub Pages o cualquier hosting estatico.
- `assets/css/styles.css`: estilos globales y responsive.
- `assets/js/app.js`: datos de la app, navegacion, acciones, charts y feedbacks.
- `assets/images/`: imagenes organizadas por tipo para que sea facil reemplazarlas.
- `WhatsApp Index.html`: redireccion de compatibilidad hacia `index.html`.

## Como abrirlo localmente

Al ser una app estatica, alcanza con abrir `index.html` o levantar un servidor simple.

Ejemplo:

```bash
python3 -m http.server 4173
```

Despues abrir:

```text
http://127.0.0.1:4173/
```

## Sugerencia para GitHub

Si la vas a publicar con GitHub Pages, subi esta carpeta tal como esta y usa `index.html` como entrada principal.
