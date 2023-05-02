import { addDoc, collection } from 'firebase/firestore';
import { useCollection } from 'hooks/useCollection';
import { useEffect } from 'react';
import { db } from '../firebase/init';

const localBooks = [
  {
    title: 'Crack the Coding Interview',
    url: 'https://covers.openlibrary.org/b/id/8091016-L.jpg',
    originalPrice: 49.95,
    salePrice: 14.95,
    rating: 4.5,
  },
  {
    title: 'Atomic Habits',
    url: 'https://covers.openlibrary.org/b/id/10958382-L.jpg',
    originalPrice: 39,
    salePrice: null,
    rating: 5,
  },
  {
    title: "Can't Hurt Me",
    url: 'https://covers.openlibrary.org/b/id/10425061-L.jpg',
    originalPrice: 29,
    salePrice: null,
    rating: 5,
  },
  {
    title: 'Deep Work',
    url: 'https://covers.openlibrary.org/b/id/10088428-L.jpg',
    originalPrice: 44,
    salePrice: 19,
    rating: 4.5,
  },
  {
    title: 'The 10X Rule',
    url: 'https://covers.openlibrary.org/b/id/9978588-L.jpg',
    originalPrice: 32,
    salePrice: null,
    rating: 5,
  },
  {
    title: 'Sell Or Be Sold',
    url: 'https://covers.openlibrary.org/b/id/7737110-L.jpg',
    originalPrice: 70,
    salePrice: 12.5,
    rating: 5,
  },
  {
    title: 'Rich Dad Poor Dad',
    url: 'https://covers.openlibrary.org/b/id/2380224-L.jpg',
    originalPrice: 11,
    salePrice: 10,
    rating: 4,
  },
  {
    title: 'Cashflow Quadrant',
    url: 'https://covers.openlibrary.org/b/id/1954899-L.jpg',
    originalPrice: 38,
    salePrice: 17.95,
    rating: 4.5,
  },
  {
    title: '48 Laws of Power Summary',
    url: 'https://covers.openlibrary.org/b/id/8906626-L.jpg',
    originalPrice: 35,
    salePrice: 19.95,
    rating: 4.5,
  },
  {
    title: 'The 5 Second Rule',
    url: 'https://covers.openlibrary.org/b/id/8114155-L.jpg',
    originalPrice: 40,
    salePrice: null,
    rating: 5,
  },
  {
    title: 'How to Win Friends & Influence People',
    url: 'https://covers.openlibrary.org/b/id/7895280-L.jpg',
    originalPrice: 30,
    salePrice: 20,
    rating: 5,
  },
  {
    title: 'Mastery',
    url: 'https://covers.openlibrary.org/b/id/8479576-L.jpg',
    originalPrice: 30,
    salePrice: 12.95,
    rating: 4.5,
  },
];

export default function Data() {
  const { docs: firestoreBooks } = useCollection('books');

  useEffect(() => {
    if (firestoreBooks === null) return;

    async function addBook(book) {
      await addDoc(collection(db, 'books'), book);
    }

    localBooks.forEach((localBook) => {
      const bookExists = firestoreBooks.find(firestoreBook => firestoreBook.title === localBook.title)
      if (!bookExists) {
        addBook(localBook)
      }
    });
  }, [firestoreBooks]);
  return <div className=''></div>;
}