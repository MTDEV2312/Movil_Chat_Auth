# Movil_Chat_Auth

Movil_Chat_Auth es una aplicación móvil desarrollada con Ionic y Angular que implementa autenticación de usuarios y chat en tiempo real utilizando Firebase como backend.

## Descripción del Proyecto

Este proyecto permite a los usuarios registrarse, iniciar sesión y participar en chats en tiempo real. Utiliza Firebase Authentication para la gestión de usuarios y Firestore para el almacenamiento de mensajes.

## Configuración de Credenciales

**Importante:**
La carpeta `src/environments` ha sido removida del repositorio por motivos de seguridad, ya que contiene las credenciales sensibles de Firebase.

Para ejecutar el proyecto correctamente, debes volver a crear la carpeta `src/environments` y agregar los archivos `environment.ts` y `environment.prod.ts` con tus propias credenciales de Firebase.

Ejemplo de contenido para `environment.ts`:

```typescript
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'TU_API_KEY',
    authDomain: 'TU_AUTH_DOMAIN',
    projectId: 'TU_PROJECT_ID',
    storageBucket: 'TU_STORAGE_BUCKET',
    messagingSenderId: 'TU_MESSAGING_SENDER_ID',
    appId: 'TU_APP_ID'
  }
};
```

**Nota:** Nunca compartas tus credenciales de Firebase en repositorios públicos.

## Instalación

1. Clona el repositorio.
2. Ejecuta `npm install` para instalar las dependencias.
3. Agrega la carpeta `src/environments` con los archivos de configuración.
4. Ejecuta `ionic serve` para iniciar la aplicación en modo desarrollo.

## Licencia

Este proyecto es solo para fines educativos.
