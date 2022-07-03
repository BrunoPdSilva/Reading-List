import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";

export default function BookForm() {
  const [newBook, setNewBook] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    await addDoc(collection(db, "books"), {
      title: newBook,
    });

    setNewBook("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Add a new book title:</span>
        <input
          required
          type="text"
          onChange={e => setNewBook(e.target.value)}
          value={newBook}
        />
      </label>
      <button>Add</button>
    </form>
  );
}
