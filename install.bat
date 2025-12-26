@echo off
REM Script de instalación para Windows
REM Uso: install.bat

echo.
echo 🚀 Instalando plataforma de ecommerce...
echo.

REM Verificar Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js no está instalado. Por favor instala Node.js 16+
    echo https://nodejs.org/
    exit /b 1
)

echo ✅ Node.js detectado
echo.

REM Instalar backend
echo 📦 Instalando dependencias del backend...
cd backend
call npm install

if %errorlevel% neq 0 (
    echo ❌ Error instalando dependencias del backend
    exit /b 1
)

REM Crear .env si no existe
if not exist .env (
    echo 📝 Creando archivo .env en backend...
    copy .env.example .env
    echo ⚠️  Por favor edita backend\.env y configura las variables
)

cd ..
echo ✅ Backend instalado
echo.

REM Instalar frontend
echo 📦 Instalando dependencias del frontend...
cd frontend
call npm install

if %errorlevel% neq 0 (
    echo ❌ Error instalando dependencias del frontend
    exit /b 1
)

cd ..
echo ✅ Frontend instalado
echo.

echo ✨ ¡Instalación completada!
echo.
echo 📝 Siguientes pasos:
echo 1. Edita backend\.env si es necesario
echo 2. Asegúrate que MongoDB está ejecutándose
echo 3. En PowerShell 1: cd backend; npm run dev
echo 4. En PowerShell 2: cd frontend; npm run dev
echo 5. Accede a http://localhost:3000
echo.
echo 📚 Para más información: type README.md
echo 📖 Guía de setup: type docs\SETUP.md
echo.
pause
