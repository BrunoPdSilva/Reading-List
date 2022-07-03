import { db } from "../firebase/config";
import { deleteDoc, doc } from "firebase/firestore";

export default function BookList({ books }) {
  const handleClick = async id => {
    const docRef = doc(db, "books", id);
    await deleteDoc(docRef);
  };

  return (
    <div className="book-list">
      <ul>
        {books.map(book => (
          <li key={book.id} onClick={() => handleClick(book.id)}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
