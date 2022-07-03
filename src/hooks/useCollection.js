import { useState, useEffect } from "react";
import { db } from "../firebase/config";

// firebase imports
import { collection, onSnapshot } from "firebase/firestore";

export const useCollection = collec => {
  const [documents, setDocuments] = useState(null);
 
  useEffect(() => {
    let ref = collection(db, collec);

    const unsub = onSnapshot(ref, snapshot => {
      let results = [];
      snapshot.docs.forEach(doc => {
        results.push({ ...doc.data(), id: doc.id });
      });
      setDocuments(results);
    });

    return () => unsub();
  }, [collec]);

  return { documents };
};
