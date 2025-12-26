import React, { useState, useEffect } from 'react';
import { productService } from '../services/productService';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import ProductPlaceholder from '../components/ProductPlaceholder';
import '../styles/products.css';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState('');
  const { addToCart } = useCart();

  const categories = [
    { key: '', label: 'Todo' },
    { key: 'iluminacion', label: 'Iluminación' },
    { key: 'cables', label: 'Cables' },
    { key: 'herramientas', label: 'Herramientas' },
    { key: 'proteccion', label: 'Protección' },
    { key: 'energia', label: 'Energía' }
  ];

  // Productos predefinidos para Iluminación (12 productos completos)
  const lightingProducts = [
    {
      id: 'luz-001',
      name: 'Lámpara LED 6W',
      description: 'Ideal para ambientes pequeños. Base E27, luz eficiente y duradera.',
      price: 5500,
      stock: 50,
      category: 'iluminacion',
      image: ''
    },
    {
      id: 'luz-002',
      name: 'Lámpara LED 9W',
      description: 'Perfecta para dormitorios y salas. Ahorro energético garantizado.',
      price: 8200,
      stock: 60,
      category: 'iluminacion',
      image: ''
    },
    {
      id: 'luz-003',
      name: 'Lámpara LED 11W',
      description: 'Mayor luminosidad para cocinas y talleres. Alta eficiencia.',
      price: 9000,
      stock: 40,
      category: 'iluminacion',
      image: ''
    },
    {
      id: 'luz-004',
      name: 'Lámpara LED 15W',
      description: 'Potente iluminación para espacios amplios. Luz confortable.',
      price: 11000,
      stock: 35,
      category: 'iluminacion',
      image: ''
    },
    {
      id: 'luz-005',
      name: 'Lámpara LED 20W (Alta Potencia)',
      description: 'Máxima potencia LED. Ideal para comercios y grandes ambientes.',
      price: 13800,
      stock: 30,
      category: 'iluminacion',
      image: ''
    },
    {
      id: 'luz-006',
      name: 'Aplique LED Redondo',
      description: 'Diseño moderno circular. Perfecto para pasillos y exteriores.',
      price: 18000,
      stock: 25,
      category: 'iluminacion',
      image: ''
    },
    {
      id: 'luz-007',
      name: 'Aplique LED Cuadrado',
      description: 'Estilo minimalista. Iluminación decorativa para paredes.',
      price: 19500,
      stock: 20,
      category: 'iluminacion',
      image: ''
    },
    {
      id: 'luz-008',
      name: 'Luz de Emergencia 35 LEDs',
      description: 'Batería recargable. Autonomía 8 horas. Esencial para seguridad.',
      price: 26500,
      stock: 15,
      category: 'iluminacion',
      image: ''
    },
    {
      id: 'luz-009',
      name: 'Luz Emergencia 60 LEDs',
      description: 'Mayor capacidad y duración. Ideal para comercios y oficinas.',
      price: 34900,
      stock: 12,
      category: 'iluminacion',
      image: ''
    },
    {
      id: 'luz-010',
      name: 'Tubo LED 1.20 18W',
      description: 'Reemplazo directo de tubos fluorescentes. 120cm de largo.',
      price: 22000,
      stock: 18,
      category: 'iluminacion',
      image: ''
    },
    {
      id: 'luz-011',
      name: 'Luz Bajo Mesada 5W',
      description: 'Compacta y práctica. Ilumina cocinas y áreas de trabajo.',
      price: 12500,
      stock: 28,
      category: 'iluminacion',
      image: ''
    },
    {
      id: 'luz-012',
      name: 'Reflector LED 50W',
      description: 'Potente iluminación exterior. Resistente al agua IP65.',
      price: 41900,
      stock: 10,
      category: 'iluminacion',
      image: ''
    }
  ];

  // Productos predefinidos para Cables (6 productos)
  const cablesProducts = [
    {
      id: 'cable-001',
      name: 'Cable Unipolar 2.5mm',
      description: 'Por metro. Flexible y resistente. Ideal para instalaciones domiciliarias.',
      price: 1650,
      stock: 200,
      category: 'cables',
      image: ''
    },
    {
      id: 'cable-002',
      name: 'Cable Unipolar 4mm',
      description: 'Mayor capacidad de corriente. Perfecto para circuitos de alta carga.',
      price: 2500,
      stock: 150,
      category: 'cables',
      image: ''
    },
    {
      id: 'cable-003',
      name: 'Cable Taller 3x1.5mm',
      description: 'Triple conductor. Uso general en talleres y equipos eléctricos.',
      price: 3500,
      stock: 100,
      category: 'cables',
      image: ''
    },
    {
      id: 'cable-004',
      name: 'Cable Taller 3x2.5mm',
      description: 'Mayor potencia. Ideal para herramientas y maquinaria industrial.',
      price: 5300,
      stock: 80,
      category: 'cables',
      image: ''
    },
    {
      id: 'cable-005',
      name: 'Cable Subterráneo 3x2.5mm',
      description: 'Protección especial. Instalación enterrada y exterior.',
      price: 6300,
      stock: 90,
      category: 'cables',
      image: ''
    },
    {
      id: 'cable-006',
      name: 'Cable Coaxil RG6',
      description: 'Para TV y datos. Alta calidad de señal. Venta por metro.',
      price: 1200,
      stock: 250,
      category: 'cables',
      image: ''
    }
  ];

  // Productos predefinidos para Herramientas (8 productos)
  const herramientasProducts = [
    {
      id: 'herr-001',
      name: 'Destornillador Buscapolos',
      description: 'Detector de tensión. Indispensable para electricistas. Mango aislado.',
      price: 3500,
      stock: 75,
      category: 'herramientas',
      image: ''
    },
    {
      id: 'herr-002',
      name: 'Pinza Amperométrica Digital',
      description: 'Mide corriente sin contacto directo. Display LCD. Hasta 600A.',
      price: 64000,
      stock: 15,
      category: 'herramientas',
      image: ''
    },
    {
      id: 'herr-003',
      name: 'Pelacables Automático',
      description: 'Ajuste automático. Corta y pela en un solo movimiento. Alta precisión.',
      price: 12500,
      stock: 40,
      category: 'herramientas',
      image: ''
    },
    {
      id: 'herr-004',
      name: 'Multímetro Digital',
      description: 'Mide voltaje, corriente y resistencia. Pantalla LCD. Muy confiable.',
      price: 26500,
      stock: 30,
      category: 'herramientas',
      image: ''
    },
    {
      id: 'herr-005',
      name: 'Pinza Electricista 8"',
      description: 'Corta cables y crimpa terminales. Mango ergonómico aislado.',
      price: 17500,
      stock: 50,
      category: 'herramientas',
      image: ''
    },
    {
      id: 'herr-006',
      name: 'Cinta Aisladora 3M',
      description: 'Alta resistencia. 18m x 19mm. Negra profesional. Pack x 10 unidades.',
      price: 9800,
      stock: 100,
      category: 'herramientas',
      image: ''
    },
    {
      id: 'herr-007',
      name: 'Crimpadora RJ45/RJ11',
      description: 'Para conectores de red. Incluye cortador y pelacables integrado.',
      price: 22300,
      stock: 25,
      category: 'herramientas',
      image: ''
    },
    {
      id: 'herr-008',
      name: 'Kit Destornilladores Precisión',
      description: 'Set 6 piezas. Para equipos electrónicos. Puntas magnéticas.',
      price: 13900,
      stock: 35,
      category: 'herramientas',
      image: ''
    }
  ];

  // Productos predefinidos para Protección (9 productos)
  const proteccionProducts = [
    {
      id: 'prot-001',
      name: 'Disyuntor Diferencial 25A',
      description: 'Protección contra fugas. 30mA sensibilidad. Bipolar 220V.',
      price: 50200,
      stock: 20,
      category: 'proteccion',
      image: ''
    },
    {
      id: 'prot-002',
      name: 'Llave Termomagnética 10A',
      description: 'Protege contra sobrecargas. Unipolar. Curva C. Calidad certificada.',
      price: 11800,
      stock: 60,
      category: 'proteccion',
      image: ''
    },
    {
      id: 'prot-003',
      name: 'Llave Termomagnética 20A',
      description: 'Para circuitos de mayor consumo. Bipolar. Rápida desconexión.',
      price: 18100,
      stock: 45,
      category: 'proteccion',
      image: ''
    },
    {
      id: 'prot-004',
      name: 'Protector de Tensión',
      description: 'Desconecta ante picos y bajas. Protege electrodomésticos. 220V.',
      price: 32000,
      stock: 30,
      category: 'proteccion',
      image: ''
    },
    {
      id: 'prot-005',
      name: 'Tablero Embutir 12 Módulos',
      description: 'Gabinete plástico. Puerta blanca. Incluye riel DIN.',
      price: 25800,
      stock: 25,
      category: 'proteccion',
      image: ''
    },
    {
      id: 'prot-006',
      name: 'Jabalina Cobre 1.5m',
      description: 'Puesta a tierra profesional. 16mm diámetro. Alta conductividad.',
      price: 20900,
      stock: 35,
      category: 'proteccion',
      image: ''
    },
    {
      id: 'prot-007',
      name: 'Fusible Cerámico 10A',
      description: 'Pack x 10 unidades. Respuesta rápida. 250V. Alta calidad.',
      price: 6300,
      stock: 80,
      category: 'proteccion',
      image: ''
    },
    {
      id: 'prot-008',
      name: 'Interruptor Diferencial 40A',
      description: 'Protección superior. 30mA. Tripolar. Para instalaciones grandes.',
      price: 68500,
      stock: 15,
      category: 'proteccion',
      image: ''
    },
    {
      id: 'prot-009',
      name: 'Bornera Tierra 12 Polos',
      description: 'Distribución de tierra. Soporte DIN. Tornillos de latón.',
      price: 11100,
      stock: 40,
      category: 'proteccion',
      image: ''
    }
  ];

  // Productos predefinidos para Energía (6 productos)
  const energiaProducts = [
    {
      id: 'energ-001',
      name: 'Estabilizador de Tensión 1000W',
      description: 'Regula voltaje automáticamente. Protege equipos sensibles. 4 tomas.',
      price: 74000,
      stock: 18,
      category: 'energia',
      image: ''
    },
    {
      id: 'energ-002',
      name: 'UPS 650VA',
      description: 'Energía de respaldo. 4 tomas protegidas. Autonomía 15 minutos.',
      price: 125800,
      stock: 12,
      category: 'energia',
      image: ''
    },
    {
      id: 'energ-003',
      name: 'Zapatilla Eléctrica 6 Tomas',
      description: 'Con interruptor. Cable 1.5m. Protección sobrecarga. 10A.',
      price: 13900,
      stock: 65,
      category: 'energia',
      image: ''
    },
    {
      id: 'energ-004',
      name: 'Generador Portátil 2000W',
      description: 'Respaldo energético. Motor 4 tiempos. Silencioso. Nafta.',
      price: 539000,
      stock: 5,
      category: 'energia',
      image: ''
    },
    {
      id: 'energ-005',
      name: 'Cargador USB Doble',
      description: 'Carga rápida 2.4A. 2 puertos USB. Compacto. Base para pared.',
      price: 9100,
      stock: 90,
      category: 'energia',
      image: ''
    },
    {
      id: 'energ-006',
      name: 'Batería 12V 7Ah',
      description: 'Libre mantenimiento. Para alarmas y UPS. Larga duración.',
      price: 40500,
      stock: 22,
      category: 'energia',
      image: ''
    }
  ];

  useEffect(() => {
    loadProducts();
  }, [category]);

  const loadProducts = async () => {
    setLoading(true);
    try {
      const response = await productService.getProducts({
        category,
        limit: 20
      });
      setProducts(response.data.products);
    } catch (error) {
      console.error('Error cargando productos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product) => {
    addToCart(product, 1);
    alert(`${product.name} agregado al carrito`);
  };

  return (
    <div className="products-page">
      {/* Barra de búsqueda eliminada */}

      <div className="category-chips">
        {categories.map((c) => (
          <button
            key={c.key}
            className={`chip ${category === c.key ? 'active' : ''}`}
            onClick={() => setCategory(c.key)}
          >
            {c.label}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="loading">Cargando productos...</p>
      ) : (
        <div className="products-grid">
          {category === 'iluminacion' ? (
            <>
              {lightingProducts.map((p, idx) => (
                <ProductCard
                  key={`light-${idx}`}
                  product={p}
                  onAddToCart={handleAddToCart}
                />
              ))}
              {Array.from({ length: 12 - lightingProducts.length }).map((_, idx) => (
                <ProductPlaceholder key={`ph-${idx}`} categoryLabel="Iluminación" />
              ))}
            </>
          ) : category === 'cables' ? (
            <>
              {cablesProducts.map((p, idx) => (
                <ProductCard
                  key={`cable-${idx}`}
                  product={p}
                  onAddToCart={handleAddToCart}
                />
              ))}
              {Array.from({ length: 6 - cablesProducts.length }).map((_, idx) => (
                <ProductPlaceholder key={`ph-cable-${idx}`} categoryLabel="Cables" />
              ))}
            </>
          ) : category === 'herramientas' ? (
            <>
              {herramientasProducts.map((p, idx) => (
                <ProductCard
                  key={`herramienta-${idx}`}
                  product={p}
                  onAddToCart={handleAddToCart}
                />
              ))}
              {Array.from({ length: 8 - herramientasProducts.length }).map((_, idx) => (
                <ProductPlaceholder key={`ph-herramienta-${idx}`} categoryLabel="Herramientas" />
              ))}
            </>
          ) : category === 'proteccion' ? (
            <>
              {proteccionProducts.map((p, idx) => (
                <ProductCard
                  key={`proteccion-${idx}`}
                  product={p}
                  onAddToCart={handleAddToCart}
                />
              ))}
              {Array.from({ length: 9 - proteccionProducts.length }).map((_, idx) => (
                <ProductPlaceholder key={`ph-proteccion-${idx}`} categoryLabel="Protección" />
              ))}
            </>
          ) : category === 'energia' ? (
            <>
              {energiaProducts.map((p, idx) => (
                <ProductCard
                  key={`energia-${idx}`}
                  product={p}
                  onAddToCart={handleAddToCart}
                />
              ))}
              {Array.from({ length: 6 - energiaProducts.length }).map((_, idx) => (
                <ProductPlaceholder key={`ph-energia-${idx}`} categoryLabel="Energía" />
              ))}
            </>
          ) : category === '' ? (
            <>
              {lightingProducts.map((p, idx) => (
                <ProductCard
                  key={`light-${idx}`}
                  product={p}
                  onAddToCart={handleAddToCart}
                />
              ))}
              {cablesProducts.map((p, idx) => (
                <ProductCard
                  key={`cable-${idx}`}
                  product={p}
                  onAddToCart={handleAddToCart}
                />
              ))}
              {herramientasProducts.map((p, idx) => (
                <ProductCard
                  key={`herramienta-${idx}`}
                  product={p}
                  onAddToCart={handleAddToCart}
                />
              ))}
              {proteccionProducts.map((p, idx) => (
                <ProductCard
                  key={`proteccion-${idx}`}
                  product={p}
                  onAddToCart={handleAddToCart}
                />
              ))}
              {energiaProducts.map((p, idx) => (
                <ProductCard
                  key={`energia-${idx}`}
                  product={p}
                  onAddToCart={handleAddToCart}
                />
              ))}
              {products.map((product) => (
                <ProductCard
                  key={product._id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
              {(lightingProducts.length + cablesProducts.length + herramientasProducts.length + proteccionProducts.length + energiaProducts.length + products.length === 0) && (
                <p className="no-products">No hay productos disponibles</p>
              )}
            </>
          ) : products.length > 0 ? (
            products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))
          ) : (
            <p className="no-products">No hay productos disponibles</p>
          )}
        </div>
      )}
    </div>
  );
}
