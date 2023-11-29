# Proyecto PWA de notas

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

Para poder implementar el actual proyecto primero haremos lo siguiente:
## 1. Clonar el Repositorio:
Abre tu terminal y ejecuta el siguiente comando para clonar el repositorio desde GitHub:
git clone https://github.com/xDieGGox/notaspwa.git

## 2. Instalar Dependencias:
Navega al directorio del proyecto recién clonado:
npm install

## 3. Configurar Firebase:
Si aún no tienes una cuenta en Firebase, crea una en Firebase Console.
Crea un nuevo proyecto en Firebase Console.
Configura tu proyecto para usar Firebase Hosting y Firestore.
Esto esta en la siguiente direccion: app/envoroments/enviroment.ts  , en este configuramos con las credenciales nuestras.

## 4. Visualizamos la aplicación:
ng serve --open

## 5. Ahora para poder desplegar en firebase la aplicacion hacemos lo siguiente:
npm install -g firebase-tools
Ejecuta 'firebase login' para iniciar sesión en tu cuenta de Firebase.
Ejecuta 'firebase init' para inicializar tu proyecto Firebase y selecciona las opciones relevantes (Hosting y Firestore).
Antes de hacer un deploy construimos la aplicacion con 'ng build'.
Despliega la aplicación con 'firebase deploy'.

## Con esto ya estaría implementado el proyecto
