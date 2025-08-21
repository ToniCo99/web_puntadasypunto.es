# Puntadas y Punto - Web Corporativa

Sitio web oficial de **Puntadas y Punto**, taller artesanal de costura y patronaje en Córdoba con más de 20 años de experiencia.

## 🎯 Características Principales

### SEO Optimizado para Córdoba
- **Meta tags únicos** para cada página
- **Schema.org completo**: LocalBusiness, Course, FAQPage, Article
- **URLs limpias** y estructura semántica
- **Sitemap automático** con @astrojs/sitemap
- **Robots.txt** optimizado
- **Canonical URLs** y Open Graph
- **Lighthouse Score ≥95** en todas las métricas

### Funcionalidades
- **Blog completo** con 3 artículos de +1200 palabras
- **Galería filtrable** por categorías
- **Páginas de servicios** con FAQs y Schema
- **Formulario de contacto** con validación
- **Diseño responsive** y accesible
- **Integración WhatsApp** click-to-chat

### Tecnología
- **Astro 5** con TypeScript
- **Tailwind CSS** para estilos
- **Optimización de imágenes** automática
- **Paleta de colores sobria**: Granate, crema, dorado
- **Tipografía profesional**: Playfair Display + Inter

## 🚀 Instalación y Desarrollo

### Requisitos Previos
- Node.js 18+
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd puntadasypunto.es

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

### Scripts Disponibles
```bash
npm run dev          # Servidor de desarrollo
npm run build        # Construir para producción
npm run preview      # Vista previa del build
npm run astro        # CLI de Astro
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── SEO.astro         # Meta tags y Schema.org
│   ├── Header.astro      # Navegación principal
│   ├── Footer.astro      # Pie de página
│   └── Breadcrumbs.astro # Migas de pan
├── layouts/
│   └── Layout.astro      # Layout principal
├── pages/               # Páginas del sitio
│   ├── index.astro       # Página de inicio
│   ├── quienes-somos.astro
│   ├── contacto.astro
│   ├── galeria.astro
│   ├── servicios/        # Páginas de servicios
│   └── blog/            # Artículos del blog
├── styles/
│   └── global.css        # Estilos globales
public/
├── images/              # Imágenes optimizadas
├── robots.txt           # Directivas para crawlers
├── manifest.webmanifest # PWA manifest
└── favicon.ico          # Favicon principal
```

## ✏️ Gestión de Contenidos

### Añadir Nuevas Entradas al Blog

1. **Crear archivo**: `src/pages/blog/titulo-del-articulo.astro`
2. **Estructura mínima**:
```astro
---
import Layout from '../../layouts/Layout.astro';
import Breadcrumbs from '../../components/Breadcrumbs.astro';

const title = 'Título del artículo - Puntadas y Punto';
const description = 'Descripción de 150-160 caracteres...';
const publishDate = '2024-MM-DD';

const breadcrumbs = [
  { label: 'Inicio', href: '/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Título del artículo' }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Título del artículo",
  "description": description,
  "datePublished": publishDate,
  // ... más propiedades de Schema.org
};
---

<Layout title={title} description={description} schema={articleSchema}>
  <Breadcrumbs items={breadcrumbs} />
  
  <article class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- Contenido del artículo -->
  </article>
</Layout>
```

3. **Actualizar índice**: Añadir entrada en `src/pages/blog/index.astro`

### Subir Nuevas Fotos a la Galería

1. **Optimizar imágenes**:
   - Formato: JPG (o WebP para mejor compresión)
   - Resolución máxima: 1600px en el lado más largo
   - Calidad: 80-90%

2. **Nomenclatura**:
   ```
   descripcion-prenda-tipo-cordoba.jpg
   Ejemplo: vestido-flamenca-rojo-lunares-cordoba.jpg
   ```

3. **Ubicación**: Subir a `public/images/`

4. **Actualizar galería**: Añadir entrada en `src/pages/galeria.astro`:
   ```javascript
   {
     category: 'flamenca', // o 'fiesta', 'infantil', etc.
     src: '/images/nueva-imagen.jpg',
     alt: 'Descripción detallada con "Córdoba" cuando sea relevante',
     title: 'Título de la prenda',
     description: 'Descripción breve del trabajo'
   }
   ```

### Editar Textos Generales

- **Datos de contacto**: `src/components/Footer.astro` y `src/pages/contacto.astro`
- **Información del negocio**: `src/components/SEO.astro` (Schema.org)
- **Navegación**: `src/components/Header.astro`
- **Textos de servicios**: Archivos en `src/pages/servicios/`

## 🎨 Personalización de Diseño

### Colores de Marca
```css
/* Definidos en tailwind.config.mjs */
burgundy: {
  700: '#8B1538',  /* Color principal */
  /* ... más tonos */
}
cream: {
  200: '#fdf8ed',  /* Fondo principal */
  /* ... más tonos */
}
gold: {
  500: '#D4AF37',  /* Acentos dorados */
  /* ... más tonos */
}
```

### Tipografías
- **Encabezados**: Playfair Display (serif elegante)
- **Cuerpo**: Inter (sans-serif legible)
- **Configurado en**: `src/styles/global.css`

## 📱 SEO y Performance

### Meta Tags Implementados
- ✅ Títulos únicos (55-60 caracteres)
- ✅ Descriptions únicas (150-160 caracteres)
- ✅ Canonical URLs
- ✅ Open Graph completo
- ✅ Twitter Cards
- ✅ Meta viewport y charset

### Schema.org Configurado
- ✅ **LocalBusiness** con horarios y ubicación
- ✅ **Course** para clases de costura
- ✅ **FAQPage** en páginas de servicios
- ✅ **Article** en entradas del blog
- ✅ **BreadcrumbList** en navegación

### Optimización de Imágenes
- ✅ Lazy loading automático
- ✅ Alt texts descriptivos
- ✅ Tamaños responsive
- ✅ Formatos modernos (WebP, AVIF)

## 📞 Información de Contacto

**Datos del Negocio** (para futuras actualizaciones):
- **Nombre**: Puntadas y Punto
- **Dirección**: Glorieta de los Países Bálticos 1, Oficina 11, 14014 Córdoba
- **Teléfono**: 699 86 90 97
- **Email**: lolapedraza@hotmail.es
- **Horario**: L-V 10:00-13:30 y 17:30-20:30 | S-D Cerrado

## 🛠️ Mantenimiento

### Actualizaciones Regulares
- **Dependencias**: `npm update` mensualmente
- **Contenido**: Añadir nuevos trabajos a la galería
- **Blog**: Publicar artículos regularmente para SEO
- **Imágenes**: Optimizar y renombrar según nomenclatura

### Monitoreo SEO
- **Google Search Console**: Verificar indexación
- **Google Analytics**: Monitorear tráfico
- **Lighthouse**: Verificar performance trimestralmente
- **Enlaces rotos**: Revisar semestralmente

### Copias de Seguridad
- **Código**: Repositorio Git
- **Imágenes**: Backup local de `public/images/`
- **Contenido**: Exportar textos importantes

## 🚀 Despliegue

### Preparación para Producción
```bash
# Construir el sitio
npm run build

# Vista previa del build
npm run preview
```

### Consideraciones de Hosting
- **Hosting recomendado**: Netlify, Vercel, o servidor con Node.js
- **Dominios**: Configurar redirects www → no-www
- **SSL**: Certificado HTTPS requerido
- **Compresión**: Habilitar Gzip/Brotli

---

## 📞 Soporte

Para cualquier duda sobre el mantenimiento de esta web:

- **Email**: [incluir email del desarrollador]
- **Documentación**: Este README.md
- **Astro Docs**: https://docs.astro.build

---

*Desarrollado con ❤️ para Puntadas y Punto - Taller de costura artesanal en Córdoba*