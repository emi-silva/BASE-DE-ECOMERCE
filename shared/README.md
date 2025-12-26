# Shared utilities and types

Esta carpeta contiene código compartido entre el backend y frontend.

## Contenido

- `types.js` - Tipos y interfaces compartidas
- `constants.js` - Constantes globales
- `utils.js` - Funciones utilitarias

## Uso

```javascript
// En backend
import { PRODUCT_CATEGORIES } from '../shared/constants.js';

// En frontend
import { validateEmail } from '../shared/utils.js';
```

## Próximas mejoras

- Validadores compartidos
- Formatos de fecha estandarizados
- Configuración de paginación
- Mensajes de error estandarizados
