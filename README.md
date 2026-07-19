#  Portafolio de Ilustración de Alto Rendimiento

Una plataforma web rápida, escalable y autogestionable construida para exhibir arte e ilustraciones. Diseñada con un enfoque en la experiencia de usuario (UI/UX) y respaldada por una arquitectura moderna orientada al rendimiento y la autonomía del cliente.

##  Tecnologías Utilizadas (Tech Stack)

* **Framework Frontend:** [Astro](https://astro.build/) - Elegido por su entrega de HTML estático ultra rápido y su filosofía de "Cero JavaScript por defecto".
* **Estilos:** [Tailwind CSS](https://tailwindcss.com/) - Para un diseño responsive, utility-first y la implementación de efectos complejos como *Glassmorphism*.
* **Gestor de Contenidos (CMS):** [Keystatic](https://keystatic.com/) - Un CMS basado en Git (Local/Nube) que permite gestionar el portafolio sin necesidad de bases de datos externas.
* **Pipeline CI/CD:** GitHub Actions.
* **Despliegue (Hosting):** Vercel.

##  Características Principales (Features)

### 1. Interfaz y Experiencia de Usuario (UI/UX)
* **Estética Dark/Premium:** Paleta de colores oscuros con acentos en rojo, texturas de ruido y efectos *Glassmorphism* (desenfoques de fondo) en la navegación y modales.
* **Galería Híbrida (Masonry Layout):** Sistema de columnas CSS avanzado que adapta las imágenes sin recortarlas. Incluye un sistema de jerarquía que destaca automáticamente las obras principales.
* **Visor Interactivo:** Modal de alta velocidad construido con JavaScript vanilla para visualizar las obras a pantalla completa, optimizado con eventos de teclado (`Escape`) y clics fuera del contenedor.

### 2. Autogestión de Contenido (CMS)
* Integración total con **Keystatic**, permitiendo al propietario del portafolio agregar, editar o eliminar ilustraciones de forma autónoma.
* Las actualizaciones de contenido generan archivos `.json` automáticamente y empujan los cambios al repositorio, desencadenando despliegues automáticos.
* Sistema de "Obras Destacadas" gestionable a través de un simple *checkbox* en el panel de control.

### 3. Prácticas DevOps y Despliegue
* **Integración Continua (CI):** Configuración de un pipeline en GitHub Actions (`ci.yml`) que verifica la integridad del build de Astro en entornos Linux con Node.js 20.x antes de cada integración a la rama principal.
* **Despliegue Continuo (CD):** Integración nativa con Vercel para pases a producción automáticos sin intervención manual.
