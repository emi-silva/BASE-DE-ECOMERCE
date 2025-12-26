# Ecommerce Frontend

Frontend de la plataforma de ecommerce construido con React y Vite.

## Requisitos

- Node.js 16+

## Instalación

```bash
cd frontend
npm install
```

## Ejecutar

```bash
npm run dev    # Desarrollo (http://localhost:3000)
npm run build  # Build para producción
npm run preview # Preview del build
```

## Características

- 🛍️ Catálogo de productos
- 🛒 Carrito de compras
- 👤 Autenticación de usuarios
- 📱 Diseño responsivo
- ⚡ Rápido con Vite

## Estructura

```
frontend/
├── src/
│   ├── components/     # Componentes reutilizables
│   ├── pages/          # Páginas de la aplicación
│   ├── context/        # Context API (Auth, Cart)
│   ├── services/       # Servicios API
│   ├── styles/         # Estilos CSS
│   ├── App.jsx         # Componente principal
│   └── main.jsx        # Punto de entrada
├── public/             # Archivos estáticos
├── index.html
├── package.json
└── vite.config.js
```

## Variables de entorno

Crear archivo `.env` (opcional):

```
VITE_API_URL=http://localhost:5000/api
```
