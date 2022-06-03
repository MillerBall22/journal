import { initializeApp } from 'firebase/app';
import { doc, getDoc, setDoc, getFirestore, collection, writeBatch, query, getDocs } from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyD257dWeMt4LSc43EjemM9JSz0Gl1BDjVs",
    authDomain: "journal-1560d.firebaseapp.com",
    projectId: "journal-1560d",
    storageBucket: "journal-1560d.appspot.com",
    messagingSenderId: "105367156866",
    appId: "1:105367156866:web:6742ea735ce1c719431c9b"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const getQuadrantTasks = async (quadrant) => {
    const collectionRef = collection(db, quadrant);
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((docSnapshot) => ({id: docSnapshot.id, ...docSnapshot.data('<value>')}));
};

export const getJournals = async () => {
    const collectionRef = collection(db, "Journals");
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(docSnapshot => docSnapshot.data())
};