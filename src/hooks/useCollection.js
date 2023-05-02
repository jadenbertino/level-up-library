import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase/init';

export function useCollection(collectionName) {
  const [docs, setDocs] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    setPending(true);
    const ref = collection(db, collectionName);

    const unsub = onSnapshot(ref, (snapshot) => {
      const docs = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setDocs(docs);
      setPending(false);
    });

    return unsub;
  }, [collectionName, userQuery]);

  return { docs, pending };
}