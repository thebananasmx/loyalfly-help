import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, doc, getDoc, collection, getDocs } from 'firebase/firestore';

// Configuración de Firebase usando variables de entorno
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "dummy-api-key",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "dummy-auth-domain",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "dummy-project-id",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "dummy-storage-bucket",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "dummy-sender-id",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "dummy-app-id",
};

// Inicializar Firebase solo si no ha sido inicializado antes
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { app, db };

// Funciones de utilidad para Firestore

export async function getRubroData(slug: string) {
  // En un entorno real, descomenta esto para usar Firestore:
  /*
  try {
    const docRef = doc(db, 'rubros', slug);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data();
    }
    return null;
  } catch (error) {
    console.error("Error fetching rubro:", error);
    return null;
  }
  */

  // Mock data para la previsualización inicial
  const mockData: Record<string, any> = {
    restaurantes: {
      title: 'Tarjetas de Fidelidad para Restaurantes',
      description: 'Aumenta la retención de clientes en tu restaurante con nuestro sistema de tarjetas digitales.',
      content: '<h2>¿Por qué usar tarjetas digitales en tu restaurante?</h2><p>Los clientes recurrentes gastan un 67% más que los nuevos. Con Loyalfly, puedes premiar a tus mejores comensales fácilmente.</p>',
    },
    cafeterias: {
      title: 'Tarjetas de Fidelidad para Cafeterías',
      description: 'Premia a tus clientes habituales y haz que vuelvan por su café diario.',
      content: '<h2>El secreto de las cafeterías exitosas</h2><p>Una tarjeta de "Compra 5 cafés y llévate 1 gratis" es el estándar de la industria. Digitalízalo con Loyalfly.</p>',
    }
  };

  return mockData[slug] || null;
}

export async function getAllRubros() {
  // En un entorno real:
  /*
  const querySnapshot = await getDocs(collection(db, 'rubros'));
  return querySnapshot.docs.map(doc => ({
    slug: doc.id,
    ...doc.data()
  }));
  */
  return [
    { slug: 'restaurantes' },
    { slug: 'cafeterias' }
  ];
}
