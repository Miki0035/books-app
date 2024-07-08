import { useState, useEffect } from "react";
import axios from "axios";
import { Book } from "../types";
import Card from "./Card";
import "../styles/main-content.css";
import Header from "./Header";

const MainContent = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const getAllBooks = async () => {
    try {
      const response = await axios.get("/api/v1/books");
      setBooks(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className="text-container">
          <h1>Welcome To Book Store</h1>
          <p>Browse through our collection</p>
        </div>
        <section className="book-container">
          {books.length > 0 ? (
            books.map((book, index) => <Card book={book} key={index} />)
          ) : (
            <h1 className="no-book-heading"> No Books in Directory</h1>
          )}
        </section>
      </main>
    </>
  );
};

export default MainContent;
