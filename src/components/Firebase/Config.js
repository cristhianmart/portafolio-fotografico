
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
import { getStorage, uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyBISbIopF54r5LltGNDvYkWhpxlJGvGS8o",
  authDomain: "produccion-fotografica-512c5.firebaseapp.com",
  projectId: "produccion-fotografica-512c5",
  storageBucket: "produccion-fotografica-512c5.appspot.com",
  messagingSenderId: "475659641364",
  appId: "1:475659641364:web:070cb1b940a838d6b3fd01"
};


const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)
export const storage = getStorage(app);

export const subirImagen = async (imagen) => {
  const refereneciaStorage = ref(storage, v4());
  await uploadBytes(refereneciaStorage, imagen);
  const urlImg = await getDownloadURL(refereneciaStorage);
  return urlImg;
};

