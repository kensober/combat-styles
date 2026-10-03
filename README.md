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
- Componente reutilizable `components/character-card`, con una entrada `data` que contiene id, nombre, imagen y descripción.
- Tarjetas con `mat-card`, `mat-card-header` y `mat-card-content`, con la imagen en el encabezado y el título y la descripción en el contenido.
- Tarjetas de 400 × 400 px, imágenes circulares de 150 × 150 px y listado con Flexbox adaptable al ancho de pantalla.
- Se conservan los cinco personajes del repositorio base, incluidos los JSON de Tanjiro y Nezuko indicados en la tarea. Los datos son locales; las imágenes se cargan desde sus URLs originales.

## Comprobaciones

```bash
npm run build
npm test -- --watch=false --browsers=ChromeHeadless
```

## Modelo y variantes

`CharacterModel` contiene únicamente `id`, `name`, `description` e `img`. La página `/dbz` convierte los datos de Goku y Vegeta con `getCharacterModel()` y `getDbzCharacterList()`.

En `/demon-slayer`, el selector **Estilo de imagen** permite elegir **Imagen ancha** (`image-filled`) o **Imagen redonda** (`image-rounded`). La elección actualiza todas las tarjetas de esa página.

En `/dbz` se muestra `PrimaryCharacterCard`: una tarjeta naranja de 400 × 400 px con la imagen de Goku y el texto «Progra WEB V2» proyectado mediante `<ng-content>`. Las tarjetas de Goku y Vegeta usan `CharacterCardType.FILLED` y proyectan «Progra WEB v1».
