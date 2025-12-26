# ⚡ Electricidad Jet - Plataforma de Ecommerce

Tienda online especializada en productos eléctricos, desarrollada con React y Node.js. Sistema completo de comercio electrónico con catálogo de productos, carrito de compras y gestión de usuarios.

## 📋 Descripción del Proyecto

**Electricidad Jet** es una plataforma de ecommerce completa desarrollada específicamente para la venta de productos eléctricos. La tienda cuenta con un catálogo de 41 productos organizados en 5 categorías principales, precios en pesos argentinos, y un sistema de carrito de compras totalmente funcional.

### ✨ Características Implementadas

**Sistema de Productos:**
- ✅ 41 productos catalogados con precios en ARS
- ✅ 5 categorías: Iluminación (12), Cables (6), Herramientas (8), Protección (9), Energía (6)
- ✅ Descripciones detalladas de cada producto
- ✅ Control de stock en tiempo real
- ✅ Sistema de filtrado por categorías
- ✅ Identificadores únicos (compatible con productos locales y API)

**Interfaz de Usuario:**
- ✅ Diseño moderno con paleta de colores corporativa (gris acero)
- ✅ Navegación intuitiva con chips de categorías
- ✅ Tarjetas de producto uniformes con badges
- ✅ Carrito de compras persistente
- ✅ Formato de precios argentino ($5.500)
- ✅ Sistema responsivo para móviles y tablets
- ✅ Página de contacto

**Sistema Backend:**
- ✅ API REST con Express.js
- ✅ Base de datos MongoDB
- ✅ Autenticación JWT
- ✅ Modelos de datos (Usuarios, Productos, Pedidos, Carrito)
- ✅ Middleware de protección de rutas

## 🚀 Instalación y Configuración

### Requisitos Previos

- **Node.js** v16 o superior
- **MongoDB** instalado y ejecutándose
- **npm** o **yarn**

### Paso 1: Clonar el Repositorio

```bash
git clone [url-del-repositorio]
cd e-comerce-plataforma
```

### Paso 2: Configurar el Backend

```bash
cd backend
npm install

# Crear archivo de variables de entorno
cp .env.example .env
# Editar .env con tus configuraciones
```

**Configuración del archivo `.env`:**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/electricidad-jet
JWT_SECRET=tu_clave_secreta_muy_segura
NODE_ENV=development
```

**Iniciar servidor backend:**
```bash
npm run dev    # Modo desarrollo con nodemon
npm start      # Modo producción
```

El servidor estará disponible en `http://localhost:5000`

### Paso 3: Configurar el Frontend

```bash
cd frontend
npm install
```

**Iniciar aplicación React:**
```bash
npm run dev    # Servidor de desarrollo con Vite
```

La aplicación estará disponible en `http://localhost:3000`

### Instalación Automática (Windows)

```bash
install.bat
```

Este script instalará automáticamente todas las dependencias del backend y frontend.

## 📁 Estructura del Proyecto

```
e-comerce-plataforma/
│
├── backend/                    # Servidor Node.js
│   ├── src/
│   │   ├── config/            # Configuración (DB, JWT)
│   │   │   ├── database.js    # Conexión MongoDB
│   │   │   └── jwt.js         # Configuración tokens
│   │   │
│   │   ├── controllers/       # Lógica de negocio
│   │   │   ├── authController.js    # Login/Register
│   │   │   └── productController.js # CRUD productos
│   │   │
│   │   ├── middleware/        # Middlewares
│   │   │   └── auth.js        # Verificación JWT
│   │   │
│   │   ├── models/            # Esquemas Mongoose
│   │   │   ├── User.js        # Modelo de usuario
│   │   │   ├── Product.js     # Modelo de producto
│   │   │   ├── Order.js       # Modelo de pedido
│   │   │   └── Cart.js        # Modelo de carrito
│   │   │
│   │   ├── routes/            # Definición de rutas
│   │   │   ├── auth.js        # Rutas autenticación
│   │   │   └── products.js    # Rutas productos
│   │   │
│   │   └── index.js           # Punto de entrada
│   │
│   ├── .env.example           # Template variables entorno
│   └── package.json           # Dependencias backend
│
├── frontend/                  # Aplicación React
│   ├── src/
│   │   ├── components/        # Componentes reutilizables
│   │   │   ├── Header.jsx           # Navegación principal
│   │   │   ├── Footer.jsx           # Pie de página
│   │   │   ├── ProductCard.jsx      # Tarjeta de producto
│   │   │   └── ProductPlaceholder.jsx # Espacio vacío
│   │   │
│   │   ├── pages/             # Páginas principales
│   │   │   ├── HomePage.jsx         # Página inicio
│   │   │   ├── ProductsPage.jsx     # Catálogo (41 productos)
│   │   │   ├── CartPage.jsx         # Carrito de compras
│   │   │   ├── LoginPage.jsx        # Inicio de sesión
│   │   │   ├── RegisterPage.jsx     # Registro
│   │   │   ├── ProfilePage.jsx      # Perfil usuario
│   │   │   └── ContactPage.jsx      # Contacto
│   │   │
│   │   ├── context/           # Gestión de estado global
│   │   │   ├── AuthContext.jsx      # Estado autenticación
│   │   │   └── CartContext.jsx      # Estado carrito
│   │   │
│   │   ├── services/          # Servicios API
│   │   │   ├── api.js              # Cliente Axios configurado
│   │   │   ├── authService.js      # Servicios auth
│   │   │   └── productService.js   # Servicios productos
│   │   │
│   │   ├── styles/            # Estilos CSS modulares
│   │   │   ├── index.css           # Estilos globales
│   │   │   ├── header.css          # Header
│   │   │   ├── footer.css          # Footer
│   │   │   ├── products.css        # Grid productos
│   │   │   ├── productCard.css     # Tarjetas
│   │   │   ├── cart.css            # Carrito
│   │   │   └── contact.css         # Contacto
│   │   │
│   │   ├── App.jsx            # Componente raíz
│   │   └── main.jsx           # Punto de entrada
│   │
│   ├── public/                # Recursos estáticos
│   ├── index.html             # HTML base
│   ├── vite.config.js         # Configuración Vite
│   └── package.json           # Dependencias frontend
│
├── shared/                    # Código compartido
├── README.md                  # Este archivo
├── LICENSE                    # Licencia MIT
└── .gitignore                 # Archivos ignorados
```

## 🛍️ Catálogo de Productos

### 💡 Iluminación (12 productos)

| Producto | Precio | Descripción |
|----------|--------|-------------|
| Lámpara LED 6W | $5.500 | Ideal para ambientes pequeños. Base E27 |
| Lámpara LED 9W | $8.200 | Perfecta para dormitorios y salas |
| Lámpara LED 11W | $9.000 | Mayor luminosidad para cocinas |
| Lámpara LED 15W | $11.000 | Potente iluminación para espacios amplios |
| Lámpara LED 20W | $13.800 | Alta potencia para comercios |
| Aplique LED Redondo | $18.000 | Diseño moderno circular |
| Aplique LED Cuadrado | $19.500 | Estilo minimalista |
| Luz Emergencia 35 LEDs | $26.500 | Batería recargable, 8 horas |
| Luz Emergencia 60 LEDs | $34.900 | Mayor capacidad para comercios |
| Tubo LED 1.20m 18W | $22.000 | Reemplazo tubos fluorescentes |
| Luz Bajo Mesada 5W | $12.500 | Compacta para cocinas |
| Reflector LED 50W | $41.900 | Exterior, resistente al agua IP65 |

### 🔌 Cables (6 productos)

| Producto | Precio | Descripción |
|----------|--------|-------------|
| Cable Unipolar 2.5mm | $1.650/m | Flexible, instalaciones domiciliarias |
| Cable Unipolar 4mm | $2.500/m | Alta carga, circuitos potentes |
| Cable Taller 3x1.5mm | $3.500/m | Triple conductor, uso general |
| Cable Taller 3x2.5mm | $5.300/m | Mayor potencia, maquinaria |
| Cable Subterráneo 3x2.5mm | $6.300/m | Instalación enterrada |
| Cable Coaxil RG6 | $1.200/m | TV y datos, alta calidad |

### 🔧 Herramientas (8 productos)

| Producto | Precio | Descripción |
|----------|--------|-------------|
| Destornillador Buscapolos | $3.500 | Detector de tensión esencial |
| Pinza Amperométrica Digital | $64.000 | Mide corriente hasta 600A |
| Pelacables Automático | $12.500 | Ajuste automático, alta precisión |
| Multímetro Digital | $26.500 | Voltaje, corriente y resistencia |
| Pinza Electricista 8" | $17.500 | Corta y crimpa terminales |
| Cinta Aisladora 3M | $9.800 | Pack x10, profesional |
| Crimpadora RJ45/RJ11 | $22.300 | Conectores de red |
| Kit Destornilladores Precisión | $13.900 | 6 piezas, puntas magnéticas |

### 🛡️ Protección (9 productos)

| Producto | Precio | Descripción |
|----------|--------|-------------|
| Disyuntor Diferencial 25A | $50.200 | 30mA sensibilidad, bipolar 220V |
| Llave Termomagnética 10A | $11.800 | Unipolar, Curva C |
| Llave Termomagnética 20A | $18.100 | Bipolar, mayor consumo |
| Protector de Tensión | $32.000 | Protege electrodomésticos |
| Tablero Embutir 12 Módulos | $25.800 | Gabinete plástico con riel DIN |
| Jabalina Cobre 1.5m | $20.900 | Puesta a tierra profesional |
| Fusible Cerámico 10A | $6.300 | Pack x10, 250V |
| Interruptor Diferencial 40A | $68.500 | Tripolar para instalaciones grandes |
| Bornera Tierra 12 Polos | $11.100 | Soporte DIN, tornillos latón |

### ⚡ Energía (6 productos)

| Producto | Precio | Descripción |
|----------|--------|-------------|
| Estabilizador Tensión 1000W | $74.000 | Regula voltaje, 4 tomas |
| UPS 650VA | $125.800 | Respaldo 15 minutos |
| Zapatilla Eléctrica 6 Tomas | $13.900 | Con interruptor, cable 1.5m |
| Generador Portátil 2000W | $539.000 | Motor 4 tiempos, silencioso |
| Cargador USB Doble | $9.100 | Carga rápida 2.4A |
| Batería 12V 7Ah | $40.500 | Para alarmas y UPS |

## 🔌 API REST - Endpoints

### Autenticación

```http
POST /api/auth/register
```
Registrar nuevo usuario
```json
{
  "name": "Juan Pérez",
  "email": "juan@ejemplo.com",
  "password": "contraseña123"
}
```

```http
POST /api/auth/login
```
Iniciar sesión
```json
{
  "email": "juan@ejemplo.com",
  "password": "contraseña123"
}
```

```http
GET /api/auth/profile
```
Obtener perfil del usuario autenticado (requiere token JWT)

### Productos

```http
GET /api/products
```
Obtener lista de productos
- Query params: `?category=iluminacion&limit=20&page=1&search=led`

```http
GET /api/products/:id
```
Obtener producto específico por ID

```http
POST /api/products
```
Crear nuevo producto (requiere autenticación)
```json
{
  "name": "Producto Nuevo",
  "description": "Descripción del producto",
  "price": 15000,
  "stock": 50,
  "category": "iluminacion",
  "image": "url-imagen.jpg"
}
```

```http
PUT /api/products/:id
```
Actualizar producto (requiere autenticación)

```http
DELETE /api/products/:id
```
Eliminar producto (requiere autenticación)

## 🎨 Diseño y Estilos

### Paleta de Colores

- **Principal:** Gris Acero `#e8eef5` (Header/Footer)
- **Acento:** Azul `#0066cc`, `#007bff` (Links, badges)
- **Éxito:** Verde `#10b981` (Botones agregar)
- **Texto:** Negro `#000`, Gris oscuro `#333`
- **Bordes:** Gris claro `#e5e7eb`

### Componentes Clave

**Header:**
- Tres secciones: Marca (izq), Navegación (centro), Acciones (der)
- Navegación centrada con links negros
- Botones de login/registro en gris

**ProductCard:**
- Contenedor de imagen fijo 220px
- Badge de categoría en esquina superior
- Precio en formato argentino ($5.500)
- Botón verde "Agregar al carrito"
- Warning de stock bajo (≤5 unidades)

**Carrito:**
- Controles de cantidad (+/-)
- Cálculo automático de totales
- Envío fijo: $7.000
- Formato de precios consistente

## 🛠️ Tecnologías Utilizadas

### Backend
- **Node.js** v16+ - Entorno de ejecución
- **Express.js** 4.18.2 - Framework web
- **MongoDB** - Base de datos NoSQL
- **Mongoose** 7.5.0 - ODM para MongoDB
- **JWT** 9.0.2 - Autenticación con tokens
- **bcryptjs** - Encriptación de contraseñas
- **CORS** - Control de acceso entre orígenes
- **dotenv** - Variables de entorno
- **nodemon** - Desarrollo en caliente

### Frontend
- **React** 18.2.0 - Librería UI
- **Vite** 5.0.0 - Build tool ultrarrápido
- **React Router** 6.20.0 - Enrutamiento SPA
- **Axios** 1.6.0 - Cliente HTTP
- **Context API** - Gestión de estado global
- **CSS3** - Estilos modulares

## 💾 Modelos de Datos

### User (Usuario)
```javascript
{
  name: String,              // Nombre completo
  email: String (único),     // Email único
  password: String,          // Contraseña encriptada (bcrypt)
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String
  },
  createdAt: Date           // Fecha de registro
}
```

### Product (Producto)
```javascript
{
  id: String,               // ID único (local o _id de MongoDB)
  name: String,             // Nombre del producto
  description: String,      // Descripción detallada
  price: Number,            // Precio en ARS (número entero)
  stock: Number,            // Cantidad disponible
  category: String,         // iluminacion|cables|herramientas|proteccion|energia
  image: String,            // URL de imagen (opcional)
  rating: Number,           // Calificación 0-5
  createdAt: Date          // Fecha de creación
}
```

### Order (Pedido)
```javascript
{
  userId: ObjectId,         // Referencia a User
  items: [
    {
      productId: ObjectId,  // Referencia a Product
      quantity: Number,     // Cantidad ordenada
      price: Number         // Precio al momento de compra
    }
  ],
  totalAmount: Number,      // Total del pedido
  status: String,           // pendiente|confirmado|enviado|entregado|cancelado
  shippingAddress: {
    street, city, state, zipCode, country
  },
  createdAt: Date,
  updatedAt: Date
}
```

### Cart (Carrito)
```javascript
{
  userId: ObjectId,         // Referencia a User
  items: [
    {
      productId: ObjectId,  // Referencia a Product
      quantity: Number,     // Cantidad en carrito
      addedAt: Date        // Fecha agregado
    }
  ],
  updatedAt: Date          // Última modificación
}
```

## 🔐 Sistema de Autenticación

### Flujo de Autenticación

1. **Registro:**
   - Usuario envía datos (nombre, email, password)
   - Backend valida y encripta contraseña con bcrypt
   - Guarda usuario en MongoDB
   - Retorna token JWT válido por 7 días

2. **Login:**
   - Usuario envía credenciales
   - Backend verifica contraseña
   - Genera y retorna token JWT

3. **Uso del Token:**
   - Frontend guarda token en `localStorage`
   - Incluye token en header: `Authorization: Bearer <token>`
   - Backend valida token en cada petición protegida

4. **Middleware de Protección:**
   ```javascript
   // Valida token antes de acceder a rutas protegidas
   authMiddleware verifica:
   - Presencia del token
   - Validez del token
   - Extrae userId del payload
   ```

### Rutas Protegidas

- `POST /api/products` - Crear producto
- `PUT /api/products/:id` - Editar producto
- `DELETE /api/products/:id` - Eliminar producto
- `GET /api/auth/profile` - Ver perfil
- Futuras: Gestión de pedidos, carrito persistente

## 🛒 Sistema de Carrito

### Características del Carrito

**Context API (CartContext):**
- Estado global del carrito
- Persistencia en memoria durante sesión
- Funciones: `addToCart`, `removeFromCart`, `updateQuantity`, `clearCart`
- Cálculo automático de totales

**Compatibilidad de IDs:**
- Productos locales usan `id` (ejemplo: "luz-001")
- Productos de API usan `_id` (ObjectId de MongoDB)
- Sistema unificado maneja ambos automáticamente

**Funcionalidades:**
- Agregar productos desde catálogo
- Modificar cantidades (+/-)
- Eliminar productos individuales
- Limpiar carrito completo
- Cálculo de subtotal
- Envío fijo de $7.000
- Total con envío incluido

**Formato de Precios:**
- Utiliza `toLocaleString('es-AR')` para formato argentino
- Ejemplo: 5500 → "$5.500"
- Consistente en toda la aplicación

## 📱 Páginas y Funcionalidades

### 🏠 Página de Inicio (HomePage)
- Hero con bienvenida a "Electricidad Jet"
- Descripción de la tienda (3 años en el mercado)
- Botón "Ver productos" → redirige al catálogo
- Secciones de características destacadas

### 🛍️ Página de Productos (ProductsPage)
- **Filtros:** Chips de categorías (Todo, Iluminación, Cables, Herramientas, Protección, Energía)
- **Grid Responsivo:** Auto-fill con mínimo 280px por columna
- **41 Productos Hardcodeados:**
  - 12 Iluminación (IDs: luz-001 a luz-012)
  - 6 Cables (IDs: cable-001 a cable-006)
  - 8 Herramientas (IDs: herr-001 a herr-008)
  - 9 Protección (IDs: prot-001 a prot-009)
  - 6 Energía (IDs: energ-001 a energ-006)
- **ProductPlaceholder:** Espacios vacíos para futuros productos
- **Integración API:** Combina productos locales con productos de base de datos

### 🛒 Página de Carrito (CartPage)
- Lista de productos agregados
- Controles de cantidad por producto
- Cálculo de subtotal automático
- Costo de envío: $7.000
- Total general
- Botones: Limpiar carrito, Ir a pagar

### 👤 Autenticación
- **LoginPage:** Formulario de inicio de sesión
- **RegisterPage:** Formulario de registro
- **ProfilePage:** Información del usuario (requiere login)

### 📞 Página de Contacto (ContactPage)
- Formulario con campos: Nombre, Email, Mensaje
- Validación en frontend
- Ready para integrar envío a backend

## 🎯 Funcionalidades Especiales

### Sistema de Stock
- Cada producto tiene stock definido
- Warning visual cuando quedan ≤5 unidades
- Botón deshabilitado cuando stock = 0
- Texto "Sin stock" en productos agotados

### Sistema de Categorías
- Filtrado instantáneo por categoría
- Chip activo resaltado en azul
- Vista "Todo" muestra todos los productos
- Cada categoría muestra sus productos + placeholders

### Diseño Responsivo
- Grid adaptativo (1-4 columnas según pantalla)
- Navegación se ajusta en móviles
- Footer responsive (vertical en móvil)
- Imágenes y textos escalables

## 🚀 Mejoras Futuras Sugeridas

### Corto Plazo
- [ ] Agregar imágenes reales a los 41 productos
- [ ] Sistema de búsqueda por nombre de producto
- [ ] Ordenamiento (precio, nombre, relevancia)
- [ ] Vista de detalle de producto individual
- [ ] Wishlist / Lista de deseos
- [ ] Comparador de productos

### Mediano Plazo
- [ ] Integración con pasarelas de pago (MercadoPago, Stripe)
- [ ] Sistema de envío con cálculo por zona
- [ ] Confirmación de pedidos por email
- [ ] Panel de administración (CRUD productos)
- [ ] Sistema de reseñas y calificaciones
- [ ] Historial de pedidos del usuario
- [ ] Recuperación de contraseña

### Largo Plazo
- [ ] Búsqueda con Elasticsearch
- [ ] Sistema de recomendaciones
- [ ] Chat en vivo / Soporte
- [ ] Programa de puntos y descuentos
- [ ] App móvil nativa
- [ ] Sistema de ofertas dinámicas
- [ ] Multi-idioma
- [ ] Multi-moneda

## 🔧 Desarrollo y Debugging

### Comandos Útiles

**Backend:**
```bash
npm run dev      # Modo desarrollo con nodemon
npm start        # Modo producción
npm test         # Ejecutar tests (cuando estén)
```

**Frontend:**
```bash
npm run dev      # Servidor desarrollo Vite
npm run build    # Build para producción
npm run preview  # Preview del build
```

### Logs y Debugging

**Backend:** Usa `console.log` o herramientas como:
- Morgan para logging HTTP
- Debug para debugging condicional

**Frontend:** 
- React DevTools (extensión Chrome/Firefox)
- Console del navegador
- Vite HMR (Hot Module Replacement)

### Variables de Entorno

**Backend `.env`:**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/electricidad-jet
JWT_SECRET=clave_secreta_super_segura_cambiame
NODE_ENV=development
```

**Frontend `.env` (opcional):**
```env
VITE_API_URL=http://localhost:5000/api
```

## 📄 Licencia

Este proyecto está licenciado bajo la **Licencia MIT**.

Ver archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Créditos

**Desarrollado para:** Electricidad Jet  
**Tipo:** Plataforma de Ecommerce Full-Stack  
**Stack:** MERN (MongoDB, Express, React, Node.js)  
**Fecha:** Diciembre 2025

---

## 🆘 Soporte y Contacto

Para consultas sobre el proyecto:

1. Revisar este README completo
2. Verificar configuración de variables de entorno
3. Consultar logs de consola (backend y frontend)
4. Verificar que MongoDB esté ejecutándose

**Estructura de Soporte:**
- Problemas de instalación → Verificar Node.js y MongoDB
- Errores de API → Revisar logs del backend
- Problemas visuales → Verificar consola del navegador
- Dudas de funcionalidad → Este README

---

**✨ ¡Gracias por usar Electricidad Jet!** ⚡
