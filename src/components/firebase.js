// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDGLDmTe5C-bM4gip-lZknKpNf8YFoavjU',

  authDomain: 'illiard-web-studio.firebaseapp.com',
  projectId: 'illiard-web-studio',
  storageBucket: 'illiard-web-studio.appspot.com',
  messagingSenderId: '499167199968',
  appId: '1:499167199968:web:63a2f4701d2aef1cf8c685',
};
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
