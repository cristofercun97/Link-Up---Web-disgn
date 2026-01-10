# LINK UP - Landing Page

Landing page oficial de LINK UP, plataforma de cupones de descuento con sistema de referidos.

## 🎯 Objetivo

Explicar LINK UP de forma clara usando el marco SER-HACER-TENER:
- **QUÉ (SER)**: Qué es LINK UP
- **PARA QUÉ (HACER)**: Qué problema resuelve
- **CÓMO (TENER)**: Qué obtiene el usuario y cómo entra

## 🚀 Stack Técnico

- HTML5 semántico
- CSS3 con variables personalizadas
- JavaScript vanilla (mínimo)
- Sin frameworks externos
- Mobile-first design

## 📁 Estructura de Archivos

```
web-linkup/
├── index.html          # Página principal
├── styles.css          # Estilos completos
├── assets/             # Recursos visuales
│   └── README.md       # Guía de assets
└── README.md           # Este archivo
```

## 🎨 Sistema de Diseño

### Colores

```css
--color-primary: #822c3e;          /* Primario (headers, footer) */
--color-secondary: #ffb302;         /* Secundario (botones, highlights) */
--color-secondary-gradient: linear-gradient(90deg, #ffb302, #f5e024);
--color-dark: #1a1a1a;             /* Texto principal */
--color-light: #ffffff;             /* Fondos claros */
--color-muted: #f7f7f7;            /* Fondos suaves */
```

### Tipografías

- **Poppins** (700, 600): Títulos (H1-H4)
- **Inter** (400, 500, 600): Textos, botones, párrafos

Importadas desde Google Fonts para máxima compatibilidad.

## 📐 Secciones

1. **Hero (SER)**: Mensaje principal con CTAs claros
2. **Problema (HACER)**: Explica el problema que resuelve LINK UP
3. **Beneficios (HACER)**: 3 beneficios clave + cómo unirse
4. **Resultados (TENER)**: Lo que obtiene el usuario
5. **CTA Fuerte**: Llamado a la acción destacado
6. **Sobre Nosotros (SER)**: Valores y misión
7. **FAQs**: Preguntas frecuentes con `<details>`
8. **Footer**: Legal, redes sociales, copyright

## 📱 Responsive

- **Mobile-first approach**
- Breakpoints:
  - `768px`: Tablets
  - `1024px`: Desktop

## ✅ Características

- ✅ HTML semántico
- ✅ Accesibilidad básica (ARIA labels)
- ✅ Performance optimizada
- ✅ Código comentado
- ✅ Sin dependencias externas
- ✅ SEO-friendly
- ✅ Sin promesas de ingresos garantizados
- ✅ Lenguaje transparente (no MLM agresivo)

## 🚀 Uso

### Desarrollo Local

1. Abre `index.html` en tu navegador:
```bash
open index.html
```

O usa un servidor local:
```bash
# Con Python 3
python3 -m http.server 8000

# Con Node.js (http-server)
npx http-server
```

2. Visita: `http://localhost:8000`

### Producción

1. **Optimizar imágenes**: Coloca imágenes optimizadas en `/assets`
2. **Minificar CSS**: Usa herramientas como cssnano o online minifiers
3. **Configurar meta tags**: Ajusta OG tags y Twitter Cards en `index.html`
4. **Subir a hosting**: Compatible con cualquier hosting estático (Netlify, Vercel, GitHub Pages)

## 🎯 Checklist Pre-Producción

- [ ] Reemplazar enlaces placeholder de redes sociales
- [ ] Agregar favicon en `/assets/favicon/`
- [ ] Configurar imagen Open Graph para redes sociales
- [ ] Validar formulario de CTAs con backend real
- [ ] Configurar Google Analytics (opcional)
- [ ] Probar en múltiples navegadores
- [ ] Verificar accesibilidad con Lighthouse
- [ ] Optimizar performance (PageSpeed Insights)

## 📝 Personalización

### Cambiar colores

Edita las variables CSS en `styles.css`:

```css
:root {
    --color-primary: #TU_COLOR;
    --color-secondary: #TU_COLOR;
}
```

### Modificar contenido

Todo el contenido está en `index.html`. Busca las secciones comentadas:

```html
<!-- ========================= 
     SECCIÓN X: NOMBRE
========================= -->
```

### Agregar animaciones (opcional)

El CSS incluye transiciones básicas. Para animaciones más complejas:
1. Mantén el peso bajo
2. Usa `transform` y `opacity` (mejor performance)
3. Considera `prefers-reduced-motion`

## 🔒 Restricciones

**PROHIBIDO**:
- ❌ Prometer ingresos garantizados
- ❌ Lenguaje MLM agresivo
- ❌ Popups intrusivos
- ❌ Animaciones pesadas
- ❌ Dependencias innecesarias

**OBLIGATORIO**:
- ✅ HTML semántico
- ✅ Buen contraste de colores
- ✅ Accesibilidad básica
- ✅ Código comentado
- ✅ Performance rápida

## 🧪 Testing

### Compatibilidad de navegadores

Probado en:
- Chrome/Edge (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- iOS Safari
- Chrome Android

### Herramientas recomendadas

- [Lighthouse](https://developers.google.com/web/tools/lighthouse): Performance y accesibilidad
- [WAVE](https://wave.webaim.org/): Accesibilidad
- [HTML Validator](https://validator.w3.org/): Validación HTML
- [CSS Validator](https://jigsaw.w3.org/css-validator/): Validación CSS

## 📄 Licencia

© 2026 LINK UP. Todos los derechos reservados.

## 🤝 Contribuciones

Para mejoras o sugerencias:
1. Mantén el código limpio y comentado
2. Respeta el sistema de diseño establecido
3. Prioriza performance y accesibilidad
4. Documenta cambios significativos

---

**Versión**: 1.0.0  
**Última actualización**: Enero 2026  
**Desarrollado con**: ❤️ por el equipo LINK UP
