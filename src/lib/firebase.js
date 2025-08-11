import { initializeApp } from 'firebase/app'
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  setPersistence,
  browserLocalPersistence,
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDTFBDajiMqCuvNmaPcUpHl-P8sFsDiEkU",
  authDomain: "firsttauthentication.firebaseapp.com",
  projectId: "firsttauthentication",
  storageBucket: "firsttauthentication.firebasestorage.app",
  messagingSenderId: "791585781184",
  appId: "1:791585781184:web:30c17570590cbc5e900425"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

export async function signInEmail(email, password) {
  await setPersistence(auth, browserLocalPersistence)
  return signInWithEmailAndPassword(auth, email, password)
}

export async function signUpEmail(email, password) {
  const cred = await createUserWithEmailAndPassword(auth, email, password)
  await sendEmailVerification(cred.user)
  await setDoc(doc(db, 'users', cred.user.uid), {
    role: 'user',
    email,
    createdAt: Date.now(),
  })
  await signOut(auth)
  return cred
}

export function onAuth(cb) { return onAuthStateChanged(auth, cb) }
export function resetPassword(email) { return sendPasswordResetEmail(auth, email) }
export function logout() { return signOut(auth) }

export async function getUserRole(uid) {
  const snap = await getDoc(doc(db, 'users', uid))
  return snap.exists() ? snap.data().role : null
}
