import { config, fields, collection } from '@keystatic/core';

export default config({
  // 1. MODO LOCAL: Los datos se guardarán en tu compu por ahora
  storage: {
    kind: 'local',
  },
  // 2. LAS COLECCIONES: Aquí definimos la galería
  collections: {
    obras: collection({
      label: 'Obras y Trabajos',
      slugField: 'title',
      path: 'src/content/obras/*', // Aquí se crearán los archivos de datos
      format: { data: 'json' }, // Guardaremos todo en formato JSON
      schema: {
        title: fields.slug({ 
          name: { label: 'Título de la ilustración' } 
        }),
        image: fields.image({
          label: 'Imagen de la obra',
          directory: 'public/obras', // La carpeta donde se guardarán los JPG/PNG
          publicPath: '/obras/'      // La ruta pública para leerlas en la web
        }),
        isFeatured: fields.checkbox({
          label: '¿Es una obra destacada?',
          description: 'Si marcas esto, la imagen aparecerá en tamaño grande en la parte superior de la galería (necesita tener título).',
          defaultValue: false,
        }),
      },
    }),
  },
});