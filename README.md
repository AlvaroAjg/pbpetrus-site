# Pbpetrus - Portafolio de Ilustración

Este es el repositorio del portafolio profesional de **Pedro (Pbpetrus)**, ilustrador y artista visual. El proyecto está diseñado para ser rápido, responsivo y destacar el trabajo artístico a través de un diseño oscuro elegante, minimalista y con efectos modernos.

## Tecnologías Utilizadas

- **[Astro](https://astro.build/)**: Framework principal para generar un sitio estático súper rápido.
- **[Tailwind CSS](https://tailwindcss.com/)**: Para la maquetación responsiva, paleta de colores y efectos visuales avanzados (como el Glassmorphism).
- **JavaScript (Vanilla)**: Implementado para animaciones fluidas al hacer scroll mediante la API de `IntersectionObserver`.

---

## Lo que ya llevamos construido (Completado)

### 1. Navegación Global (`Nav.astro`)

- Menú completamente responsivo (adaptable dinámicamente a celulares, tablets y monitores).
- Efecto _Glassmorphism_ (cristal ahumado oscuro) en botones y redes sociales que garantiza que los textos siempre se lean bien, sin importar qué ilustración de fondo se coloque.
- Botones de contacto configurados:
  - Redirección a Instagram y Behance (con sus logos oficiales actualizados).
  - Enlace de correo que redirige directamente a la plataforma web de Gmail listo para redactar.

### 2. Página de Inicio (`index.astro`)

- Sección principal (Hero) de pantalla completa (`min-h-screen`) con la ilustración a tinta de fondo.
- Gradientes oscuros controlados en la parte superior para maximizar el contraste y legibilidad del menú.

### 3. Galería de Trabajos (`Gallery.astro`)

- Sistema de columnas asimétricas (estilo _Masonry_) que se adapta de 1 columna en celulares a 3 en computadoras.
- Animaciones de revelado suave al hacer scroll.
- Efecto de zoom (`scale`) al pasar el cursor sobre las imágenes.
- Solución de diseño para evitar _pixelado/banding_ mediante un degradado corto de negro a gris oscuro (`#121212`).

### 4. Sección Sobre Mí (`sobre-mi.astro` & `About.astro`)

- Estructura limpia sobre un fondo negro puro (`bg-black`) para eliminar ruidos visuales.
- Uso de tarjetas flotantes translúcidas para el texto.
- Implementación de la foto de perfil en formato _paper cutout_ ajustada correctamente para retratos (`aspect-[4/5]`).

---

## Lo que falta por hacer (To-Do)

- [ ] **Integrar fotos reales a la Galería:** Reemplazar el arreglo de imágenes de prueba (`placeholderImages` extraídas de Unsplash/Picsum) por los enlaces a las obras finales de ilustración y diseño de Pedro guardadas en la carpeta `/public`.
- [ ] **Añadir información real:** Reemplazar los párrafos descriptivos actuales en el componente `About.astro` por la biografía oficial e historia de Pedro.
- [ ] _(Opcional)_: Ajustar metadatos (título y descripción) en las etiquetas `<head>` para mejorar el SEO una vez que el contenido esté al 100%.

---
