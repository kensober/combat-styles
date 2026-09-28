# Angular REST API App — Demon Slayer

Proyecto basado en https://github.com/ramirezmorelio/angular-rest-api-app.

## Ejecutar

```bash
npm ci
npm start -- --open
```

Abre `/demon-slayer`. La raíz también redirige a esa página.

## Tarea

- Angular 20 y Angular Material/CDK 20, ya incluidos en el repositorio base.
- Página `pages/demon-slayer-characters-list`.
- Componente reutilizable `components/character-card`, con entradas de id, nombre, imagen y descripción.
- Tarjetas con `mat-card`, `mat-card-header`, `mat-card-title`, `mat-card-content` y `mat-card-image`.
- Tarjetas de 400 × 400 px, imágenes circulares de 150 × 150 px y listado con Flexbox adaptable al ancho de pantalla.
- Se conservan los cinco personajes del repositorio base, incluidos los JSON de Tanjiro y Nezuko indicados en la tarea. Los datos son locales; las imágenes se cargan desde sus URLs originales.

## Comprobaciones

```bash
npm run build
npm test -- --watch=false --browsers=ChromeHeadless
```
