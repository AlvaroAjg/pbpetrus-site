import { config, fields, collection } from '@keystatic/core';

export default config({
 
  storage: {
  
      kind: import.meta.env.PROD ? 'github' : 'local',
  
      repo: 'AlvaroAjg/pbpetrus-site', 
},
  
  collections: {
    obras: collection({
      label: 'Obras y Trabajos',
      slugField: 'title',
      path: 'src/content/obras/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ 
          name: { label: 'Título de la ilustración' } 
        }),
        image: fields.image({
          label: 'Imagen de la obra',
          directory: 'public/obras', 
          publicPath: '/obras/'      
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