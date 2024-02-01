import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();

type IGoogleAccount = {
  displayName: string | null,
  email: string | null,
  photoURL: string | null,
  uid: string | null,
  error: Error | unknown | null,
}

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
  VITE_MEASUREMENTID,
} = import.meta.env;

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
  measurementId: VITE_MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const handleGoogleSignIn = async (): Promise<IGoogleAccount> => {
  const auth = getAuth(app);

  try {
    const result = await signInWithPopup(auth, googleProvider);
    const { displayName, email, photoURL, uid } = result.user.providerData[0];

    return {
      displayName,
      email,
      photoURL,
      uid,
      error: null,
    };
  } catch (error) {
    return {
      displayName: null,
      email: null,
      photoURL: null,
      uid: null,
      error,
    }
  }
};

export default handleGoogleSignIn;
