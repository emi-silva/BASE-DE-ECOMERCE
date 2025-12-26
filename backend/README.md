# Ecommerce Backend API

API REST para la plataforma de ecommerce. Proporciona endpoints para autenticación, gestión de productos, carrito y pedidos.

## Requisitos

- Node.js 16+
- MongoDB local o URL de conexión

## Instalación

```bash
cd backend
npm install
```

## Configuración

Crear archivo `.env` basado en `.env.example`:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=tu_secreto_jwt_super_seguro_aqui
NODE_ENV=development
```

## Ejecutar

```bash
npm start           # Producción
npm run dev        # Desarrollo (con nodemon)
```

## Endpoints principales

### Autenticación
- `POST /api/auth/register` - Registrar usuario
- `POST /api/auth/login` - Iniciar sesión
- `GET /api/auth/profile` - Obtener perfil (requiere token)

### Productos
- `GET /api/products` - Listar productos
- `GET /api/products/:id` - Obtener producto
- `POST /api/products` - Crear producto (requiere autenticación)
- `PUT /api/products/:id` - Actualizar producto
- `DELETE /api/products/:id` - Eliminar producto

## Estructura

```
backend/
├── src/
│   ├── config/          # Configuración (BD, JWT)
│   ├── controllers/     # Lógica de negocio
│   ├── middleware/      # Middleware (auth, etc)
│   ├── models/          # Esquemas Mongoose
│   ├── routes/          # Rutas API
│   └── index.js         # Punto de entrada
├── package.json
└── .env.example
```
