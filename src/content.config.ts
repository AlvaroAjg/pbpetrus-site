import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // <-- Importamos el nuevo loader

// Definimos la forma de los datos
const obrasCollection = defineCollection({
  // Le decimos a Astro que busque todos los archivos .json en la carpeta de obras
  loader: glob({ pattern: "**/*.json", base: "./src/content/obras" }),
  
  schema: z.object({
    title: z.string().optional(),
    image: z.string(),
    isFeatured: z.boolean().default(false),
  }),
});

// Exportamos la colección
export const collections = {
  'obras': obrasCollection,
};