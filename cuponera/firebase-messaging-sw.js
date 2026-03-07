// Firebase Cloud Messaging Service Worker
// Este archivo debe estar en la raíz pública del proyecto

importScripts('https://www.gstatic.com/firebasejs/10.7.2/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/10.7.2/firebase-messaging-compat.js')

// Configuración de Firebase (debe coincidir con tu proyecto)
firebase.initializeApp({
  apiKey: "AIzaSyAZGtcj7xPioaa4z4WPrHngTkG9C4Oqrvs",
  authDomain: "link-up-mlm-2025.firebaseapp.com",
  projectId: "link-up-mlm-2025",
  storageBucket: "link-up-mlm-2025.firebasestorage.app",
  messagingSenderId: "314919113142",
  appId: "1:314919113142:web:110e0361dcd0094e2db117"
})

const messaging = firebase.messaging()

// Manejar notificaciones en segundo plano (cuando la app está cerrada)
messaging.onBackgroundMessage((payload) => {
  console.log('📬 Notificación recibida en segundo plano:', payload)
  
  const notificationTitle = payload.notification?.title || 'LinkUp'
  const notificationOptions = {
    body: payload.notification?.body || '',
    icon: payload.notification?.icon || '/logo.png',
    badge: '/logo.png',
    tag: 'coupon-redemption',
    requireInteraction: false,
    data: payload.data
  }

  self.registration.showNotification(notificationTitle, notificationOptions)
})

// Manejar clic en la notificación
self.addEventListener('notificationclick', (event) => {
  console.log('🖱️ Clic en notificación:', event)
  
  event.notification.close()
  
  // Abrir o enfocar la ventana de la app
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then((clientList) => {
        // Si ya hay una ventana abierta, enfocarla
        for (const client of clientList) {
          if (client.url.includes(self.location.origin) && 'focus' in client) {
            return client.focus()
          }
        }
        // Si no hay ventana abierta, abrir una nueva
        if (clients.openWindow) {
          return clients.openWindow('/')
        }
      })
  )
})
