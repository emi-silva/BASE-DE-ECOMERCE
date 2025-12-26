#!/bin/bash
# Script de instalación automática
# Uso: bash install.sh

echo "🚀 Instalando plataforma de ecommerce..."
echo ""

# Verificar Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado. Por favor instala Node.js 16+"
    exit 1
fi

echo "✅ Node.js detectado: $(node --version)"
echo "✅ npm detectado: $(npm --version)"
echo ""

# Instalar backend
echo "📦 Instalando dependencias del backend..."
cd backend
npm install

if [ $? -ne 0 ]; then
    echo "❌ Error instalando dependencias del backend"
    exit 1
fi

# Crear .env si no existe
if [ ! -f .env ]; then
    echo "📝 Creando archivo .env en backend..."
    cp .env.example .env
    echo "⚠️  Por favor edita backend/.env y configura las variables"
fi

cd ..
echo "✅ Backend instalado"
echo ""

# Instalar frontend
echo "📦 Instalando dependencias del frontend..."
cd frontend
npm install

if [ $? -ne 0 ]; then
    echo "❌ Error instalando dependencias del frontend"
    exit 1
fi

cd ..
echo "✅ Frontend instalado"
echo ""

# Verificar MongoDB
echo "🔍 Verificando MongoDB..."
if command -v mongod &> /dev/null; then
    echo "✅ MongoDB detectado"
else
    echo "⚠️  MongoDB no detectado. Instálalo desde: https://www.mongodb.com/try/download/community"
fi
echo ""

echo "✨ ¡Instalación completada!"
echo ""
echo "📝 Siguientes pasos:"
echo "1. Edita backend/.env si es necesario"
echo "2. Asegúrate que MongoDB está ejecutándose"
echo "3. En terminal 1: cd backend && npm run dev"
echo "4. En terminal 2: cd frontend && npm run dev"
echo "5. Accede a http://localhost:3000"
echo ""
echo "📚 Para más información: cat README.md"
echo "📖 Guía de setup: cat docs/SETUP.md"
